"use client";

import { Droplets, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const handleBookNow = useCallback(() => {
        setOpen(false);
        router.push("/book-appointment");
    }, [router]);

    const handleNavClick = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <nav
            className={cn(
                "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
                scrolled ? "bg-black/90 shadow-md backdrop-blur-md" : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:py-4 lg:px-8">
                <a href="#" className="flex items-center gap-2">
                    <Droplets className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                    <span className="font-display text-lg font-bold text-foreground sm:text-xl">
            PremiumWash
          </span>
                </a>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-1">
                        {navLinks.map((link) => (
                            <NavigationMenuItem key={link.label}>
                                <NavigationMenuLink
                                    href={link.href}
                                    className={cn(
                                        "rounded-md px-3 py-2 text-sm text-muted-foreground",
                                        "transition-colors hover:bg-accent/50 hover:text-primary",
                                        "lg:px-4"
                                    )}
                                >
                                    {link.label}
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="hidden items-center gap-3 md:flex">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">(555) 123-4567</span>
                    <Button size="sm" className="ml-2" onClick={handleBookNow}>
                        Book Now
                    </Button>
                </div>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon" aria-label="Open menu">
                            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-[280px] border-border bg-card sm:w-72"
                    >
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-2">
                                <Droplets className="h-5 w-5 text-primary" />
                                <span className="font-display">PremiumWash</span>
                            </SheetTitle>
                        </SheetHeader>
                        <Separator className="my-4" />
                        <nav className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={handleNavClick}
                                    className={cn(
                                        "rounded-lg px-4 py-3 text-sm text-muted-foreground",
                                        "transition-colors hover:bg-accent/50 hover:text-primary"
                                    )}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                        <Separator className="my-4" />
                        <Button className="w-full" onClick={handleBookNow}>
                            Book Now
                        </Button>
                        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <Phone className="h-4 w-4 text-primary" />
                            (555) 123-4567
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}