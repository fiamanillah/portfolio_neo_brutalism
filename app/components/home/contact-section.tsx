import { useState } from "react";
import { EnvelopeSimple, XLogo, LinkedinLogo } from "@phosphor-icons/react";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section
      id="contact"
      className="py-32 border-t-[8px] border-border relative bg-[#38b6ff] dark:bg-[#005a8d] overflow-hidden"
    >
      {/* Texture Grid Pattern */}
      <div 
        className="absolute inset-0 bg-grid opacity-30 dark:opacity-[0.15] pointer-events-none z-0 mix-blend-multiply dark:mix-blend-screen" 
      />

      {/* Giant Decorative Icon */}
      <div className="absolute -top-20 -right-20 opacity-10 dark:opacity-5 text-black pointer-events-none z-0 transform rotate-12">
        <EnvelopeSimple weight="fill" className="size-[40rem]" />
      </div>

      {/* Floating Plus Accent */}
      <div className="absolute top-40 left-[10%] w-16 h-16 opacity-30 dark:opacity-20 pointer-events-none z-0 transform rotate-3 animate-spin-slow">
        <div className="absolute top-1/2 left-0 w-full h-[8px] -translate-y-1/2 bg-black border-[2px] border-black" />
        <div className="absolute top-0 left-1/2 h-full w-[8px] -translate-x-1/2 bg-black border-[2px] border-black" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2
              className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-8 text-black"
            >
              Don't Be <br />
              <span
                className="text-white text-stroke-4"
              >
                Shy.
              </span>
            </h2>
            <p className="text-3xl font-bold mb-12 bg-card text-foreground inline-block p-4 transform rotate-2 border-[3px] border-border shadow-neo">
              Got a project that needs some aggressive energy? Drop a line.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:hello@maxdev.com"
                className="block bg-card text-foreground p-6 group transition-all border-[8px] border-border neo-shadow-lg"
              >
                <span
                  className="text-xl font-mono font-bold uppercase block mb-2 text-neo-yellow"
                >
                  Email me at
                </span>
                <span className="text-3xl md:text-4xl font-black uppercase group-hover:underline">
                  hello@maxdev.com
                </span>
              </a>

              <div className="flex gap-6">
                <a
                  href="#"
                  className="flex-1 bg-card text-foreground p-6 flex justify-center items-center border-[4px] border-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Twitter"
                >
                  <XLogo weight="bold" className="size-16" />
                </a>
                <a
                  href="#"
                  className="flex-1 bg-card text-foreground p-6 flex justify-center items-center border-[4px] border-border shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
                  onClick={(e) => e.preventDefault()}
                  aria-label="LinkedIn"
                >
                  <LinkedinLogo weight="bold" className="size-16" />
                </a>
              </div>
            </div>
          </div>

          <Card
            className="p-8 md:p-12 h-fit transform -rotate-1 border-[8px] border-border shadow-neo-lg bg-card rounded-none"
          >
            {submitted ? (
              <CardContent className="flex flex-col items-center justify-center py-16 p-0 border-none">
                <div
                  className="text-5xl font-black uppercase mb-4 text-neo-green text-center"
                >
                  TRANSMISSION SENT!
                </div>
                <p className="text-2xl font-bold text-center text-foreground">
                  I'll get back to you with maximum aggression.
                </p>
              </CardContent>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-2xl font-black uppercase mb-3 text-foreground">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    className="w-full border-[4px] border-border p-6 font-mono text-lg transition-all outline-none rounded-none bg-background focus-visible:ring-0 focus-visible:bg-neo-yellow focus-visible:text-black focus-visible:shadow-[inset_4px_4px_0_0_rgba(0,0,0,1)] dark:focus-visible:shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.2)] text-foreground"
                    placeholder="JOHN DOE"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-2xl font-black uppercase mb-3 text-foreground">
                    Your Email
                  </label>
                  <Input
                    type="email"
                    className="w-full border-[4px] border-border p-6 font-mono text-lg transition-all outline-none rounded-none bg-background focus-visible:ring-0 focus-visible:bg-neo-yellow focus-visible:text-black focus-visible:shadow-[inset_4px_4px_0_0_rgba(0,0,0,1)] dark:focus-visible:shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.2)] text-foreground"
                    placeholder="JOHN@DOE.COM"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-2xl font-black uppercase mb-3 text-foreground">
                    What's the plan?
                  </label>
                  <Textarea
                    className="w-full border-[4px] border-border p-6 font-mono text-lg transition-all outline-none rounded-none resize-none h-48 bg-background focus-visible:ring-0 focus-visible:bg-neo-yellow focus-visible:text-black focus-visible:shadow-[inset_4px_4px_0_0_rgba(0,0,0,1)] dark:focus-visible:shadow-[inset_4px_4px_0_0_rgba(255,255,255,0.2)] text-foreground"
                    placeholder="TELL ME ABOUT YOUR AWESOME (OR TERRIBLE) IDEA..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-8 text-3xl font-black uppercase bg-neo-green text-black border-[8px] border-border shadow-neo-lg hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all rounded-none"
                >
                  <EnvelopeSimple weight="bold" className="mr-3 size-8" /> 
                  Send Transmission
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
