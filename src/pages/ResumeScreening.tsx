import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  CheckCircle, 
  AlertTriangle, 
  Brain, 
  FileText, 
  Star,
  Clock,
  User
} from "lucide-react";

const ResumeScreening = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Intelligent hiring solutions
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              AI Resume Screening
            </h2>
            <p className="text-muted-foreground">
              Upload resumes for intelligent analysis and authenticity verification
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8 rounded-2xl bg-gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Resume
              </CardTitle>
              <CardDescription>
                Drag and drop resume files or click to browse
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/50 transition-smooth cursor-pointer">
                <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">
                  Drop resume files here
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Supports PDF, DOC, DOCX files up to 10MB
                </p>
                <Button className="rounded-xl">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Analysis Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sample Analysis Result */}
            <Card className="rounded-2xl bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                      <CardDescription>Frontend Developer</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Match Score</span>
                    <span className="text-sm font-bold text-primary">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    AI Analysis
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Skills Match:</span>
                      <span className="font-medium text-green-600">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium text-green-600">5 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Education:</span>
                      <span className="font-medium text-green-600">Verified</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Authenticity:</span>
                      <span className="font-medium text-green-600">High</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="rounded-lg">
                    Schedule Interview
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Another Sample Result */}
            <Card className="rounded-2xl bg-gradient-card border-0 shadow-soft">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Michael Chen</CardTitle>
                      <CardDescription>Full Stack Developer</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700 border-yellow-200">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Review Required
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Overall Match Score</span>
                    <span className="text-sm font-bold text-primary">74%</span>
                  </div>
                  <Progress value={74} className="h-2" />
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium flex items-center gap-2">
                    <Brain className="h-4 w-4 text-primary" />
                    AI Analysis
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Skills Match:</span>
                      <span className="font-medium text-yellow-600">78%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium text-green-600">3 years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Education:</span>
                      <span className="font-medium text-yellow-600">Pending</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Authenticity:</span>
                      <span className="font-medium text-yellow-600">Medium</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Manual Review
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-lg">
                    Request Verification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScreening;