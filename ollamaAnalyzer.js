import axios from "axios";

export async function analyzeResumeWithOllama(resumeText, jobDescription) {
  try {
    console.log("🔥 Calling Ollama...");

    const prompt = `
Return ONLY valid JSON. No explanations.

{
  "match_percentage": number,
  "matched_skills": [],
  "missing_skills": []
}

Job Description:
${jobDescription}

Resume:
${resumeText}
`;

    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "llama3.1",   
        prompt: prompt,
        stream: false
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const rawText = response.data?.response || "";
    console.log("🟢 RAW AI OUTPUT:", rawText);

    const json = extractJSON(rawText);

    return {
      match_percentage: json?.match_percentage || 0,
      matched_skills: json?.matched_skills || [],
      missing_skills: json?.missing_skills || []
    };

  } catch (err) {
    console.error("❌ Ollama Error:", err.message);
    return { match_percentage: 0, matched_skills: [], missing_skills: [] };
  }
}
function extractJSON(text) {
  try {
    const start = text.indexOf("{");
    const end = text.lastIndexOf("}");
    if (start === -1 || end === -1) return {};
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return {};
  }
}
