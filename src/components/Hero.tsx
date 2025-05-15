
import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <div className="animate-fade-in">
            <p className="text-primary font-medium mb-3">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Nazmul Haque Shakil
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              Full Stack Developer (Spring Boot, Node.js, React.js)
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              Passionate software engineer specializing in creating robust web applications
              using modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-5 items-center">
              <a 
                href="https://github.com/Nazmul-dot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/nazmul101" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:nazmulhaq00545@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
              <span className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} />
                <span>Naranyanganj, Bangladesh</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
