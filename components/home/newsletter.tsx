"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, CheckCircle2, Smartphone, Search, Bot } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const benefits = [
    { icon: Smartphone, text: 'ASO tips to boost app visibility' },
    { icon: Search, text: 'SEO strategies that drive traffic' },
    { icon: Bot, text: 'GEO tactics for AI discovery' },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-500/5 via-muted to-cyan-500/5 rounded-2xl overflow-hidden border">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="p-8 md:p-12 space-y-6">
          <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-xl">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold font-serif">
            Get Free Optimization Tips
          </h2>
          <p className="text-muted-foreground">
            Join 5,000+ marketers getting ASO, SEO, and GEO strategies delivered weekly.
            No spam, just actionable tips to boost your visibility.
          </p>

          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-sm">
                <div className="p-1.5 rounded-full bg-blue-500/10">
                  <benefit.icon className="h-4 w-4 text-blue-600" />
                </div>
                <span>{benefit.text}</span>
              </li>
            ))}
          </ul>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background h-12 flex-1"
                  required
                />
                <Button type="submit" size="lg" className="h-12 px-6 bg-blue-600 hover:bg-blue-700">
                  Subscribe Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                100% free. Unsubscribe anytime. No spam ever.
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-xl space-y-3">
              <div className="p-3 rounded-full bg-blue-500/10">
                <CheckCircle2 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">You&apos;re In!</h3>
              <p className="text-muted-foreground text-sm">
                Check your inbox to confirm your subscription and get your first tip.
              </p>
            </div>
          )}
        </div>

        <div className="hidden md:flex relative bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-cyan-500/10 items-center justify-center p-8">
          <div className="text-center space-y-4">
            <div className="text-6xl font-bold text-blue-500/20">5K+</div>
            <p className="text-sm text-muted-foreground">
              Marketers optimizing for discovery
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
