import axios from "axios";

export async function analyzeResumeWithOllama(resumeText, jobSkills) {
  try {
    console.log("🔥 Calling Ollama...");
    const prompt = `
You are an ATS system.

Rules:
- Match ONLY explicit technical skills
- Do NOT infer or assume skills
- Ignore soft skills
- Ignore generic terms
- Skills must match EXACT wording or obvious variants
- Do NOT calculate scores
- Do NOT explain anything

Return ONLY valid JSON in this format:

{
  "matched_skills": [],
  "missing_skills": []
}

Job Required Skills:
${jobSkills}

Resume Text:
${resumeText}
`;

    const response = await axios.post(
      "http://127.0.0.1:11434/api/generate",
      {
        model: "llama3",
        prompt,
        stream: false
      },
      { timeout: 0 }
    );

    const raw = response.data?.response || "";
    const json = extractJSON(raw);
    
    return {
      matched_skills: json.matched_skills || [],
      missing_skills: json.missing_skills || []
    };

  } catch (err) {
    console.error("❌ Ollama error:", err.message);
    return { matched_skills: [], missing_skills: [] };
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
