import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Star, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  FileText,
  Award,
  Briefcase,
  GraduationCap,
  Clock,
  TestTube,
  Bot,
  ArrowLeft
} from "lucide-react";

const CandidateDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Candidate Intelligence
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-6">
            <Button variant="outline" className="mb-4 rounded-xl">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Applications
            </Button>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Candidate Profile
            </h2>
            <p className="text-muted-foreground">
              Detailed analysis and interview management
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Candidate Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mx-auto mb-4">
                      <User className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Sarah Johnson</h3>
                    <p className="text-muted-foreground">Senior Frontend Developer</p>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                      <span className="ml-2 text-sm font-medium">94% Match</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-violet-600" />
                      <span className="text-sm">sarah.johnson@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-violet-600" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-violet-600" />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-4 w-4 text-violet-600" />
                      <span className="text-sm">5 years experience</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Interview
                    </Button>
                    <Button variant="outline" className="w-full rounded-xl border-violet-200 text-violet-600 hover:bg-violet-50">
                      <TestTube className="h-4 w-4 mr-2" />
                      Send Test Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start rounded-lg">
                    <FileText className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start rounded-lg">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start rounded-lg">
                    <Award className="h-4 w-4 mr-2" />
                    Verify Credentials
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Analysis & Timeline */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI Analysis */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-violet-600" />
                    AI Analysis Report
                  </CardTitle>
                  <CardDescription>
                    Comprehensive candidate evaluation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Technical Skills</span>
                        <span className="text-sm font-bold text-violet-600">92%</span>
                      </div>
                      <Progress value={92} className="h-2 mb-3" />
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-violet-100 text-violet-700">React</Badge>
                        <Badge variant="secondary" className="bg-violet-100 text-violet-700">TypeScript</Badge>
                        <Badge variant="secondary" className="bg-violet-100 text-violet-700">Node.js</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Experience Match</span>
                        <span className="text-sm font-bold text-green-600">89%</span>
                      </div>
                      <Progress value={89} className="h-2 mb-3" />
                      <p className="text-sm text-muted-foreground">
                        5 years in relevant technologies
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Cultural Fit</span>
                        <span className="text-sm font-bold text-blue-600">87%</span>
                      </div>
                      <Progress value={87} className="h-2 mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Strong alignment with company values
                      </p>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Authenticity Score</span>
                        <span className="text-sm font-bold text-emerald-600">96%</span>
                      </div>
                      <Progress value={96} className="h-2 mb-3" />
                      <p className="text-sm text-muted-foreground">
                        High confidence in credentials
                      </p>
                    </div>
                  </div>

                  <div className="bg-violet-50 rounded-xl p-4">
                    <h4 className="font-medium text-violet-900 mb-2">AI Recommendation</h4>
                    <p className="text-sm text-violet-700">
                      Sarah is an excellent candidate with strong technical skills and relevant experience. 
                      Her portfolio demonstrates proficiency in modern React patterns and TypeScript. 
                      Recommend proceeding to technical interview round.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Interview Timeline */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-fuchsia-600" />
                    Interview Pipeline
                  </CardTitle>
                  <CardDescription>
                    Track progress through hiring stages
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-200">
                      <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Resume Screening</p>
                        <p className="text-sm text-muted-foreground">Completed • Score: 94%</p>
                      </div>
                      <Badge className="bg-green-100 text-green-700">Completed</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                        <TestTube className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Technical Assessment</p>
                        <p className="text-sm text-muted-foreground">Ready to send test link</p>
                      </div>
                      <Button size="sm" className="rounded-lg">Send Test</Button>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">AI Interview</p>
                        <p className="text-sm text-muted-foreground">Pending technical assessment</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 opacity-60">
                      <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Final Interview</p>
                        <p className="text-sm text-muted-foreground">With hiring manager</p>
                      </div>
                      <Badge variant="secondary">Pending</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience & Education */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Briefcase className="h-5 w-5 text-violet-600" />
                      Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-2 border-violet-200 pl-4">
                      <h4 className="font-medium">Senior Frontend Developer</h4>
                      <p className="text-sm text-muted-foreground">TechCorp • 2022 - Present</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Led development of React-based dashboard serving 10k+ users
                      </p>
                    </div>
                    <div className="border-l-2 border-violet-200 pl-4">
                      <h4 className="font-medium">Frontend Developer</h4>
                      <p className="text-sm text-muted-foreground">StartupXYZ • 2020 - 2022</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Built responsive web applications using React and TypeScript
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <GraduationCap className="h-5 w-5 text-fuchsia-600" />
                      Education
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="border-l-2 border-fuchsia-200 pl-4">
                      <h4 className="font-medium">B.S. Computer Science</h4>
                      <p className="text-sm text-muted-foreground">University of California • 2016 - 2020</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        GPA: 3.8/4.0 • Magna Cum Laude
                      </p>
                    </div>
                    <div className="border-l-2 border-fuchsia-200 pl-4">
                      <h4 className="font-medium">Certifications</h4>
                      <p className="text-sm text-muted-foreground">AWS Certified Developer</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        React Professional Certificate
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;