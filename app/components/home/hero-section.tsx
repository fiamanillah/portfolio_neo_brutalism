import { TerminalWindow, Database, Gear, Atom, Code, ChartBar, Cpu, Globe } from "@phosphor-icons/react";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 min-h-screen flex items-center bg-dots border-b-4 border-black overflow-hidden bg-background">
      {/* Giant Background Letter */}
      <div
        className="absolute top-1/2 left-1/2 font-black opacity-5 pointer-events-none z-0 tracking-tighter leading-none select-none text-stroke-10 text-transparent"
        style={{
          transform: "translate(-50%, -50%)",
          fontSize: "40rem",
        }}
      >
        FA
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-40 dark:opacity-20 blur-3xl bg-neo-yellow animate-pulse" />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full opacity-40 dark:opacity-20 blur-3xl bg-neo-green animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full opacity-40 dark:opacity-20 blur-3xl bg-blue-500 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* --- FLOATING ELEMENTS --- */}

      {/* Tech Stack Chips */}
      <div className="absolute top-[12%] left-[4%] lg:left-[8%] animate-float-1 z-40 hidden md:flex items-center gap-2 bg-card border-2 border-border p-2 shadow-neo-sm rotate-3 hover:rotate-0 transition-transform cursor-default">
        <Atom weight="bold" className="text-blue-500 size-6" />
        <span className="font-bold uppercase text-xs text-foreground">React 19</span>
      </div>

      <div className="absolute top-[8%] left-[50%] -translate-x-1/2 animate-float-3 z-40 hidden md:flex items-center gap-2 bg-foreground text-background border-2 border-background p-2 shadow-neo-sm -rotate-2 hover:rotate-0 transition-transform cursor-default" style={{ animationDelay: "1.5s" }}>
        <Code weight="bold" className="text-neo-green size-6" />
        <span className="font-bold uppercase text-xs">Golang Engine</span>
      </div>

      {/* Node.js API */}
      <div className="absolute top-[10%] right-[4%] lg:right-[10%] animate-float-2 z-40 hidden md:flex items-center gap-2 bg-neo-pink text-white border-2 border-black dark:border-white p-2 shadow-neo-sm -rotate-3 hover:rotate-0 transition-transform cursor-default">
        <Cpu weight="bold" className="size-6" />
        <span className="font-bold uppercase text-xs">Node.js API</span>
      </div>

      {/* Edge Network */}
      <div className="absolute top-[55%] right-[2%] lg:right-[4%] animate-float-1 z-40 hidden 2xl:flex items-center gap-2 bg-card border-2 border-border p-2 shadow-neo-sm rotate-2 hover:rotate-0 transition-transform cursor-default" style={{ animationDelay: "0.8s" }}>
        <Globe weight="bold" className="text-neo-pink size-5" />
        <span className="font-bold uppercase text-xs text-foreground">Edge Network</span>
      </div>

      {/* Functional Snippets */}
      <div
        className="absolute bottom-[10%] left-[4%] lg:left-[6%] bg-neo-yellow border-2 border-black dark:border-white p-3 font-mono text-[10px] animate-float-3 z-40 hidden lg:block shadow-neo -rotate-6 opacity-90 hover:opacity-100 transition-opacity"
      >
        <div className="border-b border-black/20 pb-1 mb-2 uppercase text-[9px] text-black/50">Terminal Session</div>
        <div className="text-black">$ bun deploy</div>
        <div className="text-black/60">&gt; Bundle optimized... OK</div> 
        <div className="text-black/60">&gt; Pushing to edge... DONE</div>
      </div>

      {/* Stats Badge */}
      <div className="absolute bottom-[5%] left-[45%] lg:left-[50%] -translate-x-1/2 animate-float-2 z-40 hidden xl:flex items-center gap-3 bg-neo-yellow border-2 border-black dark:border-white p-3 shadow-neo rotate-1 hover:rotate-0 transition-transform cursor-default">
        <ChartBar weight="bold" className="size-8 text-black" />
        <div className="text-black">
          <div className="text-[10px] uppercase font-black leading-none opacity-60">System Health</div>
          <div className="text-xl font-black leading-none">99.9% UPTIME</div>
        </div>
      </div>

      <div
        className="absolute bottom-[10%] right-[4%] lg:right-[8%] bg-black text-neo-green border-2 border-white p-3 font-mono text-[10px] animate-float-2 z-40 hidden lg:block shadow-neo rotate-1 opacity-90 hover:opacity-100 transition-opacity"
      >
        <div className="border-b border-white/20 pb-1 mb-2 uppercase text-[9px] text-white/50">Postgres Query</div>
        SELECT user_id, count(hits) <br />
        FROM api_logs <br />
        GROUP BY 1 HAVING hits &gt; 1000;
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7 relative">
            <h1
              className="font-black uppercase leading-none tracking-tighter mb-8"
              style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", lineHeight: "0.9" }}
            >
              Fi{" "}
              <span className="relative inline-block">
                <span
                  className="relative z-10 text-white text-stroke-4"
                >
                  Amanillah
                </span>
                <span className="absolute top-2 -left-2 w-full h-full bg-orange-400 border-[3px] border-black dark:border-white -z-10" />
              </span>
            </h1>
            <div
              className="text-2xl lg:text-4xl font-black mb-10 bg-card p-4 border-[3px] border-border inline-block leading-snug uppercase max-w-full shadow-neo text-foreground"
            >
              I engineer <br />
              <div className="rotating-text-wrapper text-blue-500 border-b-4 border-border inline-block mt-2">
                <div className="rotating-text">
                  <span>high-throughput APIs</span>
                  <span>seamless user experiences</span>
                  <span>database schemas</span>
                  <span>modern frontends</span>
                  <span>scalable microservices</span>
                  <span>interactive web apps</span>
                  <span>end-to-end solutions</span>
                </div>
              </div>
            </div>
            <p
              className="text-xl font-bold mb-10 max-w-2xl bg-neo-yellow p-4 border-[3px] border-black dark:border-white inline-block leading-snug font-mono shadow-neo-sm text-black"
            >
              Form meets function. I build beautiful interfaces powered by
              robust hidden engines. Delivering complete, high-performance web
              experiences is my aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="#terminal"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-neo-green text-black hover:bg-neo-green/80 h-auto py-4 px-8 text-2xl border-black dark:border-white"
                )}
              >
                Access Terminal{" "}
                <TerminalWindow weight="bold" className="size-8" />
              </a>
              <a
                href="#architecture"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "bg-card text-foreground h-auto py-4 px-8 text-2xl border-border"
                )}
              >
                View Schemas <Database weight="bold" className="size-8" />
              </a>
            </div>
          </div>

          {/* Right Column – System Diagnostic Card */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div
              className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500 border-[3px] border-black flex items-center justify-center animate-spin-slow z-30 rounded-full shadow-neo"
            >
              <Gear weight="bold" className="size-16 text-white" />
            </div>
            <div
              className="bg-black p-6 border-[3px] border-white rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto relative z-20 shadow-[12px_12px_0px_0px_rgba(57,255,20,0.3)]"
            >
              <div className="w-full h-80 bg-black border-2 border-white mb-6 overflow-hidden relative group p-4 font-mono">
                <div className="text-neo-green text-sm opacity-70 mb-2">
                  System Diagnostic...
                </div>
                <div className="flex flex-col gap-2">
                  <div className="w-3/4 h-4 bg-neo-green/20 border border-neo-green relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-neo-green animate-pulse" />
                  </div>
                  <div className="w-1/2 h-4 bg-neo-green/20 border border-neo-green relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-neo-green animate-pulse delay-75" />
                  </div>
                  <div className="w-full h-4 bg-neo-green/20 border border-neo-green relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-neo-green animate-pulse delay-150" />
                  </div>
                </div>
                <div className="mt-8 space-y-2 text-xs text-neo-green/60">
                  <div>[SYS] Checking kernel params... OK</div>
                  <div>[SYS] Mounting volumes... OK</div>
                  <div>[NET] Init eth0 interface... UP</div>
                  <div>[DB] Ping primary cluster... PONG</div>
                </div>
                <div
                  className="absolute inset-0 bg-cover opacity-20 mix-blend-luminosity group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop')",
                  }}
                />
                <div
                  className="absolute bottom-4 left-4 bg-neo-green border-2 border-white text-black px-3 py-1 font-mono font-bold text-sm z-10 shadow-[4px_4px_0px_0px_white]"
                >
                  STATUS: OPTIMAL
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-black border-2 border-white px-4 py-2 text-white">
                  <span className="font-bold uppercase text-lg">Uptime:</span>
                  <span className="font-mono font-bold text-neo-green">
                    99.999%
                  </span>
                </div>
                <div className="flex justify-between items-center bg-black border-2 border-white px-4 py-2 text-white">
                  <span className="font-bold uppercase text-lg">Coffee/Hr:</span>
                  <span className="font-mono font-bold text-orange-400">
                    4.5 Cups
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
