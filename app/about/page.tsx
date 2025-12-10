import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Lightbulb, Users, TrendingUp } from 'lucide-react';
import Newsletter from '@/components/home/newsletter';

const values = [
  {
    icon: Target,
    title: 'Actionable Advice',
    description: 'Every article includes specific steps you can implement today. No fluff, just results.',
  },
  {
    icon: Lightbulb,
    title: 'Proven Strategies',
    description: 'We only share methods that have been tested and validated by real people with real results.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Join thousands of smart earners sharing tips, wins, and supporting each other.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Focused',
    description: 'Whether you want to earn more or work less, we help you achieve sustainable growth.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              About <span className="text-primary">Make Money Save Time</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We&apos;re on a mission to help everyday people build wealth and reclaim their time
              through practical, actionable strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                In a world full of get-rich-quick schemes and productivity hacks that don&apos;t work,
                we cut through the noise to deliver strategies that actually move the needle.
              </p>
              <p className="text-muted-foreground mb-6">
                Every guide we publish is based on real-world testing and results. We don&apos;t just
                theorize about making money—we share what&apos;s working right now for real people.
              </p>
              <p className="text-muted-foreground">
                Whether you&apos;re looking to build passive income, start a side hustle, or simply
                automate your finances, we&apos;ve got the roadmap to help you succeed.
              </p>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Hero.png"
                alt="Our mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg">
              Our values guide everything we create and share with our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</p>
              <p className="text-muted-foreground">Monthly Readers</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</p>
              <p className="text-muted-foreground">Guides Published</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Tips & Strategies</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9/5</p>
              <p className="text-muted-foreground">Reader Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              Browse our collection of free guides and start building your path to financial freedom today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/articles">
                  Browse All Guides
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                <Link href="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Newsletter />
          </div>
        </div>
      </section>
    </div>
  );
}
