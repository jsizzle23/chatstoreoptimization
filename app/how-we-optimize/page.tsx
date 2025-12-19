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
  BarChart3,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Leaf
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Optimize Our Content | Powered by Leapwave AI',
  description: 'Discover how Green Rewards Hub uses Leapwave AI to create high-quality sustainable living and eco-friendly product content.',
  openGraph: {
    title: 'How We Optimize Our Content | Powered by Leapwave AI',
    description: 'Discover how Green Rewards Hub uses Leapwave AI to create expert sustainability content.',
    type: 'article',
  },
};

const optimizationFeatures = [
  {
    icon: Leaf,
    title: 'Sustainability-First Content',
    description: 'Every article is crafted with environmental impact in mind, helping readers make informed eco-friendly choices.',
  },
  {
    icon: Bot,
    title: 'AI-Powered Research',
    description: 'We leverage advanced AI to analyze sustainability trends, product reviews, and environmental best practices.',
  },
  {
    icon: Search,
    title: 'SEO-Optimized Delivery',
    description: 'Our content is optimized for search engines while maintaining the depth eco-conscious readers expect.',
  },
  {
    icon: Zap,
    title: 'Rapid Content Delivery',
    description: 'Our AI-assisted workflow allows us to publish comprehensive guides faster without sacrificing quality or accuracy.',
  },
];

const results = [
  { metric: '12K+', label: 'Monthly Readers' },
  { metric: '180+', label: 'Guides Published' },
  { metric: '4.8/5', label: 'Reader Rating' },
  { metric: '55%', label: 'Organic Growth' },
];

const processSteps = [
  {
    step: '01',
    title: 'Topic Discovery',
    description: 'AI analyzes sustainability trends and consumer needs to identify high-value eco-friendly topics.',
  },
  {
    step: '02',
    title: 'Content Research',
    description: 'Deep research ensures accuracy and actionable insights for sustainable living enthusiasts.',
  },
  {
    step: '03',
    title: 'SEO Optimization',
    description: 'Content optimized for search visibility while maintaining environmental credibility.',
  },
  {
    step: '04',
    title: 'Quality Assurance',
    description: 'Expert review ensures accuracy and that every guide delivers genuine value.',
  },
];

export default function HowWeOptimizePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-background to-green-600/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Powered by Leapwave AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              How We Create <span className="text-green-600">Sustainable Content</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Behind every guide on Green Rewards Hub is a sophisticated AI-powered system
              that ensures you get the most accurate, actionable sustainability advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
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
                  Explore AI Content Optimization
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {results.map((result) => (
              <div key={result.label}>
                <p className="text-3xl md:text-4xl font-bold mb-2">{result.metric}</p>
                <p className="text-green-100">{result.label}</p>
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
              We combine cutting-edge AI technology with sustainability expertise to deliver
              content that ranks and resonates with eco-conscious readers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {optimizationFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30">
                      <feature.icon className="h-6 w-6 text-green-600" />
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
                  <span className="text-5xl font-bold text-green-600/20">{step.step}</span>
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
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-4">
                  <Bot className="h-4 w-4" />
                  <span>Technology Partner</span>
                </div>
                <h2 className="text-3xl font-bold font-serif mb-4">
                  Powered by Leapwave AI
                </h2>
                <p className="text-muted-foreground mb-6">
                  Leapwave AI is the technology platform behind our content optimization.
                  Their advanced AI systems help us research, create, and optimize sustainability
                  content at scale while maintaining the quality eco-conscious readers expect.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Advanced SEO optimization algorithms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>AI-powered sustainability research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Real-time eco-trend analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Continuous content optimization</span>
                  </li>
                </ul>
                <Button className="bg-green-600 hover:bg-green-700" asChild>
                  <a
                    href="https://www.leapwave.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Try AI-Powered SEO Optimization
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-green-600/20 rounded-2xl p-8">
                  <div className="bg-background rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                        <BarChart3 className="h-6 w-6 text-green-600" />
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
                          <span className="text-green-600">+51%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 bg-green-500 rounded-full w-4/5"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Reader Engagement</span>
                          <span className="text-green-600">+42%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 bg-emerald-500 rounded-full w-3/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>SEO Rankings</span>
                          <span className="text-green-600">+36%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full">
                          <div className="h-2 bg-teal-500 rounded-full w-2/3"></div>
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
      <section className="py-16 md:py-24 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Want Similar Results for Your Business?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Leapwave AI can help you create optimized content that drives traffic,
              engages readers, and grows your sustainability-focused business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a
                  href="https://www.leapwave.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start AI Content Optimization
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
