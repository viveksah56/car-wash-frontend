import { CalendarCheck, Car, Sparkles } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import ScrollReveal from "@/components/animation/scroll-reveal";


const steps = [
    {
        icon: CalendarCheck,
        title: "1. Pick a Detail",
        description: "Choose your preferred service package and schedule a time that works for you.",
    },
    {
        icon: Car,
        title: "2. We Handle the Rest",
        description: "Our expert technicians treat your car with meticulous care and premium products.",
    },
    {
        icon: Sparkles,
        title: "3. Drive in Style",
        description: "Pick up your freshly detailed vehicle and enjoy that showroom finish.",
    },
];

const HowItWorksSection = () => {
    return (
        <section id="how-it-works" className="py-24">
            <div className="container mx-auto px-4 lg:px-8">
                <ScrollReveal className="mb-16 text-center">
                    <h2 className="mb-4 font-display text-4xl font-bold text-foreground md:text-5xl">
                        How It <span className="text-gradient">Works</span>
                    </h2>
                    <p className="mx-auto max-w-xl text-muted-foreground">
                        Getting your car detailed has never been easier. Three simple steps.
                    </p>
                </ScrollReveal>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, i) => (
                        <ScrollReveal key={step.title} delay={i * 150}>
                            <Card className="group h-full border-border bg-card/50 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-glow">
                                <CardHeader className="items-center">
                                    <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                                        <step.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <CardTitle className="font-display text-lg">{step.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="leading-relaxed">{step.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
