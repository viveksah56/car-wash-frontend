'use client'

import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
} from 'lucide-react'

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@/components/ui/sidebar'

import { Separator } from '@/components/ui/separator'
import ThemeToggle from '@/components/theme/theme-toggle'

interface SidebarFooterProps {
    user: {
        name: string
        email: string
        avatar: string
    }
}

export default function AppSidebarFooter({ user }: SidebarFooterProps) {
    const { isMobile } = useSidebar()

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <Popover>
                    <PopoverTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground w-full"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="rounded-lg">
                                    {user.name?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>

                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>

                            <ChevronsUpDown className="ml-auto size-4 shrink-0" />
                        </SidebarMenuButton>
                    </PopoverTrigger>

                    <PopoverContent
                        align="end"
                        side={isMobile ? "bottom" : "right"}
                        sideOffset={8}
                        className="w-56 rounded-lg p-1"
                    >
                        <div className="flex items-center gap-2 px-2 py-2">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="rounded-lg">
                                    {user.name?.charAt(0)}
                                </AvatarFallback>
                            </Avatar>

                            <div className="grid text-sm leading-tight">
                                <span className="truncate font-medium">{user.name}</span>
                                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
                            </div>
                        </div>

                        <div className="mt-1 flex flex-col space-y-1">
                            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent">
                                <Sparkles className="size-4" />
                                Upgrade to Pro
                            </button>

                            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent">
                                <BadgeCheck className="size-4" />
                                Account
                            </button>

                            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent">
                                <CreditCard className="size-4" />
                                Billing
                            </button>

                            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent">
                                <Bell className="size-4" />
                                Notifications
                            </button>

                            <Separator className="my-2" />

                            <div className="px-2 py-2">
                                <p className="text-xs font-medium text-muted-foreground mb-2">Theme</p>
                                <ThemeToggle variant="icon" className="h-8 w-8" />
                            </div>

                            <Separator className="my-2" />

                            <button className="flex items-center gap-2 rounded-md px-2 py-2 text-sm text-red-500 hover:bg-accent">
                                <LogOut className="size-4" />
                                Log out
                            </button>
                        </div>
                    </PopoverContent>
                </Popover>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
