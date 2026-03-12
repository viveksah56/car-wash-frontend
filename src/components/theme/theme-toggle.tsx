'use client';

import { useEffect, useState, useCallback, useTransition } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
  variant?: 'icon' | 'default';
  size?: 'sm' | 'default';
}

export default function ThemeToggle({ 
  className, 
  variant = 'icon',
  size = 'default'
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [_isPending, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = useCallback(() => {
    startTransition(() => {
      const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <Button
        variant={variant === 'icon' ? 'ghost' : 'outline'}
        size={variant === 'icon' ? 'icon' : size}
        disabled
        className={cn(variant === 'icon' && 'h-9 w-9', className)}
      />
    );
  }

  const isDark = resolvedTheme === 'dark';
  const buttonLabel = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  if (variant === 'icon') {
    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={handleToggle}
        aria-label={buttonLabel}
        className={cn('h-9 w-9 relative', className)}
      >
        <Sun
          className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          aria-hidden="true"
        />
        <Moon
          className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          aria-hidden="true"
        />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size={size === 'sm' ? 'sm' : 'default'}
      onClick={handleToggle}
      aria-label={buttonLabel}
      className={cn('w-full gap-2', className)}
    >
      {isDark ? (
        <>
          <Sun className="h-4 w-4" aria-hidden="true" />
          <span>Light Mode</span>
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" aria-hidden="true" />
          <span>Dark Mode</span>
        </>
      )}
    </Button>
  );
}
