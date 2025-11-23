import express from "express";
import multer from "multer";
import cors from "cors";
import axios from "axios";
import XLSX from "xlsx";
import { analyzeResumeWithOllama } from "./ollamaAnalyzer.js";
import dotenv from "dotenv";
import pdfjs from "pdfjs-dist";

dotenv.config();

const app = express();
const upload = multer();

function extractGoogleFileId(url) {
  const match1 = url.match(/\/d\/([^/]+)/);       
  if (match1) return match1[1];
  const match2 = url.match(/[?&]id=([^&]+)/);     
  if (match2) return match2[1];
  return null;
}

async function downloadResumeText(url) {
  try {
    let dataBuffer;

    if (url.includes("drive.google.com")) {
      
      const fileId = extractGoogleFileId(url);
      if (!fileId) {
        console.warn("⚠️ Invalid Google Drive URL:", url);
        return "";
      }

      const apiKey = process.env.GDRIVE_API_KEY;
      if (!apiKey) throw new Error("GDRIVE_API_KEY not set in .env");

      const downloadUrl = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
      const response = await axios.get(downloadUrl, {
        responseType: "arraybuffer",
        validateStatus: () => true
      });

      if (response.status !== 200) {
        const text = Buffer.from(response.data).toString("utf-8");
        let json;
        try { json = JSON.parse(text); } catch(e) { json = text; }
        console.error("❌ Google Drive download failed:", response.status, json);
        return "";
      }

      dataBuffer = new Uint8Array(response.data);
    } else {
     
      const response = await axios.get(url, { responseType: "arraybuffer" });
      dataBuffer = new Uint8Array(response.data);
    }

    const pdfData = await pdfjs.getDocument({ data: dataBuffer }).promise;
    let text = '';

    for (let i = 1; i <= pdfData.numPages; i++) {
      const page = await pdfData.getPage(i);
      const pageText = await page.getTextContent();
      text += pageText.items.map(item => item.str).join(' ') + '\n';
    }

    return text;

  } catch (err) {
    console.error("❌ Error downloading PDF:", err.message);
    return "";
  }
}

app.use(cors({ origin: "http://localhost:8080", methods: ["GET","POST"] }));

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const workbook = XLSX.read(req.file.buffer);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    const results = [];
    let highMatchCount = 0; 

    for (const row of rows) {
      const resumeURL = row.resume_link;
      if (!resumeURL) {
        results.push({ name: row.name || "NA", position: row.position || "NA", error: "No resume link" });
        continue;
      }

      const resumeText = await downloadResumeText(resumeURL);
      if (!resumeText) {
        results.push({ name: row.name || "NA", position: row.position || "NA", error: "Failed to extract PDF text" });
        continue;
      }

      const aiResult = await analyzeResumeWithOllama(resumeText, row.job_description || "Software Engineer");

      if (aiResult.match_percentage >= 60) highMatchCount++;

      results.push({
        name: row.name || "NA",
        position: row.position || "NA",
        ...aiResult
      });
    }

    res.json({ 
      results,
      high_match_count: highMatchCount
    });

  } catch (err) {
    console.error("❌ /upload error:", err);
    res.status(500).json({ error: "Failed to analyze Excel sheet." });
  }
});


const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
