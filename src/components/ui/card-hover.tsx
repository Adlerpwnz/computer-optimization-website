import React, { ReactNode } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CardHoverProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CardHover({ icon, title, description }: CardHoverProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 btn-animation">
      <CardHeader>
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full gradient-bg">
            {icon}
          </div>
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
