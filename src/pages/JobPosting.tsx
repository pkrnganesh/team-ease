import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import { Navigation } from "@/components/ui/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileText, Briefcase } from "lucide-react";

const JobPosting = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState<string | null>(null);
  const [job, setJob] = useState({
    title: "",
    company: "",
    description: "",
    skills: "",
    minMatch: 60,
    experience: 0
  });
  const [jobList, setJobList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) {
        navigate("/login");
        return;
      }

      setUserId(user.id);
    };

    getUser();
  }, []);

  /* =========================
     FETCH USER JOBS
     Filter out jobs that have been screened if needed
  ========================== */
  const fetchJobs = async (uid: string) => {
    const { data, error } = await supabase
      .from("job_openings")
      .select("*")
      .eq("user_id", uid)
      .order("created_at", { ascending: false });

    if (!error) setJobList(data || []);
  };

  useEffect(() => {
    if (userId) fetchJobs(userId);
  }, [userId]);

  /* =========================
     CREATE JOB
  ========================== */
  const handleCreateJob = async () => {
    if (!job.title || !job.description || !job.skills || !userId) return;

    setLoading(true);

    const { error } = await supabase.from("job_openings").insert({
      user_id: userId,
      title: job.title,
      company: job.company,
      description: job.description,
      skills: job.skills,
      min_match: job.minMatch,
      experience: 0,
      is_screened: false // default to not screened
    });

    if (error) {
      alert(error.message);
    } else {
      setJob({
        title: "",
        company: "",
        description: "",
        skills: "",
        minMatch: 60,
        experience: 0
      });
      fetchJobs(userId);
    }

    setLoading(false);
  };

  /* =========================
     NAVIGATION
  ========================== */
  const goToScreening = (jobData: any) => {
    navigate("/screening", { state: jobData });
  };

  const goToApplicants = (jobId: string) => {
    navigate(`/application-management`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r p-6">
          <h1 className="text-2xl font-bold text-primary">RuGanAI</h1>
          <p className="text-sm text-muted-foreground mb-6">
            HR Job Openings
          </p>
          <Navigation />
        </div>

        {/* Main */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">Create Job Opening</h2>

          {/* Create Job */}
          <Card className="mb-10 rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Job Details
              </CardTitle>
              <CardDescription>Used for AI resume screening</CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">
              <Input
                placeholder="Job Title"
                value={job.title}
                onChange={e => setJob({ ...job, title: e.target.value })}
              />

              <Input
                placeholder="Company Name"
                value={job.company}
                onChange={e => setJob({ ...job, company: e.target.value })}
              />

              <Textarea
                placeholder="Job Description"
                className="min-h-[120px]"
                value={job.description}
                onChange={e => setJob({ ...job, description: e.target.value })}
              />

              <Input
                placeholder="Required Skills (comma separated)"
                value={job.skills}
                onChange={e => setJob({ ...job, skills: e.target.value })}
              />
              <label className="text-sm text-muted-foreground">
               Experince Required (years)
              </label>
               <Input
                type="number" min={0} max={50}
                placeholder="Experience Required (years)"
                value={job.experience}
                onChange={e => setJob({ ...job, experience: Number(e.target.value) })}
              />
              <label className="text-sm text-muted-foreground">
               Minimum Match Percentage (%)
              </label>
                
              <Input
                type="number" 
                placeholder="Minimum Match %"
                value={job.minMatch}
                onChange={e => setJob({ ...job, minMatch: Number(e.target.value) })}
              />

              <Button onClick={handleCreateJob} className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Create Job Opening"}
              </Button>
            </CardContent>
          </Card>

          {/* Job List */}
          <Card className="rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Your Job Openings
              </CardTitle>
              <CardDescription>Only jobs created by you</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {jobList.length === 0 && (
                <p className="text-muted-foreground text-sm">
                  No job openings created yet.
                </p>
              )}

              {jobList.map(job => (
                <div
                  key={job.id}
                  className="flex items-center justify-between p-4 border rounded-xl"
                >
                  <div>
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {job.company || "—"}
                    </p>
                    <Badge className="mt-1">
                      Min Match: {job.min_match}%
                    </Badge>
                  </div>

                  {job.is_screened ? (
                    <Button
                      variant="outline"
                      onClick={() => goToApplicants(job.id)}
                    >
                      View Applicants
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      onClick={() => goToScreening(job)}
                    >
                      Resume Screen
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobPosting;
