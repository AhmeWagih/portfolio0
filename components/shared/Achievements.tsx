'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { achievements } from '@/constants';

export default function Achievements() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            Recognition and accomplishments that showcase innovation and
            technical excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${achievement.color} border-border/50`}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 ${achievement.iconColor}`}
                    >
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {achievement.date}
                    </Badge>
                  </div>
                  <div className="flex gap-4 justify-between">
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-muted-foreground">
                      {achievement.organization}
                    </CardDescription>
                  </div>
                  <CardDescription className="text-sm font-medium text-muted-foreground">
                    {achievement.grade}
                    {achievement.link && achievement.subtitle && ' • '}
                    {achievement.link && (
                      <Link
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                      >
                        {achievement.subtitle}
                      </Link>
                    )}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    {achievement.accomplishments.map((accomplishment, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2" />
                        <p className="text-sm text-foreground leading-relaxed">
                          {accomplishment}
                        </p>
                      </div>
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
