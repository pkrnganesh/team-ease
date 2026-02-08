import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Navigation } from "@/components/ui/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock } from "lucide-react";

const ApplicationManagement = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [applicants, setApplicants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH SCREENED JOBS ================= */
  useEffect(() => {
    const fetchJobs = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data } = await supabase
        .from("job_openings")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_screened", true)
        .order("created_at", { ascending: false });

      setJobs(data || []);
    };

    fetchJobs();
  }, []);

  /* ================= FETCH APPLICANTS ================= */
  const fetchApplicants = async (jobId: string) => {
    setLoading(true);

    const { data } = await supabase
      .from("applicants")
      .select("*")
      .eq("job_id", jobId)
      .order("match_percentage", { ascending: false });

    setApplicants(data || []);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 border-r p-6">
          <h1 className="text-2xl font-bold text-primary">RuGanAI</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Application Intelligence
          </p>
          <Navigation />
        </div>

        {/* Main */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">
            Application Management
          </h2>

          {/* ================= JOB CARDS ================= */}
          <Card className="mb-8 rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle>Screened Jobs</CardTitle>
              <CardDescription>
                Select a job to view applicants
              </CardDescription>
            </CardHeader>

            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobs.map(job => (
                <div
                  key={job.id}
                  onClick={() => {
                    setSelectedJob(job);
                    fetchApplicants(job.id);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition ${
                    selectedJob?.id === job.id
                      ? "border-primary bg-primary/5"
                      : "hover:border-muted"
                  }`}
                >
                  <h3 className="font-semibold">{job.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {job.skills}
                  </p>
                  <Badge className="mt-2">
                    Min Match: {job.min_match}%
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* ================= APPLICANTS ================= */}
          {selectedJob && (
            <>
              <h3 className="text-xl font-semibold mb-4">
                Applicants for {selectedJob.title}
              </h3>
              <button className="mb-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition">
                Schedule Interviews
              </button>
              {loading ? (
                <p>Loading applicants...</p>
              ) : applicants.length === 0 ? (
                <p className="text-muted-foreground">
                  No applicants found.
                </p>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {applicants.map(applicant => (
                    <Card
                      key={applicant.id}
                      className="rounded-2xl shadow-soft"
                    >
                      <CardHeader>
                        <div className="flex justify-between">
                          <CardTitle>{applicant.name}</CardTitle>
                          <Badge
                            className={
                              applicant.status === "shortlisted"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }
                          >
                            {applicant.status === "shortlisted"
                              ? "Shortlisted"
                              : "Rejected"}
                          </Badge>
                        </div>
                      </CardHeader>

                      <CardContent>
                        <div className="mb-2 flex justify-between">
                          <span>Match Score</span>
                          <span className="font-bold">
                            {applicant.match_percentage}%
                          </span>
                        </div>
                        <Progress value={applicant.match_percentage} />

                        <div className="mt-3 text-sm text-muted-foreground">
                          {applicant.email || "No email provided"}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationManagement;
