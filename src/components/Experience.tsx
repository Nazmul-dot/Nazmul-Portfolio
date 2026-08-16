import React from "react";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";
import { experiences } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Experience = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-band">
      <div className="container mx-auto px-4">
        <div ref={ref} className="reveal section-heading">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Production work across health-tech, dashboards, and scalable services.</h2>
        </div>

        <div className="relative pl-12 md:pl-14 space-y-8">
          <div className="timeline-line" />
          {experiences.map((exp, idx) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ exp: typeof experiences[0]; idx: number }> = ({ exp, idx }) => {
  const cardRef = useScrollReveal<HTMLElement>();
  return (
    <article
      ref={cardRef}
      className="reveal relative glass-card-hover p-6 md:p-8"
      style={{ transitionDelay: `${idx * 0.15}s` }}
    >
      <div className="timeline-dot" style={{ top: '32px' }} />

      <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-cyan-400"
            style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.15)' }}
          >
            <BriefcaseBusiness className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">{exp.position}</h3>
          <p className="mt-1 font-semibold gradient-text">{exp.company}</p>
          <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
          <p className="mt-4 inline-flex rounded-full px-3 py-1 text-sm font-medium"
            style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)', color: '#67e8f9' }}
          >
            {exp.period}
          </p>
          <p className="mt-5 text-sm leading-6 text-muted-foreground">{exp.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.stack.map((tech) => (
              <span key={tech} className="stack-item">{tech}</span>
            ))}
          </div>
        </div>

        <ul className="space-y-3">
          {exp.responsibilities.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground md:text-base">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-cyan-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Experience;
