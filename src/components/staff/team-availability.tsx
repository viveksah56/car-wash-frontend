'use client';

import {Plus, Search} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';

export default function StaffOverview() {
    return (
        <div className="border-b border-border bg-card p-6">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">Staff Overview</h1>
                    <p className="text-muted-foreground">Manage your team and monitor real-time assignments</p>
                </div>
                <Button
                    size="lg"
                    className="gap-2 bg-foreground text-background hover:bg-foreground/90"
                >
                    <Plus className="w-5 h-5"/>
                    Add Staff
                </Button>
            </div>

            <div className="mt-6 flex items-center gap-3 bg-input rounded-lg px-4 py-2 max-w-sm">
                <Search className="w-5 h-5 text-muted-foreground"/>
                <Input
                    placeholder="Search staff or bookings..."
                    className="border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus:ring-0"
                />
            </div>
        </div>
    );
}
