
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/resume";

const Footer = () => {
  return (
    <footer className="border-t bg-secondary/60 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <h3 className="text-lg font-bold">Nazmul Haque Shakil</h3>
            <p className="text-muted-foreground">Full Stack Software Engineer</p>
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
        
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Designed and developed by Nazmul.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
