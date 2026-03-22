import {
  Devices,
  ArrowRight,
  ArrowDown,
  ShareNetwork,
  Database,
  Lightning,
  Queue,
  GitMerge,
  Globe,
  ChartLineUp,
  Package,
} from "@phosphor-icons/react";
import { Card } from "~/components/ui/card";

export default function ArchitectureSection() {
  const services: [string, string, string][] = [
    ["Auth Service", "GO", "bg-[#00ff87]"],
    ["Core Engine", "RUST", "bg-[#ff914d]"],
    ["Data Worker", "NODE", "bg-[#cb6ce6]"],
  ];

  const extendedStack: [React.ElementType, string, string, string][] = [
    [Queue, "Message Broker", "Kafka / RabbitMQ for async event-driven architecture.", "hover:bg-neo-yellow dark:hover:bg-neo-yellow dark:hover:text-black"],
    [GitMerge, "Load Balancer", "HAProxy / AWS ALB for layer 4/7 traffic routing.", "hover:bg-neo-pink dark:hover:bg-neo-pink dark:hover:text-black"],
    [Globe, "CDN Edge", "Cloudflare / CloudFront for global asset delivery.", "hover:bg-neo-green dark:hover:bg-neo-green dark:hover:text-black"],
    [ChartLineUp, "Observability", "Datadog / Grafana for metrics, traces, and logs.", "hover:bg-[#38b6ff] dark:hover:bg-[#38b6ff] dark:hover:text-black"],
    [Package, "Registry & Orch", "Docker Hub / ECR + Kubernetes (EKS) for workloads.", "hover:bg-[#ff914d] dark:hover:bg-[#ff914d] dark:hover:text-black"],
  ];

  return (
    <section id="architecture" className="py-24 border-b-[8px] border-border relative overflow-hidden bg-background">
      {/* Grid Overlay */}
      <div className="absolute top-0 right-0 w-full h-full opacity-30 dark:opacity-10 pointer-events-none mix-blend-multiply dark:mix-blend-screen">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter bg-card text-foreground border-[4px] border-border -rotate-2 px-8 py-4 inline-block shadow-neo">
            System Topology
          </h2>
          <p
            className="mt-8 text-2xl font-bold font-mono text-background bg-foreground p-4 border-[3px] border-border inline-block max-w-3xl shadow-neo"
          >
            Designing scalable, fault-tolerant ecosystems.
          </p>
        </div>

        {/* Architecture Diagram */}
        <Card
          className="border-[8px] border-border p-8 xl:p-12 flex flex-col xl:flex-row items-center justify-start xl:justify-center gap-6 xl:gap-8 relative mb-16 shadow-neo-xl rounded-none bg-card overflow-x-auto"
        >
          {/* Clients */}
          <Card className="bg-background text-foreground border-[4px] border-border p-6 w-full xl:w-40 text-center flex flex-col items-center gap-3 relative z-10 hover:bg-neo-pink hover:text-black dark:hover:bg-neo-pink dark:hover:text-black transition-colors shadow-neo shrink-0 rounded-none">
            <Devices weight="bold" className="size-16" />
            <span className="font-black uppercase text-xl">Clients</span>
          </Card>

          {/* Arrow + HTTPS */}
          <div className="flex flex-row xl:flex-col items-center gap-2 text-foreground z-10 shrink-0">
            <ArrowRight weight="bold" className="size-10 hidden xl:block" />
            <ArrowDown weight="bold" className="size-10 xl:hidden" />
            <span
              className="font-mono font-bold bg-background text-foreground border-[3px] border-border px-2 py-1 shadow-[2px_2px_0_0_currentColor]"
              style={{ transform: "rotate(6deg)" }}
            >
              HTTPS
            </span>
          </div>

          {/* API Gateway */}
          <Card className="bg-neo-yellow text-black border-[4px] border-border p-6 w-full xl:w-48 text-center flex flex-col items-center gap-3 relative z-10 hover:-translate-y-2 transition-transform shadow-neo shrink-0 rounded-none">
            <ShareNetwork weight="bold" className="size-16" />
            <span className="font-black uppercase text-xl">API Gateway</span>
            <span className="font-mono text-sm border-t-[3px] border-black pt-2 w-full font-bold">
              NGINX / Kong
            </span>
          </Card>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-2 z-10 text-foreground shrink-0">
            <ArrowRight weight="bold" className="size-10 hidden xl:block" />
            <ArrowDown weight="bold" className="size-10 xl:hidden" />
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6 w-full xl:w-56 z-10 shrink-0">
            {services.map(([name, lang, bg]) => (
              <Card
                key={name}
                className={`border-[4px] border-border p-4 flex items-center justify-between hover:scale-105 transition-transform cursor-crosshair shadow-neo text-black rounded-none ${bg}`}
              >
                <span className="font-black uppercase">{name}</span>
                <span className="font-mono text-xs font-bold bg-black text-white px-2 py-1 border-[2px] border-black">
                  {lang}
                </span>
              </Card>
            ))}
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-2 z-10 text-foreground shrink-0">
            <ArrowRight weight="bold" className="size-10 hidden xl:block" />
            <ArrowDown weight="bold" className="size-10 xl:hidden" />
          </div>

          {/* Data Stores */}
          <div className="flex flex-col gap-6 w-full xl:w-48 z-10 shrink-0">
            <Card className="bg-background text-foreground border-[4px] border-border p-6 rounded-none flex flex-col items-center text-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-crosshair shadow-neo">
              <Database weight="bold" className="size-12 mb-2" />
              <span className="font-black uppercase">PostgreSQL</span>
              <span className="font-mono font-bold text-xs mt-1">Primary DB</span>
            </Card>
            <Card className="bg-background text-foreground border-[4px] border-border p-6 rounded-full flex flex-col items-center text-center hover:bg-neo-pink hover:text-white transition-colors cursor-crosshair shadow-neo xl:rounded-full rounded-full">
              <Lightning weight="bold" className="size-12 mb-2" />
              <span className="font-black uppercase">Redis</span>
              <span className="font-mono font-bold text-xs mt-1">Cache Layer</span>
            </Card>
          </div>
        </Card>

        {/* Extended Stack */}
        <h3 className="text-3xl font-black uppercase text-background mb-8 text-center bg-foreground inline-block px-6 py-2 border-[4px] border-border rotate-1 shadow-neo mx-auto table">
          Extended Stack Components
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {extendedStack.map(([Icon, title, desc, hoverClass]) => (
            <Card
              key={title}
              className={`bg-card text-foreground border-[4px] border-border p-6 transition-colors group cursor-pointer shadow-neo rounded-none ${hoverClass}`}
            >
              <div className="w-14 h-14 bg-foreground text-background flex items-center justify-center mb-4 border-[3px] border-border transition-colors">
                <Icon weight="bold" className="size-8" />
              </div>
              <h4 className="font-black uppercase text-xl mb-2">{title}</h4>
              <p className="font-mono text-sm font-medium text-muted-foreground group-hover:text-current">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
