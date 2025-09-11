'use client';

import { Calendar, Target } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { activities } from '@/constants';

export default function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20" ref={ref}>
      <div className="container mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Activities</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            Competitive programming and continuous learning through algorithmic challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 text-primary">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      <Calendar className="w-3 h-3 mr-1" />
                      {activity.status}
                    </Badge>
                  </div>
                  <div className="flex gap-4 justify-between">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      {activity.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-muted-foreground">
                      {activity.platform}
                      {activity.category && (
                        <>
                          {' '}
                          • {activity.category}
                        </>
                      )}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    {activity.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="text-center p-3 bg-muted/30 rounded-lg"
                      >
                        <div className="text-2xl font-bold text-primary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Achievements */}
                  <div className="space-y-3 mb-4">
                    {activity.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {activity.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/5 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
