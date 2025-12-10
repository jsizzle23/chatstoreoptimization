import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Smartphone, Rocket } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'All Articles', href: '/articles' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const popularGuides = [
    { name: 'ASO Fundamentals', href: '/articles' },
    { name: 'SEO Best Practices', href: '/articles' },
    { name: 'GEO for AI Search', href: '/articles' },
    { name: 'Keyword Research', href: '/articles' },
  ];

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white">
                <Smartphone className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold tracking-tight">
                <span className="font-serif">Chat Store Optimization</span>
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md">
              Master App Store Optimization with proven strategies.
              Boost your app visibility, downloads, and conversions.
            </p>

            <div className="space-y-3">
              <h3 className="font-medium">Get ASO tips in your inbox</h3>
              <div className="flex w-full max-w-md space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="max-w-sm"
                />
                <Button type="submit">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider">Popular Guides</h3>
            <ul className="space-y-2">
              {popularGuides.map((guide) => (
                <li key={guide.name}>
                  <Link
                    href={guide.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {guide.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Chat Store Optimization. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 md:mt-0 text-sm text-muted-foreground">
            <Rocket className="h-4 w-4" />
            <span>Optimize once, grow forever.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
