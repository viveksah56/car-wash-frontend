import type { Metadata } from 'next'
import { ArrowLeft, Calendar, Clock, MapPin, User, Phone, Mail, DollarSign, Check, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface BookingDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata(
  { params }: BookingDetailPageProps
): Promise<Metadata> {
  return {
    title: `Booking #${params.slug} - Car Wash Admin`,
    description: `View and manage booking details for booking #${params.slug}`,
  }
}

const bookingData = {
  id: 'BK001',
  customerName: 'John Doe',
  customerEmail: 'john.doe@email.com',
  customerPhone: '+1 (555) 123-4567',
  serviceType: 'Premium Detailing',
  status: 'confirmed',
  date: '2024-03-15',
  time: '10:00 AM',
  duration: '3 hours',
  location: '123 Main St, Suite 100',
  price: 250.00,
  staff: 'Michael Johnson',
  notes: 'Customer requested extra interior cleaning',
  vehicle: {
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Silver',
    plate: 'ABC123',
  },
  payment: {
    method: 'Credit Card',
    status: 'paid',
    amount: 250.00,
  },
}

const statusVariants = {
  confirmed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  completed: 'bg-blue-100 text-blue-800',
  cancelled: 'bg-red-100 text-red-800',
}

const paymentStatusVariants = {
  paid: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-red-100 text-red-800',
}

export default function BookingDetailPage({ params }: BookingDetailPageProps) {
  const statusColor = statusVariants[bookingData.status as keyof typeof statusVariants] || 'bg-gray-100'
  const paymentColor = paymentStatusVariants[bookingData.payment.status as keyof typeof paymentStatusVariants] || 'bg-gray-100'

  return (
    <div className="flex flex-col h-full gap-6 pb-24 px-2 sm:px-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link href="/admin/bookings">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Booking #{bookingData.id}
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              {bookingData.serviceType}
            </p>
          </div>
        </div>
        <Badge className={cn('w-fit text-xs sm:text-sm', statusColor)}>
          {bookingData.status.charAt(0).toUpperCase() + bookingData.status.slice(1)}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Booking Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium">{bookingData.date}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Time</p>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="text-sm font-medium">{bookingData.time}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Duration</p>
                  <p className="text-sm font-medium">{bookingData.duration}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Staff Member</p>
                  <p className="text-sm font-medium">{bookingData.staff}</p>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase">Location</p>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm font-medium">{bookingData.location}</p>
                </div>
              </div>

              {bookingData.notes && (
                <div className="space-y-2 pt-2 border-t border-border">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Notes</p>
                  <p className="text-sm text-foreground">{bookingData.notes}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Vehicle Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Make</p>
                  <p className="text-sm font-medium mt-1">{bookingData.vehicle.make}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Model</p>
                  <p className="text-sm font-medium mt-1">{bookingData.vehicle.model}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Year</p>
                  <p className="text-sm font-medium mt-1">{bookingData.vehicle.year}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase">Color</p>
                  <p className="text-sm font-medium mt-1">{bookingData.vehicle.color}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase">License Plate</p>
                  <p className="text-sm font-medium mt-1 font-mono bg-muted px-2 py-1 rounded w-fit">{bookingData.vehicle.plate}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Customer Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase">Name</p>
                    <p className="text-sm font-medium truncate">{bookingData.customerName}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase">Email</p>
                    <a href={`mailto:${bookingData.customerEmail}`} className="text-sm font-medium text-primary hover:underline truncate">
                      {bookingData.customerEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground uppercase">Phone</p>
                    <a href={`tel:${bookingData.customerPhone}`} className="text-sm font-medium text-primary hover:underline">
                      {bookingData.customerPhone}
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Amount</p>
                  <p className="text-lg font-bold text-primary">${bookingData.payment.amount.toFixed(2)}</p>
                </div>

                <div className="pt-2 border-t border-border flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Method</p>
                  <p className="text-sm font-medium">{bookingData.payment.method}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs font-medium text-muted-foreground uppercase">Status</p>
                  <Badge className={cn('text-xs', paymentColor)}>
                    {bookingData.payment.status.charAt(0).toUpperCase() + bookingData.payment.status.slice(1)}
                  </Badge>
                </div>
              </div>

              <div className="pt-2 border-t border-border space-y-2">
                {bookingData.payment.status === 'paid' && (
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <Check className="h-4 w-4" />
                    Payment confirmed
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2 text-yellow-900">
                <AlertCircle className="h-4 w-4" />
                Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full" variant="outline" size="sm">
                Edit Booking
              </Button>
              <Button className="w-full" variant="outline" size="sm">
                Send Reminder
              </Button>
              <Button className="w-full" variant="destructive" size="sm">
                Cancel Booking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
