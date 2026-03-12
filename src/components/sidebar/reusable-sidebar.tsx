"use client"

import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar"
import {Separator} from "@/components/ui/separator"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import AppSidebar from "@/components/sidebar/app-sidebar"

interface SidebarItem {
    icon: React.ComponentType<{ className?: string }>
    label: string
    href: string
}

interface ReusableSidebarProps {
    menuItems: SidebarItem[]
    settingsItems: SidebarItem[]
    children?: React.ReactNode,

    [key: string]: any
}

export default function ReusableSidebar({
                                            menuItems,
                                            settingsItems,
                                            children,
                                            ...props
                                        }: ReusableSidebarProps) {
    return (
        <SidebarProvider suppressHydrationWarning {...props}>
            <AppSidebar sidebarItems={menuItems} settingsItems={settingsItems}/>

            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger/>

                    <Separator orientation="vertical" className="h-4"/>

                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem className="hidden md:block">
                                <BreadcrumbLink href="#">Admin</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator className="hidden md:block"/>

                            <BreadcrumbItem>
                                <BreadcrumbPage>Dashboard</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </header>

                <main className="flex flex-1 flex-col p-4">{children}</main>
            </SidebarInset>
        </SidebarProvider>
    )
}