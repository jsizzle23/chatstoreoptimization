import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Bot,
  Search,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Smartphone
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Optimize Our Content | Powered by Leapwave AI',
  description: 'Discover how Chat Store Optimization uses Leapwave AI to create high-quality ASO, SEO, and GEO content that helps apps grow.',
  openGraph: {
    title: 'How We Optimize Our Content | Powered by Leapwave AI',
    description: 'Discover how Chat Store Optimization uses Leapwave AI to create high-quality optimization content.',
    type: 'article',
  },
};

const optimizationFeatures = [
  {
    icon: Smartphone,
    title: 'ASO-First Content Strategy',
    description: 'Every article is crafted with App Store Optimization in mind, helping app developers improve visibility and downloads.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Research',
    description: 'We leverage advanced AI to analyze app store trends, keyword opportunities, and competitor strategies.',
  },
  {
    icon: Search,
    title: 'GEO & SEO Integration',
    description: 'Our content is optimized for both traditional search engines and AI-powered discovery platforms like ChatGPT and Perplexity.',
  },
  {
    icon: Zap,
    title: 'Rapid Content Delivery',
    description: 'Our AI-assisted workflow allows us to publish comprehensive guides faster without sacrificing quality or accuracy.',
  },
];

const results = [
  { metric: '5K+', label: 'Monthly Readers' },
  { metric: '100+', label: 'Guides Published' },
  { metric: '4.8/5', label: 'Reader Rating' },
  { metric: '60%', label: 'Organic Growth' },
];

const processSteps = [
  {
    step: '01',
    title: 'Topic Discovery',
    description: 'AI analyzes app store trends and developer needs to identify high-value ASO, SEO, and GEO topics.',
  },
  {
    step: '02',
    title: 'Content Research',
    description: 'Deep research into each topic ensures accuracy and actionable insights for app developers.',
  },
  {
    step: '03',
    title: 'Multi-Platform Optimization',
    description: 'Content optimized for Google, app stores, and AI assistants to maximize discoverability.',
  },
  {
    step: '04',
    title: 'Quality Assurance',
    description: 'Human review ensures accuracy and that every guide delivers genuine value to developers.',
  },
];

export default function HowWeOptimizePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-background to-blue-600/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Leapwave AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              How We Create <span className="text-blue-600">World-Class ASO Content</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Behind every guide on Chat Store Optimization is a sophisticated AI-powered system
              that ensures you get the most accurate, actionable app optimization advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/articles">
                  Explore Our Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://www.leapwave.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn About Leapwave AI
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {results.map((result) => (
              <div key={result.label}>
                <p className="text-3xl md:text-4xl font-bold mb-2">{result.metric}</p>
                <p className="text-blue-100">{result.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Optimization Approach</h2>
            <p className="text-muted-foreground text-lg">
              We combine cutting-edge AI technology with human expertise to deliver
              content that ranks across all discovery platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optimizationFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                      <feature.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">Our Content Creation Process</h2>
            <p className="text-muted-foreground text-lg">
              A systematic approach that ensures every guide meets our high standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-background rounded-xl p-6 shadow-sm border h-full">
                  <span className="text-5xl font-bold text-blue-600/20">{step.step}</span>
                  <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leapwave Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-4">
                  <Bot className="h-4 w-4" />
                  <span>Technology Partner</span>
                </div>
                <h2 className="text-3xl font-bold font-serif mb-4">
                  Powered by Leapwave AI
                </h2>
                <p className="text-muted-foreground mb-6">
                  Leapwave AI is the technology platform behind our content optimization.
                  Their advanced AI systems help us research, create, and optimize ASO
                  content at scale while maintaining the quality app developers expect.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced ASO and SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>GEO optimization for AI discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time app store trend analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Continuous content optimization</span>
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a
                    href="https://www.leapwave.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Leapwave AI
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-600/20 rounded-2xl p-8">
                  <div className="bg-background rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-bold">Content Performance</p>
                        <p className="text-sm text-muted-foreground">Last 30 days</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Organic Traffic</span>
                          <span className="text-green-600">+52%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 bg-green-500 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>AI Discovery</span>
                          <span className="text-green-600">+68%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>App Store Rankings</span>
                          <span className="text-green-600">+35%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 bg-cyan-500 rounded-full w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Want Similar Results for Your App?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Leapwave AI can help you create optimized content that drives app downloads,
              improves rankings, and grows your mobile business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://www.leapwave.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started with Leapwave
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
