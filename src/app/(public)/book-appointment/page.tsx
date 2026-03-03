'use client'
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
    CalendarDays, Clock, Car, CheckCircle, MapPin, CreditCard, ArrowRight, ArrowLeft, Check, CalendarIcon
} from "lucide-react";
import ScrollReveal from "@/components/animation/scroll-reveal";
import {toast} from "sonner";


const branches = [
    { value: "downtown", label: "Downtown", address: "123 Main St" },
    { value: "westside", label: "Westside", address: "456 West Ave" },
    { value: "northgate", label: "Northgate", address: "789 North Blvd" },
    { value: "airport", label: "Airport", address: "101 Airport Rd" },
];

const services = [
    { value: "quick-shine", label: "Quick Shine", price: "$49", duration: "30 min", desc: "Exterior wash & dry" },
    { value: "full-care", label: "Full Care", price: "$149", duration: "90 min", desc: "Interior + exterior deep clean" },
    { value: "showroom-detail", label: "Showroom Detail", price: "$299", duration: "3 hrs", desc: "Full detail with coating" },
    { value: "ceramic-coating", label: "Ceramic Coating", price: "$499", duration: "5 hrs", desc: "Long-lasting ceramic protection" },
];

const addOns = [
    { value: "engine-clean", label: "Engine Bay Clean", price: "+$30" },
    { value: "headlight", label: "Headlight Restoration", price: "+$45" },
    { value: "odor", label: "Odor Removal", price: "+$25" },
    { value: "leather", label: "Leather Conditioning", price: "+$40" },
];

const vehicles = [
    { value: "bmw-x5", label: "BMW X5 (ABC-1234)" },
    { value: "tesla-3", label: "Tesla Model 3 (EV-5678)" },
    { value: "audi-a4", label: "Audi A4 (XYZ-9012)" },
];

const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:00 AM", available: true },
    { time: "11:00 AM", available: false },
    { time: "12:00 PM", available: true },
    { time: "1:00 PM", available: true },
    { time: "2:00 PM", available: false },
    { time: "3:00 PM", available: true },
    { time: "4:00 PM", available: true },
];

const paymentMethods = [
    { value: "card", label: "Credit/Debit Card", icon: "💳" },
    { value: "cash", label: "Pay at Location", icon: "💵" },
    { value: "wallet", label: "Digital Wallet", icon: "📱" },
];

const steps = ["Branch", "Service", "Schedule", "Payment", "Confirm"];

