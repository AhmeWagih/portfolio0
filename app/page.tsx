import About from '@/components/shared/About';
import Achievements from '@/components/shared/Achievements';
import Activities from '@/components/shared/Activities';
import Contact from '@/components/shared/Contact';
import Experience from '@/components/shared/Experience';
import Hero from '@/components/shared/Hero';
import Projects from '@/components/shared/Projects';
import Skills from '@/components/shared/Skills';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Achievements />
      <Activities />
      <Projects />
      <Contact />
    </div>
  );
}
