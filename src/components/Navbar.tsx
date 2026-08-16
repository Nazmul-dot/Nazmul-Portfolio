import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 glass-nav transition-all duration-500 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a
          href="#home"
          className="flex items-center gap-3 text-sm font-bold text-foreground group"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl font-heading text-sm font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
          >
            NS
          </span>
          <span className="hidden sm:inline text-foreground group-hover:text-white transition-colors">
            Nazmul Haque Shakil
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="navlink">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-muted-foreground hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="glass-nav border-t border-border/30 lg:hidden animate-fade-in">
          <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="navlink py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
