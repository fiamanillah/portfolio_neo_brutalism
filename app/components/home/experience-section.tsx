import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { cn } from "~/lib/utils";

export default function ExperienceSection() {
    const experiences = [
        {
            period: "2022 - Present",
            title: "Senior Full Stack",
            company: "Vaporware Inc.",
            description:
                "Architecting massive unscalable monoliths and convincing management it's a microservices architecture. Introduced brutalist UI to internal tools, resulting in a 400% increase in user complaints (success).",
            dotColor: "#ff66c4",
            cardBg: "#ff66c4",
            rotate: "-rotate-2",
        },
        {
            period: "2019 - 2022",
            title: "Frontend Engineer",
            company: "TechBros LLC",
            description:
                "Built 15 different React applications that all did exactly the same thing. Mastered the art of deeply nested ternary operators. Single-handedly maintained a legacy jQuery codebase out of spite.",
            dotColor: "#00ff87",
            cardBg: "#00ff87",
            rotate: "rotate-1",
        },
        {
            period: "2017 - 2019",
            title: "Junior Web Dev",
            company: "Local Agency",
            description:
                "Centered divs. Changed button colors based on client feelings. Learned CSS Grid the hard way. Survived the great Flash deprecation migration.",
            dotColor: "#38b6ff",
            cardBg: "#38b6ff",
            rotate: "-rotate-1",
        },
    ];

    return (
        <section
            id="experience"
            className="py-24 border-b-4 border-border text-foreground overflow-hidden relative bg-background bg-dots"
        >
            {/* Soft pink blur */}
            <div
                className="absolute top-0 right-0 opacity-20 dark:opacity-10 rounded-full pointer-events-none"
                style={{
                    backgroundColor: "#ff66c4",
                    filter: "blur(100px)",
                    width: "800px",
                    height: "800px",
                }}
            />

            {/* Floating geometric shape */}
            <div className="absolute top-40 right-10 md:right-20 w-32 h-32 bg-neo-green border-[3px] border-border shadow-neo transform rotate-12 animate-float-1 z-0 opacity-50 dark:opacity-20 pointer-events-none hidden md:block" />
            
            {/* Subtle background text */}
            <div className="absolute bottom-10 left-10 text-[10rem] font-black leading-none opacity-5 dark:opacity-5 pointer-events-none text-stroke-4 text-transparent select-none z-0 hidden lg:block" style={{ transform: "rotate(-5deg)" }}>
                EXP
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <h2
                    className="text-6xl md:text-7xl font-black uppercase tracking-tighter mb-20 text-neo-yellow text-stroke-3"
                >
                    Where I've Battled
                </h2>

                <div className="relative border-l-8 border-border ml-4 md:ml-12 space-y-16 pb-12">
                    {experiences.map((exp, i) => (
                        <div className="relative" key={i}>
                            <div
                                className="absolute w-8 h-8 border-4 border-border rounded-full -left-5 top-6 z-10 shadow-neo-sm"
                                style={{
                                    backgroundColor: exp.dotColor,
                                }}
                            />
                            <div className="ml-12 md:ml-20">
                                <Badge
                                    variant="outline"
                                    className={cn(
                                        `inline-block bg-card text-foreground px-4 py-2 text-xl font-mono font-bold uppercase mb-4 border-[3px] border-border transform ${exp.rotate} rounded-none shadow-none hover:shadow-none`
                                    )}
                                >
                                    {exp.period}
                                </Badge>
                                <Card
                                    className="p-0 border-[3px] border-border hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all rounded-none shadow-neo text-black dark:text-black"
                                    style={{
                                        backgroundColor: exp.cardBg,
                                    }}
                                >
                                    <CardContent className="p-8">
                                        <h3 className="text-4xl font-black uppercase mb-2">
                                            {exp.title}
                                        </h3>
                                        <h4 className="text-2xl font-bold font-mono mb-6 bg-black text-white inline-block px-3 py-1 border-2 border-transparent">
                                            {exp.company}
                                        </h4>
                                        <p className="text-xl font-medium leading-relaxed font-sans">
                                            {exp.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
