import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oil & Gas Services',
  description: 'Comprehensive Oil & Gas solutions including Mechanical, Electrical, Instrumentation, and Valves. KOC & KNPC approved materials supplier in Kuwait.',
  keywords: ['oil gas services Kuwait', 'mechanical products', 'electrical supplies', 'instrumentation', 'industrial valves', 'pipes fittings flanges'],
  openGraph: {
    title: 'Oil & Gas Services | Princeton GTC',
    description: 'Comprehensive Oil & Gas solutions including Mechanical, Electrical, Instrumentation, and Valves.',
    url: 'https://princetongtc.com/oil-gas',
  },
};

export default function OilGasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
