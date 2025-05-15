
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SkillCategory {
  category: string;
  items: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    items: ['C++', 'Java', 'Javascript']
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Redux', 'Styled Components']
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Express.js', 'REST API', 'Postman', 'Swagger', 'Spring Security', 'JWT', 'OAuth', 'Redis', 'Kafka']
  },
  {
    category: 'Databases',
    items: ['SQL', 'MongoDB']
  },
  {
    category: 'Proficient in',
    items: ['OOP', 'Data Structure and Algorithms', 'ACID', 'SOLID', 'Design Patterns', 'Git', 'Docker']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-primary">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span key={i} className="stack-item">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
