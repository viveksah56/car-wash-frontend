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
import { useCallback, useMemo } from 'react'

interface MenuAction {
    icon: React.ComponentType<{ className?: string }>
    label: string
    onClick?: () => void
    variant?: 'default' | 'destructive'
}

interface SidebarFooterProps {
    user: {
        name: string
        email: string
        avatar: string
    }
    actions?: MenuAction[]
    onLogout?: () => void
}

export default function AppSidebarFooter({
    user,
    actions = [],
    onLogout,
}: SidebarFooterProps) {
    const { isMobile } = useSidebar()

    const defaultActions: MenuAction[] = useMemo(
        () => [
            { icon: Sparkles, label: 'Upgrade to Pro' },
            { icon: BadgeCheck, label: 'Account' },
            { icon: CreditCard, label: 'Billing' },
            { icon: Bell, label: 'Notifications' },
        ],
        []
    )

    const menuActions = actions.length > 0 ? actions : defaultActions
    const initials = useMemo(() => user.name?.charAt(0)?.toUpperCase() || 'U', [user.name])

    const handleAction = useCallback((action: MenuAction) => {
        if (action.onClick) {
            action.onClick()
        }
    }, [])

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
                                <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-semibold">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user.name}</span>
                                {user.email && (
                                    <span className="truncate text-xs text-muted-foreground">
                                        {user.email}
                                    </span>
                                )}
                            </div>

                            <ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
                        </SidebarMenuButton>
                    </PopoverTrigger>

                    <PopoverContent
                        align="end"
                        side={isMobile ? 'bottom' : 'right'}
                        sideOffset={8}
                        className="w-56 rounded-lg p-1"
                    >
                        <div className="flex items-center gap-3 px-2 py-3 rounded-md hover:bg-accent transition-colors">
                            <Avatar className="h-10 w-10 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name} />
                                <AvatarFallback className="rounded-lg bg-primary/10 text-primary font-semibold">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>

                            <div className="grid flex-1 text-sm leading-tight min-w-0">
                                <span className="truncate font-semibold">{user.name}</span>
                                {user.email && (
                                    <span className="truncate text-xs text-muted-foreground">
                                        {user.email}
                                    </span>
                                )}
                            </div>
                        </div>

                        <Separator className="my-2" />

                        <div className="flex flex-col space-y-1">
                            {menuActions.map((action) => (
                                <button
                                    key={action.label}
                                    onClick={() => handleAction(action)}
                                    className={`flex items-center gap-3 rounded-md px-2 py-2 text-sm transition-colors ${
                                        action.variant === 'destructive'
                                            ? 'text-destructive hover:bg-destructive/10'
                                            : 'text-foreground hover:bg-accent'
                                    }`}
                                >
                                    <action.icon className="h-4 w-4 shrink-0" />
                                    <span className="flex-1 text-left">{action.label}</span>
                                </button>
                            ))}
                        </div>

                        <Separator className="my-2" />

                        <div className="px-2 py-3 flex items-center justify-between">
                            <span className="text-xs font-semibold text-muted-foreground">
                                Theme
                            </span>
                            <ThemeToggle variant="icon" className="h-8 w-8" />
                        </div>

                        <Separator className="my-2" />

                        <button
                            onClick={onLogout}
                            className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-destructive hover:bg-destructive/10 transition-colors w-full"
                        >
                            <LogOut className="h-4 w-4 shrink-0" />
                            <span className="flex-1 text-left">Log out</span>
                        </button>
                    </PopoverContent>
                </Popover>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
