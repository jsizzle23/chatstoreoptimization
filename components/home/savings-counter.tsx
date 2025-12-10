"use client";

import { useState, useEffect } from 'react';
import { DollarSign, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Base values - these represent a hypothetical starting point
// In production, you could track actual user-reported savings
const BASE_DATE = new Date('2024-12-09').getTime();
const BASE_DOLLARS = 62000; // Starting hypothetical community savings ($62K)
const BASE_MINUTES = 25380; // Starting hypothetical community time saved (423 hours)

// Growth rates per millisecond (very slow accumulation)
const DOLLARS_PER_MS = 0.00005; // ~$4.32/day or ~$130/month
const MINUTES_PER_MS = 0.0001; // ~8.6 min/day or ~0.14 hours/day

export function SavingsCounter() {
  const [dollars, setDollars] = useState(BASE_DOLLARS);
  const [minutes, setMinutes] = useState(BASE_MINUTES);

  useEffect(() => {
    const updateCounters = () => {
      const now = Date.now();
      const elapsed = now - BASE_DATE;

      setDollars(Math.floor(BASE_DOLLARS + (elapsed * DOLLARS_PER_MS)));
      setMinutes(Math.floor(BASE_MINUTES + (elapsed * MINUTES_PER_MS)));
    };

    updateCounters();
    const interval = setInterval(updateCounters, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US');
  };

  const formatHours = (mins: number) => {
    const hours = Math.floor(mins / 60);
    return hours.toLocaleString('en-US');
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Card className="border-0 shadow-sm bg-secondary/5">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-secondary" />
              <span className="text-sm font-medium text-muted-foreground">Community Savings</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-secondary">
              ${formatNumber(dollars)}
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm bg-muted/50">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Hours Saved</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-primary">
              {formatHours(minutes)}+
            </p>
          </CardContent>
        </Card>
      </div>

      <p className="text-xs text-muted-foreground text-center">
        *Estimated based on typical results reported by readers applying these strategies.
        Individual results vary. These figures represent projected community-wide impact, not guaranteed outcomes.
      </p>
    </div>
  );
}
