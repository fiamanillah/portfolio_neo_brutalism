import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tech Stack", href: "#stack" },
    { name: "Work", href: "#work" },
    { name: "Experience", href: "#experience" },
    { name: "Terminal", href: "#terminal" },
    { name: "Playground", href: "#playground" },
    { name: "Architecture", href: "#architecture" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-[4px] border-border shadow-[0_4px_0_0_rgba(0,0,0,1)] dark:shadow-[0_4px_0_0_rgba(255,255,255,0.1)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-4xl font-black tracking-tighter hover:-translate-y-1 transition-transform cursor-pointer"
          >
            FI<span className="text-neo-pink">.</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-black uppercase tracking-tight text-foreground/80 hover:text-foreground hover:bg-neo-yellow dark:hover:bg-neo-blue hover:text-black hover:-translate-y-1 transition-all border-[3px] border-transparent hover:border-black px-3 py-1 shadow-none hover:shadow-neo"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 font-black uppercase bg-neo-green text-black px-6 py-2 border-[3px] border-black hover:-translate-y-1 transition-all shadow-neo hover:bg-neo-pink"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 border-[3px] border-border bg-card text-foreground hover:bg-neo-pink hover:text-black transition-colors shadow-neo"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X weight="bold" className="size-8" />
            ) : (
              <List weight="bold" className="size-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-background border-b-[4px] border-border absolute w-full left-0 top-20 shadow-neo-lg z-40">
          <nav className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-black uppercase tracking-tight text-xl p-4 text-center border-[3px] border-border bg-card text-foreground hover:bg-neo-yellow dark:hover:bg-neo-blue hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-black uppercase text-xl p-4 text-center border-[3px] border-black bg-neo-green text-black hover:bg-neo-pink transition-colors mt-4"
            >
              Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
