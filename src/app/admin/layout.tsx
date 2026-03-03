"use client";

import type { ReactNode } from "react";
import { useState, useCallback, useEffect } from "react";
import AdminSidebar from "@/components/sidebar/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface AdminLayoutProps {
    children: ReactNode;
}

function ThemeToggleAdmin() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggle = useCallback(() => {
        const next = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(next);
    }, [resolvedTheme, setTheme]);

    if (!mounted) return null;

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
    );
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <SidebarProvider suppressHydrationWarning>
            <div className="flex min-h-screen w-full">
                <AdminSidebar />
                <main className="flex flex-1 flex-col overflow-hidden">
                    <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
                        <SidebarTrigger />
                        <ThemeToggleAdmin />
                    </header>
                    <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}
