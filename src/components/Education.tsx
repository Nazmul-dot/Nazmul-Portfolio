
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

const educationItems: EducationItem[] = [
  {
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'Mawlana Bhashani Science and Technology University',
    period: 'Jan 2019 - Jul 2024'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="max-w-2xl mx-auto">
          {educationItems.map((item, index) => (
            <Card key={index} className="overflow-hidden border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex justify-between items-start flex-wrap gap-2">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Book className="h-5 w-5 text-primary" />
                      {item.degree}
                    </CardTitle>
                    <p className="text-muted-foreground">{item.institution}</p>
                  </div>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                {/* You can add more details about education here if needed */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
