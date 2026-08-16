import React from "react";
import { BookOpen, MapPin } from "lucide-react";
import { educationItems } from "@/data/resume";

const Education = () => {
  return (
    <section id="education" className="section-band">
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Academic foundation in computer science and engineering.</h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {educationItems.map((item) => (
            <article key={item.degree} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">{item.degree}</h3>
              <p className="mt-2 font-medium text-primary">{item.institution}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span>{item.period}</span>
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {item.location}
                </span>
              </div>
              <p className="mt-5 rounded-lg bg-secondary/50 px-4 py-3 text-sm font-semibold">{item.result}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
