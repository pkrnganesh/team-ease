import React, { useEffect, useState } from "react";
import ScreeningLoader from "@/components/ui/ScreeningLoader";
import * as XLSX from "xlsx";

import { Navigation } from "@/components/ui/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, Loader } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { match } from "assert";

const ResumeScreening = () => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);
  const [results, setResults] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH UNSCREENED JOBS ================= */
  useEffect(() => {
    const fetchJobs = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (!user) return;

      const { data, error } = await supabase
        .from("job_openings")
        .select("*")
        .eq("user_id", user.id)
        .eq("is_screened", false) // Only unscreened jobs
        .order("created_at", { ascending: false });

      if (!error) setJobs(data || []);
    };

    fetchJobs();
  }, []);

  const onFileChange = (e: any) => setFile(e.target.files[0]);

  /* ================= STORE ALL CANDIDATES ================= */
  const storeApplicants = async (candidates: any[]) => {
    const {
      data: { user }
    } = await supabase.auth.getUser();

    if (!user || !selectedJob) return;

    const payload = candidates.map(c => ({
      
      user_id: user.id,
      job_id: selectedJob.id,
      name: c.name || "Candidate",
      email: c.email || null,
      resume_link: c.resume_link,
      matched_skills: c.matched_skills,
      missing_skills: c.missing_skills,
      match_percentage: c.match_percentage,
      status: c.match_percentage >= selectedJob.min_match ? "shortlisted" : "rejected"
    }));

    // 🔹 Insert all candidates into applicants table
    await supabase.from("applicants").insert(payload);

    // 🔹 Mark job as screened
    await supabase
      .from("job_openings")
      .update({ is_screened: true })
      .eq("id", selectedJob.id);
  };

  /* ================= UPLOAD & ANALYZE ================= */
  const handleUpload = async () => {
    setError("");
    setResults([]);
    setLoading(true);

    if (!selectedJob) {
      setError("Please select a job opening first.");
      setLoading(false);
      return;
    }

    if (!file) {
      setError("Please upload an Excel sheet.");
      setLoading(false);
      return;
    }

    try {
      // Validate Excel
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet) as any[];

      if (!rows.length || !rows[0].resume_link) {
        setError("Excel must contain a 'resume_link' column.");
        setLoading(false);
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("job_title", selectedJob.title);
      formData.append("job_description", selectedJob.description);
      formData.append("job_skills", selectedJob.skills);
      formData.append("min_match", selectedJob.min_match);

      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData
      });

      const data = await res.json();
      console.log("RAW API RESPONSE 👉", data.results);

      if (data.error) {
        setError(data.error);
      } else {
        const sorted = data.results.sort(
          (a: any, b: any) => b.match_percentage - a.match_percentage
        );

        setResults(sorted);

        // Store all candidates (shortlist & review) in Supabase
        await storeApplicants(sorted);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to process resumes.");
    } finally {
      setLoading(false);
    }
  };

  const shortlisted = selectedJob
    ? results.filter(r => r.status === "shortlisted")
    : [];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {loading && <ScreeningLoader />}

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white/80 border-r p-6">
          <h1 className="text-2xl font-bold text-primary">RuGanAI</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Intelligent hiring solutions
          </p>
          <Navigation />
        </div>

        {/* Main */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-6">AI Resume Screening</h2>

          {/* JOB SELECTION */}
          <Card className="mb-8 rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle>Select Job Opening</CardTitle>
              <CardDescription>
                Only unscreened jobs are shown
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobs.map(job => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
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

          {/* UPLOAD */}
          <Card className="mb-8 rounded-2xl shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                Upload Resume Excel
              </CardTitle>
              <CardDescription>
                Must contain <b>resume_link</b>
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <input
                type="file"
                accept=".xls,.xlsx"
                onChange={onFileChange}
                className="mb-4"
              />

              <Button onClick={handleUpload} disabled={loading}>
                {loading ? (
                  <>
                    <Loader className="h-4 w-4 animate-spin mr-2" />
                    Screening...
                  </>
                ) : (
                  "Start Screening"
                )}
              </Button>

              {error && <p className="text-red-600 mt-4">{error}</p>}
            </CardContent>
          </Card>

          {/* RESULTS */}
          {results.length > 0 && (
            <>
             

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {results.map((c, i) => (
                  <Card key={i} className="rounded-2xl shadow-soft">
                    <CardHeader>
                      <div className="flex justify-between">
                        <CardTitle>
                          {c.name || `Candidate ${i + 1}`}
                        </CardTitle>
                        <Badge
                          className={
                            c.match_percentage >= selectedJob.min_match
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }
                        >
                          { c.match_percentage >= selectedJob.min_match
                            ? "Shortlisted"
                            : "Rejected"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-2 flex justify-between">
                        <span>Match Score</span>
                        <span className="font-bold">{c.match_percentage}%</span>
                      </div>
                      <Progress value={c.match_percentage} />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeScreening;
