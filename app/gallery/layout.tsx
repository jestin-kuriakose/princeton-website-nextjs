import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Gallery',
  description: 'Browse our product gallery - Valves, Pipes, Fittings, Flanges, and Instrumentation products. View our range of industrial supplies.',
  keywords: ['product gallery', 'industrial products images', 'valves photos', 'pipes images', 'fittings gallery', 'Princeton GTC products'],
  openGraph: {
    title: 'Product Gallery | Princeton GTC',
    description: 'Browse our product gallery - Valves, Pipes, Fittings, Flanges, and Instrumentation products.',
    url: 'https://princetongtc.com/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
