import HeroSection from "@/components/home/hero-section";
import ServiceSection from "@/components/home/service-section";
import HowItWork from "@/components/home/how-it-work";
import CtaSection from "@/components/home/cta-section";
import ProofSection from "@/components/home/proof-section";
import TestimonialsSection from "@/components/home/testimonial-section";

export default function HomePage() {
    return (
        <div>
            <HeroSection/>
            <ServiceSection/>
            <HowItWork/>
            <CtaSection/>
            <TestimonialsSection/>
            <ProofSection/>
        </div>
    )
}