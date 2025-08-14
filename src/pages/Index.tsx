import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Zap, Shield, ChevronRight, Star, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Screening",
      description: "Intelligent resume analysis and candidate matching using advanced AI algorithms"
    },
    {
      icon: Users,
      title: "Smart Scheduling",
      description: "Automated interview scheduling with calendar integration and candidate communication"
    },
    {
      icon: Zap,
      title: "Quick Onboarding",
      description: "Streamlined employee onboarding process with automated workflows"
    },
    {
      icon: Shield,
      title: "Authenticity Check",
      description: "Advanced verification systems to ensure candidate authenticity and credentials"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director",
      company: "TechCorp",
      content: "RuGanAI reduced our hiring time by 60% while improving candidate quality significantly.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Talent Acquisition Lead",
      company: "InnovateCo",
      content: "The AI screening feature is incredible. It finds candidates we would have missed manually.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RuGanAI
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate("/login")}>
              Sign In
            </Button>
            <Button onClick={() => navigate("/login")} className="bg-gradient-primary text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            🚀 AI-Powered HR Revolution
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Transform Your HR
            <br />
            With Intelligent AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Streamline recruitment, automate screening, and enhance candidate experience with our comprehensive AI-powered HR suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={() => navigate("/login")}
              className="bg-gradient-primary text-white px-8 py-4 text-lg shadow-glow hover:shadow-card transition-smooth"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-background/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to revolutionize your HR processes with cutting-edge AI technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-card transition-smooth bg-gradient-card border-0 rounded-2xl">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose RuGanAI?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of companies that have transformed their HR processes with our AI-powered platform.
              </p>
              <div className="space-y-4">
                {[
                  "Reduce hiring time by up to 70%",
                  "Improve candidate quality with AI matching",
                  "Automate repetitive HR tasks",
                  "Scale your recruitment effortlessly"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Card className="bg-gradient-card border-0 shadow-card rounded-3xl p-8">
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">70%</div>
                  <p className="text-xl text-muted-foreground">Faster Hiring Process</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-background/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by HR Leaders</h2>
            <p className="text-xl text-muted-foreground">
              See what our customers say about their experience with RuGanAI
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-card border-0 shadow-soft rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Card className="bg-gradient-primary text-white border-0 shadow-glow rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of companies already using RuGanAI to revolutionize their hiring process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => navigate("/login")}
                className="px-8 py-4 text-lg bg-white text-primary hover:bg-gray-100"
              >
                Start Free Trial
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-background/80">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">RuGanAI</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 RuGanAI. Revolutionizing HR with intelligent AI solutions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;