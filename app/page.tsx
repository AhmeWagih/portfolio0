import About from '@/components/shared/About';
import Contact from '@/components/shared/Contact';
import Hero from '@/components/shared/Hero';
import Projects from '@/components/shared/Projects';
import Skills from '@/components/shared/Skills';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-6 lg:px-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
