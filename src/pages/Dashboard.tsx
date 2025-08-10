import { Navigation } from "@/components/ui/navigation";
import { FeatureCard } from "@/components/ui/feature-card";
import { StatsCard } from "@/components/ui/stats-card";
import { Users, Calendar, CheckCircle, TrendingUp, Brain, FileCheck } from "lucide-react";
import heroImage from "@/assets/ai-hr-hero.jpg";
import resumeIcon from "@/assets/resume-screening-icon.jpg";
import interviewIcon from "@/assets/interview-scheduling-icon.jpg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Intelligent hiring solutions
            </p>
          </div>
          <Navigation />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Hero Section */}
          <div className="mb-8">
            <div className="relative rounded-3xl bg-gradient-primary p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  Welcome to AI-Powered HR Management
                </h2>
                <p className="text-white/90 text-lg mb-6 max-w-2xl">
                  Streamline your hiring process with intelligent resume screening, 
                  automated scheduling, and comprehensive candidate management.
                </p>
              </div>
              <div className="absolute right-0 top-0 w-96 h-full opacity-30">
                <img 
                  src={heroImage} 
                  alt="AI HR Assistant"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Candidates"
              value="1,247"
              change="+12% from last month"
              trend="up"
              icon={Users}
            />
            <StatsCard
              title="Interviews Scheduled"
              value="89"
              change="+8% from last week"
              trend="up"
              icon={Calendar}
            />
            <StatsCard
              title="Applications Screened"
              value="456"
              change="Today"
              trend="neutral"
              icon={Brain}
            />
            <StatsCard
              title="Hire Success Rate"
              value="87%"
              change="+5% from last quarter"
              trend="up"
              icon={TrendingUp}
            />
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="AI Resume Screening"
              description="Intelligent analysis of resumes with authenticity checks and skill matching. Get detailed insights and recommendations."
              image={resumeIcon}
              imageAlt="Resume Screening AI"
              action="Start Screening"
              onClick={() => navigate('/screening')}
            />
            <FeatureCard
              title="Interview Scheduling"
              description="Automated calendar coordination with candidates and interviewers. Send notifications and manage availability."
              image={interviewIcon}
              imageAlt="Interview Scheduling"
              action="Schedule Interviews"
              onClick={() => navigate('/interviews')}
            />
            <FeatureCard
              title="Candidate Management"
              description="Comprehensive tracking of all candidates through the hiring pipeline with automated status updates."
              image={resumeIcon}
              imageAlt="Candidate Management"
              action="Manage Candidates"
              onClick={() => navigate('/candidates')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;