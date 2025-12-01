import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Electrical Products',
  description: 'Industrial electrical products - Cables, Wires, Explosion Proof Fittings, Conduit Pipes, Cable Glands, Earthing & Lightning Protection.',
  keywords: ['electrical supplies Kuwait', 'cables wires', 'explosion proof fittings', 'conduit pipes', 'cable glands', 'earthing protection', 'industrial electrical'],
  openGraph: {
    title: 'Electrical Products | Princeton GTC',
    description: 'Industrial electrical products - Cables, Wires, Explosion Proof Fittings, and more.',
    url: 'https://princetongtc.com/oil-gas/electrical',
  },
};

export default function ElectricalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
