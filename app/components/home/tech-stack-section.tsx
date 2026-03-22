import { Layout, HardDrives, Database, RocketLaunch, CheckSquare } from "@phosphor-icons/react";
import { Card, CardContent } from "~/components/ui/card";

function SkillCard({
    bgColor,
    title,
    icon: Icon,
    items,
    checkColor,
    offset,
}: {
    bgColor: string;
    title: string;
    icon: any;
    items: string[];
    checkColor: string;
    offset: boolean;
}) {
    return (
        <Card
            className={`group/card flex flex-col h-full border-[3px] border-black rounded-none shadow-neo transition-all duration-200 cursor-pointer p-0 gap-0 ${offset
                ? "lg:translate-y-8 hover:translate-x-1 hover:translate-y-1 lg:hover:translate-y-[36px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                }`}
        >
            <div
                className="border-b-[3px] border-black p-6 flex justify-between items-center overflow-hidden relative"
                style={{ backgroundColor: bgColor }}
            >
                <h3 className="text-3xl font-black uppercase relative z-10 group-hover/card:scale-105 transition-transform duration-300 origin-left text-black">
                    {title}
                </h3>
                <Icon weight="bold" className="text-5xl relative z-10 group-hover/card:rotate-12 group-hover/card:scale-110 transition-all duration-300 text-black" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover/card:opacity-20 transition-opacity duration-300" />
            </div>
            <CardContent className="p-6 flex-grow bg-white">
                <ul className="font-mono text-lg font-bold space-y-4">
                    {items.map((item, i) => (
                        <li
                            key={i}
                            className={`flex items-center gap-3 transition-transform duration-300 group-hover/card:translate-x-2${i < items.length - 1
                                ? " border-b-[3px] border-black pb-2"
                                : ""
                                }`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            <CheckSquare
                                weight="fill"
                                className="text-3xl transition-transform duration-300 group-hover/card:scale-110"
                                style={{ color: checkColor }}
                            />
                            <span className="group-hover/card:font-black transition-all duration-300 text-black">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}

export default function TechStackSection() {
    return (
        <section
            id="skills"
            className="py-24 border-b-4 border-border relative bg-secondary bg-grid"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 relative z-10">
                    <div className="relative inline-block group cursor-default">
                        <div className="absolute inset-0 bg-black dark:bg-white transform translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                        <h2 className="relative text-6xl md:text-8xl font-black uppercase tracking-tighter bg-card px-6 py-2 border-[3px] border-border transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 text-foreground">
                            Tech Stack
                        </h2>
                    </div>
                    <div className="relative group cursor-default">
                        <p
                            className="text-xl font-bold font-mono max-w-md p-4 border-[3px] border-black dark:border-white shadow-neo-sm transform rotate-1 group-hover:-rotate-1 transition-transform duration-300 text-black bg-[#ffde59]"
                        >
                            My weapons of choice for dominating the digital landscape.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <SkillCard
                        bgColor="#ff66c4"
                        title="Frontend"
                        icon={Layout}
                        items={[
                            "React & Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "Framer Motion",
                            "Vue & Nuxt",
                        ]}
                        checkColor="#00ff87"
                        offset={false}
                    />
                    <SkillCard
                        bgColor="#00ff87"
                        title="Backend"
                        icon={HardDrives}
                        items={[
                            "Node.js",
                            "Express & Nest",
                            "Python / Django",
                            "GraphQL",
                            "REST APIs",
                        ]}
                        checkColor="#38b6ff"
                        offset={true}
                    />
                    <SkillCard
                        bgColor="#38b6ff"
                        title="Database"
                        icon={Database}
                        items={[
                            "PostgreSQL",
                            "MongoDB",
                            "Redis",
                            "Prisma ORM",
                            "Supabase",
                        ]}
                        checkColor="#ff914d"
                        offset={false}
                    />
                    <SkillCard
                        bgColor="#ffde59"
                        title="DevOps"
                        icon={RocketLaunch}
                        items={[
                            "Docker",
                            "AWS",
                            "CI/CD Pipelines",
                            "Vercel / Netlify",
                            "Git / GitHub",
                        ]}
                        checkColor="#ff66c4"
                        offset={true}
                    />
                </div>
            </div>
        </section>
    );
}
