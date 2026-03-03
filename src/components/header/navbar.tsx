"use client";

import { useOptimistic, useCallback, useEffect, useState, useTransition } from "react";
import { Droplets, Phone, Menu, Sun, Moon } from "lucide-react";
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
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
] as const;

type NavLink = (typeof NAV_LINKS)[number];

function ThemeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();
    const [isPending, startTransition] = useTransition();
    const [optimisticTheme, setOptimisticTheme] = useOptimistic(resolvedTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggle = useCallback(() => {
        const next = optimisticTheme === "dark" ? "light" : "dark";
        startTransition(() => {
            setOptimisticTheme(next);
            setTheme(next);
        });
    }, [optimisticTheme, setTheme, setOptimisticTheme]);

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            disabled={isPending}
            aria-label={mounted ? `Switch to ${optimisticTheme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
            className={cn("h-9 w-9", className)}
        >
            <Sun
                className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                aria-hidden="true"
            />
            <Moon
                className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                aria-hidden="true"
            />
        </Button>
    );
}

function MobileThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isPending, startTransition] = useTransition();
    const [optimisticTheme, setOptimisticTheme] = useOptimistic(resolvedTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggle = useCallback(() => {
        const next = optimisticTheme === "dark" ? "light" : "dark";
        startTransition(() => {
            setOptimisticTheme(next);
            setTheme(next);
        });
    }, [optimisticTheme, setTheme, setOptimisticTheme]);

    return (
        <Button
            variant="outline"
            className="w-full mb-3"
            onClick={toggle}
            disabled={isPending}
            aria-label={mounted ? `Switch to ${optimisticTheme === "dark" ? "light" : "dark"} mode` : "Toggle theme"}
        >
            {mounted && optimisticTheme === "dark" ? (
                <>
                    <Sun className="mr-2 h-4 w-4" aria-hidden="true" />
                    Light Mode
                </>
            ) : (
                <>
                    <Moon className="mr-2 h-4 w-4" aria-hidden="true" />
                    Dark Mode
                </>
            )}
        </Button>
    );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
    return (
        <>
            {NAV_LINKS.map((link: NavLink) => (
                <a
                    key={link.label}
                    href={link.href}
                    onClick={onClick}
                    className={cn(
                        "rounded-lg px-4 py-3 text-sm text-muted-foreground",
                        "transition-colors hover:bg-accent/50 hover:text-primary",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    )}
                >
                    {link.label}
                </a>
            ))}
        </>
    );
}

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleBookNow = useCallback(() => {
        startTransition(() => {
            setOpen(false);
            router.push("/book-appointment");
        });
    }, [router]);

    const handleNavClick = useCallback(() => setOpen(false), []);

    return (
        <nav
            role="navigation"
            aria-label="Main navigation"
            className={cn(
                "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
                scrolled ? "bg-background/90 shadow-md backdrop-blur-md" : "bg-transparent"
            )}
        >
            <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
                <a
                    href="#"
                    className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    aria-label="PremiumWash home"
                >
                    <Droplets className="h-6 w-6 text-primary sm:h-7 sm:w-7" aria-hidden="true" />
                    <span className="font-display text-lg font-bold text-foreground sm:text-xl">
                        PremiumWash
                    </span>
                </a>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-1">
                        {NAV_LINKS.map((link: NavLink) => (
                            <NavigationMenuItem key={link.label}>
                                <NavigationMenuLink
                                    href={link.href}
                                    className={cn(
                                        "rounded-md px-3 py-2 text-sm text-muted-foreground",
                                        "transition-colors hover:bg-accent/50 hover:text-primary",
                                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
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
                    <a
                        href="tel:5551234567"
                        className="flex items-center gap-2 rounded-md px-1 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Call us at (555) 123-4567"
                    >
                        <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                        <span>(555) 123-4567</span>
                    </a>

                    <ThemeToggle />

                    <Button
                        size="sm"
                        className="ml-2"
                        onClick={handleBookNow}
                        disabled={isPending}
                        aria-busy={isPending}
                    >
                        Book Now
                    </Button>
                </div>

                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            aria-label="Open navigation menu"
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        id="mobile-menu"
                        side="right"
                        className="w-[280px] border-border bg-card sm:w-72"
                    >
                        <SheetHeader>
                            <SheetTitle className="flex items-center gap-2">
                                <Droplets className="h-5 w-5 text-primary" aria-hidden="true" />
                                <span className="font-display">PremiumWash</span>
                            </SheetTitle>
                        </SheetHeader>

                        <Separator className="my-4" />

                        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                            <NavLinks onClick={handleNavClick} />
                        </nav>

                        <Separator className="my-4" />

                        <MobileThemeToggle />

                        <Button
                            className="w-full"
                            onClick={handleBookNow}
                            disabled={isPending}
                            aria-busy={isPending}
                        >
                            Book Now
                        </Button>

                        <a
                            href="tel:5551234567"
                            className="mt-4 flex items-center justify-center gap-2 rounded-md py-1 text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                            aria-label="Call us at (555) 123-4567"
                        >
                            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                            (555) 123-4567
                        </a>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
