import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Users, 
  Brain, 
  CheckCircle, 
  XCircle,
  Clock,
  FileText,
  Mail,
  Calendar,
  Star
} from "lucide-react";

const ApplicationManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-950 dark:via-teal-950 dark:to-cyan-950">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Application Intelligence
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Application Management
            </h2>
            <p className="text-muted-foreground">
              AI-powered screening and candidate analysis
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">247</p>
                    <p className="text-sm text-muted-foreground">Total Applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">89</p>
                    <p className="text-sm text-muted-foreground">Approved</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-amber-600">34</p>
                    <p className="text-sm text-muted-foreground">Under Review</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <XCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-red-600">124</p>
                    <p className="text-sm text-muted-foreground">Rejected</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Screening Progress */}
          <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-emerald-600" />
                AI Screening Progress
              </CardTitle>
              <CardDescription>
                Real-time analysis of incoming applications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Resume Analysis</span>
                    <span className="text-sm text-emerald-600">89/120 processed</span>
                  </div>
                  <Progress value={74} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Authenticity Check</span>
                    <span className="text-sm text-emerald-600">67/89 verified</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Skills Matching</span>
                    <span className="text-sm text-emerald-600">45/67 matched</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Application Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Approved Candidates */}
            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  Approved Candidates (89)
                </CardTitle>
                <CardDescription>
                  Top candidates ready for next stage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Sarah Johnson", role: "Senior Frontend Dev", score: 94, experience: "5 years" },
                  { name: "Mike Chen", role: "Full Stack Dev", score: 91, experience: "4 years" },
                  { name: "Lisa Park", role: "React Developer", score: 88, experience: "3 years" }
                ].map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-green-200 bg-green-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{candidate.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="font-medium">{candidate.name}</p>
                        <p className="text-sm text-muted-foreground">{candidate.role} • {candidate.experience}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-bold text-green-600">{candidate.score}%</p>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-3 w-3 ${i < Math.floor(candidate.score/20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                      </div>
                      <Button size="sm" className="rounded-lg bg-green-600 hover:bg-green-700">
                        <Calendar className="h-3 w-3 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl border-green-200 text-green-600 hover:bg-green-50">
                  View All Approved (89)
                </Button>
              </CardContent>
            </Card>

            {/* Rejected Candidates */}
            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  Rejected Candidates (124)
                </CardTitle>
                <CardDescription>
                  Candidates requiring follow-up communication
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "John Smith", role: "Junior Developer", score: 45, reason: "Insufficient experience" },
                  { name: "Amy Wong", role: "Frontend Dev", score: 52, reason: "Skills mismatch" },
                  { name: "Carlos Rodriguez", role: "Backend Dev", score: 38, reason: "Technical requirements" }
                ].map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-red-200 bg-red-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">{candidate.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div>
                        <p className="font-medium">{candidate.name}</p>
                        <p className="text-sm text-muted-foreground">{candidate.role}</p>
                        <p className="text-xs text-red-600">{candidate.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-sm font-bold text-red-600">{candidate.score}%</p>
                      </div>
                      <Button size="sm" variant="outline" className="rounded-lg border-red-200 text-red-600 hover:bg-red-50">
                        <Mail className="h-3 w-3 mr-1" />
                        Send Email
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl border-red-200 text-red-600 hover:bg-red-50">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Bulk Rejection Emails (124)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationManagement;