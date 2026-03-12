'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Zap, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useTheme } from 'next-themes';
import ThemeToggle from '@/components/theme/theme-toggle';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  apiCalls: number;
}

export default function PerformanceManager() {
  const { resolvedTheme } = useTheme();
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    apiCalls: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateMetrics = () => {
      const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const renderTime = nav?.domInteractive - nav?.fetchStart || 0;
      const memory = (performance as any).memory?.usedJSHeapSize || 0;
      
      setMetrics({
        renderTime: Math.round(renderTime),
        memoryUsage: Math.round(memory / 1048576),
        apiCalls: performance.getEntriesByType('resource').length,
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <Card className="border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-yellow-500" />
          Performance & Theme
        </CardTitle>
        <CardDescription>Manage system performance and theme preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-accent/30 p-3">
            <p className="text-xs font-medium text-muted-foreground">Render Time</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{metrics.renderTime}ms</p>
          </div>
          <div className="rounded-lg border border-border bg-accent/30 p-3">
            <p className="text-xs font-medium text-muted-foreground">Memory</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{metrics.memoryUsage}MB</p>
          </div>
          <div className="rounded-lg border border-border bg-accent/30 p-3">
            <p className="text-xs font-medium text-muted-foreground">Resources</p>
            <p className="mt-1 text-lg font-semibold text-foreground">{metrics.apiCalls}</p>
          </div>
        </div>

        <Separator className="my-4" />

        <div>
          <h3 className="mb-2 text-sm font-medium text-foreground flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Theme Management
          </h3>
          <p className="mb-3 text-xs text-muted-foreground">
            Current mode: <span className="font-semibold capitalize">{resolvedTheme}</span>
          </p>
          <div className="space-y-2">
            <ThemeToggle variant="default" className="w-full" />
            <p className="text-xs text-muted-foreground">
              System automatically optimizes UI rendering based on theme preference for better performance.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
