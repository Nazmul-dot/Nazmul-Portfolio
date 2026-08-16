import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const contactLinks = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: profile.phone, href: `tel:${profile.phone}`, icon: Phone },
  { label: "github.com/Nazmul-dot", href: profile.github, icon: Github },
  { label: "linkedin.com/in/nazmul101", href: profile.linkedin, icon: Linkedin },
];

const Contact = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="section-band">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className="reveal relative overflow-hidden rounded-2xl p-6 md:p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(6,182,212,0.08), rgba(15,23,42,0.8) 45%, rgba(139,92,246,0.06))',
            border: '1px solid rgba(148,163,184,0.08)',
            backdropFilter: 'blur(16px)',
          }}
        >
          {/* Background glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)' }}
          />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-20 pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)' }}
          />

          <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-kicker">Contact</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl text-foreground">Let's build something reliable and useful.</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                I'm interested in backend-heavy full-stack roles where I can work on APIs, dashboards, secure systems, and scalable product features.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-gradient inline-flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Email Me
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-outline-glow inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
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
                    className="glass-card p-4 transition-all duration-300 hover:border-cyan-500/25 hover:shadow-[0_0_16px_rgba(6,182,212,0.08)]"
                  >
                    <Icon className="mb-3 h-5 w-5 text-cyan-400" />
                    <span className="break-words text-sm font-medium text-foreground">{link.label}</span>
                  </a>
                );
              })}
              <div className="glass-card p-4 sm:col-span-2">
                <MapPin className="mb-3 h-5 w-5 text-cyan-400" />
                <span className="text-sm font-medium text-foreground">{profile.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
