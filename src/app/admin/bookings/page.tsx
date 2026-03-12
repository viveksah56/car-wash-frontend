"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, DollarSign, Plus } from "lucide-react";

interface Booking {
  id: number;
  customerName: string;
  service: string;
  date: string;
  time: string;
  duration: number;
  price: number;
  status: "confirmed" | "pending" | "completed" | "cancelled";
}

const staticBookings: Booking[] = [
  {
    id: 1,
    customerName: "John Smith",
    service: "Basic Wash",
    date: "2024-03-15",
    time: "09:00 AM",
    duration: 30,
    price: 25,
    status: "confirmed",
  },
  {
    id: 2,
    customerName: "Sarah Johnson",
    service: "Premium Detailing",
    date: "2024-03-15",
    time: "10:30 AM",
    duration: 120,
    price: 89,
    status: "confirmed",
  },
  {
    id: 3,
    customerName: "Michael Chen",
    service: "Interior Cleaning",
    date: "2024-03-15",
    time: "01:00 PM",
    duration: 60,
    price: 45,
    status: "pending",
  },
  {
    id: 4,
    customerName: "Emma Davis",
    service: "Full Package",
    date: "2024-03-15",
    time: "03:00 PM",
    duration: 150,
    price: 120,
    status: "confirmed",
  },
  {
    id: 5,
    customerName: "Robert Wilson",
    service: "Basic Wash",
    date: "2024-03-16",
    time: "10:00 AM",
    duration: 30,
    price: 25,
    status: "pending",
  },
  {
    id: 6,
    customerName: "Lisa Anderson",
    service: "Exterior Polish",
    date: "2024-03-16",
    time: "02:00 PM",
    duration: 90,
    price: 65,
    status: "confirmed",
  },
];

const statusStyles = {
  confirmed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
};

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Bookings</h1>
          <p className="text-muted-foreground mt-1">
            Manage all customer bookings and appointments
          </p>
        </div>
        <Button className="gap-2 whitespace-nowrap">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">New Booking</span>
          <span className="sm:hidden">Add</span>
        </Button>
      </div>

      <div className="grid gap-4">
        {staticBookings.map((booking) => (
          <Card key={booking.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1 flex-1">
                  <CardTitle className="text-lg">{booking.customerName}</CardTitle>
                  <CardDescription>{booking.service}</CardDescription>
                </div>
                <Badge className={statusStyles[booking.status]}>
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium text-sm">{booking.date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium text-sm">{booking.time}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    Duration
                  </p>
                  <p className="font-medium text-sm">{booking.duration} min</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    Price
                  </p>
                  <p className="font-medium text-sm">${booking.price}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
