'use client'
import {Sparkles} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {Button} from "@/components/ui/button";
import Image from "next/image";


const HeroSection = () => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={'/hero-car.jpg'}
                    fill
                    alt="Premium car in detailing studio"
                    className="h-full w-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/30"/>
                <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50"/>
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto flex min-h-screen items-center px-4 pt-20 lg:px-8">
                <div className="max-w-2xl animate-fade-in">
                    <Badge variant="outline"
                           className="mb-6 gap-2 border-primary/30 bg-primary/10 px-4 py-2 text-primary">
                        <Sparkles className="h-4 w-4"/>
                        Premium Auto Detailing
                    </Badge>
                    <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl">
                        Your Car Deserves{" "}
                        <span className="text-gradient">a Spa Day</span>
                    </h1>
                    <p className="mb-8 max-w-lg text-lg text-muted-foreground">
                        Experience the ultimate car care with our premium detailing services.
                        We treat your vehicle with the care and precision it deserves.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Button size="lg" variant={'default'} className="text-base">
                            View Packages
                        </Button>
                        <Button size="lg" className="text-base">
                            Learn More
                        </Button>
                    </div>

                    {/* Stats */}
                    <Separator className="mt-12 bg-border/50"/>
                    <div className="mt-8 flex gap-8">
                        {[
                            {value: "5000+", label: "Cars Detailed"},
                            {value: "4.9★", label: "Average Rating"},
                            {value: "10+", label: "Years Experience"},
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="font-display text-2xl font-bold text-primary">{stat.value}</div>
                                <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
