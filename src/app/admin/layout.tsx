"use client";

import type { ReactNode } from "react";
import { useEffect, useState, useCallback } from "react";
import AdminSidebar from "@/components/sidebar/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface AdminLayoutProps {
    children: ReactNode;
}

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleThemeToggle = useCallback(() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    }, [resolvedTheme, setTheme]);

    if (!isMounted) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
            className="h-9 w-9"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <SidebarProvider suppressHydrationWarning>
            <div className="flex min-h-screen w-full bg-background">
                <AdminSidebar />
                <main className="flex flex-1 flex-col overflow-hidden">
                    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/95 px-4 sm:px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                            <SidebarTrigger className="h-8 w-8 sm:h-9 sm:w-9" />
                            <div className="hidden sm:block h-6 w-px bg-border" />
                            <h1 className="text-sm sm:text-base font-semibold text-foreground truncate">
                                Admin Dashboard
                            </h1>
                        </div>
                        <ThemeToggle />
                    </header>
                    <div className="flex-1 overflow-auto">
                        <div className="p-4 sm:p-6 lg:p-8">
                            <div className="mx-auto w-full">
                                {children}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
