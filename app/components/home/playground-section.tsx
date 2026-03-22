import { useState } from "react";
import { Card } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export default function PlaygroundSection() {
  const [activeMethod, setActiveMethod] = useState("GET");
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);

  const handleSend = () => {
    setIsLoading(true);
    setResponse(null);

    // Simulate network delay
    setTimeout(() => {
      if (activeMethod === "GET") {
        setResponse({
          status: "success",
          data: {
            id: 42,
            role: "Architect",
            skills: ["Go", "Rust", "TypeScript"],
            is_caffeinated: true,
          },
        });
      } else if (activeMethod === "POST") {
        setResponse({
          status: "created",
          data: {
            message: "New system architecture deployed securely.",
            status_code: 201,
          },
        });
      } else if (activeMethod === "DELETE") {
        setResponse({
          status: "error",
          error: {
            code: 403,
            message: "Forbidden. You cannot delete the architect.",
          },
        });
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <section id="playground" className="py-24 bg-background border-b-4 border-border relative bg-dots overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left – Mock API Interface */}
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 bg-neo-yellow text-black border-[3px] border-border px-4 py-2 inline-block -rotate-1 shadow-neo">
              Mock API Interface
            </h2>
            <Card
              className="border-[4px] !pt-0 border-border overflow-hidden flex flex-col shadow-neo-lg rounded-none bg-card"
              style={{ height: "750px" }}
            >
              {/* Method Tabs */}
              <div className="flex border-b-[4px] border-border bg-card">
                {["GET", "POST", "DELETE"].map((m) => (
                  <button
                    key={m}
                    onClick={() => {
                      setActiveMethod(m);
                      setResponse(null);
                    }}
                    className={`flex-1 py-4 px-4 font-black uppercase border-r-[4px] border-border transition-all last:border-r-0 cursor-pointer ${activeMethod === m
                      ? "bg-neo-green text-black"
                      : "bg-transparent text-foreground hover:bg-secondary"
                      } ${m === "DELETE" && activeMethod !== m ? "text-neo-pink" : ""}`}
                  >
                    {m}
                  </button>
                ))}
              </div>

              {/* URL Bar */}
              <div className="p-4 border-b-[4px] border-border bg-card flex flex-wrap sm:flex-nowrap items-center gap-4">
                <span className="font-mono font-bold text-muted-foreground hidden sm:inline-block">URL:</span>
                <div className="flex-1 font-mono bg-background text-foreground border-[3px] border-border p-3 overflow-hidden whitespace-nowrap text-sm shadow-[inset_2px_2px_0_0_rgba(0,0,0,0.1)] dark:shadow-[inset_2px_2px_0_0_rgba(255,255,255,0.05)]">
                  https://api.fiamanillah.com/v1/system/{activeMethod === "GET" ? "status" : activeMethod === "POST" ? "deploy" : "core"}
                </div>
                <Button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-black text-white dark:bg-white dark:text-black font-black uppercase px-6 py-6 border-[3px] border-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-neo-blue dark:hover:bg-neo-blue transition-all rounded-none shadow-neo shrink-0"
                >
                  {isLoading ? "Sending..." : "Send"}
                </Button>
              </div>

              {/* Response Body */}
              <div className="flex-1 bg-background p-6 font-mono text-sm overflow-y-auto">
                {!response && !isLoading && (
                  <div className="h-full flex items-center justify-center text-muted-foreground font-bold uppercase animate-pulse">
                    Awaiting Request...
                  </div>
                )}
                {isLoading && (
                  <div className="h-full flex items-center justify-center text-neo-green font-bold uppercase">
                    Processing... <span className="ml-2 w-3 h-5 bg-neo-green animate-blink"></span>
                  </div>
                )}
                {response && !isLoading && (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="text-muted-foreground mb-2">// Response Headers</div>
                    <div className="text-blue-500 mb-6 font-bold">
                      HTTP/1.1 {response.status === "error" ? "403 Forbidden" : response.status === "created" ? "201 Created" : "200 OK"}
                      <br />
                      Content-Type: application/json
                      <br />
                      X-Powered-By: Rust-HyperQueue
                    </div>
                    <div className="text-muted-foreground mb-2">
                      // Response Body (JSON)
                    </div>
                    <div className="bg-[#0d1117] text-gray-300 p-6 border-[3px] border-border font-mono text-sm rounded-none shadow-neo-sm">
                      <pre
                        className="whitespace-pre-wrap break-words"
                        dangerouslySetInnerHTML={{
                          __html: JSON.stringify(response, null, 2)
                            .replace(/"([^"]+)":/g, '<span class="text-[#9cdcfe]">"$1"</span>:')
                            .replace(/: "([^"]+)"/g, ': <span class="text-[#ce9178]">"$1"</span>')
                            .replace(/: ([0-9]+)/g, ': <span class="text-[#b5cea8]">$1</span>')
                            .replace(/: (true|false)/g, ': <span class="text-[#569cd6]">$1</span>')
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Right – Raw Logic Code Blocks */}
          <div>
            <div className="flex justify-between items-end mb-8">
              <h2 className="text-4xl font-black uppercase tracking-tighter bg-neo-pink text-black border-[3px] border-border px-4 py-2 inline-block rotate-1 shadow-neo">
                Raw Logic
              </h2>
              <button
                onClick={() =>
                  alert(
                    "🎉 System Exit Code = 0. You found the secret trigger."
                  )
                }
                className="w-10 h-10 bg-black hover:bg-neo-green border-[3px] border-border flex items-center justify-center text-white transition-colors cursor-pointer shadow-neo rounded-none"
                title="Do not click"
              >
                ?
              </button>
            </div>
            <div className="space-y-8">
              {/* Go Code Block */}
              <Card
                className="p-6 relative group rounded-none border-[4px] border-border shadow-neo-lg"
                style={{
                  backgroundColor: "#0d1117",
                }}
              >
                <div className="absolute top-0 right-0 bg-background text-foreground border-b-[4px] border-l-[4px] border-border px-4 py-2 font-black uppercase text-sm">
                  Go
                </div>
                <pre className="font-mono text-sm sm:text-base overflow-x-auto text-gray-300 scrollbar-thin mt-4">
                  <code>
                    {"\n"}
                    <span className="text-[#f92672]">func</span>{" "}
                    <span className="text-[#66d9ef]">GetConn</span>(ctx
                    context.Context) (*sql.DB,{" "}
                    <span className="text-[#f92672]">error</span>) {"{"}
                    {"\n    "}ctx, cancel := context.
                    <span className="text-[#e6db74]">WithTimeout</span>(ctx,
                    5*time.Second)
                    {"\n    "}
                    <span className="text-[#f92672]">defer</span>{" "}
                    <span className="text-[#e6db74]">cancel</span>()
                    {"\n    \n    "}db, err := sql.
                    <span className="text-[#e6db74]">Open</span>(
                    <span className="text-[#a6e22e]">"postgres"</span>, os.
                    <span className="text-[#e6db74]">Getenv</span>(
                    <span className="text-[#a6e22e]">"DSN"</span>))
                    {"\n    "}
                    <span className="text-[#f92672]">if</span> err !={" "}
                    <span className="text-[#66d9ef]">nil</span> {"{"}
                    {"\n        "}
                    <span className="text-[#f92672]">return</span>{" "}
                    <span className="text-[#66d9ef]">nil</span>, fmt.
                    <span className="text-[#e6db74]">Errorf</span>(
                    <span className="text-[#a6e22e]">"conn pool: %w"</span>,
                    err)
                    {"\n    "}
                    {"}"}
                    {"\n    "}db.
                    <span className="text-[#e6db74]">SetMaxOpenConns</span>
                    (100)
                    {"\n    "}
                    <span className="text-[#f92672]">return</span> db,{" "}
                    <span className="text-[#66d9ef]">nil</span>
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </Card>

              {/* Redis/Node Code Block */}
              <Card
                className="p-6 relative group rounded-none border-[4px] border-border shadow-neo-lg"
                style={{
                  backgroundColor: "#0d1117",
                }}
              >
                <div className="absolute top-0 right-0 bg-neo-pink text-black border-b-[4px] border-l-[4px] border-border px-4 py-2 font-black uppercase text-sm">
                  Node / Redis
                </div>
                <pre className="font-mono text-sm sm:text-base overflow-x-auto text-gray-300 scrollbar-thin mt-4">
                  <code>
                    {"\n"}
                    <span className="text-[#66d9ef]">async function</span>{" "}
                    <span className="text-[#e6db74]">invalidateCache</span>
                    (pattern) {"{"}
                    {"\n    "}
                    <span className="text-[#f92672]">let</span> cursor ={" "}
                    <span className="text-[#a6e22e]">'0'</span>;
                    {"\n    "}
                    <span className="text-[#f92672]">do</span> {"{"}
                    {"\n        "}
                    <span className="text-[#f92672]">const</span> [nextCursor,
                    keys] = <span className="text-[#f92672]">await</span>{" "}
                    redis.<span className="text-[#e6db74]">scan</span>(
                    {"\n            "}cursor,{" "}
                    <span className="text-[#a6e22e]">'MATCH'</span>, pattern,{" "}
                    <span className="text-[#a6e22e]">'COUNT'</span>, 100
                    {"\n        "});
                    {"\n        "}
                    <span className="text-[#f92672]">if</span> (keys.length{" "}
                    {">"} 0) {"{"}
                    {"\n            "}
                    <span className="text-[#f92672]">await</span> redis.
                    <span className="text-[#e6db74]">del</span>
                    (...keys);
                    {"\n        "}
                    {"}"}
                    {"\n        "}cursor = nextCursor;
                    {"\n    "}
                    {"}"} <span className="text-[#f92672]">while</span>{" "}
                    (cursor !== <span className="text-[#a6e22e]">'0'</span>);
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
