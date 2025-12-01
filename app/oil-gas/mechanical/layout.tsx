import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mechanical Products',
  description: 'High-quality mechanical products - Pipes, Tubes, Flanges, Fittings. Carbon Steel, Stainless Steel, Alloy Steel. KOC & KNPC approved manufacturers.',
  keywords: ['pipes Kuwait', 'flanges supplier', 'pipe fittings', 'seamless pipes', 'welded pipes', 'carbon steel', 'stainless steel', 'mechanical products'],
  openGraph: {
    title: 'Mechanical Products | Princeton GTC',
    description: 'High-quality mechanical products - Pipes, Tubes, Flanges, Fittings from KOC & KNPC approved manufacturers.',
    url: 'https://princetongtc.com/oil-gas/mechanical',
  },
};

export default function MechanicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
