import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Brain, Calendar, FileText, Users, BarChart, Shield, Mail, UserPlus, Globe, Bot, Eye } from "lucide-react";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart, path: "/" },
  { id: "job-posting", label: "Job Posting", icon: Globe, path: "/job-posting" },
  { id: "applications", label: "Applications", icon: Users, path: "/application-management" },
  { id: "screening", label: "Resume Screening", icon: Brain, path: "/screening" },
  { id: "candidate-details", label: "Candidate Details", icon: Eye, path: "/candidate-details" },
  { id: "interviews", label: "Interview Scheduling", icon: Calendar, path: "/interviews" },
  { id: "ai-interview", label: "AI Interview Bot", icon: Bot, path: "/ai-interview-bot" },
  { id: "authenticity", label: "Authenticity Check", icon: Shield, path: "/authenticity" },
  { id: "emails", label: "Automated Emails", icon: Mail, path: "/emails" },
  { id: "onboarding", label: "Onboarding", icon: UserPlus, path: "/onboarding" },
];

interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className={cn("flex flex-col space-y-2", className)}>
      {navigationItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Button
            key={item.id}
            variant={isActive ? "default" : "ghost"}
            size="lg"
            className={cn(
              "justify-start gap-3 h-12 transition-smooth rounded-xl",
              isActive 
                ? "bg-gradient-primary text-white shadow-glow" 
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            )}
            onClick={() => navigate(item.path)}
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Button>
        );
      })}
    </nav>
  );
}