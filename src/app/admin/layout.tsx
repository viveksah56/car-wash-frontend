'use client'

import type { ReactNode, Metadata } from 'react'
import { BarChart3, Calendar, LayoutGrid, Settings, Users } from 'lucide-react'
import ReusableSidebar from '@/components/sidebar/reusable-sidebar'

interface AdminLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: 'Admin Dashboard - Car Wash',
    description: 'Manage bookings, staff, analytics, and business operations for your car wash service.',
}

const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '/admin' },
    { icon: Calendar, label: 'Bookings', href: '/admin/bookings' },
    { icon: Users, label: 'Staff', href: '/admin/staff' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
]

const settingsItems = [
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

const user = {
    name: 'Bibek',
    email: 'admin@example.com',
    avatar: '',
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <ReusableSidebar
            menuItems={menuItems}
            settingsItems={settingsItems}
            appName="Admin"
            appLogo="/file.svg"
            user={user}
        >
            {children}
        </ReusableSidebar>
    )
}
