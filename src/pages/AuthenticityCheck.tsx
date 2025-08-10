import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Search, 
  FileText, 
  Award,
  Clock,
  Eye,
  AlertCircle
} from "lucide-react";

const AuthenticityCheck = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/90 backdrop-blur-sm border-r border-emerald-200 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-emerald-600 mt-1">
              Authenticity Verification
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">
              Resume Authenticity Check
            </h2>
            <p className="text-emerald-700">
              Advanced AI-powered verification to detect fraudulent claims and ensure candidate integrity
            </p>
          </div>

          {/* Verification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">Verified Today</p>
                    <p className="text-3xl font-bold">94%</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-100 text-sm">Flagged</p>
                    <p className="text-3xl font-bold">4%</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-yellow-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-500 to-pink-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-red-100 text-sm">Rejected</p>
                    <p className="text-3xl font-bold">2%</p>
                  </div>
                  <XCircle className="h-8 w-8 text-red-200" />
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-500 to-purple-600 text-white border-0 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">Processing</p>
                    <p className="text-3xl font-bold">12</p>
                  </div>
                  <Clock className="h-8 w-8 text-blue-200" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Verification Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* High Trust Score */}
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-emerald-900">Emily Rodriguez</CardTitle>
                      <CardDescription className="text-emerald-700">Senior Software Engineer</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white border-green-500">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Verified
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-emerald-800">Trust Score</span>
                    <span className="text-sm font-bold text-green-600">96%</span>
                  </div>
                  <Progress value={96} className="h-3 bg-green-100" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                    <span className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-green-600" />
                      Education Verification
                    </span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                    <span className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-green-600" />
                      Employment History
                    </span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                    <span className="flex items-center gap-2 text-sm">
                      <Search className="h-4 w-4 text-green-600" />
                      Skills Assessment
                    </span>
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg">
                    Approve Candidate
                  </Button>
                  <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 rounded-lg">
                    <Eye className="h-4 w-4 mr-1" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Suspicious Activity */}
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                      <AlertCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-red-900">David Thompson</CardTitle>
                      <CardDescription className="text-red-700">Product Manager</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-red-500 text-white border-red-500">
                    <XCircle className="h-3 w-3 mr-1" />
                    Flagged
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-red-800">Trust Score</span>
                    <span className="text-sm font-bold text-red-600">34%</span>
                  </div>
                  <Progress value={34} className="h-3 bg-red-100" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                    <span className="flex items-center gap-2 text-sm">
                      <Award className="h-4 w-4 text-red-600" />
                      Education Verification
                    </span>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                    <span className="flex items-center gap-2 text-sm">
                      <FileText className="h-4 w-4 text-yellow-600" />
                      Employment History
                    </span>
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                    <span className="flex items-center gap-2 text-sm">
                      <Search className="h-4 w-4 text-red-600" />
                      Skills Assessment
                    </span>
                    <XCircle className="h-4 w-4 text-red-600" />
                  </div>
                </div>

                <div className="bg-red-100 border border-red-300 rounded-lg p-3 text-sm text-red-800">
                  <strong>Issues Found:</strong> Unverified degree from non-accredited institution, employment gap discrepancies.
                </div>

                <div className="flex gap-2 pt-2">
                  <Button className="bg-red-600 hover:bg-red-700 text-white rounded-lg">
                    Reject Application
                  </Button>
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 rounded-lg">
                    Manual Review
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

export default AuthenticityCheck;