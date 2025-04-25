import * as React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CardHoverProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  link?: string;
}

export function CardHover({ 
  title, 
  description, 
  icon, 
  link = "/services" 
}: CardHoverProps) {
  return (
    <Link to={link} className="block h-full">
      <Card className="h-full group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border">
        <CardHeader>
          <div className="flex items-center gap-2">
            {icon && <div className="rounded-full p-2 bg-primary/10 text-primary">{icon}</div>}
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
        <CardFooter>
          <div className="flex items-center text-primary text-sm font-medium group-hover:underline transition-all">
            <span>Learn more</span>
            <ChevronRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}