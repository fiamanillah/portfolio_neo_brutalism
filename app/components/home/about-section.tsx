import { TerminalWindow, PaintBrushBroad, ArrowRight } from "@phosphor-icons/react";
import { Card, CardContent } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="py-24 border-b-4 border-border relative bg-[#38b6ff] dark:bg-[#005a8d]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2
                            className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 text-white text-stroke-3"
                        >
                            WTF is <br />
                            this?
                        </h2>
                        <Card className="transform -rotate-1 shadow-neo rounded-none border-[3px] border-border p-0 bg-card">
                            <CardContent className="p-8">
                                <p className="text-2xl font-bold mb-6 leading-relaxed text-foreground">
                                    I'm a full-stack developer who got tired of the same old clean,
                                    minimalist, corporate web designs.
                                </p>
                                <p className="text-xl font-medium mb-6 font-mono leading-relaxed text-muted-foreground">
                                    I believe the web should be fun, loud, and unapologetic. I write
                                    clean, highly optimized code to deliver raw, unpolished-looking
                                    experiences. It takes a lot of effort to look this chaotic.
                                </p>
                                <div className="flex flex-wrap gap-4 mt-8">
                                    <Badge variant="accent" className="text-sm px-4 py-2 bg-neo-yellow text-black border-[3px] border-black dark:border-white rounded-none shadow-neo-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all">
                                        5+ Years Exp
                                    </Badge>
                                    <Badge variant="accent" className="text-sm px-4 py-2 bg-neo-pink text-white border-[3px] border-black dark:border-white rounded-none shadow-neo-sm hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-none transition-all">
                                        50+ Projects
                                    </Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative grid grid-cols-2 gap-4 h-full content-center">
                        <Card className="h-48 sm:h-64 flex flex-col items-center justify-center p-6 text-center transform rotate-2 hover:rotate-0 transition-transform shadow-neo rounded-none bg-[#00ff87] border-[3px] border-black dark:border-white text-black">
                            <CardContent className="p-0 flex flex-col items-center text-black">
                                <TerminalWindow weight="bold" className="text-6xl mb-4" />
                                <h3 className="text-xl font-black uppercase">Clean Code</h3>
                            </CardContent>
                        </Card>
                        <Card className="h-48 sm:h-64 flex flex-col items-center justify-center p-6 text-center transform -rotate-3 hover:rotate-0 transition-transform mt-8 shadow-neo rounded-none bg-[#ff914d] border-[3px] border-black dark:border-white text-black">
                            <CardContent className="p-0 flex flex-col items-center text-black">
                                <PaintBrushBroad weight="bold" className="text-6xl mb-4" />
                                <h3 className="text-xl font-black uppercase">Dirty UI</h3>
                            </CardContent>
                        </Card>
                        <Card className="col-span-2 p-6 flex items-center justify-between group cursor-pointer shadow-neo rounded-none bg-card hover:bg-neo-yellow dark:hover:bg-neo-yellow transition-colors border-[3px] border-border rounded-none">
                            <span className="text-3xl font-black uppercase text-foreground group-hover:text-black">
                                Let's build
                            </span>
                            <ArrowRight weight="bold" className="text-5xl group-hover:translate-x-4 transition-transform text-foreground group-hover:text-black" />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
