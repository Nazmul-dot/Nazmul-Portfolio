import React from "react";
import { Award, Star, Trophy } from "lucide-react";
import { achievements, onlineActivities } from "@/data/resume";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Achievements = () => {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const leftRef = useScrollReveal<HTMLElement>();
  const rightRef = useScrollReveal<HTMLElement>();

  return (
    <section id="achievements" className="section-band">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="reveal section-heading">
          <p className="section-kicker">Problem Solving</p>
          <h2 className="section-title">Competitive programming practice with consistent contest results.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article ref={leftRef} className="reveal glass-card-hover p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-amber-400"
                style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.15)' }}
              >
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Contest Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <Award className="mt-0.5 h-5 w-5 flex-none text-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article ref={rightRef} className="reveal glass-card-hover p-6" style={{ transitionDelay: '0.15s' }}>
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-purple-400"
                style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.15)' }}
              >
                <Star className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Online Judge Activity</h3>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {onlineActivities.map((activity) => (
                <div key={activity.platform} className="glass-card p-4 hover:border-purple-500/20 transition-all duration-300">
                  <h4 className="font-bold text-purple-400">{activity.platform}</h4>
                  <p className="mt-1 text-sm font-medium text-foreground">{activity.username}</p>
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
