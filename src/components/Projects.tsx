
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  githubUrl: string;
  period: string;
  description: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: 'Save Your Contact',
    githubUrl: 'https://github.com/Nazmul-dot/save-your-contact',
    period: 'Jul 2024 - Oct 2024',
    description: 'A Cloud contact base application to store personal contact.',
    technologies: ['Spring Boot', 'React.js', 'SQL', 'Spring Security', 'JWT']
  },
  {
    title: 'Prantik Bazar',
    githubUrl: 'https://github.com/Nazmul-dot/prantik-bazar',
    period: 'Nov 2023 - Apr 2024',
    description: 'A E-Commerce application to buy products.',
    technologies: ['Spring Boot', 'React.js', 'SQL', 'Spring Security', 'JWT']
  },
  {
    title: 'U-Share',
    githubUrl: 'https://github.com/Nazmul-dot/u-share',
    period: 'Apr 2021 - Jun 2021',
    description: 'A Moment sharing application to share special moment.',
    technologies: ['Javascript', 'React.js', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Personal Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="project-card flex flex-col h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">
                    <Code className="h-5 w-5 text-primary inline mr-2" />
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-sm text-muted-foreground">{project.period}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Github size={16} />
                  <span>View on GitHub</span>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
