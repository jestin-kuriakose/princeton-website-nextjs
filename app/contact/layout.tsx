import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Princeton GTC for Oil & Gas supplies in Kuwait. Request a quote, product information, or partnership opportunities. Email: sales@princetongtc.com',
  keywords: ['contact Princeton GTC', 'oil gas supplier contact', 'Kuwait supplier contact', 'request quote', 'industrial supplies inquiry'],
  openGraph: {
    title: 'Contact Us | Princeton GTC',
    description: 'Contact Princeton GTC for Oil & Gas supplies in Kuwait. Request a quote or product information.',
    url: 'https://princetongtc.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
