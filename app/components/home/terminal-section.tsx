import { useState, useRef, useEffect } from "react";
import { List } from "@phosphor-icons/react";
import { cn } from "~/lib/utils";

interface CommandRecord {
  prompt: string;
  output: React.ReactNode;
}

export default function TerminalSection() {
  const [history, setHistory] = useState<CommandRecord[]>([
    {
      prompt: "whoami",
      output: (
        <div className="text-neo-yellow ml-4 mt-1">
          &gt; Fi Amanillah. Backend Engineer. Optimizer of systems. Solver of N+1 queries.
        </div>
      ),
    },
    {
      prompt: "Type 'help' to see available commands.",
      output: null,
    }
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    let output: React.ReactNode = null;

    const args = trimmed.split(" ");
    const command = args[0].toLowerCase();

    switch (command) {
      case "help":
        output = (
          <div className="ml-4 mt-1 space-y-1 text-gray-400">
            <div>Available commands:</div>
            <div className="grid grid-cols-[100px_1fr] gap-2 mt-2">
              <span className="text-neo-green font-bold">whoami</span><span>Display user info</span>
              <span className="text-neo-green font-bold">ls</span><span>List projects</span>
              <span className="text-neo-green font-bold">curl</span><span>Ping the API</span>
              <span className="text-neo-green font-bold">tail</span><span>View system logs</span>
              <span className="text-neo-green font-bold">clear</span><span>Clear terminal output</span>
            </div>
          </div>
        );
        break;
      case "whoami":
        output = (
          <div className="text-neo-yellow ml-4 mt-1">
            &gt; Fi Amanillah. Backend Engineer. Optimizer of systems. Solver of N+1 queries.
          </div>
        );
        break;
      case "ls":
        output = (
          <div className="ml-4 mt-1 space-y-1">
            {[
              ["hyperqueue", "# Rust distributed queue"],
              ["datasmash", "# Go GraphQL Gateway"],
              ["securevault", "# Node.js Encryption service"],
              ["api-gateway", "# TypeScript/Kong config"],
            ].map(([name, comment]) => (
              <div key={name} className="flex gap-4 flex-wrap">
                <span>drwxr-xr-x</span>
                <span>fi_amanillah</span>
                <span>dev</span>
                <span>4096</span>
                <span className="text-blue-400 font-bold">{name}</span>
                <span className="text-gray-500">{comment}</span>
              </div>
            ))}
          </div>
        );
        break;
      case "curl":
        output = (
          <div className="ml-4 mt-2">
            <div className="text-blue-400 font-bold">HTTP/1.1 200 OK</div>
            <div className="text-gray-400">Content-Type: application/json</div>
            <div className="mt-2 text-neo-yellow">
              {"{"} <br />
              &nbsp;&nbsp;"status": "success",
              <br />
              &nbsp;&nbsp;"metrics": {"{"} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"coffees_consumed": 8473,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"lines_of_code": 2847291,
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;"system_architecture": "Flawless"
              <br />
              &nbsp;&nbsp;{"}"}
              <br />
              {"}"}
            </div>
          </div>
        );
        break;
      case "tail":
        output = (
          <div className="ml-4 mt-1 space-y-1">
            <div><span className="bg-blue-500 text-black px-1 mr-2 font-bold">INFO</span>[api-gateway] Request routed successfully in 2ms.</div>
            <div><span className="bg-neo-green text-black px-1 mr-2 font-bold">METRIC</span>[postgres] Cache hit ratio at 98.4%.</div>
            <div><span className="bg-neo-yellow text-black px-1 mr-2 font-bold">WARN</span>[redis] Memory usage approaching 85% threshold.</div>
            <div><span className="bg-neo-pink text-white px-1 mr-2 font-bold">ERROR</span>[legacy-svc] Timeout waiting for 3rd party API.</div>
            <div><span className="bg-blue-500 text-black px-1 mr-2 font-bold">INFO</span>[system] Automatic failover protocol engaged. Zero downtime.</div>
          </div>
        );
        break;
      case "sudo":
        if (args[1] === "rm" && args[2] === "-rf" && args[3] === "/") {
          output = (
            <div className="text-neo-pink ml-4 mt-1 font-bold animate-pulse">
              Nice try. But I don't give root access to strangers. 🛑
            </div>
          );
        } else {
          output = <div className="text-red-400 ml-4 mt-1">Permission denied. This incident will be reported.</div>;
        }
        break;
      case "clear":
        setHistory([]);
        return; // Don't append empty command
      case "echo":
        output = <div className="ml-4 mt-1">{args.slice(1).join(" ")}</div>;
        break;
      default:
        output = <div className="text-red-400 ml-4 mt-1">Command not found: {command}</div>;
    }

    setHistory((prev) => [...prev, { prompt: trimmed, output }]);
  };

  return (
    <section id="terminal" className="py-24 bg-background border-b-4 border-border relative z-20 overflow-hidden">
      {/* Background Grid Pattern - Skewed */}
      <div 
        className="absolute inset-0 bg-grid opacity-30 dark:opacity-10 pointer-events-none z-0" 
        style={{ transform: "skewY(-5deg) scale(1.1)", transformOrigin: "top left" }} 
      />
      
      {/* Animated Accent Blocks */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-neo-yellow border-4 border-border shadow-neo opacity-20 dark:opacity-10 transform rotate-12 animate-float-2 z-0 pointer-events-none hidden lg:block" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-neo-pink border-4 border-border shadow-neo opacity-20 dark:opacity-10 transform -rotate-12 animate-float-3 z-0 pointer-events-none hidden md:block" />

      {/* Code syntax watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-bold opacity-5 dark:opacity-5 pointer-events-none text-stroke-4 text-transparent select-none z-0 whitespace-nowrap">
        &lt;/&gt;
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 text-foreground text-center relative">
          <span className="relative z-10 bg-background px-4">System <span className="text-neo-green text-stroke-3">Logs</span></span>
          {/* Brutalist underline behind text */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 max-w-sm h-6 bg-neo-yellow -z-10 transform -rotate-2" />
        </h2>
        
        {/* Terminal Window Container */}
        <div
          className="bg-[#0a0a0a] flex flex-col group cursor-text shadow-neo transition-all duration-300 border-[8px] border-border"
          style={{ height: "600px" }}
          onClick={() => inputRef.current?.focus()}
        >
          {/* Title Bar */}
          <div className="flex items-center justify-between bg-card border-b-4 border-border px-4 py-2 shrink-0">
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-[#ff5f56] border-2 border-border rounded-full" />
              <div className="w-5 h-5 bg-[#ffbd2e] border-2 border-border rounded-full" />
              <div className="w-5 h-5 bg-[#27c93f] border-2 border-border rounded-full" />
            </div>
            <div className="font-mono font-bold text-foreground text-sm uppercase tracking-widest hidden sm:block">
              fi_amanillah@production:~
            </div>
            <div className="w-5 h-5 flex items-center justify-center text-foreground">
              <List weight="bold" className="text-xl" />
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 md:p-8 font-mono text-sm md:text-base text-gray-300 space-y-6 scroll-smooth"
            style={{ scrollbarWidth: "thin", scrollbarColor: "var(--border) transparent" }}
          >
            <div className="text-gray-500 mb-4">
              Type <span className="text-neo-green font-bold">help</span> to see a list of available commands.
            </div>

            {history.map((cmd, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex flex-wrap items-start gap-2">
                  <span className="text-neo-green font-bold shrink-0">
                    fi_amanillah@production:~$
                  </span>
                  <span className="text-white break-all">{cmd.prompt}</span>
                </div>
                {cmd.output}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 mt-4 relative">
              <span className="text-neo-green font-bold shrink-0">
                fi_amanillah@production:~$
              </span>
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand(input);
                      setInput("");
                    }
                  }}
                  className="bg-transparent text-white outline-none w-full absolute inset-0 text-transparent opacity-0 z-10 caret-transparent"
                  autoComplete="off"
                  spellCheck="false"
                  aria-label="Terminal input"
                />
                <span className="text-white whitespace-pre break-all pointer-events-none z-0">
                  {input}
                  <span className="w-3 h-5 bg-neo-green animate-pulse inline-block align-middle ml-[1px]" />
                </span>
              </div>
            </div>
            
            {/* Pad bottom for easier scrolling */}
            <div className="h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
