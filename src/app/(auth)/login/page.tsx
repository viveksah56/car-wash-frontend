"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Droplets, Mail, Lock, Eye, EyeOff, Chrome, Facebook } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LoginFormValues, loginSchema } from "@/schema/auth.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authService from "@/service/auth.service";
import Cookies from "js-cookie";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onTouched",
    });

    const togglePassword = useCallback(() => setShowPassword((prev) => !prev), []);

    const onSubmit = useCallback(async (data: LoginFormValues) => {

        console.log(data);
        const response = await authService.login(data);
        Cookies.set("_token", response?.data?.accessToken);
        console.log(response?.data);

    }, []);

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-background px-4 py-12">
            <Image
                src="/hero-car.jpg"
                alt="Hero Car"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-r from-background via-background/80 to-background/40" />

            <div className="relative z-10 w-full max-w-md space-y-6 sm:space-y-8">
                <div className="text-center">
                    <Link href="/" className="mb-5 inline-flex items-center gap-2 sm:mb-6">
                        <Droplets className="h-7 w-7 text-primary sm:h-8 sm:w-8" />
                        <span className="font-display text-xl font-bold text-white sm:text-2xl">
                            PremiumWash
                        </span>
                    </Link>
                    <h1 className="font-display text-2xl font-bold text-white sm:text-3xl">
                        Welcome back
                    </h1>
                    <p className="mt-2 text-sm text-white/70 sm:text-base">
                        Sign in to your account
                    </p>
                </div>

                <div className="glass rounded-2xl p-6 space-y-5 sm:p-8 sm:space-y-6">
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            type="button"
                            variant="outline"
                            className="h-11 w-full gap-2 text-sm text-white!"
                        >
                            <Chrome className="h-4 w-4 text-blue-500" />
                            Google
                        </Button>
                        <Button
                            type="button"
                            variant="outline"
                            className="h-11 w-full gap-2 text-sm text-white!"
                        >
                            <Facebook className="h-4 w-4 text-blue-600" />
                            Facebook
                        </Button>
                    </div>

                    <div className="relative">
                        <Separator />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-card px-3 text-xs text-muted-foreground">
                            or continue with email
                        </span>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@example.com"
                                    className="pl-10"
                                    {...register("email")}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <Link
                                    href="/forgot-password"
                                    className="text-xs text-primary hover:underline"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    className="pl-10 pr-10"
                                    {...register("password")}
                                />
                                <button
                                    type="button"
                                    onClick={togglePassword}
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4" />
                                    ) : (
                                        <Eye className="h-4 w-4" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button className="h-11 w-full" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>
                </div>

                <p className="text-center text-sm text-white/70">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="font-medium text-primary hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}