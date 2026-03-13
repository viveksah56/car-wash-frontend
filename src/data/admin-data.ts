import ReusableSidebar from "@/components/sidebar/reusable-sidebar";
import {BarChart3, Calendar, LayoutGrid, Settings, Users} from "lucide-react";

export const menuItems = [
    { icon: LayoutGrid, label: 'Dashboard', href: '/admin' },
    { icon: Calendar, label: 'Bookings', href: '/admin/bookings' },
    { icon: Users, label: 'Staff', href: '/admin/staff' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
]

export const settingsItems = [
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export const user = {
    name: 'Bibek',
    email: 'admin@example.com',
    avatar: '',
}