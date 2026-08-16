import React from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { focusAreas, highlights, profile } from "@/data/resume";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.14),transparent_34%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--secondary)/0.42))]">
      <div className="container mx-auto grid min-h-[calc(100vh-4rem)] items-center gap-10 px-4 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        <div className="animate-fade-in">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1 text-sm font-medium text-muted-foreground shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for software engineering opportunities
          </div>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {profile.name}
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
            {profile.role} building reliable product systems.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#projects">
                View Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Github className="h-4 w-4" />
              {profile.githubLabel}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg border bg-background shadow-2xl shadow-primary/10">
            <img
              src="/portfolio-hero.png"
              alt="Developer workspace with dashboards, APIs, and distributed system visuals"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {highlights.map((item) => (
              <div key={item.label} className="rounded-lg border bg-background/88 p-4 shadow-sm backdrop-blur">
                <p className="text-xl font-bold text-foreground">{item.value}</p>
                <p className="mt-1 text-xs font-medium text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="about" className="border-y bg-background/80">
        <div className="container mx-auto grid gap-6 px-4 py-8 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Engineering Focus</p>
            <h2 className="mt-2 text-2xl font-bold">Backend depth with practical full-stack delivery.</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area} className="rounded-lg border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground">
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
