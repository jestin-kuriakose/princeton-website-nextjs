import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Princeton GTC team. Explore career opportunities in the Oil & Gas industry in Kuwait. Build your career with a leading industrial supplier.',
  keywords: ['careers Princeton GTC', 'jobs Kuwait', 'oil gas jobs', 'industrial jobs Kuwait', 'Princeton GTC employment'],
  openGraph: {
    title: 'Careers | Princeton GTC',
    description: 'Join Princeton GTC team. Explore career opportunities in the Oil & Gas industry in Kuwait.',
    url: 'https://princetongtc.com/careers',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
