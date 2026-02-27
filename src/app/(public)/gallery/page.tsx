"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import ScrollReveal from "@/components/animation/scroll-reveal";
import { cn } from "@/lib/utils";

const galleryItems = [
    { src: "/gallery-1.jpg", title: "Glossy Black Finish", category: "exterior", tag: "Paint Correction" },
    { src: "/gallery-2.jpg", title: "Leather Interior Detail", category: "interior", tag: "Interior Care" },
    { src: "/gallery-3.jpg", title: "Ceramic Coating Application", category: "exterior", tag: "Ceramic Coating" },
    { src: "/gallery-4.jpg", title: "Chrome Wheel Restoration", category: "wheels", tag: "Wheel Detail" },
    { src: "/gallery-5.jpg", title: "SUV Full Detail", category: "exterior", tag: "Full Detail" },
    { src: "/gallery-6.jpg", title: "Engine Bay Cleaning", category: "engine", tag: "Engine Detail" },
];

const categories = [
    { value: "all", label: "All Work" },
    { value: "exterior", label: "Exterior" },
    { value: "interior", label: "Interior" },
    { value: "wheels", label: "Wheels" },
    { value: "engine", label: "Engine" },
];

export default function Gallery() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pb-16 pt-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <ScrollReveal className="mb-12 text-center">
                        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
                            Our Portfolio
                        </Badge>
                        <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Our <span className="text-gradient">Gallery</span>
                        </h1>
                        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                            Browse our latest detailing transformations. Every vehicle gets
                            the premium treatment.
                        </p>
                    </ScrollReveal>

                    <Tabs defaultValue="all" className="w-full">
                        <ScrollReveal>
                            <TabsList
                                className="mx-auto mb-10 flex h-auto w-full flex-wrap justify-center gap-1 bg-secondary sm:w-fit"
                                aria-label="Filter gallery by category"
                            >
                                {categories.map((cat) => (
                                    <TabsTrigger
                                        key={cat.value}
                                        value={cat.value}
                                        className="text-xs data-[state=active]:bg-primary! data-[state=active]:text-primary-foreground sm:text-sm"
                                    >
                                        {cat.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </ScrollReveal>

                        {categories.map((cat) => {
                            const filtered = galleryItems.filter(
                                (item) => cat.value === "all" || item.category === cat.value
                            );

                            return (
                                <TabsContent key={cat.value} value={cat.value}>
                                    {filtered.length === 0 ? (
                                        <p className="py-16 text-center text-muted-foreground">
                                            No items in this category yet.
                                        </p>
                                    ) : (
                                        <div
                                            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
                                            role="list"
                                            aria-label={`${cat.label} gallery items`}
                                        >
                                            {filtered.map((item, i) => (
                                                <ScrollReveal
                                                    key={item.title}
                                                    delay={i * 100}
                                                >
                                                    <Card className="group overflow-hidden border-border bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-glow focus-within:border-primary/30 focus-within:shadow-glow">
                                                        <AspectRatio ratio={16 / 10}>
                                                            <Image
                                                                width={1000}
                                                                height={625}
                                                                src={item.src}
                                                                alt={item.title}
                                                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                                loading="lazy"
                                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                            />
                                                        </AspectRatio>
                                                        <div className="p-3 sm:p-4">
                                                            <Badge
                                                                variant="secondary"
                                                                className="mb-2 text-xs"
                                                            >
                                                                {item.tag}
                                                            </Badge>
                                                            <h3 className="font-display text-base font-semibold text-foreground sm:text-lg">
                                                                {item.title}
                                                            </h3>
                                                        </div>
                                                    </Card>
                                                </ScrollReveal>
                                            ))}
                                        </div>
                                    )}
                                </TabsContent>
                            );
                        })}
                    </Tabs>
                </div>
            </main>
        </div>
    );
}