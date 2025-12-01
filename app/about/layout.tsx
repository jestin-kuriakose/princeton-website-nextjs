import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Princeton International General Trading Company W.L.L. - A leading Oil & Gas supplier in Kuwait with KOC & KNPC approved materials. Our mission, values, and commitment to quality.',
  keywords: ['about Princeton GTC', 'oil gas company Kuwait', 'industrial supplier Kuwait', 'company history', 'mission statement'],
  openGraph: {
    title: 'About Us | Princeton GTC',
    description: 'Learn about Princeton International General Trading Company W.L.L. - A leading Oil & Gas supplier in Kuwait.',
    url: 'https://princetongtc.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
