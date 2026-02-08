import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import JobPosting from "./pages/JobPosting";
import ApplicationManagement from "./pages/ApplicationManagement";
import ResumeScreening from "./pages/ResumeScreening";
import CandidateDetails from "./pages/CandidateDetails";
import AuthenticityCheck from "./pages/AuthenticityCheck";
import InterviewScheduling from "./pages/InterviewScheduling";
import AIInterviewBot from "./pages/AIInterviewBot";
import AutomatedEmails from "./pages/AutomatedEmails";
import Onboarding from "./pages/Onboarding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/job-posting" element={<JobPosting />} />
          <Route path="/application-management" element={<ApplicationManagement />} />
          <Route path="/screening" element={<ResumeScreening />} />
          <Route path="/candidate-details" element={<CandidateDetails />} />
          <Route path="/authenticity" element={<AuthenticityCheck />} />
          <Route path="/interviews" element={<InterviewScheduling />} />
          <Route path="/ai-interview-bot" element={<AIInterviewBot />} />
          <Route path="/emails" element={<AutomatedEmails />} />
          <Route path="/onboarding" element={<Onboarding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
//RuGanAI#088