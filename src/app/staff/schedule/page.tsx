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
    <div className="flex flex-col h-full gap-8 pb-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Schedule
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted-foreground">
            View your weekly schedule and time tracking.
          </p>
        </div>
        <Button className="w-fit gap-2">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Request Time Off</span>
          <span className="sm:hidden">Request</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Total Hours
            </CardTitle>
            <CardDescription>This week</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">39</p>
            <p className="text-sm text-muted-foreground mt-1">hours worked</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Upcoming
            </CardTitle>
            <CardDescription>Next 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-muted-foreground mt-1">scheduled events</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Balance
            </CardTitle>
            <CardDescription>Time off remaining</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">8</p>
            <p className="text-sm text-muted-foreground mt-1">days available</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-4">Weekly Overview</h2>
        <DataTable data={weeklySchedule} />
      </div>
    </div>
  )
}
