import React from "react";
import { Code2, Database, GitBranch, Layout, ServerCog, Sparkles } from "lucide-react";
import { skillCategories } from "@/data/resume";

const icons = [Code2, ServerCog, Layout, Database, GitBranch, Sparkles];

const Skills = () => {
  return (
    <section id="skills" className="section-band">
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <p className="section-kicker">Technical Skills</p>
          <h2 className="section-title">A practical stack for building secure, data-heavy web systems.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = icons[index] ?? Code2;

            return (
              <article key={category.category} className="rounded-lg border bg-card p-5 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
