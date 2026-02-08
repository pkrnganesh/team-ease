import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";

import { Navigation } from "@/components/ui/navigation";
import { FeatureCard } from "@/components/ui/feature-card";
import { StatsCard } from "@/components/ui/stats-card";

import {
  Users,
  Calendar,
  TrendingUp,
  Brain
} from "lucide-react";

import heroImage from "@/assets/ai-hr-hero.jpg";
import resumeIcon from "@/assets/resume-screening-icon.jpg";
import interviewIcon from "@/assets/interview-scheduling-icon.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalCandidates: 0,
    interviewsScheduled: 0,
    applicationsScreened: 0,
    hireSuccessRate: 0
  });

  /* ================= FETCH DASHBOARD STATS ================= */
  useEffect(() => {
    const fetchStats = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) return;

      // Total candidates
      const { count: totalCandidates } = await supabase
        .from("applicants")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id);

      // Interviews scheduled
      const { count: interviewsScheduled } = await supabase
        .from("interviews")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("status", "scheduled");

      // Applications screened
      const { count: applicationsScreened } = await supabase
        .from("job_openings")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("is_screened", true);

      // Shortlisted candidates
      const { count: shortlisted } = await supabase
        .from("applicants")
        .select("*", { count: "exact", head: true })
        .eq("user_id", user.id)
        .eq("status", "shortlisted");

      const successRate =
        totalCandidates && shortlisted
          ? Math.round((shortlisted / totalCandidates) * 100)
          : 0;

      setStats({
        totalCandidates: totalCandidates || 0,
        interviewsScheduled: interviewsScheduled || 0,
        applicationsScreened: applicationsScreened || 0,
        hireSuccessRate: successRate
      });
    };

    fetchStats();
  }, []);

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
          {/* Hero */}
          <div className="mb-8">
            <div className="relative rounded-3xl bg-gradient-primary p-8 text-white overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">
                  Welcome to AI-Powered HR Management
                </h2>
                <p className="text-white/90 text-lg max-w-2xl">
                  Streamline your hiring with AI resume screening, automated
                  interviews, and real-time candidate insights.
                </p>
              </div>
              <div className="absolute right-0 top-0 w-96 h-full opacity-30">
                <img
                  src={heroImage}
                  alt="AI HR"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard
              title="Total Candidates"
              value={stats.totalCandidates.toString()}
              change="All time"
              trend="up"
              icon={Users}
            />

            <StatsCard
              title="Interviews Scheduled"
              value={stats.interviewsScheduled.toString()}
              change="Upcoming"
              trend="up"
              icon={Calendar}
            />

            <StatsCard
              title="Applications Screened"
              value={stats.applicationsScreened.toString()}
              change="Completed"
              trend="neutral"
              icon={Brain}
            />

            <StatsCard
              title="Hire Success Rate"
              value={`${stats.hireSuccessRate}%`}
              change="Shortlisted ratio"
              trend="up"
              icon={TrendingUp}
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="AI Resume Screening"
              description="Analyze resumes with skill matching, authenticity checks, and smart shortlisting."
              image={resumeIcon}
              imageAlt="Resume Screening"
              action="Start Screening"
              onClick={() => navigate("/screening")}
            />

            <FeatureCard
              title="Interview Scheduling"
              description="Automated interview scheduling with calendar sync and notifications."
              image={interviewIcon}
              imageAlt="Interview Scheduling"
              action="Schedule Interviews"
              onClick={() => navigate("/interviews")}
            />

            <FeatureCard
              title="Candidate Management"
              description="Track and manage candidates across every stage of the hiring pipeline."
              image={resumeIcon}
              imageAlt="Candidate Management"
              action="Manage Candidates"
              onClick={() => navigate("/application-management")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
