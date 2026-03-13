
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Bookings - Car Wash Admin',
  description: 'Manage and view all car wash bookings, schedules, and customer reservations.',
}

interface BookingsLayoutProps {
  children: ReactNode
}

export default function BookingsLayout({ children }: BookingsLayoutProps) {
  return children
}
