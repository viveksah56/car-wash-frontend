"use client"

import type {ReactNode} from "react"
import {BarChart3, Calendar, LayoutGrid, Settings, Users} from "lucide-react"
import ReusableSidebar from "@/components/sidebar/reusable-sidebar"

interface AdminLayoutProps {
    children: ReactNode
}

const menuItems = [
    {icon: LayoutGrid, label: "Dashboard", href: "/admin"},
    {icon: Calendar, label: "Bookings", href: "/admin/bookings"},
    {icon: Users, label: "Staff", href: "/admin/staff"},
    {icon: BarChart3, label: "Analytics", href: "/admin/analytics"},
]

const settingsItems = [
    {icon: Settings, label: "Settings", href: "/admin/settings"},
]

export default function AdminLayout({ children }: AdminLayoutProps) {
    return (
        <ReusableSidebar menuItems={menuItems} settingsItems={settingsItems}>
            {children}
        </ReusableSidebar>
    )
}