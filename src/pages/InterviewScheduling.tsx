import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  Video, 
  MapPin, 
  User, 
  Plus,
  Bell,
  CheckCircle
} from "lucide-react";

const InterviewScheduling = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              AI HR Suite
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
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Interview Scheduling
                </h2>
                <p className="text-muted-foreground">
                  Manage and coordinate interviews with candidates and interviewers
                </p>
              </div>
              <Button className="rounded-xl">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Interview
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="rounded-xl bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Today</p>
                    <p className="text-xl font-bold">8</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">This Week</p>
                    <p className="text-xl font-bold">24</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-xl font-bold">12</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="rounded-xl bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                    <Video className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Virtual</p>
                    <p className="text-xl font-bold">18</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Interviews */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Today's Interviews</h3>
              <div className="space-y-4">
                <Card className="rounded-2xl bg-gradient-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Sarah Johnson</h4>
                          <p className="text-sm text-muted-foreground">Frontend Developer</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200">
                        Confirmed
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>10:00 AM - 11:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Video className="h-4 w-4 text-muted-foreground" />
                        <span>Video Call (Zoom)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>Interviewer: John Smith</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="rounded-lg">
                        Join Meeting
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <Bell className="h-4 w-4 mr-1" />
                        Notify
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl bg-gradient-card border-0 shadow-soft">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                        Scheduled
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>2:00 PM - 3:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Conference Room A</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>Interviewer: Jane Doe</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="rounded-lg">
                        Reschedule
                      </Button>
                      <Button variant="outline" size="sm" className="rounded-lg">
                        <Bell className="h-4 w-4 mr-1" />
                        Remind
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">This Week</h3>
              <Card className="rounded-2xl bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Interview Calendar
                  </CardTitle>
                  <CardDescription>
                    Overview of scheduled interviews
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <p className="font-medium">Tomorrow</p>
                      <p className="text-sm text-muted-foreground">3 interviews scheduled</p>
                    </div>
                    <div className="border-l-4 border-blue-300 pl-4">
                      <p className="font-medium">Wednesday</p>
                      <p className="text-sm text-muted-foreground">5 interviews scheduled</p>
                    </div>
                    <div className="border-l-4 border-green-300 pl-4">
                      <p className="font-medium">Thursday</p>
                      <p className="text-sm text-muted-foreground">2 interviews scheduled</p>
                    </div>
                    <div className="border-l-4 border-orange-300 pl-4">
                      <p className="font-medium">Friday</p>
                      <p className="text-sm text-muted-foreground">4 interviews scheduled</p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6 rounded-xl">
                    View Full Calendar
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

export default InterviewScheduling;