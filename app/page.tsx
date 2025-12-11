import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock, Smartphone, Zap, Search, TrendingUp, Bot, CheckCircle2, Star, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Newsletter from '@/components/home/newsletter';

export const metadata: Metadata = {
  title: 'Chat Store Optimization | ASO, SEO & GEO Strategies',
  description: 'Master App Store Optimization with proven strategies. Boost your app visibility, downloads, and conversions with expert ASO, SEO, and GEO guides.',
  openGraph: {
    title: 'Chat Store Optimization | ASO, SEO & GEO Strategies',
    description: 'Master App Store Optimization with proven strategies. Boost your app visibility, downloads, and conversions.',
    type: 'website',
  },
};

const benefits = [
  {
    icon: Smartphone,
    title: 'App Store Optimization',
    description: 'Boost your app visibility on iOS and Android stores with proven ASO strategies.',
  },
  {
    icon: Search,
    title: 'Search Engine Optimization',
    description: 'Rank higher on Google and drive organic traffic with expert SEO techniques.',
  },
  {
    icon: Bot,
    title: 'Generative Engine Optimization',
    description: 'Get discovered by AI-powered search engines like ChatGPT, Perplexity, and Claude.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Analytics',
    description: 'Track your optimization efforts with data-driven insights and benchmarks.',
  },
];

const featuredGuides = [
  {
    id: 1,
    title: 'ASO Fundamentals: Your Complete Guide',
    excerpt: 'Master the essentials of App Store Optimization to increase downloads and visibility.',
    category: 'ASO',
    readTime: '12 min',
    slug: '/articles/aso-fundamentals-complete-guide',
    featured: true,
  },
  {
    id: 2,
    title: 'GEO: Optimizing for AI Search Engines',
    excerpt: 'Learn how to make your content discoverable by ChatGPT, Perplexity, and AI assistants.',
    category: 'GEO',
    readTime: '10 min',
    slug: '/articles/geo-optimizing-for-ai-search',
  },
  {
    id: 3,
    title: 'SEO Best Practices for 2025',
    excerpt: 'Stay ahead with the latest SEO strategies for ranking on Google and Bing.',
    category: 'SEO',
    readTime: '15 min',
    slug: '/articles/seo-best-practices-2025',
  },
  {
    id: 4,
    title: 'App Store Screenshot Optimization',
    excerpt: 'Design screenshots that convert browsers into downloaders with A/B testing.',
    category: 'ASO',
    readTime: '8 min',
    slug: '/articles/app-store-screenshot-optimization',
  },
];

const stats = [
  { value: '50K+', label: 'Apps Optimized' },
  { value: '300+', label: 'Expert Guides' },
  { value: '2M+', label: 'Downloads Driven' },
  { value: '4.8/5', label: 'Reader Rating' },
];

const whatYouLearn = [
  {
    title: "App Store Optimization",
    description: "Keyword research, metadata optimization, screenshot design, and review management to maximize app store rankings.",
  },
  {
    title: "Search Engine Optimization",
    description: "On-page SEO, technical optimization, link building, and content strategies for higher Google rankings.",
  },
  {
    title: "Generative Engine Optimization",
    description: "Structure your content for AI discovery, optimize for LLM citations, and appear in AI-generated answers.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-cyan-500/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>ASO + SEO + GEO Strategies</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight">
                Master <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Search</span> Optimization
                <br />
                Across <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Every</span> Platform
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                From app stores to search engines to AI assistants. Learn to optimize for where your audience discovers you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-base h-14 px-10 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5" asChild>
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
                    <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">4.8/5</span>
                  <span className="text-muted-foreground"> from 5,000+ readers</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="flex justify-center gap-4 mb-6">
                    <div className="p-4 bg-white/20 rounded-xl">
                      <Smartphone className="h-10 w-10" />
                    </div>
                    <div className="p-4 bg-white/20 rounded-xl">
                      <Search className="h-10 w-10" />
                    </div>
                    <div className="p-4 bg-white/20 rounded-xl">
                      <Bot className="h-10 w-10" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">ASO + SEO + GEO</h3>
                  <p className="text-white/80">Complete optimization coverage</p>
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
                <p className="text-3xl sm:text-4xl font-bold text-blue-600">{stat.value}</p>
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
              Three Pillars of Discovery
            </h2>
            <p className="text-muted-foreground text-lg">
              Master ASO, SEO, and GEO to ensure your content gets found everywhere people search.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 w-fit mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
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
                Start optimizing for better visibility today.
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
                        className={`text-xs ${guide.category === 'ASO' ? 'bg-blue-600' : guide.category === 'SEO' ? 'bg-green-600' : 'bg-purple-600'}`}
                      >
                        {guide.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <div className="mt-4 text-blue-600 text-sm font-medium flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
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
              Comprehensive strategies for every type of search optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {whatYouLearn.map((item, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 w-fit mb-4">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
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
      <section className="py-16 sm:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-display mb-6">
              Ready to Get Discovered?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of marketers mastering ASO, SEO, and GEO to drive organic growth.
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
                Expert Strategies
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                Actionable Tips
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
