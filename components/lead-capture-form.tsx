"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';

interface LeadCaptureFormProps {
  title?: string;
  description?: string;
  downloadUrl?: string;
  buttonText?: string;
  source?: string;
}

export function LeadCaptureForm({
  title = "Get Your Free Guide",
  description = "Enter your details below to receive your comprehensive guide.",
  downloadUrl = "#",
  buttonText = "Download Now",
  source = "general"
}: LeadCaptureFormProps) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [smsConsent, setSmsConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // TODO: Replace with your actual API endpoint
      const response = await fetch('/api/capture-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          phone: smsConsent ? phone : null,
          source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your guide is on its way to your inbox.",
        });
        
        // Redirect to download if URL provided
        if (downloadUrl !== "#") {
          window.location.href = downloadUrl;
        }
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      <div className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="sms-consent"
              checked={smsConsent}
              onCheckedChange={(checked) => setSmsConsent(checked as boolean)}
            />
            <label
              htmlFor="sms-consent"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I want to receive SMS updates
            </label>
          </div>

          {smsConsent && (
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full"
            />
          )}
        </div>

        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? "Processing..." : buttonText}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting, you agree to receive marketing emails and SMS (if opted in).
          You can unsubscribe at any time.
        </p>
      </div>
    </form>
  );
} 