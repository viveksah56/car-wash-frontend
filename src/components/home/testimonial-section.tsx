'use client'
import {Card, CardContent} from "@/components/ui/card";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Badge} from "@/components/ui/badge";
import {Star} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,} from "@/components/ui/carousel";
import ScrollReveal from "@/components/animation/scroll-reveal";


const testimonials = [
    {
        name: "Marcus Johnson",
        initials: "MJ",
        role: "BMW X5 Owner",
        rating: 5,
        text: "Absolutely blown away by the Showroom Detail package. My car looks better than when I drove it off the lot. The ceramic coating is incredible.",
    },
    {
        name: "Sarah Chen",
        initials: "SC",
        role: "Tesla Model 3 Owner",
        rating: 5,
        text: "Best detailing service in town, hands down. The attention to detail on the interior was phenomenal. Will definitely be coming back.",
    },
    {
        name: "David Park",
        initials: "DP",
        role: "Porsche 911 Owner",
        rating: 5,
        text: "I'm extremely particular about my car and PremiumWash exceeded every expectation. The paint correction was flawless.",
    },
    {
        name: "Emily Rodriguez",
        initials: "ER",
        role: "Range Rover Owner",
        rating: 4,
        text: "The Full Care package was worth every penny. My SUV had been through a lot and they made it look brand new again. Highly recommend!",
    },
    {
        name: "James Mitchell",
        initials: "JM",
        role: "Mercedes C-Class Owner",
        rating: 5,
        text: "Professional, punctual, and the results speak for themselves. The engine bay cleaning was an impressive bonus. Five stars all the way.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollReveal className="mb-16 text-center">
                    <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Testimonials</Badge>
                    <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                        What Our <span className="text-gradient">Clients Say</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-muted-foreground">
                        Don&#39;t just take our word for it — hear from car enthusiasts who trust us with their
                        vehicles.
                    </p>
                </ScrollReveal>

                <ScrollReveal>
                    <Carousel
                        opts={{align: "start", loop: true}}
                        plugins={[Autoplay({delay: 4000, stopOnInteraction: true})]}
                        className="mx-auto w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((t) => (
                                <CarouselItem key={t.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <Card
                                        className="h-full border-border bg-card/50 transition-all duration-300 hover:border-primary/30 hover:shadow-glow">
                                        <CardContent className="flex h-full flex-col p-6">
                                            <div className="mb-4 flex gap-0.5">
                                                {Array.from({length: 5}).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`h-4 w-4 ${i < t.rating ? "fill-primary text-primary" : "text-muted"}`}
                                                    />
                                                ))}
                                            </div>
                                            <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                                                &#34;{t.text}&#34;
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-10 w-10 border border-primary/20">
                                                    <AvatarFallback
                                                        className="bg-primary/10 text-xs font-semibold text-primary">
                                                        {t.initials}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="mt-8 flex justify-center gap-2">
                            <CarouselPrevious
                                variant={'default'}
                                className="static translate-y-0 border border-border bg-secondary hover:bg-primary !hover:border-primary !text-white transition-all duration-300"
                            />

                            <CarouselNext
                                variant={'default'}
                                className="static translate-y-0 border border-border bg-secondary hover:bg-primary !hover:border-primary !text-white transition-all duration-300"
                            />
                        </div>
                    </Carousel>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default TestimonialsSection;
