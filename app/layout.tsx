import type { Metadata } from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import { Providers } from '@/components/Providers';
import { DashboardLayout } from '@/components/DashboardLayout';
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
  title: 'MitiMighty | Admin Central',
  description: 'Elite Heritage Curators and Matrimonial Registry for Sindhi Families.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body suppressHydrationWarning className="bg-surface text-on-surface font-sans">
        <Providers>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </Providers>
      </body>
    </html>
  );
}
