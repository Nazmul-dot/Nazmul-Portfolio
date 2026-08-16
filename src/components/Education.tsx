import React from "react";
import { BookOpen, MapPin } from "lucide-react";
import { educationItems } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Education = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-band">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="reveal section-heading">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic foundation in computer science and engineering.</h2>
        </div>

        <div className="relative pl-12 md:pl-14 space-y-6">
          <div className="timeline-line" />

          {educationItems.map((item, idx) => (
            <EducationCard key={item.degree} item={item} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard: React.FC<{ item: typeof educationItems[0]; idx: number }> = ({ item, idx }) => {
  const cardRef = useScrollReveal<HTMLElement>();
  return (
    <article
      ref={cardRef}
      className="reveal relative glass-card-hover p-6"
      style={{ transitionDelay: `${idx * 0.15}s` }}
    >
      <div className="timeline-dot" style={{ top: '32px' }} />

      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl text-cyan-400"
        style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.15)' }}
      >
        <BookOpen className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{item.degree}</h3>
      <p className="mt-2 font-medium gradient-text">{item.institution}</p>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
        <span>{item.period}</span>
        <span className="inline-flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          {item.location}
        </span>
      </div>
      <p className="mt-5 rounded-xl px-4 py-3 text-sm font-semibold text-cyan-300"
        style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.15)' }}
      >
        {item.result}
      </p>
    </article>
  );
};

export default Education;
