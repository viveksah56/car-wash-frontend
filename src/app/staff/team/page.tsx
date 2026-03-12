'use client'

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MessageSquare, Mail, Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Team Lead',
    department: 'Operations',
    email: 'sarah@example.com',
    phone: '+1-555-0101',
    status: 'online',
  },
  {
    id: 2,
    name: 'Mike Chen',
    role: 'Senior Developer',
    department: 'Engineering',
    email: 'mike@example.com',
    phone: '+1-555-0102',
    status: 'online',
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Designer',
    department: 'Design',
    email: 'emma@example.com',
    phone: '+1-555-0103',
    status: 'away',
  },
  {
    id: 4,
    name: 'John Smith',
    role: 'Staff',
    department: 'Operations',
    email: 'john@example.com',
    phone: '+1-555-0104',
    status: 'online',
  },
  {
    id: 5,
    name: 'Lisa Wilson',
    role: 'HR Manager',
    department: 'Human Resources',
    email: 'lisa@example.com',
    phone: '+1-555-0105',
    status: 'online',
  },
  {
    id: 6,
    name: 'Alex Martinez',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    email: 'alex@example.com',
    phone: '+1-555-0106',
    status: 'offline',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function getStatusColor(status: string) {
  switch (status) {
    case 'online':
      return 'bg-emerald-500'
    case 'away':
      return 'bg-amber-500'
    default:
      return 'bg-slate-400'
  }
}

export default function TeamPage() {
  const [search, setSearch] = React.useState('')

  const filteredMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase()) ||
    member.role.toLowerCase().includes(search.toLowerCase()) ||
    member.department.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex flex-col h-full gap-6 sm:gap-8 pb-24 px-2 sm:px-0">
      <div className="flex flex-col gap-4 sm:gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Team
          </h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Connect and collaborate with your team members.
          </p>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search team members..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 focus-visible:ring-primary w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className="relative flex-shrink-0">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="" alt={member.name} />
                        <AvatarFallback>{getInitials(member.name)}</AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${getStatusColor(member.status)}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-sm sm:text-base truncate">{member.name}</CardTitle>
                      <CardDescription className="text-xs truncate">{member.role}</CardDescription>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <p className="text-xs sm:text-sm text-muted-foreground">{member.department}</p>
                  <Badge variant="outline" className="text-xs">
                    {member.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors truncate"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone}`}
                    className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    {member.phone}
                  </a>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 text-xs sm:text-sm"
                >
                  <MessageSquare className="h-4 w-4" />
                  Message
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-muted-foreground">No team members found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
