'use client'

import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import AppSidebar from '@/components/sidebar/app-sidebar'
import ThemeToggle from '@/components/theme/theme-toggle'
import { useMemo } from 'react'

interface SidebarItem {
    icon: React.ComponentType<{ className?: string }>
    label: string
    href: string
}

interface BreadcrumbItem {
    label: string
    href?: string
}

interface ReusableSidebarProps {
    menuItems: SidebarItem[]
    settingsItems?: SidebarItem[]
    children?: React.ReactNode
    appName?: string
    appLogo?: string
    user?: {
        name: string
        email: string
        avatar: string
    }
    breadcrumbs?: BreadcrumbItem[]
    [key: string]: any
}

export default function ReusableSidebar({
    menuItems,
    settingsItems = [],
    children,
    appName = 'Admin',
    appLogo = '/file.svg',
    user,
    breadcrumbs,
    ...props
}: ReusableSidebarProps) {
    const defaultBreadcrumbs = useMemo(() => {
        if (breadcrumbs) return breadcrumbs
        return [
            { label: appName, href: menuItems[0]?.href },
            { label: 'Dashboard' },
        ]
    }, [breadcrumbs, appName, menuItems])

    return (
        <SidebarProvider suppressHydrationWarning {...props}>
            <AppSidebar
                sidebarItems={menuItems}
                settingsItems={settingsItems}
                appName={appName}
                appLogo={appLogo}
                user={user}
            />

            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b bg-background px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className='-ml-1' />

                        <Separator orientation="vertical" className="h-4" />

                        <Breadcrumb>
                            <BreadcrumbList>
                                {defaultBreadcrumbs.map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <BreadcrumbItem
                                            className={index > 0 ? 'hidden md:block' : ''}
                                        >
                                            {item.href ? (
                                                <BreadcrumbLink href={item.href}>
                                                    {item.label}
                                                </BreadcrumbLink>
                                            ) : (
                                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                                            )}
                                        </BreadcrumbItem>

                                        {index < defaultBreadcrumbs.length - 1 && (
                                            <BreadcrumbSeparator
                                                className={index > 0 ? 'hidden md:block' : ''}
                                            />
                                        )}
                                    </div>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <div className="flex items-center gap-2">
                        <ThemeToggle variant="icon" />
                    </div>
                </header>

                <main className="flex flex-1 flex-col gap-4 p-4 md:p-6 lg:p-8">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    )
}
