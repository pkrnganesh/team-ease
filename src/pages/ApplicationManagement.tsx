import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
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
import { useState } from "react";

const ApplicationManagement = () => {
  const { toast } = useToast();
  const [selectedApproved, setSelectedApproved] = useState<number[]>([]);
  const [selectedRejected, setSelectedRejected] = useState<number[]>([]);
  const [showAllApproved, setShowAllApproved] = useState(false);
  const [showAllRejected, setShowAllRejected] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error">("success");

  const basApprovedCandidates = [
    { name: "Sarah Johnson", email: "padmaji94@gmail.com", role: "Senior Frontend Dev", score: 94, experience: "5 years" },
    { name: "Mike Chen", email: "padmaji94@gmail.com", role: "Full Stack Dev", score: 91, experience: "4 years" },
    { name: "Lisa Park", email: "padmaji94@gmail.com", role: "React Developer", score: 88, experience: "3 years" }
  ];

  const baseRejectedCandidates = [
    { name: "John Smith", email: "padmaji94@gmail.com", role: "Junior Developer", score: 45, reason: "Insufficient experience" },
    { name: "Amy Wong", email: "padmaji94@gmail.com", role: "Frontend Developer", score: 52, reason: "Skills mismatch" },
    { name: "Carlos Rodriguez", email: "padmaji94@gmail.com", role: "Backend Developer", score: 38, reason: "Technical requirements" }
  ];

  // Expand candidate lists with duplicates
  const approvedCandidates = showAllApproved 
    ? [...basApprovedCandidates, ...basApprovedCandidates, ...basApprovedCandidates] 
    : basApprovedCandidates;

  const rejectedCandidates = showAllRejected 
    ? [...baseRejectedCandidates, ...baseRejectedCandidates, ...baseRejectedCandidates] 
    : baseRejectedCandidates;

  const toggleApprovedSelection = (index: number) => {
    setSelectedApproved(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleRejectedSelection = (index: number) => {
    setSelectedRejected(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleSelectAllApproved = () => {
    if (selectedApproved.length === approvedCandidates.length) {
      setSelectedApproved([]);
    } else {
      setSelectedApproved(approvedCandidates.map((_, i) => i));
    }
  };

  const toggleSelectAllRejected = () => {
    if (selectedRejected.length === rejectedCandidates.length) {
      setSelectedRejected([]);
    } else {
      setSelectedRejected(rejectedCandidates.map((_, i) => i));
    }
  };

  // Email template
  const mailTemplate = (candidateName: string, isApproved: boolean) => {
    if (isApproved) {
      return {
        subject: "Exciting Opportunity - Next Steps",
        body: `Dear ${candidateName},\n\nCongratulations! We're impressed with your application and would like to move forward with the next stage of our hiring process.\n\nYour qualifications and experience align well with our team's needs. We'd love to schedule an interview at your earliest convenience.\n\nPlease let us know your availability for the upcoming week, and we'll arrange a time that works best for you.\n\nBest regards,\nRuGanAI Recruitment Team`
      };
    } else {
      return {
        subject: "Application Status Update",
        body: `Dear ${candidateName},\n\nThank you for your interest in our company and for taking the time to apply for the position. We appreciated the opportunity to learn about your background and experience.\n\nUnfortunately, we have decided to move forward with other candidates whose qualifications more closely match our current needs. However, we encourage you to apply again for future positions that may be a better fit.\n\nWe wish you the best in your career endeavors.\n\nBest regards,\nRuGanAI Recruitment Team`
      };
    }
  };

  // Send mail to individual candidate (quick send from card button)
  const sendMailToIndividual = async (candidate: any, isApproved: boolean) => {
    setLoading(true);
    setMessage("");

    try {
      const { subject, body } = mailTemplate(candidate.name, isApproved);

      const response = await fetch("http://localhost:3001/api/send-selected-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidates: [{ name: candidate.name, email: candidate.email }],
          subject,
          body,
          type: isApproved ? "approved" : "rejected"
        })
      });

      const data = await response.json();

      if (response.ok) {
        const successMessage = `Mail sent successfully to ${candidate.name}`;
        setMessage(`✅ ${successMessage}`);
        setMessageType("success");
        
        console.log("✅ Email sent successfully:", successMessage);
        
        toast({
          title: "✅ Mail Has Sent!",
          description: successMessage,
          variant: "default",
        });
        
        // Auto-clear message after 5 seconds
        setTimeout(() => setMessage(""), 5000);
      } else {
        const errorMessage = data.error || "Failed to send email";
        setMessage(`❌ Error: ${errorMessage}`);
        setMessageType("error");
        
        console.error("❌ Email sending failed:", errorMessage);
        
        toast({
          title: "❌ Error Sending Email",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Unknown error";
      setMessage(`❌ Failed to send email: ${errorMsg}`);
      setMessageType("error");
      
      console.error("❌ Error:", errorMsg);
      
      toast({
        title: "❌ Failed to Send Email",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Send mail to selected approved candidates
  const sendMailToSelectedApproved = async () => {
    if (selectedApproved.length === 0) {
      toast({
        title: "⚠️ No Selection",
        description: "Please select at least one candidate",
        variant: "destructive",
      });
      setMessage("Please select at least one candidate");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const candidatesToSend = selectedApproved.map(index => ({
        name: approvedCandidates[index].name,
        email: approvedCandidates[index].email
      }));

      const { subject, body } = mailTemplate(candidatesToSend[0].name, true);

      const response = await fetch("http://localhost:3001/api/send-selected-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidates: candidatesToSend,
          subject,
          body,
          type: "approved"
        })
      });

      const data = await response.json();

      if (response.ok) {
        const successMessage = `Successfully sent emails to ${data.data.successful} candidate(s)`;
        setMessage(`✅ Mail has sent! ${successMessage}`);
        setMessageType("success");
        
        console.log("✅ Email sent successfully:", successMessage);
        
        toast({
          title: "✅ Mail Has Sent!",
          description: successMessage,
          variant: "default",
        });
        
        // Auto-clear message after 5 seconds
        setTimeout(() => setMessage(""), 5000);
        
        // DON'T clear selection - keep it for re-sending
        // setSelectedApproved([]);
      } else {
        const errorMessage = data.error || "Failed to send emails";
        setMessage(`❌ Error: ${errorMessage}`);
        setMessageType("error");
        
        console.error("❌ Email sending failed:", errorMessage);
        
        toast({
          title: "❌ Error Sending Emails",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Unknown error";
      setMessage(`❌ Failed to send emails: ${errorMsg}`);
      setMessageType("error");
      
      console.error("❌ Error:", errorMsg);
      
      toast({
        title: "❌ Failed to Send Emails",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Send mail to selected rejected candidates
  const sendMailToSelectedRejected = async () => {
    if (selectedRejected.length === 0) {
      toast({
        title: "⚠️ No Selection",
        description: "Please select at least one candidate",
        variant: "destructive",
      });
      setMessage("Please select at least one candidate");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const candidatesToSend = selectedRejected.map(index => ({
        name: rejectedCandidates[index].name,
        email: rejectedCandidates[index].email
      }));

      const { subject, body } = mailTemplate(candidatesToSend[0].name, false);

      const response = await fetch("http://localhost:3001/api/send-selected-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidates: candidatesToSend,
          subject,
          body,
          type: "rejected"
        })
      });

      const data = await response.json();

      if (response.ok) {
        const successMessage = `Successfully sent emails to ${data.data.successful} candidate(s)`;
        setMessage(`✅ Mail has sent! ${successMessage}`);
        setMessageType("success");
        
        console.log("✅ Email sent successfully:", successMessage);
        
        toast({
          title: "✅ Mail Has Sent!",
          description: successMessage,
          variant: "default",
        });
        
        // Auto-clear message after 5 seconds
        setTimeout(() => setMessage(""), 5000);
        
        // DON'T clear selection - keep it for re-sending
        // setSelectedRejected([]);
      } else {
        const errorMessage = data.error || "Failed to send emails";
        setMessage(`❌ Error: ${errorMessage}`);
        setMessageType("error");
        
        console.error("❌ Email sending failed:", errorMessage);
        
        toast({
          title: "❌ Error Sending Emails",
          description: errorMessage,
          variant: "destructive",
        });
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : "Unknown error";
      setMessage(`❌ Failed to send emails: ${errorMsg}`);
      setMessageType("error");
      
      console.error("❌ Error:", errorMsg);
      
      toast({
        title: "❌ Failed to Send Emails",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

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

          {message && (
            <div className={`mb-6 p-4 rounded-lg font-semibold text-lg border-2 ${messageType === "success" ? "bg-green-100 text-green-800 border-green-500" : "bg-red-100 text-red-800 border-red-500"}`}>
              {message}
            </div>
          )}

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
                <div className="flex items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
                  <Checkbox
                    checked={selectedApproved.length === approvedCandidates.length}
                    onCheckedChange={toggleSelectAllApproved}
                  />
                  <label className="text-sm font-medium cursor-pointer">Select All</label>
                </div>
                {approvedCandidates.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-green-200 bg-green-50/50">
                    <div className="flex items-center gap-3 flex-1">
                      <Checkbox
                        checked={selectedApproved.includes(index)}
                        onCheckedChange={() => toggleApprovedSelection(index)}
                      />
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
                      <Button size="sm" className="rounded-lg bg-green-600 hover:bg-green-700" onClick={() => sendMailToIndividual(candidate, true)} disabled={loading}>
                        <Mail className="h-3 w-3 mr-1" />
                        Send Mail
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl border-green-200 text-green-600 hover:bg-green-50" onClick={() => setShowAllApproved(!showAllApproved)}>
                  {showAllApproved ? "Show Less Approved" : "View All Approved (89)"}
                </Button>
                <Button className="w-full rounded-xl bg-green-600 hover:bg-green-700" onClick={sendMailToSelectedApproved} disabled={loading || selectedApproved.length === 0}>
                  <Mail className="h-4 w-4 mr-2" />
                  {loading ? "Sending..." : `Send Mail to ${selectedApproved.length > 0 ? selectedApproved.length : "0"} Approved`}
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
                <div className="flex items-center gap-2 mb-4 p-2 bg-gray-50 rounded-lg">
                  <Checkbox
                    checked={selectedRejected.length === rejectedCandidates.length}
                    onCheckedChange={toggleSelectAllRejected}
                  />
                  <label className="text-sm font-medium cursor-pointer">Select All</label>
                </div>
                {rejectedCandidates.map((candidate, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-xl border border-red-200 bg-red-50/50">
                    <div className="flex items-center gap-3 flex-1">
                      <Checkbox
                        checked={selectedRejected.includes(index)}
                        onCheckedChange={() => toggleRejectedSelection(index)}
                      />
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
                      <Button size="sm" variant="outline" className="rounded-lg border-red-200 text-red-600 hover:bg-red-50" onClick={() => sendMailToIndividual(candidate, false)} disabled={loading}>
                        <Mail className="h-3 w-3 mr-1" />
                        Send Email
                      </Button>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full rounded-xl border-red-200 text-red-600 hover:bg-red-50" onClick={() => setShowAllRejected(!showAllRejected)}>
                  {showAllRejected ? "Show Less Rejected" : "View All Rejected (124)"}
                </Button>
                <Button variant="outline" className="w-full rounded-xl border-red-200 text-red-600 hover:bg-red-50" onClick={sendMailToSelectedRejected} disabled={loading || selectedRejected.length === 0}>
                  <Mail className="h-4 w-4 mr-2" />
                  {loading ? "Sending..." : `Send Emails to ${selectedRejected.length > 0 ? selectedRejected.length : "0"} Rejected`}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ApplicationManagement;