"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import ScrollReveal from "@/components/animation/scroll-reveal";

const ProofSection = () => {
    return (
        <section id="gallery" className="py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    <ScrollReveal>
                        <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                            The Proof is in the{" "}
                            <span className="text-gradient">Polish</span>
                        </h2>
                        <p className="mb-6 leading-relaxed text-muted-foreground">
                            Our before-and-after results speak for themselves. We use only
                            the highest quality products and techniques to deliver a finish
                            that exceeds expectations every time.
                        </p>
                        <ul className="mb-8 space-y-3">
                            {[
                                "Eco-friendly premium products",
                                "Certified master detailers",
                                "100% satisfaction guarantee",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 text-secondary-foreground"
                                >
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button size="lg">See More Results</Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>View our full gallery of transformations</p>
                            </TooltipContent>
                        </Tooltip>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="grid gap-4">
                            <Card className="overflow-hidden border-border">
                                <AspectRatio ratio={16 / 10}>
                                    <Image
                                        src="/before-after.jpg"
                                        alt="Before and after car detailing"
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </AspectRatio>
                            </Card>
                            <Card className="overflow-hidden border-border">
                                <AspectRatio ratio={21 / 9}>
                                    <Image
                                        src="/wheel-detail.jpg"
                                        alt="Premium wheel detailing"
                                        fill
                                        className="object-cover transition-transform duration-500 hover:scale-105"
                                        loading="lazy"
                                    />
                                </AspectRatio>
                            </Card>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ProofSection;