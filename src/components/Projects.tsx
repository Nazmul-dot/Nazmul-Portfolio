import React from "react";
import { ExternalLink, Github, Layers3 } from "lucide-react";
import { projects } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Projects = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="section-band">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="reveal section-heading">
          <p className="section-kicker">Selected Projects</p>
          <h2 className="section-title">Full-stack applications with authentication, data modeling, and business workflows.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: typeof projects[0]; idx: number }> = ({ project, idx }) => {
  const cardRef = useScrollReveal<HTMLElement>();
  return (
    <article
      ref={cardRef}
      className="reveal group relative glass-card-hover flex h-full flex-col p-6 glow-border"
      style={{ transitionDelay: `${idx * 0.15}s` }}
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-cyan-400"
          style={{ background: 'rgba(6,182,212,0.1)', border: '1px solid rgba(6,182,212,0.15)' }}
        >
          <Layers3 className="h-6 w-6" />
        </div>
        <span className="rounded-full px-3 py-1 text-xs font-semibold"
          style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#c4b5fd' }}
        >
          {project.period}
        </span>
      </div>

      <h3 className="text-2xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
        {project.title}
      </h3>
      <p className="mt-3 flex-1 leading-7 text-muted-foreground">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="stack-item">{tech}</span>
        ))}
      </div>

      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline-glow mt-7 w-fit inline-flex items-center gap-2 text-sm !py-2 !px-4"
      >
        <Github className="h-4 w-4" />
        GitHub
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </article>
  );
};

export default Projects;
