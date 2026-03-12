'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp, Award, Target, Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const performanceData = [
  { month: 'Jan', productivity: 85, quality: 90, timeliness: 88 },
  { month: 'Feb', productivity: 88, quality: 92, timeliness: 90 },
  { month: 'Mar', productivity: 92, quality: 94, timeliness: 92 },
  { month: 'Apr', productivity: 90, quality: 93, timeliness: 91 },
  { month: 'May', productivity: 95, quality: 95, timeliness: 94 },
  { month: 'Jun', productivity: 98, quality: 96, timeliness: 96 },
]

const metrics = [
  {
    label: 'Productivity',
    value: 98,
    icon: Zap,
    color: 'text-blue-500',
  },
  {
    label: 'Quality',
    value: 96,
    icon: Award,
    color: 'text-emerald-500',
  },
  {
    label: 'Timeliness',
    value: 96,
    icon: Target,
    color: 'text-amber-500',
  },
  {
    label: 'Overall',
    value: 97,
    icon: TrendingUp,
    color: 'text-purple-500',
  },
]

export default function PerformancePage() {
  return (
    <div className="flex flex-col h-full gap-8 pb-24">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Performance
        </h1>
        <p className="mt-2 text-base sm:text-lg text-muted-foreground">
          Track your performance metrics and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => {
          const Icon = metric.icon
          return (
            <Card key={metric.label}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                  {metric.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{metric.value}%</div>
                <p className="text-xs text-muted-foreground mt-1">Target: 95%</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Trend</CardTitle>
          <CardDescription>Last 6 months performance overview</CardDescription>
        </CardHeader>
        <CardContent className="w-full overflow-x-auto">
          <ResponsiveContainer width="100%" height={300} minWidth={300}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="productivity" fill="#3b82f6" />
              <Bar dataKey="quality" fill="#10b981" />
              <Bar dataKey="timeliness" fill="#f59e0b" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Goals & Achievements</CardTitle>
          <CardDescription>Your current goals and progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {[
            { goal: 'Complete Project Alpha', progress: 85, dueDate: 'Mar 30' },
            { goal: 'Improve Code Quality', progress: 92, dueDate: 'Apr 15' },
            { goal: 'Team Leadership Training', progress: 60, dueDate: 'May 31' },
            { goal: 'Customer Satisfaction', progress: 95, dueDate: 'Apr 10' },
          ].map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{item.goal}</p>
                <Badge variant="secondary">{item.dueDate}</Badge>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground text-right">{item.progress}%</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
