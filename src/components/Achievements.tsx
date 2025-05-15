
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Award, Star } from 'lucide-react';

interface Achievement {
  title: string;
  items: string[];
}

interface OnlineActivity {
  platform: string;
  username: string;
  details: string;
}

const achievements: Achievement[] = [
  {
    title: 'Programming Contests',
    items: [
      'Ranked 3rd in MBSTU Inter Department Programming Contest 2023',
      'Ranked 7th in MBSTU Inter Department Programming Contest 2021',
      'Ranked 12th in MBSTU Inter Department Programming Contest 2019'
    ]
  },
  {
    title: 'Extra Curricular Activities',
    items: [
      'Mentor at MBSTU CSE Victory Day Programe',
      'ICT Teacher at Faster Coaching Home (2022-2023)'
    ]
  }
];

const onlineActivities: OnlineActivity[] = [
  {
    platform: 'Codeforces',
    username: 'shakil94196',
    details: 'Max Rating: 1224 | Solved 700+ problems | Participated in 147 Contest'
  },
  {
    platform: 'Codechef',
    username: 'mob_shakil_101',
    details: 'Max Rating: 1307 | Solved 250+ problems | Participated in 52 Contest'
  },
  {
    platform: 'LeetCode',
    username: 'Nazmul-dot',
    details: 'Solved : 500+'
  },
  {
    platform: 'HackerRank',
    username: 'Nazmul-Haque',
    details: 'Solve : 310+'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Achievements</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="text-primary" size={20} />
              Academic & Extra Curricular
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <h4 className="font-medium text-lg">{achievement.title}</h4>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      {achievement.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Star className="text-primary" size={20} />
              Online Judge Activities
            </h3>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {onlineActivities.map((activity, index) => (
                    <div key={index} className="border rounded-md p-4">
                      <h4 className="font-medium text-primary">{activity.platform}</h4>
                      <p className="text-sm mb-1">Username: <span className="font-medium">{activity.username}</span></p>
                      <p className="text-sm text-muted-foreground">{activity.details}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center mt-6 text-muted-foreground italic">
                  1000+ problems were solved and Participated in more than 100+ online and onsite contests.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
