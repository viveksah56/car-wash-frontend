"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Package {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular: boolean;
}

const packages: Package[] = [
    {
        name: "Quick Shine",
        price: "$49",
        description: "A fast exterior refresh for your vehicle",
        features: [
            "Exterior hand wash",
            "Tire dressing",
            "Window cleaning",
            "Air freshener",
        ],
        popular: false,
    },
    {
        name: "Full Care",
        price: "$149",
        description: "Complete interior & exterior treatment",
        features: [
            "Everything in Quick Shine",
            "Interior vacuum & wipe",
            "Dashboard conditioning",
            "Leather treatment",
            "Engine bay rinse",
        ],
        popular: true,
    },
    {
        name: "Showroom Detail",
        price: "$299",
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
    },
];

export default function ServicesSection() {
    return (
        <section id="pricing" className="py-16 sm:py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-12 text-center sm:mb-16">
                    <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                        Select Your <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                        Choose the perfect package for your vehicle&apos;s needs. Every
                        service includes our satisfaction guarantee.
                    </p>
                </div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
                    {packages.map((pkg) => (
                        <Card
                            key={pkg.name}
                            className={cn(
                                "relative flex h-full flex-col transition-all duration-300 hover:-translate-y-1",
                                pkg.popular
                                    ? "border-primary/50 shadow-glow"
                                    : "border-border bg-card/50 hover:border-primary/30"
                            )}
                        >
                            {pkg.popular && (
                                <div className="absolute top-3 left-1/2 z-10 -translate-x-1/2">
                                    <Badge className="gap-1 border-0 gradient-primary text-primary-foreground">
                                        <Star className="h-3 w-3" />
                                        Most Popular
                                    </Badge>
                                </div>
                            )}

                            <CardHeader className="pt-8">
                                <CardTitle className="text-lg sm:text-xl">{pkg.name}</CardTitle>
                                <CardDescription className="text-sm">{pkg.description}</CardDescription>
                            </CardHeader>

                            <CardContent className="flex-1">
                                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground sm:text-4xl">
                    {pkg.price}
                  </span>
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
                                <Button className="w-full" size="lg" variant="default">
                                    Select Plan
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}