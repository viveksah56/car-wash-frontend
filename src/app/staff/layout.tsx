'use client'

import type { ReactNode } from 'react'
import { BarChart3, Calendar, LayoutGrid, LogOut, Settings, Users } from 'lucide-react'
import ReusableSidebar from '@/components/sidebar/reusable-sidebar'
import {Metadata} from "next";

interface StaffLayoutProps {
    children: ReactNode
}



const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '/staff' },
    { icon: Calendar, label: 'Schedule', href: '/staff/schedule' },
    { icon: Users, label: 'Team', href: '/staff/team' },
    { icon: BarChart3, label: 'Performance', href: '/staff/performance' },
]

const settingsItems = [
    { icon: Settings, label: 'Settings', href: '/staff/settings' },
]

const user = {
    name: 'John Smith',
    email: 'john.smith@example.com',
    avatar: '',
}

export default function StaffLayout({ children }: StaffLayoutProps) {
    return (
        <ReusableSidebar
            menuItems={menuItems}
            settingsItems={settingsItems}
            appName="Staff"
            appLogo="/file.svg"
            user={user}
        >
            {children}
        </ReusableSidebar>
    )
}
