import { Link } from "react-router";
import { ArrowCircleRight, ArrowCircleRightIcon, GithubLogo, GithubLogoIcon } from "@phosphor-icons/react";
import { Card, CardContent } from "~/components/ui/card"; import { Badge } from "~/components/ui/badge";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface Project {
    slug: string;
    title: string;
    image: string;
    tags: string[];
    tagBg: string;
    tagColor: string;
    description: string;
    frameBg: string;
    overlayBg: string;
    rotate: string;
    btnColor: string;
}

function ProjectCard({
    project,
    reverse,
}: {
    project: Project;
    reverse: boolean;
}) {
    return (
        <div
            className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center`}
        >
            <div className="w-full lg:w-1/2">
                <Card
                    className={`p-4 transform ${project.rotate} hover:rotate-0 transition-transform duration-300 border-[3px] border-border rounded-none shadow-neo p-0`}
                    style={{
                        backgroundColor: project.frameBg,
                    }}
                >
                    <CardContent className="p-4">
                        <div className="overflow-hidden relative group h-64 sm:h-96 border-[3px] border-border bg-black">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover contrast-125 group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                            />
                            <div
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ backgroundColor: project.overlayBg }}
                            >
                                <a
                                    href="#"
                                    className={cn(
                                        buttonVariants({ variant: "outline", size: "lg" }),
                                        "bg-card text-foreground px-6 py-6 text-2xl font-black uppercase border-[3px] border-border shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-none h-auto"
                                    )}
                                    onClick={(e) => e.preventDefault()}
                                >
                                    View Live
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, i) => (
                        <Badge
                            key={i}
                            variant="accent"
                            className="border-[3px] border-border px-4 py-1 font-mono font-bold uppercase rounded-none shadow-none hover:shadow-none"
                            style={{
                                backgroundColor: project.tagBg,
                                color: project.tagColor,
                            }}
                        >
                            {tag}
                        </Badge>
                    ))}
                </div>
                <h3 className="text-5xl sm:text-7xl font-black uppercase mb-6 leading-none tracking-tight text-foreground text-stroke-3">
                    {project.title}
                </h3>
                <p className="text-2xl font-bold bg-card text-foreground p-6 mb-8 leading-relaxed border-[3px] border-border shadow-neo-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                    <Link
                        to={`/case-study/${project.slug}`}
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "px-8 py-6 text-xl font-black uppercase flex items-center gap-2 border-[3px] border-border shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all text-black rounded-none h-auto hover:bg-current"
                        )}
                        style={{ backgroundColor: project.btnColor }}
                    >
                        Case Study{" "}
                        <ArrowCircleRightIcon weight="fill" className="size-6" />
                    </Link>
                    <a
                        href="#"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "bg-card text-foreground px-6 py-6 flex items-center justify-center border-[3px] border-border shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-none h-auto"
                        )}
                        onClick={(e) => e.preventDefault()}
                    >
                        <GithubLogoIcon weight="bold" className="size-8" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default function WorkSection() {
    // Note: Colors like btnBg and frameBg acts as decorative "pop" colors which are fine to be hardcoded
    // since we use semantic colors for text and card backgrounds. Using hexes ensures they remain vibrant.
    const projects: Project[] = [
        {
            slug: "hypercart",
            title: "HyperCart",
            image:
                "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
            tags: ["Next.js", "Stripe", "Tailwind"],
            tagBg: "var(--foreground)",
            tagColor: "var(--background)",
            description:
                "A high-octane e-commerce platform built for speed. Features completely custom brutalist cart interactions, real-time inventory, and aggressive marketing popups.",
            frameBg: "#38b6ff", // Info blue
            overlayBg: "rgba(56,182,255,0.8)",
            rotate: "-rotate-2",
            btnColor: "#ff66c4", // Hot pink
        },
        {
            slug: "datasmash",
            title: "DataSmash",
            image:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
            tags: ["React", "Node.js", "PostgreSQL"],
            tagBg: "var(--card)",
            tagColor: "var(--foreground)",
            description:
                "A brutalist SaaS dashboard that doesn't hide the data behind pretty curves. Raw numbers, thick charts, and a UI that demands your attention.",
            frameBg: "#ff914d", // Orange
            overlayBg: "rgba(255,145,77,0.8)",
            rotate: "rotate-2",
            btnColor: "#00ff87", // Neon green
        },
        {
            slug: "loudchat",
            title: "LoudChat",
            image:
                "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1200&auto=format&fit=crop",
            tags: ["Vue 3", "Firebase", "WebRTC"],
            tagBg: "var(--foreground)",
            tagColor: "var(--background)",
            description:
                "A real-time communication app for teams that hate corporate slack. Giant typography, disruptive notifications, and pure chaotic energy.",
            frameBg: "#cb6ce6", // Purple
            overlayBg: "rgba(203,108,230,0.8)",
            rotate: "-rotate-1",
            btnColor: "#38b6ff", // Blue
        },
    ];

    return (
        <section
            id="work"
            className="py-24 border-b-4 border-border bg-neo-yellow dark:bg-[#b09600]" // Using a slightly darker yellow for dark mode contrast
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter inline-block bg-card text-foreground px-8 py-4 transform rotate-1 border-[3px] border-border shadow-neo">
                        Selected Works
                    </h2>
                </div>

                <div className="space-y-32">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} reverse={i % 2 !== 0} />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a
                        href="#"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "inline-flex bg-card text-foreground px-12 py-8 text-3xl font-black uppercase border-[3px] border-border shadow-neo hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all hover:bg-black hover:text-white rounded-none h-auto"
                        )}
                        onClick={(e) => e.preventDefault()}
                    >
                        View Archive
                    </a>
                </div>
            </div>
        </section>
    );
}
