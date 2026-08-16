import React from "react";
import { Award, Star, Trophy } from "lucide-react";
import { achievements, onlineActivities } from "@/data/resume";

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-heading">
          <p className="section-kicker">Problem Solving</p>
          <h2 className="section-title">Competitive programming practice with consistent contest results.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Contest Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <Award className="mt-0.5 h-5 w-5 flex-none text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Star className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Online Judge Activity</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {onlineActivities.map((activity) => (
                <div key={activity.platform} className="rounded-lg border bg-secondary/40 p-4">
                  <h4 className="font-bold text-primary">{activity.platform}</h4>
                  <p className="mt-1 text-sm font-medium">{activity.username}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{activity.details}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
