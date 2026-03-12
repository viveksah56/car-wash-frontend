'use client'

import { cn } from '@/lib/utils'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import AppSidebarFooter from '@/components/sidebar/sidebar-footer'

interface SidebarItem {
    icon: React.ComponentType<{ className?: string }>
    label: string
    href: string
}

interface AppSidebarProps {
    sidebarItems: SidebarItem[]
    settingsItems?: SidebarItem[]
    appName?: string
    appLogo?: string
    user?: {
        name: string
        email: string
        avatar: string
    }
    className?: string
    [key: string]: any
}

export default function AppSidebar({
    sidebarItems,
    settingsItems = [],
    appName = 'Admin',
    appLogo = '/file.svg',
    user = { name: 'User', email: '', avatar: '' },
    className,
    ...props
}: AppSidebarProps) {
    const pathname = usePathname()

    const activeHref = useMemo(() => {
        const allItems = [...sidebarItems, ...settingsItems]
        return allItems.find((item) => pathname.startsWith(item.href))?.href ?? null
    }, [pathname, sidebarItems, settingsItems])

    const renderMenuItems = (items: SidebarItem[]) =>
        items.map((item) => (
            <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    tooltip={item.label}
                    isActive={activeHref === item.href}
                    className={cn(
                        'px-3 py-2 transition-all duration-200 ease-out',
                        activeHref === item.href
                            ? 'bg-primary/10 text-primary font-medium'
                            : 'text-sidebar-foreground hover:bg-sidebar-accent'
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
        <Sidebar 
            collapsible="icon" 
            className={cn('bg-sidebar border-r border-sidebar-border', className)}
            defaultOpen={false}
            {...props}
        >
            <SidebarHeader className="border-b border-sidebar-border px-4 py-3">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton 
                            asChild 
                            className={cn(
                                'h-10 px-2 transition-colors duration-200',
                                'hover:bg-sidebar-accent active:bg-sidebar-accent/80'
                            )}
                        >
                            <Link 
                                href={sidebarItems[0]?.href || '/'} 
                                className="flex items-center gap-3 w-full min-w-0"
                            >
                                <div className={cn(
                                    'flex h-8 w-8 items-center justify-center rounded-md',
                                    'bg-primary/10 text-primary flex-shrink-0'
                                )}>
                                    <Image
                                        src={appLogo}
                                        alt={appName}
                                        width={32}
                                        height={32}
                                        priority
                                        className="w-5 h-5 object-contain"
                                    />
                                </div>
                                <span className={cn(
                                    'font-semibold text-sm text-sidebar-foreground',
                                    'group-data-[collapsible=icon]:hidden truncate'
                                )}>
                                    {appName}
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
                            {renderMenuItems(sidebarItems)}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {settingsItems.length > 0 && (
                    <SidebarGroup className="px-0 mt-auto">
                        <SidebarGroupLabel className="px-3 text-xs font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">
                            Settings
                        </SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className="gap-1">
                                {renderMenuItems(settingsItems)}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                )}
            </SidebarContent>

            <SidebarFooter className="border-t border-sidebar-border p-3">
                <AppSidebarFooter user={user} />
            </SidebarFooter>
        </Sidebar>
    )
}
