import type { Metadata } from 'next';
import { Bebas_Neue, DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-accent',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SLICE — Premium Wood-Fired Pizza Cafe | Bangalore',
  description:
    'SLICE is Bangalore\'s underground wood-fired pizza cafe. Handcrafted Neapolitan pizzas, signature craft drinks, and an atmosphere unlike any other. Order online or visit us in Koramangala.',
  keywords: ['pizza', 'wood fired pizza', 'Bangalore pizza', 'craft pizza', 'Koramangala', 'SLICE cafe'],
  openGraph: {
    title: 'SLICE — Premium Wood-Fired Pizza Cafe',
    description: 'Six signature pizzas. Three craft drinks. One obsession.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable} ${playfairDisplay.variable}`}>
      <body className="font-body bg-[#0a0804] text-[#f0e8d5] antialiased">
        {children}
      </body>
    </html>
  );
}
