import { Droplets } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
    return (
        <footer className="border-t border-border bg-card/50 py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <div className="mb-4 flex items-center gap-2">
                            <Droplets className="h-6 w-6 text-primary" />
                            <span className="font-display text-lg font-bold text-foreground">PremiumWash</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Premium auto detailing services for discerning car owners.
                        </p>
                    </div>

                    {[
                        { title: "Services", links: ["Quick Shine", "Full Care", "Showroom Detail", "Custom Packages"] },
                        { title: "Company", links: ["About Us", "Careers", "Blog", "Reviews"] },
                        { title: "Support", links: ["Contact", "FAQ", "Locations", "Gift Cards"] },
                    ].map((col) => (
                        <div key={col.title}>
                            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">{col.title}</h4>
                            <ul className="space-y-2">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="mt-12 mb-6" />
                <div className="text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} PremiumWash. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
