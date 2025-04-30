import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Inter } from 'next/font/google';
import Footer from '@/components/shared/Footer';
import { Toaster } from 'sonner';
import Navbar from '@/components/shared/Navbar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ahmed Wagih | Software Developer',
  description: 'Software developer and designer showcasing projects and skills',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio0-pearl.vercel.app/',
    title: 'Ahmed Wagih | Personal Portfolio',
    description:
      'Software developer and designer showcasing projects and skills',
    siteName: 'Ahmed Wagih',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
