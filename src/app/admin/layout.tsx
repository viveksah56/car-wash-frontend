'use client'
import type {ReactNode} from 'react'
import ReusableSidebar from '@/components/sidebar/reusable-sidebar'
import {Metadata} from "next";
import {menuItems, settingsItems, user} from "@/data/admin-data";

interface AdminLayoutProps {
    children: ReactNode
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
