'use client'
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Droplets, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

const ForgotPassword = () => {
    const [sent, setSent] = useState(false);

    if (sent) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center px-4">
                <div className="w-full max-w-md space-y-8 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="font-display text-3xl font-bold text-foreground">Check your email</h1>
                    <p className="text-muted-foreground">
                        We&#39;ve sent a password reset link to your email address. Please check your inbox.
                    </p>
                    <Button variant={'default'} className="w-full h-11" onClick={() => setSent(false)}>
                        Resend Email
                    </Button>
                    <Link href="/login" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                        <ArrowLeft className="h-4 w-4" /> Back to Sign In
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <Droplets className="h-8 w-8 text-primary" />
                        <span className="font-display text-2xl font-bold text-foreground">PremiumWash</span>
                    </Link>
                    <h1 className="font-display text-3xl font-bold text-foreground">Forgot password?</h1>
                    <p className="mt-2 text-muted-foreground">Enter your email and we&#39;ll send you a reset link</p>
                </div>

                <div className="glass rounded-2xl p-8 space-y-6">
                    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input id="email" type="email" placeholder="you@example.com" className="pl-10" required />
                            </div>
                        </div>
                        <Button variant="default" className="w-full h-11" type="submit">
                            Send Reset Link
                        </Button>
                    </form>
                </div>

                <p className="text-center">
                    <Link href="/login" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                        <ArrowLeft className="h-4 w-4" /> Back to Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default ForgotPassword;
