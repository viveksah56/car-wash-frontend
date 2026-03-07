import ctaSection from "@/components/home/cta-section";
import {Button} from "@/components/ui/button";
import {Plus, Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import TeamAvailability from "@/components/staff/team-availability";

export default function AdminDashboard(){
    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight text-foreground">Staff Overview</h1>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Manage your team and monitor real-time assignments.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                            placeholder="Search staff..."
                            className="w-64 pl-10 focus-visible:ring-primary"
                        />
                    </div>
                    <Button className="gap-2 shadow-lg shadow-primary/20">
                        <Plus className="h-5 w-5" />
                        Add Staff
                    </Button>
                </div>
            </div>

            <div className="grid gap-6">
                <div className="rounded-2xl border border-border bg-card/50 p-1 backdrop-blur-sm">
                    <div className="rounded-xl bg-background/50 p-6 shadow-sm">
                        <TeamAvailability />
                    </div>
                </div>
            </div>
        </div>
    );
}