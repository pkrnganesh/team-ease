import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  action: string;
  onClick?: () => void;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  image,
  imageAlt,
  action,
  onClick,
  className,
}: FeatureCardProps) {
  return (
    <Card className={cn(
      "group cursor-pointer transition-smooth hover:shadow-card hover:-translate-y-1 rounded-2xl bg-gradient-card border-0",
      className
    )}>
      <CardHeader className="pb-4">
        <div className="w-16 h-16 rounded-xl bg-gradient-primary p-3 mb-4 shadow-soft">
          <img 
            src={image} 
            alt={imageAlt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button 
          variant="outline" 
          className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-smooth rounded-xl"
          onClick={onClick}
        >
          {action}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
        </Button>
      </CardContent>
    </Card>
  );
}