import React from "react";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/resume";

const Experience = () => {
  return (
    <section id="experience" className="section-band">
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Production work across health-tech, dashboards, and scalable services.</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <article key={`${exp.company}-${exp.period}`} className="rounded-lg border bg-card p-5 shadow-sm md:p-6">
              <div className="grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <h3 className="text-2xl font-bold">{exp.position}</h3>
                  <p className="mt-1 font-semibold text-primary">{exp.company}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                  <p className="mt-4 inline-flex rounded-full bg-secondary px-3 py-1 text-sm font-medium">
                    {exp.period}
                  </p>
                  <p className="mt-5 text-sm leading-6 text-muted-foreground">{exp.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground md:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
