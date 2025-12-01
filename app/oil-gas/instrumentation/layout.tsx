import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Instrumentation Products',
  description: 'Precision instrumentation products - Tube Fittings, Compression Fittings, Fasteners, Valves & Manifolds for industrial systems.',
  keywords: ['instrumentation Kuwait', 'tube fittings', 'compression fittings', 'fasteners', 'stud bolts', 'instrument valves', 'manifolds'],
  openGraph: {
    title: 'Instrumentation Products | Princeton GTC',
    description: 'Precision instrumentation products - Tube Fittings, Fasteners, Valves & Manifolds.',
    url: 'https://princetongtc.com/oil-gas/instrumentation',
  },
};

export default function InstrumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
