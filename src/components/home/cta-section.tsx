"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ScrollReveal from "@/components/animation/scroll-reveal";
import Link from "next/link";
import {cn} from "@/lib/utils";

const CTASection = () => {
  return (
      <section id="contact" className="py-24 ">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <Card className="relative overflow-hidden border-0 gradient-primary p-12 text-center md:p-16">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/10" />
              <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary-foreground/10" />

              <div className="relative z-10">
                <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
                  Ready for a Showroom Finish?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-primary-foreground/80">
                  Book your premium detailing session today and give your car the
                  treatment it deserves.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button
                      variant="outline"
                      className=" border-primary-foreground/30 bg-primary-foreground font-semibold text-background hover:bg-primary-foreground/90 hover:text-background"
                  >
                    Book Your Detail
                  </Button>
                  <Button
                    asChild
                    className="border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                    >
                    <Link href="tel:+15551234567" className={cn()}>
                      Call (555) 123-4567
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>
  );
};

export default CTASection;