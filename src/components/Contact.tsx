import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/resume";

const contactLinks = [
  {
    label: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: profile.phone,
    href: `tel:${profile.phone}`,
    icon: Phone,
  },
  {
    label: "github.com/Nazmul-dot",
    href: profile.github,
    icon: Github,
  },
  {
    label: "linkedin.com/in/nazmul101",
    href: profile.linkedin,
    icon: Linkedin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-lg border bg-[linear-gradient(135deg,hsl(var(--primary)/0.1),hsl(var(--background))_45%,hsl(var(--secondary)))] p-6 shadow-sm md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">Let us build something reliable and useful.</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                I am interested in backend-heavy full-stack roles where I can work on APIs, dashboards, secure systems, and scalable product features.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={`mailto:${profile.email}`}>
                    <Send className="mr-2 h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button variant="outline" asChild size="lg">
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-lg border bg-background/80 p-4 shadow-sm transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="mb-3 h-5 w-5 text-primary" />
                    <span className="break-words text-sm font-medium">{link.label}</span>
                  </a>
                );
              })}
              <div className="rounded-lg border bg-background/80 p-4 shadow-sm sm:col-span-2">
                <MapPin className="mb-3 h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
