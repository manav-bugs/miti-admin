import type { Metadata } from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'MitiMighty | Heritage Curator',
  description: 'Elite Heritage Curators and Matrimonial Registry for Sindhi Families.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body suppressHydrationWarning className="bg-surface text-on-surface flex min-h-screen font-sans">
        <Sidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <TopNav />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
