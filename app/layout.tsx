import './globals.css';
import type { Metadata } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'Chat Store Optimization - ASO, SEO & GEO Strategies',
  description: 'Master App Store Optimization (ASO), Search Engine Optimization (SEO), and Generative Engine Optimization (GEO) with proven strategies for maximum visibility.',
  keywords: 'ASO, SEO, GEO, app store optimization, search engine optimization, generative engine optimization, AI search, ChatGPT optimization, Perplexity, app marketing, organic growth',
  authors: [{ name: 'Chat Store Optimization' }],
  creator: 'Chat Store Optimization',
  publisher: 'Chat Store Optimization',
  metadataBase: new URL('https://chatstoreoptimization.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chat Store Optimization - ASO, SEO & GEO Strategies',
    description: 'Master ASO, SEO, and GEO with proven strategies for maximum visibility across app stores, search engines, and AI assistants.',
    url: 'https://chatstoreoptimization.com',
    siteName: 'Chat Store Optimization',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chat Store Optimization',
    description: 'Master ASO, SEO, and GEO for maximum visibility across all discovery platforms.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Chat Store Optimization",
              "url": "https://chatstoreoptimization.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://chatstoreoptimization.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${merriweather.variable} min-h-screen flex flex-col`}>
        <ThemeProvider>
          <div className="flex-1">
            <Header />
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
