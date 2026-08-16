import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient top border */}
      <div className="gradient-divider" />

      <div className="py-10" style={{ background: 'rgba(10,15,26,0.8)', backdropFilter: 'blur(12px)' }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Nazmul Haque Shakil
              </h3>
              <p className="text-sm text-muted-foreground">Full Stack Software Engineer</p>
            </div>
            <div className="flex items-center gap-3">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="footer-icon" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="gradient-divider mt-8" />
          <div className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Designed and developed by{" "}
              <span className="gradient-text font-medium">Nazmul</span>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
