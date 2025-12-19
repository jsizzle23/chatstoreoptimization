"use client";

import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2
} from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  inquiry: z.enum(["general", "suggestion", "partnership", "feedback"], {
    required_error: "Please select an inquiry type.",
  }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      inquiry: "general",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const inquiryPrefix = `[${values.inquiry.toUpperCase()}]`;
    const subject = encodeURIComponent(`${inquiryPrefix} ${values.subject}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nInquiry Type: ${values.inquiry}\n\nMessage:\n${values.message}`
    );

    window.location.href = `mailto:justin@leapwave.io?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Have a question, suggestion, or want to collaborate? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-6">Let&apos;s Connect</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you have a question about our content, want to suggest a topic,
                  or are interested in partnership opportunities, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground">justin@leapwave.io</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <MessageSquare className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We typically respond within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>

              <Card className="bg-muted/50 border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Looking for article ideas?</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;re always looking for new topics to cover. If there&apos;s a money-making or
                    time-saving strategy you&apos;d like us to explore, let us know!
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Name</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your name" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Email</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Your email" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>

                          <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Subject</FormLabel>
                                <FormControl>
                                  <Input placeholder="What's this about?" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="inquiry"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Inquiry Type</FormLabel>
                                <FormControl>
                                  <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                  >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="general" />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                          General Question
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="suggestion" />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                          Article Suggestion
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="partnership" />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                          Partnership
                                        </FormLabel>
                                      </FormItem>
                                      <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                          <RadioGroupItem value="feedback" />
                                        </FormControl>
                                        <FormLabel className="font-normal cursor-pointer">
                                          Feedback
                                        </FormLabel>
                                      </FormItem>
                                    </div>
                                  </RadioGroup>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us what's on your mind..."
                                    className="min-h-[120px]"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <Button type="submit" className="w-full" size="lg">
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </Button>
                        </form>
                      </Form>
                    </>
                  ) : (
                    <div className="flex flex-col items-center text-center py-12">
                      <div className="p-4 rounded-full bg-primary/10 mb-6">
                        <CheckCircle2 className="h-12 w-12 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                      <p className="text-muted-foreground mb-6 max-w-md">
                        Thank you for reaching out. We&apos;ve received your message and will get back to you within 24-48 hours.
                      </p>
                      <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
