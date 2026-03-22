import type { Route } from "./+types/home";
import HeroSection from "../components/home/hero-section";
import MarqueeBanner from "../components/home/marquee-banner";
import AboutSection from "../components/home/about-section";
import TechStackSection from "../components/home/tech-stack-section";
import WorkSection from "../components/home/work-section";
import ExperienceSection from "../components/home/experience-section";
import TerminalSection from "../components/home/terminal-section";
import PlaygroundSection from "../components/home/playground-section";
import ArchitectureSection from "../components/home/architecture-section";
import ContactSection from "../components/home/contact-section";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Fi Amanillah | Software Engineer" },
    { name: "description", content: "Portfolio of Fi Amanillah, a Software Engineer specialized in high-performance web applications." },
  ];
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MarqueeBanner />
      <AboutSection />
      <TechStackSection />
      <WorkSection />
      <ExperienceSection />
      <TerminalSection />
      <PlaygroundSection />
      <ArchitectureSection />
      <ContactSection />
    </main>
  );
}
