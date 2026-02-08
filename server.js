import express from "express";
import multer from "multer";
import cors from "cors";
import axios from "axios";
import XLSX from "xlsx";
import dotenv from "dotenv";
import pdfjs from "pdfjs-dist/legacy/build/pdf.js";
import { analyzeResumeWithOllama } from "./ollamaAnalyzer.js";

dotenv.config();

const app = express();
const upload = multer();

app.use(cors({
  origin: "http://localhost:8080",
  methods: ["GET", "POST"]
}));

/* ===============================
   HELPERS
================================ */
function extractGoogleFileId(url) {
  const m1 = url.match(/\/d\/([^/]+)/);
  if (m1) return m1[1];
  const m2 = url.match(/[?&]id=([^&]+)/);
  if (m2) return m2[1];
  return null;
}

async function downloadResumeText(url) {
  try {
    let buffer;

    if (url.includes("drive.google.com")) {
      const fileId = extractGoogleFileId(url);
      if (!fileId) return "";

      const apiKey = process.env.GDRIVE_API_KEY;
      const downloadUrl =
        `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;

      const res = await axios.get(downloadUrl, {
        responseType: "arraybuffer"
      });

      buffer = new Uint8Array(res.data);
    } else {
      const res = await axios.get(url, { responseType: "arraybuffer" });
      buffer = new Uint8Array(res.data);
    }

    const pdf = await pdfjs.getDocument({ data: buffer }).promise;
    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      text += content.items.map(i => i.str).join(" ") + "\n";
    }

    return text;
  } catch {
    return "";
  }
}

function calculateMatchScore(requiredSkills, matchedSkills) {
  if (!requiredSkills.length) return 0;
  return Math.round(
    (matchedSkills.length / requiredSkills.length) * 100
  );
}

/* ===============================
   UPLOAD API
================================ */
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const { job_skills, min_match } = req.body;
    const REQUIRED_SKILLS = job_skills
      .split(",")
      .map(s => s.trim())
      .filter(Boolean);

    const MIN_MATCH = Number(min_match || 60);

    const workbook = XLSX.read(req.file.buffer);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    const results = [];

    for (const row of rows) {
      const resumeURL = row.resume_link;
      if (!resumeURL) continue;

      const resumeText = await downloadResumeText(resumeURL);
      if (!resumeText) continue;

      const ai = await analyzeResumeWithOllama(
        resumeText,
        REQUIRED_SKILLS.join(", ")
      );

      const match_percentage = calculateMatchScore(
        REQUIRED_SKILLS,
        ai.matched_skills
      );

      results.push({
        name: row.name || "Candidate",
        email: row.email,
        resume_link: row.resume_link,
        matched_skills: ai.matched_skills,
        missing_skills: ai.missing_skills,
        match_percentage,
        status: match_percentage >= MIN_MATCH ? "Shortlisted" : "Rejected"
      });
    }

    results.sort((a, b) => b.match_percentage - a.match_percentage);

    res.json({ results });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Screening failed" });
  }
});

/* ===============================
   START SERVER
================================ */
app.listen(8000, () =>
  console.log("🚀 Server running on http://localhost:8000")
);
