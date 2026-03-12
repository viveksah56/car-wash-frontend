"use client";

import { SectionCards } from "@/components/dashboard/section-cards";
import { DataTable } from "@/components/dashboard/data-table";
import { NavUser } from "@/components/dashboard/nav-user";
import { Button } from "@/components/ui/button";
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const staticTableData = [
  {
    id: 1,
    header: "Q4 Revenue Planning",
    type: "Strategic",
    status: "Done",
    target: "100K",
    limit: "150K",
    reviewer: "Sarah Johnson",
  },
  {
    id: 2,
    header: "User Interface Redesign",
    type: "Design",
    status: "In Progress",
    target: "50pts",
    limit: "80pts",
    reviewer: "Assign reviewer",
  },
  {
    id: 3,
    header: "API Documentation",
    type: "Technical",
    status: "Done",
    target: "100%",
    limit: "100%",
    reviewer: "Mike Chen",
  },
  {
    id: 4,
    header: "Customer Feedback Analysis",
    type: "Analytics",
    status: "In Progress",
    target: "500",
    limit: "1000",
    reviewer: "Assign reviewer",
  },
  {
    id: 5,
    header: "Mobile App Sprint",
    type: "Development",
    status: "Done",
    target: "12/12",
    limit: "15/15",
    reviewer: "Emma Davis",
  },
  {
    id: 6,
    header: "Marketing Campaign Setup",
    type: "Marketing",
    status: "In Progress",
    target: "75%",
    limit: "100%",
    reviewer: "Assign reviewer",
  },
  {
    id: 7,
    header: "Security Audit",
    type: "Compliance",
    status: "Done",
    target: "All",
    limit: "All",
    reviewer: "John Smith",
  },
  {
    id: 8,
    header: "Database Optimization",
    type: "Infrastructure",
    status: "In Progress",
    target: "40%",
    limit: "60%",
    reviewer: "Assign reviewer",
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col h-full gap-8 pb-24">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Dashboard
          </h1>
          <p className="mt-2 text-base sm:text-lg text-muted-foreground">
            Monitor projects and team performance in real-time.
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects..."
              className="w-40 sm:w-56 lg:w-64 pl-10 focus-visible:ring-primary text-sm"
            />
          </div>
          <Button size="sm" className="gap-2 whitespace-nowrap">
            <Plus className="h-4 w-4" />
            <span className="hidden sm:inline">Add Project</span>
            <span className="sm:hidden">Add</span>
          </Button>
        </div>
      </div>

      <SectionCards />

      <div className="flex-1 min-h-0">
        <DataTable data={staticTableData} />
      </div>

      <footer className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-4 sm:p-6 z-50">
        <div className="max-w-full">
          <NavUser
            user={{
              name: "Admin User",
              email: "admin@carwash.com",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=admin",
            }}
          />
        </div>
      </footer>
    </div>
  );
}
