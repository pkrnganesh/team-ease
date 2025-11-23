import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Navigation } from "@/components/ui/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Upload, CheckCircle, AlertTriangle, User, Loader } from "lucide-react"; // import Loader

const ResumeScreening = () => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // NEW

  const onFileChange = e => setFile(e.target.files[0]);

  const handleUpload = async () => {
    setError("");
    setResults([]);
    setLoading(true); // start loading

    if (!file) {
      setError("Please upload an Excel sheet (.xls or .xlsx).");
      setLoading(false);
      return;
    }

    const validTypes = [
      "application/vnd.ms-excel",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ];

    if (!validTypes.includes(file.type)) {
      setError("Only Excel files (.xls, .xlsx) are allowed.");
      setLoading(false);
      return;
    }

    try {
      const buffer = await file.arrayBuffer();
      const workbook = XLSX.read(buffer);
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(sheet);

      if (rows.length === 0) {
        setError("The Excel sheet is empty.");
        setLoading(false);
        return;
      }

      if (!Object.keys(rows[0]).includes("resume_link")) {
        setError("Excel must contain a 'resume_link' column.");
        setLoading(false);
        return;
      }

      // Send Excel to backend
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.error) setError(data.error);
      else setResults(data.results);

    } catch (err) {
      console.error(err);
      setError("Invalid Excel format. Please check your file.");
    } finally {
      setLoading(false); // stop loading
    }
  };

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
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              AI Resume Screening
            </h2>
            <p className="text-muted-foreground">
              Upload Excel file containing resume links for analysis
            </p>
          </div>

          {/* Upload Section */}
          <Card className="mb-8 rounded-2xl bg-gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5 text-primary" />
                Upload Excel Sheet
              </CardTitle>
              <CardDescription>
                Upload only .xls or .xlsx files with a 'resume_link' column
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/50 transition-smooth cursor-pointer">
                <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-foreground font-medium mb-2">
                  Upload Excel file
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Supports .xls and .xlsx files only
                </p>

                <input
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={onFileChange}
                  style={{ marginBottom: "8px" }}
                />

                <Button className="rounded-xl" onClick={handleUpload} disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin h-4 w-4" />
                      Processing...
                    </div>
                  ) : "Analyse Sheet"}
                </Button>

                {error && (
                  <div style={{ color: "red", marginTop: "10px" }}>
                    {error}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Candidate Count */}
          <div className="mt-6 text-center">
            <span className="text-lg font-semibold">
             No.of  Candidates meet criteria (≥ 60% match):{" "}
              {results.filter(c => c.match_percentage >= 60).length}
            </span>
          </div>  

          {/* Candidate Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {results.map((candidate, index) => (
              <Card key={index} className="rounded-2xl bg-gradient-card border-0 shadow-soft">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                        <User className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{candidate.name || `Candidate ${index + 1}`}</CardTitle>
                        
                      </div>
                    </div>
                    <Badge
                      variant="secondary"
                      className={`${candidate.match_percentage > 70
                        ? "bg-green-100 text-green-700 border-green-200"
                        : "bg-yellow-100 text-yellow-700 border-yellow-200"
                        }`}
                    >
                      {candidate.match_percentage > 70 ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <AlertTriangle className="h-3 w-3 mr-1" />
                      )}
                      {candidate.match_percentage > 70 ? "Verified" : "Review Required"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Overall Match Score</span>
                      <span className="text-sm font-bold text-primary">
                        {candidate.match_percentage}%
                      </span>
                    </div>
                    <Progress value={candidate.match_percentage} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeScreening;
