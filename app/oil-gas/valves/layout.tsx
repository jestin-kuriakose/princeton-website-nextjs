import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Valves',
  description: 'Complete range of industrial valves - Gate, Globe, Ball, Butterfly, Check Valves, DBB Valves, Strainers. Kuwait supplier.',
  keywords: ['valves Kuwait', 'gate valves', 'globe valves', 'ball valves', 'butterfly valves', 'DBB valves', 'strainers', 'industrial valves supplier'],
  openGraph: {
    title: 'Industrial Valves | Princeton GTC',
    description: 'Complete range of industrial valves - Gate, Globe, Ball, Butterfly, Check Valves, and Strainers.',
    url: 'https://princetongtc.com/oil-gas/valves',
  },
};

export default function ValvesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
