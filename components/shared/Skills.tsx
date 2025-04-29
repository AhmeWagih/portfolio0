"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/constants";

const SkillCategory = ({ 
  title, 
  skills, 
  index,
  inView 
}: { 
  title: string; 
  skills: string[]; 
  index: number;
  inView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-3 py-1 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
          <p className="mt-6 text-center text-muted-foreground max-w-2xl">
            I&apos;ve worked with a variety of technologies and tools throughout my journey.
            Here are some of the skills I&apos;ve acquired and refined over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillsList], index) => (
            <SkillCategory 
              key={category} 
              title={category} 
              skills={skillsList}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}