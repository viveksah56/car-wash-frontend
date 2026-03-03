"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Calendar, Target } from "lucide-react";
import beforeAfterImg from "@/assets/before-after.jpg";
import ScrollReveal from "@/components/animation/scroll-reveal";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";

interface Stat {
    label: string;
    value: string;
    icon: LucideIcon;
}

interface TeamMember {
    name: string;
    role: string;
    initials: string;
}

const stats: Stat[] = [
    { label: "Cars Detailed", value: "5,000+", icon: Target },
    { label: "Happy Clients", value: "2,800+", icon: Users },
    { label: "Years Experience", value: "12+", icon: Calendar },
    { label: "Awards Won", value: "15", icon: Award },
];

const team: TeamMember[] = [
    { name: "Marcus Rivera", role: "Founder & Lead Detailer", initials: "MR" },
    { name: "Sarah Chen", role: "Operations Manager", initials: "SC" },
    { name: "David Okoye", role: "Senior Detailer", initials: "DO" },
    { name: "Emily Walsh", role: "Customer Experience", initials: "EW" },
];

export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <main className="pb-16 pt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <ScrollReveal className="mb-12 text-center sm:mb-16">
                        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
                            About Us
                        </Badge>
                        <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Driven by <span className="text-gradient">Perfection</span>
                        </h1>
                        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
                            What started as a passion for cars has grown into the area&apos;s most trusted
                            premium detailing service. We treat every vehicle like it&apos;s our own.
                        </p>
                    </ScrollReveal>

                    <div className="mx-auto mb-20 grid max-w-5xl gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
                        <ScrollReveal>
                            <div className="overflow-hidden rounded-xl border border-border">
                                <Image
                                    src={'/before-after.jpg'}
                                    alt="Premium detailing result"
                                    className="h-full w-full object-cover"
                                    placeholder="blur"
                                />
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={150}>
                            <h2 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-sm text-muted-foreground sm:text-base">
                                <p>
                                    Founded in 2013 by Marcus Rivera, PremiumWash began in a single-car garage with
                                    one goal: deliver detailing so exceptional that every client becomes a lifelong customer.
                                </p>
                                <p>
                                    Over a decade later, we&apos;ve grown into a full team of certified detailing professionals,
                                    but our philosophy remains the same — obsessive attention to detail, premium products,
                                    and genuine care for every vehicle that comes through our doors.
                                </p>
                                <p>
                                    We use only the finest ceramic coatings, pH-balanced cleaners, and hand-selected
                                    microfiber materials. No shortcuts, no compromises.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, i) => (
                            <ScrollReveal key={stat.label} delay={i * 100}>
                                <Card className="border-border bg-card/50 text-center transition-all hover:border-primary/30">
                                    <CardContent className="p-5 sm:p-6">
                                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                            <stat.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                                            {stat.value}
                                        </p>
                                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                    <ScrollReveal className="mb-10 text-center sm:mb-12">
                        <h2 className="mb-4 font-display text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                            Meet the <span className="text-gradient">Team</span>
                        </h2>
                        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                            Passionate professionals dedicated to making your ride shine.
                        </p>
                    </ScrollReveal>

                    <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                        {team.map((member, i) => (
                            <ScrollReveal key={member.name} delay={i * 100}>
                                <Card className="border-border bg-card/50 text-center transition-all hover:border-primary/30">
                                    <CardContent className="p-5 sm:p-6">
                                        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary font-display text-lg font-bold text-primary-foreground sm:h-16 sm:w-16">
                                            {member.initials}
                                        </div>
                                        <h3 className="font-display font-semibold text-foreground">{member.name}</h3>
                                        <p className="text-sm text-muted-foreground">{member.role}</p>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        ))}
                    </div>

                </div>
            </main>
        </div>
    );
}