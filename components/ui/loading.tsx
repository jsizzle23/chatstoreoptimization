import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  className?: string;
  size?: number;
}

export function Loading({ className, size = 24 }: LoadingProps) {
  return (
    <div className={cn('flex items-center justify-center', className)}>
      <Loader2 className="animate-spin" size={size} />
    </div>
  );
}

export function LoadingPage() {
  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <Loading size={32} />
    </div>
  );
}

export function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent',
        className
      )}
    />
  );
} 