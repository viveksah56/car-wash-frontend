'use client'

import { SectionCards } from '@/components/dashboard/section-cards'
import { DataTable } from '@/components/dashboard/data-table'
import { Button } from '@/components/ui/button'
import { Plus, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const staffScheduleData = [
  {
    id: 1,
    header: 'Monday Shift',
    type: 'Regular',
    status: 'Scheduled',
    target: '8hrs',
    limit: '8hrs',
    reviewer: 'Manager: Sarah',
  },
  {
    id: 2,
    header: 'Team Training',
    type: 'Development',
    status: 'Pending',
    target: '2hrs',
    limit: '3hrs',
    reviewer: 'HR Team',
  },
  {
    id: 3,
    header: 'Client Meeting',
    type: 'Client Work',
    status: 'Confirmed',
    target: '1hr',
    limit: '1.5hrs',
    reviewer: 'Client: ABC Corp',
  },
  {
    id: 4,
    header: 'Project Deadline',
    type: 'Project',
    status: 'In Progress',
    target: '80%',
    limit: '100%',
    reviewer: 'Project Lead',
  },
  {
    id: 5,
    header: 'Lunch Break',
    type: 'Break',
    status: 'Scheduled',
    target: '1hr',
    limit: '1hr',
    reviewer: 'System',
  },
  {
    id: 6,
    header: 'Code Review',
    type: 'Technical',
    status: 'Assigned',
    target: '2hrs',
    limit: '2.5hrs',
    reviewer: 'Tech Lead: Mike',
  },
  {
    id: 7,
    header: 'One-on-One',
    type: 'Meeting',
    status: 'Scheduled',
    target: '30min',
    limit: '1hr',
    reviewer: 'Manager: Sarah',
  },
  {
    id: 8,
    header: 'Documentation',
    type: 'Administrative',
    status: 'Pending Review',
    target: '60%',
    limit: '100%',
    reviewer: 'Team Lead',
  },
]

export default function StaffDashboard() {
  return (
    <div className="flex flex-col h-full gap-8 pb-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted-foreground">
            Manage your schedule and track performance.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search schedule..."
              className="w-40 sm:w-56 lg:w-64 pl-10 focus-visible:ring-primary text-sm"
            />
          </div>
          <Button size="sm" className="gap-2 whitespace-nowrap">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Event</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>

      <SectionCards />

      <div className="w-full">
        <DataTable data={staffScheduleData} />
      </div>
    </div>
  )
}
