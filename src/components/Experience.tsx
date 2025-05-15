
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Be Data Solutions',
    location: 'Dhaka, Bangladesh',
    position: 'Software Engineer (Intern)',
    period: 'Feb 2025 - Apr 2025',
    responsibilities: [
      'Developed a community-Job Seeking website features using Spring Boot, React.js, REST API, and SQL. We utilize AWS S3 for storage and SES for email services, along with Auth0 for passwordless email authentication.',
      'Developed a website for business management client safety using Spring Boot, React.js, REST API, and SQL. We utilize AWS S3 for storage and Gmail Api for email services, along with Auth0 for passwordless email authentication.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {exp.position}
                    </CardTitle>
                    <p className="text-primary font-medium">{exp.company} | {exp.location}</p>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
