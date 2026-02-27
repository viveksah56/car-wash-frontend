'use client';

import {ReactNode} from 'react';
import {ThemeProvider} from '@/Provider/theme-provider';
import {TooltipProvider} from "@/components/ui/tooltip";
import {Toaster} from "sonner";

interface RootProvidersProps {
    children: ReactNode;
}

export default function RootProviders({children}: RootProvidersProps) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Toaster richColors position={'bottom-right'}
                     duration={5000}
            />
            <TooltipProvider>
                {children}
            </TooltipProvider>
        </ThemeProvider>
    );
}
