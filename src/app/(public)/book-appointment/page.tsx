"use client";

import {useState} from "react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {Calendar} from "@/components/ui/calendar";
import {Separator} from "@/components/ui/separator";
import {CalendarDays, Car, CheckCircle, Clock} from "lucide-react";
import {toast} from "sonner";
import ScrollReveal from "@/components/animation/scroll-reveal";
import {cn} from "@/lib/utils";

const services = [
    {value: "quick-shine", label: "Quick Shine – $49"},
    {value: "full-care", label: "Full Care – $149"},
    {value: "showroom-detail", label: "Showroom Detail – $299"},
];


export default function Book() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        toast.success("Booking Received!", {
            description: "We'll confirm your appointment shortly.",
        });
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-background">
                <main className="flex min-h-[80vh] items-center justify-center px-4 pb-16 pt-24">
                    <ScrollReveal className="text-center">
                        <div
                            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 sm:h-20 sm:w-20">
                            <CheckCircle className="h-8 w-8 text-primary sm:h-10 sm:w-10"/>
                        </div>
                        <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                            Booking Confirmed!
                        </h1>
                        <p className="mb-8 text-sm text-muted-foreground sm:text-base">
                            Thank you! We&apos;ll reach out to confirm your appointment details.
                        </p>
                        <Button onClick={() => setSubmitted(false)}>Book Another</Button>
                    </ScrollReveal>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <main className="pb-16 pt-24">
                <div className="container mx-auto px-4 lg:px-8">
                    <ScrollReveal className="mb-10 text-center sm:mb-12">
                        <Badge className="mb-4 border-primary/20 bg-primary/10 text-primary">
                            Schedule Service
                        </Badge>
                        <h1 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                            Book Your <span className="text-gradient">Detail</span>
                        </h1>
                        <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
                            Pick your service, choose a date, and we&apos;ll handle the rest.
                        </p>
                    </ScrollReveal>

                    <div className="mx-auto grid max-w-5xl gap-6 sm:gap-8 lg:grid-cols-5">
                        <ScrollReveal className="lg:col-span-2">
                            <Card className="border-border bg-card/50">
                                <CardHeader className="pb-2">
                                    <CardTitle className="flex items-center gap-2 font-display text-base sm:text-lg">
                                        <CalendarDays className="h-5 w-5 text-primary"/>
                                        Select Date
                                    </CardTitle>
                                    <CardDescription className="text-xs sm:text-sm">
                                        Choose your preferred appointment date
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex  flex-col justify-center overflow-x-auto">
                                   <div className="w-full">
                                       <Calendar
                                           mode="single"
                                           selected={date}
                                           onSelect={setDate}
                                           disabled={(d) => d < new Date()}
                                           className={cn('rounded-md border border-border p-2 [--cell-size:--spacing(7)] [--cell-margin:--spacing(6)] [--cell-border-radius:--spacing(2)]', '' +
                                               'w-full')}
                                       />
                                   </div>
                                    <div>
                                        <Label>
                                            Appointment Time
                                        </Label>
                                        <Input
                                            type="time"
                                            placeholder="Select Time"
                                            required
                                            className="bg-secondary/50"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </ScrollReveal>

                        <ScrollReveal delay={150} className="lg:col-span-3">
                            <Card className="border-border bg-card/50">
                                <CardHeader className="pb-2">
                                    <CardTitle className="flex items-center gap-2 font-display text-base sm:text-lg">
                                        <Car className="h-5 w-5 text-primary"/>
                                        Your Details
                                    </CardTitle>
                                    <CardDescription className="text-xs sm:text-sm">
                                        Fill in your info and we&apos;ll confirm your booking
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
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
                                                    type="tel"
                                                    placeholder="(555) 123-4567"
                                                    required
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


                                            <div className="space-y-2 w-full    ">
                                                <Label htmlFor="service">Service Package</Label>
                                                <Select required >
                                                    <SelectTrigger id="service" className="bg-secondary/50 w-full" >
                                                        <SelectValue placeholder="Choose a package"/>
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {services.map((s) => (
                                                            <SelectItem key={s.value} value={s.value}>
                                                                {s.label}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>



                                        <div className="space-y-2">
                                            <Label htmlFor="vehicle">Vehicle Info</Label>
                                            <Input
                                                id="vehicle"
                                                placeholder="e.g. 2024 BMW X5 Black"
                                                className="bg-secondary/50"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="notes">Additional Notes</Label>
                                            <Textarea
                                                id="notes"
                                                placeholder="Any special requests..."
                                                className="bg-secondary/50"
                                                rows={3}
                                            />
                                        </div>

                                        <Separator/>

                                        {date && (
                                            <p className="text-sm text-muted-foreground">
                                                Selected date:{" "}
                                                <span className="font-semibold text-foreground">
                          {date.toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                          })}
                        </span>
                                            </p>
                                        )}

                                        <Button type="submit" size="lg" className="w-full">
                                            Confirm Booking
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    </div>
                </div>
            </main>
        </div>
    );
}