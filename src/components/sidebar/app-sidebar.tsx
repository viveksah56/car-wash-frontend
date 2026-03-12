"use client"

import { cn } from "@/lib/utils"
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
} from "@/components/ui/sidebar"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

import AppSidebarFooter from "@/components/sidebar/sidebar-footer"

interface SidebarItem {
    icon: React.ComponentType<{ className?: string }>
    label: string
    href: string
}

interface AppSidebarProps {
    sidebarItems: SidebarItem[]
    settingsItems: SidebarItem[]
    className?: string
}

export default function AppSidebar({
                                       sidebarItems,
                                       settingsItems,
                                       className,
                                       ...props
                                   }: AppSidebarProps) {
    const pathname = usePathname()

    const activeHref = useMemo(() => {
        const allItems = [...sidebarItems, ...settingsItems]
        return allItems.find((item) => pathname.startsWith(item.href))?.href ?? null
    }, [pathname, sidebarItems, settingsItems])

    const renderMenu = (items: SidebarItem[]) =>
        items.map((item) => (
            <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    isActive={activeHref === item.href}
                    className={cn(
                        "px-3 py-2 transition-all duration-200 ease-out",
                        activeHref === item.href
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent"
                    )}
                >
                    <Link href={item.href} className="flex items-center gap-3 w-full">
                        <item.icon className="h-4 w-4 shrink-0" />
                        <span className="text-sm group-data-[collapsible=icon]:hidden">
              {item.label}
            </span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        ))

    return (
        <Sidebar collapsible="icon" className={cn("bg-sidebar", className)} {...props}>
            <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className="h-10 px-2 hover:bg-sidebar-accent">
                            <Link href="/admin" className="flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary flex-shrink-0">
                                    <Image src="/file.svg" alt="File" width={32} height={32} />
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
                        <SidebarMenu className="gap-1">{renderMenu(sidebarItems)}</SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border p-3 mt-auto">
                <SidebarGroup className="px-0">
                    <SidebarGroupContent>
                        <AppSidebarFooter
                            user={{
                                name: "Bibek",
                                email: "",
                                avatar: "",
                            }}
                        />
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarFooter>
        </Sidebar>
    )
}