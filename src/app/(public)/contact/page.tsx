"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import ScrollReveal from "@/components/animation/scroll-reveal";
import type { LucideIcon } from "lucide-react";

interface ContactItem {
    icon: LucideIcon;
    label: string;
    value: string;
}

const contactInfo: ContactItem[] = [
    { icon: MapPin, label: "Address", value: "123 Detail Lane, Los Angeles, CA 90001" },
    { icon: Phone, label: "Phone", value: "(555) 123-4567" },
    { icon: Mail, label: "Email", value: "hello@premiumwash.com" },
    { icon: Clock, label: "Hours", value: "Mon–Sat: 8AM – 6PM" },
];

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success("Message Sent!", {
            description: "We'll get back to you within 24 hours.",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <main className="pb-16 pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <ScrollReveal className="mb-12 text-center sm:mb-16">
                        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
                            Get in Touch
                        </Badge>
                        <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Contact <span className="text-gradient">Us</span>
                        </h1>
                        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                            Have a question or want a custom quote? We&apos;d love to hear from you.
                        </p>
                    </ScrollReveal>

                    <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 lg:grid-cols-5">

                        <ScrollReveal className="lg:col-span-2">
                            <div className="space-y-3 sm:space-y-4">
                                {contactInfo.map((item) => (
                                    <Card
                                        key={item.label}
                                        className="border-border bg-card/50 transition-all hover:border-primary/30"
                                    >
                                        <CardContent className="flex items-start gap-4 p-4 sm:p-5">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                                                <item.icon className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="font-display text-sm font-semibold text-foreground">
                                                    {item.label}
                                                </p>
                                                <p className="text-sm text-muted-foreground">{item.value}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>

                            <Card className="mt-3 overflow-hidden border-border bg-card/50 sm:mt-4">
                                <CardContent className="p-0">
                                    <div className="flex h-40 items-center justify-center bg-secondary/30 sm:h-48">
                                        <div className="text-center">
                                            <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                                            <p className="text-sm text-muted-foreground">Map placeholder</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={150} className="lg:col-span-3">
                            <Card className="border-border bg-card/50">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 font-display text-lg">
                                        <Send className="h-5 w-5 text-primary" />
                                        Send a Message
                                    </CardTitle>
                                    <CardDescription>
                                        Fill out the form and we&apos;ll respond within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    {submitted ? (
                                        <div className="flex flex-col items-center py-10 text-center sm:py-12">
                                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 sm:h-16 sm:w-16">
                                                <CheckCircle className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                                            </div>
                                            <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                                                Thank You!
                                            </h3>
                                            <p className="mb-6 text-sm text-muted-foreground sm:text-base">
                                                Your message has been sent successfully.
                                            </p>
                                            <Button variant="default" onClick={() => setSubmitted(false)}>
                                                Send Another
                                            </Button>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div className="space-y-2">
                                                    <Label htmlFor="name">Full Name</Label>
                                                    <Input
                                                        id="name"
                                                        placeholder="John Doe"
                                                        required
                                                        className="bg-secondary/50"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input
                                                        id="phone"
                                                        placeholder="(555) 123-4567"
                                                        className="bg-secondary/50"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    required
                                                    className="bg-secondary/50"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="subject">Subject</Label>
                                                <Input
                                                    id="subject"
                                                    placeholder="How can we help?"
                                                    required
                                                    className="bg-secondary/50"
                                                />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Tell us about your needs..."
                                                    required
                                                    className="bg-secondary/50"
                                                    rows={5}
                                                />
                                            </div>

                                            <Separator />

                                            <Button type="submit" variant="default" size="lg" className="w-full">
                                                Send Message
                                            </Button>
                                        </form>
                                    )}
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                    </div>
                </div>
            </main>
        </div>
    );
}