"use client";

import {
    LayoutGrid,
    Calendar,
    Users,
    BarChart3,
    Settings,
    User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/admin" },
    { icon: Calendar, label: "Bookings", href: "/admin/bookings" },
    { icon: Users, label: "Staff Management", href: "/admin/staff" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    const activeHref = useMemo(
        () => menuItems.find((item) => pathname === item.href)?.href ?? null,
        [pathname]
    );

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="border-b border-border p-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="h-10"
                        >
                            <Link href="/admin" className="flex items-center gap-3">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <User className="h-5 w-5" />
                                </div>
                                <span className="font-bold text-foreground group-data-[collapsible=icon]:hidden">Admin Panel</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={activeHref === item.href}
                                        tooltip={item.label}
                                        className={cn(
                                            "gap-3 transition-colors duration-150",
                                            activeHref === item.href &&
                                            "bg-accent font-medium text-accent-foreground"
                                        )}
                                    >
                                        <Link href={item.href} className="flex items-center gap-3">
                                            <item.icon className="h-4 w-4 shrink-0" />
                                            <span>{item.label}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    tooltip="Account"
                                    className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
                                >
                                    <Link href="/admin/account" className="flex items-center gap-3">
                                        <User className="h-4 w-4 shrink-0" />
                                        <span>Account</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
}