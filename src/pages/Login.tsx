import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Brain, Lock, Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard after login
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-40"></div>
      
      {/* Login Card */}
      <Card className="w-full max-w-md relative z-10 bg-white/80 backdrop-blur-xl border-0 shadow-2xl rounded-3xl">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
            RuGanAI
          </CardTitle>
          <CardDescription className="text-lg text-slate-600">
            Welcome back to your AI HR Suite
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-slate-700 font-medium">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 bg-white/50"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-700 font-medium">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 rounded-xl border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 bg-white/50"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm text-slate-600">
                  Remember me
                </Label>
              </div>
              <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-700">
                Forgot password?
              </Button>
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Sign In
            </Button>
          </form>
          
          <div className="text-center">
            <p className="text-slate-600">
              Don't have an account?{" "}
              <Button variant="link" className="p-0 text-indigo-600 hover:text-indigo-700 font-medium">
                Sign up here
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
      
      {/* Bottom Info */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-slate-500 text-sm">
        <p>© 2024 RuGanAI. Powered by intelligent HR solutions.</p>
      </div>
    </div>
  );
};

export default Login;