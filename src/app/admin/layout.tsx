"use client";

import type { ReactNode } from "react";
import AdminSidebar from "@/components/sidebar/admin-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const { theme, setTheme } = useTheme();

    return (
        <SidebarProvider suppressHydrationWarning>
            <div className="flex min-h-screen w-full">
                <AdminSidebar />
                <main className="flex flex-1 flex-col overflow-hidden">
                    <header className="flex items-center justify-between border-b border-border bg-background px-4 py-3">
                        <SidebarTrigger />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                        >
                            {theme === "dark" ? (
                                <Sun className="h-4 w-4" />
                            ) : (
                                <Moon className="h-4 w-4" />
                            )}
                        </Button>
                    </header>
                    <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
                        {children}
                    </div>
                </main>
            </div>
        </SidebarProvider>
    );
}