'use client'

import { DataTable } from '@/components/dashboard/data-table'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Clock, Plus } from 'lucide-react'

const weeklySchedule = [
  {
    id: 1,
    header: 'Monday',
    type: '9:00 AM - 5:00 PM',
    status: 'Scheduled',
    target: '8hrs',
    limit: '8hrs',
    reviewer: 'Full Day',
  },
  {
    id: 2,
    header: 'Tuesday',
    type: '9:00 AM - 5:00 PM',
    status: 'Scheduled',
    target: '8hrs',
    limit: '8hrs',
    reviewer: 'Full Day',
  },
  {
    id: 3,
    header: 'Wednesday',
    type: '10:00 AM - 6:00 PM',
    status: 'Scheduled',
    target: '8hrs',
    limit: '8hrs',
    reviewer: 'Late Start',
  },
  {
    id: 4,
    header: 'Thursday',
    type: '9:00 AM - 5:00 PM',
    status: 'Scheduled',
    target: '8hrs',
    limit: '8hrs',
    reviewer: 'Full Day',
  },
  {
    id: 5,
    header: 'Friday',
    type: '9:00 AM - 4:00 PM',
    status: 'Scheduled',
    target: '7hrs',
    limit: '8hrs',
    reviewer: 'Early Leave',
  },
  {
    id: 6,
    header: 'Saturday',
    type: 'Off',
    status: 'Weekend',
    target: '0hrs',
    limit: '0hrs',
    reviewer: 'Rest Day',
  },
  {
    id: 7,
    header: 'Sunday',
    type: 'Off',
    status: 'Weekend',
    target: '0hrs',
    limit: '0hrs',
    reviewer: 'Rest Day',
  },
]

export default function SchedulePage() {
  return (
    <div className="flex flex-col h-full gap-6 sm:gap-8 pb-24 px-2 sm:px-0">
      <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Schedule
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            View your weekly schedule and time tracking.
          </p>
        </div>
        <Button className="w-full sm:w-fit gap-2">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Request Time Off</span>
          <span className="sm:hidden">Request</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 flex-shrink-0" />
              <span className="truncate">Total Hours</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">This week</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">39</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">hours worked</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5 flex-shrink-0" />
              <span className="truncate">Upcoming</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">3</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">scheduled events</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-base sm:text-lg flex items-center gap-2">
              <Clock className="h-5 w-5 flex-shrink-0" />
              <span className="truncate">Balance</span>
            </CardTitle>
            <CardDescription className="text-xs sm:text-sm">Time off remaining</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl sm:text-3xl font-bold">8</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">days available</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-2 sm:mt-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4">Weekly Overview</h2>
        <DataTable data={weeklySchedule} />
      </div>
    </div>
  )
}
