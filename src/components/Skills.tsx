import React from "react";
import { Code2, Database, GitBranch, Layout, ServerCog, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const icons = [Code2, ServerCog, Layout, Database, GitBranch, Sparkles];

const Skills = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-band">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="reveal section-heading">
          <p className="section-kicker">Technical Skills</p>
          <h2 className="section-title">A practical stack for building secure, data-heavy web systems.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.category} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ category: typeof skillCategories[0]; index: number }> = ({ category, index }) => {
  const Icon = icons[index] ?? Code2;
  const cardRef = useScrollReveal<HTMLElement>();

  return (
    <article
      ref={cardRef}
      className="reveal glass-card-hover p-5 glow-border"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-cyan-400"
          style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.15)' }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.items.map((item) => (
          <span key={item} className="stack-item">{item}</span>
        ))}
      </div>
    </article>
  );
};

export default Skills;
