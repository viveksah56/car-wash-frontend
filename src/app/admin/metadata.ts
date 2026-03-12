import type { Metadata } from 'next'

export const adminMetadata: Metadata = {
  title: 'Admin Dashboard - Car Wash',
  description: 'Manage bookings, staff, analytics, and business operations for your car wash service.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carwash.com/admin',
    siteName: 'Car Wash Admin',
    title: 'Admin Dashboard - Car Wash',
    description: 'Manage bookings, staff, analytics, and business operations for your car wash service.',
  },
}

export const staffMetadata: Metadata = {
  title: 'Staff Dashboard - Car Wash',
  description: 'Access your schedule, team information, performance metrics, and staff management tools.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://carwash.com/staff',
    siteName: 'Staff Portal',
    title: 'Staff Dashboard - Car Wash',
    description: 'Access your schedule, team information, performance metrics, and staff management tools.',
  },
}
