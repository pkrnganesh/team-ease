import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  Globe,
  Linkedin,
  Building2,
  Send,
  CheckCircle
} from "lucide-react";

const JobPosting = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              AI-Powered Recruitment
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Create Job Posting
            </h2>
            <p className="text-muted-foreground">
              Upload job description and select platforms for posting
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job Description Section */}
            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" />
                  Job Description
                </CardTitle>
                <CardDescription>
                  Upload or paste your job description
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <Input 
                    placeholder="e.g. Senior Frontend Developer"
                    className="rounded-xl border-blue-200 focus:border-blue-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input 
                    placeholder="e.g. TechCorp Inc."
                    className="rounded-xl border-blue-200 focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Job Description</label>
                  <Textarea 
                    placeholder="Paste or type the complete job description..."
                    className="min-h-[200px] rounded-xl border-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground mb-1">
                    Or upload job description file
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, DOC, DOCX up to 5MB
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Platform Selection */}
            <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  Select Platforms
                </CardTitle>
                <CardDescription>
                  Choose where to publish your job posting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors">
                    <Checkbox id="linkedin" />
                    <div className="flex items-center gap-3 flex-1">
                      <Linkedin className="h-6 w-6 text-blue-600" />
                      <div>
                        <label htmlFor="linkedin" className="font-medium cursor-pointer">LinkedIn Jobs</label>
                        <p className="text-xs text-muted-foreground">Premium job posting</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">Popular</Badge>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-purple-200 hover:bg-purple-50 transition-colors">
                    <Checkbox id="indeed" />
                    <div className="flex items-center gap-3 flex-1">
                      <Building2 className="h-6 w-6 text-purple-600" />
                      <div>
                        <label htmlFor="indeed" className="font-medium cursor-pointer">Indeed</label>
                        <p className="text-xs text-muted-foreground">Wide reach platform</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-green-200 hover:bg-green-50 transition-colors">
                    <Checkbox id="glassdoor" />
                    <div className="flex items-center gap-3 flex-1">
                      <Building2 className="h-6 w-6 text-green-600" />
                      <div>
                        <label htmlFor="glassdoor" className="font-medium cursor-pointer">Glassdoor</label>
                        <p className="text-xs text-muted-foreground">Company reviews platform</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-4 rounded-xl border border-orange-200 hover:bg-orange-50 transition-colors">
                    <Checkbox id="stackoverflow" />
                    <div className="flex items-center gap-3 flex-1">
                      <Building2 className="h-6 w-6 text-orange-600" />
                      <div>
                        <label htmlFor="stackoverflow" className="font-medium cursor-pointer">Stack Overflow Jobs</label>
                        <p className="text-xs text-muted-foreground">Developer-focused</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-3">Posting Summary</h4>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• 2 platforms selected</p>
                    <p>• Estimated reach: 10K+ candidates</p>
                    <p>• Total cost: $149/month</p>
                  </div>
                </div>

                <Button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <Send className="h-4 w-4 mr-2" />
                  Publish Job Posting
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Recent Job Postings */}
          <Card className="rounded-2xl bg-white/60 backdrop-blur-sm border-0 shadow-lg mt-8">
            <CardHeader>
              <CardTitle>Recent Job Postings</CardTitle>
              <CardDescription>Track your active job postings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl border border-green-200 bg-green-50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Senior Frontend Developer</p>
                      <p className="text-sm text-muted-foreground">Posted 2 days ago • 47 applications</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Product Manager</p>
                      <p className="text-sm text-muted-foreground">Posted 1 week ago • 123 applications</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;