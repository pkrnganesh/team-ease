import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  UserPlus, 
  CheckCircle, 
  Clock, 
  FileText, 
  Monitor,
  Key,
  Calendar,
  Award,
  Briefcase,
  Users,
  BookOpen,
  Coffee
} from "lucide-react";

const Onboarding = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/90 backdrop-blur-sm border-r border-amber-200 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-amber-600 mt-1">
              Employee Onboarding
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-amber-900 mb-2">
                  Employee Onboarding
                </h2>
                <p className="text-amber-700">
                  Streamlined onboarding process for new hires
                </p>
              </div>
              <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white rounded-xl">
                <UserPlus className="h-4 w-4 mr-2" />
                Add New Hire
              </Button>
            </div>
          </div>

          {/* Onboarding Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100 text-sm">Completed</p>
                    <p className="text-3xl font-bold">18</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-emerald-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500 to-cyan-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">In Progress</p>
                    <p className="text-3xl font-bold">7</p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500 to-violet-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">Starting Soon</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <Calendar className="h-8 w-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-rose-500 to-pink-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-rose-100 text-sm">Avg. Time</p>
                    <p className="text-3xl font-bold">4.2d</p>
                  </div>
                  <Award className="h-8 w-8 text-rose-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Onboarding */}
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">New Hires in Progress</h3>
              <div className="space-y-4">
                <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                          <UserPlus className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-amber-900">Jessica Chen</CardTitle>
                          <CardDescription className="text-amber-700">Frontend Developer</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-blue-500 text-white border-blue-500">
                        <Clock className="h-3 w-3 mr-1" />
                        Day 2/5
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-amber-800">Progress</span>
                        <span className="text-sm font-bold text-amber-700">60%</span>
                      </div>
                      <Progress value={60} className="h-3" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                        <span className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          Documents Submitted
                        </span>
                        <Badge className="bg-green-100 text-green-700">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                        <span className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          IT Setup
                        </span>
                        <Badge className="bg-green-100 text-green-700">Complete</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                        <span className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-blue-600" />
                          Training Modules
                        </span>
                        <Badge className="bg-blue-100 text-blue-700">In Progress</Badge>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="border-amber-300 text-amber-700 hover:bg-amber-50 rounded-lg">
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                          <UserPlus className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-green-900">Michael Rodriguez</CardTitle>
                          <CardDescription className="text-green-700">Product Manager</CardDescription>
                        </div>
                      </div>
                      <Badge className="bg-green-500 text-white border-green-500">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Completed
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-green-800">Progress</span>
                        <span className="text-sm font-bold text-green-700">100%</span>
                      </div>
                      <Progress value={100} className="h-3" />
                    </div>
                    
                    <div className="bg-green-100 border border-green-300 rounded-lg p-3 text-sm text-green-800">
                      <strong>Onboarding completed successfully!</strong> Welcome email sent, first day scheduled.
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                        Generate Report
                      </Button>
                      <Button variant="outline" size="sm" className="border-green-300 text-green-700 hover:bg-green-50 rounded-lg">
                        Archive
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Onboarding Checklist Template */}
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Onboarding Checklist</h3>
              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-orange-900">
                    <FileText className="h-5 w-5 text-orange-600" />
                    Standard Onboarding Process
                  </CardTitle>
                  <CardDescription className="text-orange-700">
                    Complete checklist for new employee setup
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border border-orange-200 rounded-lg p-4 bg-white/60">
                      <h4 className="font-medium text-orange-900 mb-3 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Day 1: Documentation & Setup
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-orange-700">
                          <CheckCircle className="h-3 w-3" />
                          <span>Collect personal documents</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-700">
                          <CheckCircle className="h-3 w-3" />
                          <span>Setup IT equipment</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-700">
                          <CheckCircle className="h-3 w-3" />
                          <span>Create system accounts</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-orange-200 rounded-lg p-4 bg-white/60">
                      <h4 className="font-medium text-orange-900 mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Day 2-3: Training & Orientation
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-orange-700">
                          <Clock className="h-3 w-3" />
                          <span>Company orientation session</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-700">
                          <Clock className="h-3 w-3" />
                          <span>Department introduction</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-700">
                          <Clock className="h-3 w-3" />
                          <span>Role-specific training</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border border-orange-200 rounded-lg p-4 bg-white/60">
                      <h4 className="font-medium text-orange-900 mb-3 flex items-center gap-2">
                        <Coffee className="h-4 w-4" />
                        Day 4-5: Integration
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-orange-700">
                          <Users className="h-3 w-3" />
                          <span>Team meetups & coffee chats</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-700">
                          <Briefcase className="h-3 w-3" />
                          <span>First project assignment</span>
                        </div>
                        <div className="flex items-center gap-2 text-orange-700">
                          <Award className="h-3 w-3" />
                          <span>Feedback session</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white rounded-xl">
                    Customize Checklist
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

export default Onboarding;