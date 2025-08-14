import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Bot, 
  Mic, 
  MicOff, 
  Video, 
  VideoOff,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  Clock,
  Brain,
  Star,
  ArrowRight
} from "lucide-react";

const AIInterviewBot = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-zinc-700 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              AI Interview System
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              AI Interview Bot
            </h2>
            <p className="text-muted-foreground">
              Conducting initial interviews and behavioral assessments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Interview Interface */}
            <div className="lg:col-span-2 space-y-6">
              {/* AI Bot Interface */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-slate-600" />
                      AI Interview in Progress
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      Live
                    </Badge>
                  </div>
                  <CardDescription>
                    Candidate: Sarah Johnson • Position: Senior Frontend Developer
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-8 mb-6">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-slate-600 to-zinc-600 flex items-center justify-center mx-auto mb-6">
                        <Bot className="h-16 w-16 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-700 mb-2">AI Interviewer</h3>
                      <p className="text-slate-600 mb-4">
                        "Can you tell me about a challenging project you worked on recently?"
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full w-12 h-12 p-0">
                      <Mic className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                      <Video className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full w-12 h-12 p-0">
                      <Pause className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="destructive" className="rounded-full w-12 h-12 p-0">
                      <RotateCcw className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Interview Transcript */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Live Transcript</CardTitle>
                  <CardDescription>
                    Real-time conversation analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-80 overflow-y-auto">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-slate-100 rounded-2xl p-3 max-w-[80%]">
                        <p className="text-sm">Hello Sarah! I'm excited to learn more about your experience. Let's start with your background in React development.</p>
                        <span className="text-xs text-slate-500">2 minutes ago</span>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="bg-blue-100 rounded-2xl p-3 max-w-[80%]">
                        <p className="text-sm">Thank you! I've been working with React for about 5 years now. I started at a startup where we built a customer dashboard that served over 10,000 users...</p>
                        <span className="text-xs text-slate-500">1 minute ago</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">SJ</span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-slate-100 rounded-2xl p-3 max-w-[80%]">
                        <p className="text-sm">That's impressive! Can you tell me about a challenging technical problem you solved in that project?</p>
                        <span className="text-xs text-slate-500">30 seconds ago</span>
                      </div>
                    </div>

                    <div className="flex gap-3 justify-end">
                      <div className="bg-blue-100 rounded-2xl p-3 max-w-[80%]">
                        <p className="text-sm">One major challenge was optimizing performance when we had thousands of real-time updates...</p>
                        <span className="text-xs text-slate-500">typing...</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">SJ</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Analysis Panel */}
            <div className="space-y-6">
              {/* Real-time Analysis */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-slate-600" />
                    Real-time Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Communication</span>
                      <span className="text-sm font-bold text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Technical Knowledge</span>
                      <span className="text-sm font-bold text-blue-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Problem Solving</span>
                      <span className="text-sm font-bold text-purple-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Cultural Fit</span>
                      <span className="text-sm font-bold text-emerald-600">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Interview Progress */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-slate-600" />
                    Interview Progress
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Introduction</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-green-50 border border-green-200">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Technical Questions</p>
                      <p className="text-xs text-muted-foreground">Completed</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">Behavioral Assessment</p>
                      <p className="text-xs text-muted-foreground">In Progress</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 opacity-60">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium">Wrap-up</p>
                      <p className="text-xs text-muted-foreground">Pending</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Progress</span>
                      <span className="text-sm font-bold text-slate-600">65%</span>
                    </div>
                    <Progress value={65} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Next Steps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-between rounded-xl">
                    Generate Report
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between rounded-xl">
                    Schedule Follow-up
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full rounded-xl bg-slate-600 hover:bg-slate-700">
                    End Interview
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInterviewBot;