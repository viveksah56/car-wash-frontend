"use client";

import {
    LayoutGrid,
    Calendar,
    Users,
    BarChart3,
    Settings,
    User,
    LogOut,
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
    SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", href: "/admin" },
    { icon: Calendar, label: "Bookings", href: "/admin/bookings" },
    { icon: Users, label: "Staff", href: "/admin/staff" },
    { icon: BarChart3, label: "Analytics", href: "/admin/analytics" },
];

const settingsItems = [
    { icon: Settings, label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    const activeHref = useMemo(
        () => [...menuItems, ...settingsItems].find((item) => pathname === item.href)?.href ?? null,
        [pathname]
    );

    return (
        <Sidebar collapsible="icon" className="bg-sidebar">
            <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="h-10 px-2 hover:bg-sidebar-accent"
                        >
                            <Link href="/admin" className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary flex-shrink-0">
                                    <LayoutGrid className="h-4 w-4" />
                                </div>
                                <span className="font-semibold text-sm text-sidebar-foreground group-data-[collapsible=icon]:hidden truncate">
                                    Admin
                                </span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="px-2 py-4">
                <SidebarGroup className="px-0">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={activeHref === item.href}
                                        tooltip={item.label}
                                        className={cn(
                                            "px-3 py-2 transition-all duration-200 ease-out",
                                            activeHref === item.href
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-sidebar-foreground hover:bg-sidebar-accent"
                                        )}
                                    >
                                        <Link href={item.href} className="flex items-center gap-3 w-full">
                                            <item.icon className="h-4 w-4 flex-shrink-0" />
                                            <span className="text-sm group-data-[collapsible=icon]:hidden">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator className="my-4 mx-0" />

                <SidebarGroup className="px-0">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            {settingsItems.map((item) => (
                                <SidebarMenuItem key={item.href}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={activeHref === item.href}
                                        tooltip={item.label}
                                        className={cn(
                                            "px-3 py-2 transition-all duration-200 ease-out",
                                            activeHref === item.href
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-sidebar-foreground hover:bg-sidebar-accent"
                                        )}
                                    >
                                        <Link href={item.href} className="flex items-center gap-3 w-full">
                                            <item.icon className="h-4 w-4 flex-shrink-0" />
                                            <span className="text-sm group-data-[collapsible=icon]:hidden">
                                                {item.label}
                                            </span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border p-3 mt-auto">
                <SidebarGroup className="px-0">
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-1">
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    tooltip="Logout"
                                    className="px-3 py-2 text-sidebar-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200"
                                >
                                    <button className="flex items-center gap-3 w-full cursor-pointer">
                                        <LogOut className="h-4 w-4 flex-shrink-0" />
                                        <span className="text-sm group-data-[collapsible=icon]:hidden">
                                            Logout
                                        </span>
                                    </button>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    );
}
