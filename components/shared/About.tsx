"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <motion.div 
            className="md:col-span-5 relative aspect-square max-w-md mx-auto"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl border-8 border-background shadow-xl">
              {/* <Image
                src="/assets/about.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              /> */}
              <img src="/assets/about.jpeg" alt="" />
            </div>
            <div className="absolute -bottom-6 -right-6 h-full w-full rounded-xl border-8 border-primary bg-primary/10 -z-10"></div>
          </motion.div>

          <motion.div 
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold">
              Hello! I&apos;m <span className="text-primary">Ahmed Wagih</span>, a passionate developer based in Location.
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a dedicated software developer with a passion for creating clean, efficient, and 
                user-friendly applications. With several years of experience in web development, 
                I specialize in modern JavaScript frameworks like React and Next.js.
              </p>
              
              <p>
                My journey into coding began during my university years, and since then, 
                I&apos;ve been continuously learning and adapting to new technologies. I believe that 
                great software is not just about writing code, but also about solving real problems 
                for real people.
              </p>
              
              <p>
                When I&apos;m not coding, you can find me exploring nature trails, reading tech blogs, 
                or experimenting with new cooking recipes. I&apos;m always open to new opportunities 
                and collaborations.
              </p>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}