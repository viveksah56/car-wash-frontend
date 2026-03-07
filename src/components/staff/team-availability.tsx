"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface StaffMember {
    id: string;
    name: string;
    role: string;
    status: "ACTIVE" | "ON_BREAK" | "OFFLINE";
    assignment?: string;
    returnsIn?: string;
    color: string;
}

const staffMembers: StaffMember[] = [
    {
        id: "1",
        name: "Alex Johnson",
        role: "Detailing Specialist",
        status: "ACTIVE",
        assignment: "Black Tesla Model 3",
        color: "bg-emerald-700 dark:bg-emerald-600",
    },
    {
        id: "2",
        name: "Sarah Chen",
        role: "Interior Specialist",
        status: "ON_BREAK",
        returnsIn: "12 minutes",
        color: "bg-cyan-600 dark:bg-cyan-500",
    },
    {
        id: "3",
        name: "Marcus Wright",
        role: "Exterior Master",
        status: "ACTIVE",
        assignment: "Ford F-150 Raptor",
        color: "bg-slate-700 dark:bg-slate-500",
    },
    {
        id: "4",
        name: "Lisa Ray",
        role: "Detailing",
        status: "OFFLINE",
        color: "bg-gray-400 dark:bg-gray-600",
    },
];

const STATUS_CONFIG = {
    ACTIVE: {
        label: "ACTIVE",
        className:
            "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-400 dark:border-emerald-500/30",
    },
    ON_BREAK: {
        label: "ON BREAK",
        className:
            "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30",
    },
    OFFLINE: {
        label: "OFFLINE",
        className:
            "bg-gray-100 text-gray-600 border-gray-200 dark:bg-gray-500/20 dark:text-gray-400 dark:border-gray-500/30",
    },
} as const;

function StatusBadge({ status }: { status: StaffMember["status"] }) {
    const cfg = STATUS_CONFIG[status];
    return (
        <Badge className={cn("border font-semibold", cfg.className)}>
            {cfg.label}
        </Badge>
    );
}

function StaffCard({ member }: { member: StaffMember }) {
    return (
        <Card className="flex h-full flex-col border-border bg-card p-4 sm:p-6">
            <div className="mb-4 flex items-start gap-3 sm:gap-4">
                <div
                    className={cn(
                        "h-10 w-10 shrink-0 rounded-full sm:h-12 sm:w-12",
                        member.color
                    )}
                />
                <div className="min-w-0 flex-1">
                    <h3 className="truncate font-bold text-foreground">{member.name}</h3>
                    <p className="truncate text-sm text-muted-foreground">{member.role}</p>
                </div>
            </div>

            <div className="mb-4">
                <StatusBadge status={member.status} />
            </div>

            {member.assignment && (
                <div className="space-y-1 text-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Current Assignment
                    </p>
                    <p className="flex items-center gap-2 font-medium text-foreground">
                        <span aria-hidden="true">🚗</span>
                        {member.assignment}
                    </p>
                </div>
            )}

            {member.returnsIn && (
                <div className="mt-4 space-y-1 text-sm">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        Returns In
                    </p>
                    <p className="flex items-center gap-2 font-medium text-foreground">
                        <Clock className="h-4 w-4 shrink-0" />
                        {member.returnsIn}
                    </p>
                </div>
            )}
        </Card>
    );
}

export default function TeamAvailability() {
    const activeCount = useMemo(
        () => staffMembers.filter((m) => m.status === "ACTIVE").length,
        []
    );

    return (
        <div className="w-full">
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                        <Clock className="h-6 w-6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-foreground">
                            Team Availability
                        </h2>
                        <div className="mt-1 flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-medium text-muted-foreground">
                                {activeCount} active members
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-9 px-4">
                        Filter
                    </Button>
                    <Button variant="outline" size="sm" className="h-9 px-4">
                        Sort
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {staffMembers.map((member) => (
                    <StaffCard key={member.id} member={member} />
                ))}
            </div>
        </div>
    );
}