const EnhancedBook = () => {
    const [step, setStep] = useState(0);
    const [branch, setBranch] = useState("");
    const [service, setService] = useState("");
    const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
    const [vehicle, setVehicle] = useState("");
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [timeSlot, setTimeSlot] = useState("");
    const [payment, setPayment] = useState("");
    const [coupon, setCoupon] = useState("");
    const [submitted, setSubmitted] = useState(false);


    const toggleAddOn = (val: string) => {
        setSelectedAddOns((prev) =>
            prev.includes(val) ? prev.filter((a) => a !== val) : [...prev, val]
        );
    };

    const canNext = () => {
        switch (step) {
            case 0: return !!branch;
            case 1: return !!service && !!vehicle;
            case 2: return !!date && !!timeSlot;
            case 3: return !!payment;
            default: return true;
        }
    };

    const handleSubmit = () => {
        setSubmitted(true);

    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-background">
                <main className="flex items-center justify-center pt-24 pb-16 min-h-[80vh]">
                    <ScrollReveal className="text-center max-w-md">
                        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                            <CheckCircle className="h-10 w-10 text-primary" />
                        </div>
                        <h1 className="mb-4 font-display text-4xl font-bold text-foreground">Booking Confirmed!</h1>
                        <p className="mb-2 text-muted-foreground">Your appointment is scheduled.</p>
                        <div className="glass rounded-xl p-4 text-left text-sm space-y-2 my-6">
                            <p><span className="text-muted-foreground">Branch:</span> <span className="text-foreground font-medium">{branches.find(b => b.value === branch)?.label}</span></p>
                            <p><span className="text-muted-foreground">Service:</span> <span className="text-foreground font-medium">{services.find(s => s.value === service)?.label}</span></p>
                            <p><span className="text-muted-foreground">Date:</span> <span className="text-foreground font-medium">{date?.toLocaleDateString()}</span></p>
                            <p><span className="text-muted-foreground">Time:</span> <span className="text-foreground font-medium">{timeSlot}</span></p>
                        </div>
                        <Button  onClick={() => { setSubmitted(false); setStep(0); }}>
                            Book Another
                        </Button>
                    </ScrollReveal>
                </main>

            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <ScrollReveal className="mb-8 text-center">
                        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Schedule Service</Badge>
                        <h1 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                            Book Your <span className="text-gradient">Detail</span>
                        </h1>
                    </ScrollReveal>

                    {/* Stepper */}
                    <div className="mx-auto max-w-3xl mb-10">
                        <div className="flex items-center justify-between">
                            {steps.map((s, i) => (
                                <div key={s} className="flex items-center">
                                    <div className={cn(
                                        "flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors",
                                        i < step ? "bg-primary text-primary-foreground" :
                                            i === step ? "bg-primary text-primary-foreground shadow-glow" :
                                                "bg-muted text-muted-foreground"
                                    )}>
                                        {i < step ? <Check className="h-4 w-4" /> : i + 1}
                                    </div>
                                    {i < steps.length - 1 && (
                                        <div className={cn("hidden sm:block h-0.5 w-12 lg:w-20 mx-1", i < step ? "bg-primary" : "bg-muted")} />
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-2">
                            {steps.map((s, i) => (
                                <span key={s} className={cn("text-xs", i === step ? "text-primary font-medium" : "text-muted-foreground")}>{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="mx-auto max-w-2xl">
                        {/* Step 0: Branch */}
                        {step === 0 && (
                            <ScrollReveal>
                                <Card className="border-border bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 font-display text-lg"><MapPin className="h-5 w-5 text-primary" /> Select Branch</CardTitle>
                                        <CardDescription>Choose your nearest location</CardDescription>
                                    </CardHeader>
                                    <CardContent className="grid gap-3 sm:grid-cols-2">
                                        {branches.map((b) => (
                                            <button
                                                key={b.value}
                                                onClick={() => setBranch(b.value)}
                                                className={cn(
                                                    "rounded-lg border p-4 text-left transition-all hover:border-primary/50",
                                                    branch === b.value ? "border-primary bg-primary/5 shadow-glow" : "border-border"
                                                )}
                                            >
                                                <p className="font-medium text-foreground">{b.label}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{b.address}</p>
                                            </button>
                                        ))}
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        )}

                        {/* Step 1: Service & Vehicle */}
                        {step === 1 && (
                            <ScrollReveal>
                                <Card className="border-border bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 font-display text-lg"><Car className="h-5 w-5 text-primary" /> Service & Vehicle</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <Label>Select Vehicle</Label>
                                            <Select value={vehicle} onValueChange={setVehicle}>
                                                <SelectTrigger className="bg-secondary/50"><SelectValue placeholder="Choose vehicle" /></SelectTrigger>
                                                <SelectContent>
                                                    {vehicles.map((v) => (
                                                        <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Service Package</Label>
                                            <div className="grid gap-3 sm:grid-cols-2">
                                                {services.map((s) => (
                                                    <button
                                                        key={s.value}
                                                        onClick={() => setService(s.value)}
                                                        className={cn(
                                                            "rounded-lg border p-4 text-left transition-all hover:border-primary/50",
                                                            service === s.value ? "border-primary bg-primary/5 shadow-glow" : "border-border"
                                                        )}
                                                    >
                                                        <div className="flex justify-between items-start">
                                                            <p className="font-medium text-foreground">{s.label}</p>
                                                            <span className="text-primary font-bold text-sm">{s.price}</span>
                                                        </div>
                                                        <p className="text-xs text-muted-foreground mt-1">{s.desc} • {s.duration}</p>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Add-ons (optional)</Label>
                                            <div className="grid gap-2 sm:grid-cols-2">
                                                {addOns.map((a) => (
                                                    <button
                                                        key={a.value}
                                                        onClick={() => toggleAddOn(a.value)}
                                                        className={cn(
                                                            "flex items-center justify-between rounded-lg border p-3 text-sm transition-all",
                                                            selectedAddOns.includes(a.value) ? "border-primary bg-primary/5" : "border-border"
                                                        )}
                                                    >
                                                        <span className="text-foreground">{a.label}</span>
                                                        <span className="text-primary font-medium">{a.price}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        )}

                        {/* Step 2: Schedule */}
                        {step === 2 && (
                            <ScrollReveal>
                                <Card className="border-border bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 font-display text-lg"><CalendarDays className="h-5 w-5 text-primary" /> Pick Date & Time</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-2">
                                            <Label>Date</Label>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                                        {date ? format(date, "PPP") : "Pick a date"}
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={date}
                                                        onSelect={setDate}
                                                        disabled={(d) => d < new Date()}
                                                        className={cn("p-3 pointer-events-auto")}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div className="space-y-2">
                                            <Label>Time Slot</Label>
                                            <div className="grid grid-cols-4 gap-2">
                                                {timeSlots.map((t) => (
                                                    <button
                                                        key={t.time}
                                                        disabled={!t.available}
                                                        onClick={() => setTimeSlot(t.time)}
                                                        className={cn(
                                                            "rounded-lg border p-2 text-sm transition-all",
                                                            !t.available && "opacity-40 cursor-not-allowed line-through",
                                                            timeSlot === t.time ? "border-primary bg-primary/10 text-primary font-medium" : "border-border text-foreground hover:border-primary/50"
                                                        )}
                                                    >
                                                        {t.time}
                                                    </button>
                                                ))}
                                            </div>
                                            <p className="text-xs text-muted-foreground">Greyed out slots are unavailable</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        )}

                        {/* Step 3: Payment */}
                        {step === 3 && (
                            <ScrollReveal>
                                <Card className="border-border bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 font-display text-lg"><CreditCard className="h-5 w-5 text-primary" /> Payment</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="space-y-3">
                                            {paymentMethods.map((p) => (
                                                <button
                                                    key={p.value}
                                                    onClick={() => setPayment(p.value)}
                                                    className={cn(
                                                        "flex w-full items-center gap-3 rounded-lg border p-4 transition-all text-left",
                                                        payment === p.value ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                                                    )}
                                                >
                                                    <span className="text-xl">{p.icon}</span>
                                                    <span className="text-foreground font-medium">{p.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                        <Separator />
                                        <div className="space-y-2">
                                            <Label>Coupon Code</Label>
                                            <div className="flex gap-2">
                                                <Input placeholder="Enter coupon" value={coupon} onChange={(e) => setCoupon(e.target.value)} className="bg-secondary/50" />
                                                <Button variant="outline" size="sm">Apply</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        )}

                        {/* Step 4: Confirm */}
                        {step === 4 && (
                            <ScrollReveal>
                                <Card className="border-border bg-card/50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 font-display text-lg"><CheckCircle className="h-5 w-5 text-primary" /> Review & Confirm</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between"><span className="text-muted-foreground">Branch</span><span className="text-foreground font-medium">{branches.find(b => b.value === branch)?.label}</span></div>
                                            <Separator />
                                            <div className="flex justify-between"><span className="text-muted-foreground">Vehicle</span><span className="text-foreground font-medium">{vehicles.find(v => v.value === vehicle)?.label}</span></div>
                                            <Separator />
                                            <div className="flex justify-between"><span className="text-muted-foreground">Service</span><span className="text-foreground font-medium">{services.find(s => s.value === service)?.label} — {services.find(s => s.value === service)?.price}</span></div>
                                            {selectedAddOns.length > 0 && (
                                                <>
                                                    <Separator />
                                                    <div className="flex justify-between"><span className="text-muted-foreground">Add-ons</span><span className="text-foreground font-medium">{selectedAddOns.map(a => addOns.find(ao => ao.value === a)?.label).join(", ")}</span></div>
                                                </>
                                            )}
                                            <Separator />
                                            <div className="flex justify-between"><span className="text-muted-foreground">Date & Time</span><span className="text-foreground font-medium">{date?.toLocaleDateString()} at {timeSlot}</span></div>
                                            <Separator />
                                            <div className="flex justify-between"><span className="text-muted-foreground">Payment</span><span className="text-foreground font-medium">{paymentMethods.find(p => p.value === payment)?.label}</span></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </ScrollReveal>
                        )}

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6">
                            <Button variant="outline" onClick={() => setStep(step - 1)} disabled={step === 0} className="gap-2">
                                <ArrowLeft className="h-4 w-4" /> Back
                            </Button>
                            {step < 4 ? (
                                <Button  onClick={() => setStep(step + 1)} disabled={!canNext()} className="gap-2">
                                    Next <ArrowRight className="h-4 w-4" />
                                </Button>
                            ) : (
                                <Button  onClick={handleSubmit} className="gap-2">
                                    Confirm Booking <CheckCircle className="h-4 w-4" />
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default EnhancedBook;
