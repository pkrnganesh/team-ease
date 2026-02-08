import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { Navigation } from "@/components/ui/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Star,
  Mail,
  FileText,
  Briefcase,
  ArrowLeft,
} from "lucide-react";

const ApplicantsPage = () => {
  const [applicants, setApplicants] = useState<any[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [showResume, setShowResume] = useState(false);
  const [jobTitle, setJobTitle] = useState("");

  /* ================= FETCH JOB TITLE ================= */
  useEffect(() => {
    if (!selectedApplicant?.job_id) return;

    const fetchJobTitle = async () => {
      const { data, error } = await supabase
        .from("job_openings") 
        .select("title")
        .eq("id", selectedApplicant.job_id)
        .single();

      if (!error && data) {
        setJobTitle(data.title);
      } else {
        setJobTitle("");
      }
    };

    fetchJobTitle();
  }, [selectedApplicant]);

  /* ================= FETCH APPLICANTS ================= */
  useEffect(() => {
    const fetchApplicants = async () => {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData?.user) return;

      const { data, error } = await supabase
        .from("applicants")
        .select("*")
        .eq("user_id", authData.user.id);

      if (!error && data && data.length > 0) {
        setApplicants(data);
        setSelectedApplicant(data[0]);
      }
    };

    fetchApplicants();
  }, []);

  const filteredApplicants = applicants.filter(
    (a) =>
      a.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.email?.toLowerCase().includes(search.toLowerCase())
  );

  const resumeUrl =
    selectedApplicant?.resume_link?.includes("drive.google.com")
      ? selectedApplicant.resume_link.replace("/view", "/preview")
      : selectedApplicant?.resume_link;

  return (
    <div className="min-h-screen h-screen overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="flex h-full">
        {/* ================= SIDEBAR ================= */}
        <div className="w-64 min-h-screen bg-white/80 backdrop-blur-sm border-r border-border p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              RuGanAI
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Candidate Intelligence
            </p>
          </div>
          <Navigation />
        </div>

        {/* ================= MAIN ================= */}
        <div className="flex-1 p-8 overflow-hidden">
          <Button variant="outline" className="mb-4 rounded-xl">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Jobs
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* ================= LEFT LIST ================= */}
            <div className="lg:col-span-1">
              <Card className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg h-full">
                <CardHeader>
                  <CardTitle>Applicants</CardTitle>
                  <CardDescription>
                    Search and select candidate
                  </CardDescription>
                </CardHeader>

                <CardContent className="max-h-[70vh] overflow-y-auto pr-2">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name or email..."
                    className="w-full mb-4 px-4 py-2 rounded-xl border"
                  />

                  {filteredApplicants.map((applicant) => (
                    <div
                      key={applicant.id}
                      onClick={() => {
                        setSelectedApplicant(applicant);
                        setShowResume(false);
                      }}
                      className={`p-4 mb-2 rounded-xl cursor-pointer transition ${
                        selectedApplicant?.id === applicant.id
                          ? "bg-violet-100"
                          : "bg-white hover:bg-violet-50"
                      }`}
                    >
                      <p className="font-medium">
                        {applicant.name || "Candidate"}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {applicant.email || "No email"}
                      </p>
                      <Badge className="mt-2">{applicant.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* ================= RIGHT DETAILS ================= */}
            {selectedApplicant && (
              <div className="lg:col-span-2 space-y-6 max-h-[80vh] overflow-y-auto pr-2">
                {/* PROFILE CARD */}
                <Card className="rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold">
                      {selectedApplicant.name || "Candidate"}
                    </h3>

                    <div className="flex justify-center items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span>{selectedApplicant.match_percentage}% Match</span>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-violet-600" />
                        Applied for: {jobTitle || "—"}
                      </div>

                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-violet-600" />
                        {selectedApplicant.email}
                      </div>

                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-violet-600" />
                        {selectedApplicant.status}
                      </div>
                    </div>

                    {/* ================= SKILLS ================= */}
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                      <div>
                        <h4 className="font-semibold mb-2 text-violet-700">
                          Matched Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(selectedApplicant.matched_skills || []).length >
                          0 ? (
                            selectedApplicant.matched_skills.map(
                              (skill: string, idx: number) => (
                                <Badge
                                  key={idx}
                                  className="bg-green-100 text-green-700"
                                >
                                  {skill}
                                </Badge>
                              )
                            )
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              No matched skills
                            </span>
                          )}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2 text-red-600">
                          Missing Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {(selectedApplicant.missing_skills || []).length >
                          0 ? (
                            selectedApplicant.missing_skills.map(
                              (skill: string, idx: number) => (
                                <Badge key={idx} variant="destructive">
                                  {skill}
                                </Badge>
                              )
                            )
                          ) : (
                            <span className="text-sm text-muted-foreground">
                              No missing skills 🎯
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <Button
                      className="w-full mt-6 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600"
                      onClick={() => setShowResume(!showResume)}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      {showResume ? "Hide Resume" : "View Resume"}
                    </Button>
                  </CardContent>
                </Card>

                {/* ================= RESUME ================= */}
                {showResume && resumeUrl && (
                  <Card className="rounded-2xl bg-white/80 shadow-lg border">
                    <CardContent className="p-4">
                      <iframe
                        src={resumeUrl}
                        className="w-full h-[700px] rounded-xl border"
                      />
                    </CardContent>
                  </Card>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantsPage;
  