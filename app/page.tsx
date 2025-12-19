import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Leaf, Zap, Recycle, Sun, Droplets, CheckCircle2, Star, Sprout, TreeDeciduous } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Newsletter from '@/components/home/newsletter';

export const metadata: Metadata = {
  title: 'Green Rewards Hub | Sustainable Living & Eco-Friendly Product Guide',
  description: 'Your guide to sustainable living and eco-friendly products. Expert reviews, tips, and strategies for a greener lifestyle. Discover zero waste living, renewable energy, and green product recommendations.',
  openGraph: {
    title: 'Green Rewards Hub | Sustainable Living & Eco-Friendly Product Guide',
    description: 'Your guide to sustainable living and eco-friendly products. Expert reviews, tips, and strategies for a greener lifestyle.',
    type: 'website',
  },
};

const benefits = [
  {
    icon: Leaf,
    title: 'Green Products',
    description: 'In-depth reviews and comparisons of eco-friendly products that actually work.',
  },
  {
    icon: Recycle,
    title: 'Zero Waste Living',
    description: 'Practical guides to reduce waste and live more sustainably every day.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Everything you need to know about solar, wind, and clean energy solutions.',
  },
  {
    icon: Droplets,
    title: 'Sustainable Services',
    description: 'Find eco-conscious services from green banking to carbon offsets.',
  },
];

const featuredGuides = [
  {
    id: 1,
    title: 'Zero Waste Living: Complete Beginner Guide',
    excerpt: 'Start your zero waste journey with practical tips that actually fit your lifestyle.',
    category: 'Zero Waste',
    readTime: '15 min',
    slug: '/articles/zero-waste-living-beginner-guide',
    featured: true,
  },
  {
    id: 2,
    title: 'Best Sustainable Products of 2025',
    excerpt: 'Our top picks for eco-friendly products across home, personal care, and more.',
    category: 'Products',
    readTime: '12 min',
    slug: '/articles/best-sustainable-products-2025',
  },
  {
    id: 3,
    title: 'Home Solar: Is It Worth It?',
    excerpt: 'A complete breakdown of costs, savings, and environmental benefits of going solar.',
    category: 'Energy',
    readTime: '18 min',
    slug: '/articles/home-solar-worth-it',
  },
  {
    id: 4,
    title: 'Eco-Friendly Home Cleaning Guide',
    excerpt: 'Ditch toxic chemicals with these natural, effective cleaning solutions.',
    category: 'Home',
    readTime: '10 min',
    slug: '/articles/eco-friendly-home-cleaning',
  },
];

const stats = [
  { value: '15K+', label: 'Green Enthusiasts' },
  { value: '250+', label: 'Product Reviews' },
  { value: '100+', label: 'Sustainability Guides' },
  { value: '4.9/5', label: 'Reader Rating' },
];

const whatYouLearn = [
  {
    title: "Sustainable Product Reviews",
    description: "Unbiased reviews of eco-friendly products so you can make informed choices that help the planet.",
  },
  {
    title: "Green Living Strategies",
    description: "Practical tips for reducing your carbon footprint without sacrificing convenience or comfort.",
  },
  {
    title: "Eco-Friendly Services",
    description: "Discover green alternatives for banking, energy, transportation, and everyday services.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-emerald-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Sustainable Living Made Easy</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight">
                Discover <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Green</span> Products
                <br />
                & <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">Eco</span>-Friendly Living
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Expert guides on sustainable products, green services, and practical tips for living an eco-friendly lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base h-14 px-10 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-200 hover:-translate-y-0.5" asChild>
                  <Link href="/articles">
                    Start Learning Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base h-12 px-8" asChild>
                  <Link href="#guides">
                    Browse Guides
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4.9/5</span>
                  <span className="text-muted-foreground"> from 2,000+ readers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-xl">
                      <Leaf className="h-10 w-10" />
                    </div>
                    <div className="p-4 bg-white/20 rounded-xl">
                      <Recycle className="h-10 w-10" />
                    </div>
                    <div className="p-4 bg-white/20 rounded-xl">
                      <TreeDeciduous className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Green + Sustainable</h3>
                  <p className="text-white/80">Live better, impact less</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              Your Guide to Green Living
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to make sustainable choices and reduce your environmental impact.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-emerald-500/10 w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section id="guides" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display mb-2">
                Featured Guides
              </h2>
              <p className="text-muted-foreground">
                Start your sustainable journey today.
              </p>
            </div>
            <Button variant="outline" asChild>
              <Link href="/articles">
                View All Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGuides.map((guide) => (
              <Link key={guide.id} href={guide.slug} className="group">
                <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant={guide.featured ? "default" : "secondary"}
                        className={`text-xs ${guide.category === 'Zero Waste' ? 'bg-green-600' : guide.category === 'Products' ? 'bg-emerald-600' : guide.category === 'Energy' ? 'bg-teal-600' : 'bg-lime-600'}`}
                      >
                        {guide.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <div className="mt-4 text-emerald-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Guide
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-4">
              What You&apos;ll Learn
            </h2>
            <p className="text-muted-foreground text-lg">
              Practical knowledge for living sustainably without the overwhelm.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatYouLearn.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-emerald-500/10 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-emerald-600 to-teal-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              Ready to Live Greener?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands making sustainable choices every day with our expert guides and reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base" asChild>
                <Link href="/articles">
                  Start Learning Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                100% Free Content
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Expert Reviews
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Practical Tips
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  );
}
