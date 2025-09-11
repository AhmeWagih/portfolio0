'use client';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { experiences } from '@/constants';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Converts URLs in plain text to clickable anchor elements
function linkifyText (text: string) {
  const urlRegex = /(https?:\/\/[^\s)]+)(\)?)/g;
  const parts: Array<string | ReactNode> = [];
  let lastIndex = 0;
  for (let match = urlRegex.exec(text); match !== null; match = urlRegex.exec(text)) {
    const [fullMatch, url] = match;
    const start = match.index;
    const end = start + fullMatch.length;

    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    parts.push(
      <a
        key={`${url}-${start}`}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-4 hover:text-primary/80"
      >
        {url}
      </a>
    );

    lastIndex = end;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default function Experience () {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Professional Experience
        </h2>
        <div className="h-1 w-20 bg-primary rounded"></div>
        <p className="mt-6 text-center text-muted-foreground max-w-2xl">
          A journey through my career milestones and achievements
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.8 }}
          style={{ transformOrigin: 'top' }}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
              animate={
                inView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: index % 2 === 0 ? 60 : -60 }
              }
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-primary shadow-lg hidden md:block"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              />

              <Card className="md:ml-16 hover:shadow-lg transition-all duration-300 group border-border/50 hover:border-primary/20">
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Image
                          src={exp.logo}
                          alt={exp.title}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                        <h3 className="text-xl font-semibold text-card-foreground transition-colors">
                          {exp.title}
                        </h3>
                        {exp.type === 'current' && (
                          <Badge
                            variant="secondary"
                            className="bg-accent/10 text-accent border-accent/20"
                          >
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {exp.metrics && (
                      <div className="flex gap-4">
                        {exp.metrics.map((metric, idx) => (
                          <div key={idx} className="text-center">
                            <div className="flex items-center justify-center gap-1 text-primary mb-1">
                              {/* {metric.icon} */}
                              <span className="font-semibold">
                                {metric.value}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-card-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {linkifyText(achievement)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover:bg-primary/5"
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
};

