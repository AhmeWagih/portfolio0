'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { ModeToggle } from '../providers/theme-toggle';
import { navItems } from '@/constants';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background when scrolled
      setScrolled(window.scrollY > 50);
      // Get current scroll position
      const scrollPosition = window.scrollY + 100;

      // Find the section that's currently in view
      const sections = navItems
        .map((item) => {
          const element = document.querySelector(item.href);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              name: item.name.toLowerCase(),
              top: rect.top + window.scrollY,
              bottom: rect.bottom + window.scrollY,
            };
          }
          return null;
        })
        .filter(Boolean);

      // Find the active section
      for (const section of sections) {
        if (
          section &&
          scrollPosition >= section.top &&
          scrollPosition < section.bottom
        ) {
          setActiveSection(section.name.toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="font-bold text-2xl text-primary hover:text-primary/80 transition"
              >
                {isMobile ? (
                  <Image
                    src="/mobileLogo.png"
                    alt="Mobile Logo"
                    width={50}
                    height={40}
                  />
                ) : (
                  <Image src="/logo.png" alt="Logo" width={200} height={64} />
                )}
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-sm font-medium hover:text-primary relative transition-colors',
                        activeSection === item.name.toLowerCase()
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }}
                    >
                      {item.name}
                      {activeSection === item.name.toLowerCase() && (
                        <motion.span
                          layoutId="navIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
              <ModeToggle />
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center gap-1">
              <ModeToggle />
              <Button variant="secondary" className='rounded-lg bg-primary/5 p-2 hover:bg-primary/10 dark:bg-primary/40 dark:hover:bg-primary/30' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-background border-b shadow-lg"
            >
              <ul className="flex flex-col p-4 space-y-3">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block py-2 px-3 rounded-md hover:bg-secondary transition-colors',
                        activeSection === item.name.toLowerCase()
                          ? 'bg-secondary text-primary font-medium'
                          : 'text-foreground'
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({
                          behavior: 'smooth',
                        });
                        setIsOpen(false);
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
