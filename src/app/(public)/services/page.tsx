"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Star, Clock, Shield, Droplets, Car, Paintbrush } from "lucide-react";
import ScrollReveal from "@/components/animation/scroll-reveal";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface Package {
    name: string;
    price: string;
    duration: string;
    description: string;
    features: string[];
    popular: boolean;
    icon: LucideIcon;
}

interface AddOn {
    name: string;
    price: string;
    description: string;
}

const packages: Package[] = [
    {
        name: "Quick Shine",
        price: "$49",
        duration: "~1 hour",
        description: "A fast exterior refresh for your vehicle",
        features: ["Exterior hand wash", "Tire dressing", "Window cleaning", "Air freshener"],
        popular: false,
        icon: Droplets,
    },
    {
        name: "Full Care",
        price: "$149",
        duration: "~3 hours",
        description: "Complete interior & exterior treatment",
        features: [
            "Everything in Quick Shine",
            "Interior vacuum & wipe",
            "Dashboard conditioning",
            "Leather treatment",
            "Engine bay rinse",
        ],
        popular: true,
        icon: Car,
    },
    {
        name: "Showroom Detail",
        price: "$299",
        duration: "~6 hours",
        description: "The ultimate premium detailing experience",
        features: [
            "Everything in Full Care",
            "Clay bar treatment",
            "Machine polish",
            "Ceramic coating",
            "Paint correction",
            "Headlight restoration",
        ],
        popular: false,
        icon: Paintbrush,
    },
];

const addOns: AddOn[] = [
    { name: "Ceramic Coating Boost", price: "+$79", description: "Extra layer of ceramic protection" },
    { name: "Odor Elimination", price: "+$39", description: "Deep ozone treatment for stubborn smells" },
    { name: "Pet Hair Removal", price: "+$49", description: "Thorough removal from all surfaces" },
    { name: "Headlight Restoration", price: "+$59", description: "Crystal-clear headlight lenses" },
];

export default function Services() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pb-16 pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <ScrollReveal className="mb-12 text-center sm:mb-16">
                        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
                            Our Services
                        </Badge>
                        <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Premium <span className="text-gradient">Detailing</span> Packages
                        </h1>
                        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
                            From a quick refresh to a full showroom-quality detail, we have the perfect package
                            for every vehicle and budget. All services include our satisfaction guarantee.
                        </p>
                    </ScrollReveal>

                    <div className="mb-20 grid gap-6 sm:gap-8 md:grid-cols-3">
                        {packages.map((pkg, i) => (
                            <ScrollReveal key={pkg.name} delay={i * 150}>
                                <Card
                                    className={`relative flex h-full flex-col transition-all duration-300 hover:-translate-y-1 ${
                                        pkg.popular
                                            ? "border-primary/50 shadow-glow"
                                            : "border-border bg-card/50 hover:border-primary/30"
                                    }`}
                                >
                                    {pkg.popular && (
                                        <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                                            <Badge className="gap-1 border-0 bg-gradient-primary text-primary-foreground">
                                                <Star className="h-3 w-3" /> Most Popular
                                            </Badge>
                                        </div>
                                    )}

                                    <CardHeader>
                                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                            <pkg.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle className="font-display text-xl">{pkg.name}</CardTitle>
                                        <CardDescription>{pkg.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex-1">
                                        <div className="mb-2">
                      <span className="font-display text-3xl font-bold text-foreground sm:text-4xl">
                        {pkg.price}
                      </span>
                                        </div>
                                        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                                            <Clock className="h-4 w-4 shrink-0" />
                                            {pkg.duration}
                                        </div>
                                        <Separator className="mb-4" />
                                        <ul className="space-y-3">
                                            {pkg.features.map((feature) => (
                                                <li
                                                    key={feature}
                                                    className="flex items-center gap-3 text-sm text-secondary-foreground"
                                                >
                                                    <Check className="h-4 w-4 shrink-0 text-primary" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>

                                    <CardFooter>
                                        <Button

                                            className="w-full"
                                            asChild
                                        >
                                            <Link href="/book-appointment">Book Now</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal className="mb-10 text-center sm:mb-12">
                        <h2 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                            Enhance Your <span className="text-gradient">Experience</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                            Add these extras to any package for the ultimate treatment.
                        </p>
                    </ScrollReveal>

                    <div className="mx-auto mb-20 grid max-w-4xl gap-4 sm:grid-cols-2">
                        {addOns.map((addon, i) => (
                            <ScrollReveal key={addon.name} delay={i * 100}>
                                <Card className="border-border bg-card/50 transition-all hover:border-primary/30">
                                    <CardContent className="flex items-center justify-between gap-4 p-4 sm:p-5">
                                        <div className="min-w-0">
                                            <h3 className="font-display font-semibold text-foreground">{addon.name}</h3>
                                            <p className="text-sm text-muted-foreground">{addon.description}</p>
                                        </div>
                                        <Badge
                                            variant="secondary"
                                            className="shrink-0 font-display text-sm"
                                        >
                                            {addon.price}
                                        </Badge>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal>
                        <Card className="border-primary/20 bg-card/50">
                            <CardContent className="flex flex-col items-center gap-6 p-6 text-center sm:p-8 md:flex-row md:text-left">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-16 sm:w-16">
                                    <Shield className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="mb-2 font-display text-lg font-bold text-foreground sm:text-xl">
                                        100% Satisfaction Guarantee
                                    </h3>
                                    <p className="text-sm text-muted-foreground sm:text-base">
                                        Not happy with the results? We&apos;ll redo the service free of charge. Your vehicle
                                        deserves perfection, and we won&apos;t stop until you&apos;re thrilled.
                                    </p>
                                </div>
                                <Button className="w-full shrink-0 sm:w-auto" asChild>
                                    <Link href="/book">Book a Service</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </ScrollReveal>

                </div>
            </main>
        </div>
    );
}