import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardHoverProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function CardHover({ icon, title, description, className }: CardHoverProps) {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border bg-card p-6 text-card-foreground shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-animation",
      className
    )}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="flex flex-col space-y-4 relative z-10">
        <div className="rounded-full w-12 h-12 flex items-center justify-center gradient-bg text-white">
          {icon}
        </div>
        
        <h3 className="font-semibold text-lg">{title}</h3>
        
        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}
