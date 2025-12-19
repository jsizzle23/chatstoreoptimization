import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Green Rewards Hub',
  description: 'Get in touch with Green Rewards Hub. We\'d love to hear from you about sustainable living, eco-friendly products, or partnership opportunities.',
  openGraph: {
    title: 'Contact Us | Green Rewards Hub',
    description: 'Get in touch with Green Rewards Hub. We\'d love to hear from you about sustainable living, eco-friendly products, or partnership opportunities.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
