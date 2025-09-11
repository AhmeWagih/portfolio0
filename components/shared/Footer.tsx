'use client';

import Link from 'next/link';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useMediaQuery } from "react-responsive";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
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
            <p className="mt-2 text-sm text-muted-foreground">
              Building digital experiences that matter
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/AhmeWagih"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="GitHub">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahmedwagih02"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
              </Link>
            </div>
            <div>
              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="rounded-full bg-primary/80 hover:bg-primary/60 dark:bg-primary/60 dark:hover:bg-primary/40 transition-colors cursor-pointer"
              >
                <ChevronUp size={20} />
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {currentYear} Ahmed Wagih. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
