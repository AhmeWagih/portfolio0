'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { words } from '@/constants';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingDelay = 100;
  const deletingDelay = 50;
  const pauseDelay = 1500;

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentWord = words[currentWordIndex];

        if (isDeleting) {
          setTypedText(currentWord.substring(0, typedText.length - 1));
        } else {
          setTypedText(currentWord.substring(0, typedText.length + 1));
        }

        if (!isDeleting && typedText === currentWord) {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), pauseDelay);
        } else if (isDeleting && typedText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      },
      isDeleting ? deletingDelay : typingDelay
    );

    return () => clearTimeout(timeout);
  }, [typedText, currentWordIndex, isDeleting, words]);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20"
      ref={ref}
    >
      <motion.div
        className="text-center space-y-6 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
          Hi, I&apos;m <span className="text-primary">Ahmed Wagih</span>
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground flex flex-col md:flex-row justify-center items-center gap-2">
          <span>I&apos;m a</span>
          <span className="text-primary min-h-[2.5rem] inline-flex items-center">
            {typedText}
            <span className="animate-blink ml-1">|</span>
          </span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-6xl mx-auto">
          I&#39;m a front-end web developer specializing in building (and
          occasionally designing) exceptional digital experiences. Currently.
          I&#39;m focused on building front-end web applications while learning
          back-end technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button
            size="lg"
            onClick={scrollToProjects}
            className="cursor-pointer"
          >
            View My Work
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full"
          onClick={() => {
            document.querySelector('#about')?.scrollIntoView({
              behavior: 'smooth',
            });
          }}
        >
          <ChevronDown size={24} />
        </Button>
      </motion.div>
    </section>
  );
}
