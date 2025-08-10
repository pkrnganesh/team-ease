import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Send, 
  Clock, 
  CheckCircle, 
  Users, 
  MessageSquare,
  Zap,
  Calendar,
  FileText,
  Settings
} from "lucide-react";

const AutomatedEmails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/90 backdrop-blur-sm border-r border-purple-200 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-purple-600 mt-1">
              Email Automation
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-purple-900 mb-2">
                  Automated Email System
                </h2>
                <p className="text-purple-700">
                  Intelligent email workflows for seamless candidate communication
                </p>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl">
                <Zap className="h-4 w-4 mr-2" />
                Create Workflow
              </Button>
            </div>
          </div>

          {/* Email Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-violet-500 to-purple-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-violet-100 text-sm">Sent Today</p>
                    <p className="text-3xl font-bold">247</p>
                  </div>
                  <Send className="h-8 w-8 text-violet-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-pink-500 to-rose-500 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-pink-100 text-sm">Open Rate</p>
                    <p className="text-3xl font-bold">89%</p>
                  </div>
                  <Mail className="h-8 w-8 text-pink-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-indigo-500 to-blue-500 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-indigo-100 text-sm">Response Rate</p>
                    <p className="text-3xl font-bold">76%</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-indigo-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-sm">Active Workflows</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <Zap className="h-8 w-8 text-emerald-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Email Campaigns */}
            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Active Campaigns</h3>
              <div className="space-y-4">
                <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-purple-900">Welcome Series</CardTitle>
                          <CardDescription className="text-purple-700">New candidate onboarding</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white border-green-500">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/60 p-3 rounded-lg">
                        <div className="text-purple-600 font-medium">Recipients</div>
                        <div className="text-2xl font-bold text-purple-900">156</div>
                      </div>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <div className="text-purple-600 font-medium">Open Rate</div>
                        <div className="text-2xl font-bold text-purple-900">94%</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-purple-700">Progress</span>
                        <span className="text-purple-900 font-medium">3/5 emails sent</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg">
                        <Settings className="h-4 w-4 mr-1" />
                        Configure
                      </Button>
                      <Button variant="outline" size="sm" className="border-purple-300 text-purple-700 hover:bg-purple-50 rounded-lg">
                        View Analytics
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-blue-900">Interview Reminders</CardTitle>
                          <CardDescription className="text-blue-700">Automated scheduling notifications</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-blue-500 text-white border-blue-500">
                        <Clock className="h-3 w-3 mr-1" />
                        Scheduled
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="bg-white/60 p-3 rounded-lg">
                        <div className="text-blue-600 font-medium">Today</div>
                        <div className="text-2xl font-bold text-blue-900">24</div>
                      </div>
                      <div className="bg-white/60 p-3 rounded-lg">
                        <div className="text-blue-600 font-medium">This Week</div>
                        <div className="text-2xl font-bold text-blue-900">89</div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                        <Send className="h-4 w-4 mr-1" />
                        Send Now
                      </Button>
                      <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50 rounded-lg">
                        Edit Template
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Email Templates */}
            <div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Email Templates</h3>
              <Card className="border-2 border-rose-200 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-rose-900">
                    <FileText className="h-5 w-5 text-rose-600" />
                    Template Library
                  </CardTitle>
                  <CardDescription className="text-rose-700">
                    Pre-built and custom email templates
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-rose-200 rounded-lg p-4 bg-white/60">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-rose-900">Application Received</h4>
                        <Badge variant="outline" className="border-rose-300 text-rose-700">
                          Auto-send
                        </Badge>
                      </div>
                      <p className="text-sm text-rose-700 mb-3">
                        Thank you for your application. We'll review it and get back to you soon.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                          Preview
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border border-rose-200 rounded-lg p-4 bg-white/60">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-rose-900">Interview Invitation</h4>
                        <Badge variant="outline" className="border-rose-300 text-rose-700">
                          Triggered
                        </Badge>
                      </div>
                      <p className="text-sm text-rose-700 mb-3">
                        Congratulations! We'd like to invite you for an interview.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                          Preview
                        </Button>
                      </div>
                    </div>
                    
                    <div className="border border-rose-200 rounded-lg p-4 bg-white/60">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-rose-900">Rejection Notice</h4>
                        <Badge variant="outline" className="border-rose-300 text-rose-700">
                          Manual
                        </Badge>
                      </div>
                      <p className="text-sm text-rose-700 mb-3">
                        Thank you for your interest. Unfortunately, we've decided to move forward with other candidates.
                      </p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                          Edit
                        </Button>
                        <Button size="sm" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50">
                          Preview
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-xl">
                    Create New Template
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

export default AutomatedEmails;