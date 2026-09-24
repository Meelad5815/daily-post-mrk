import { buildPrompt, fallbackPost, type Platform } from "./content-engine";

export async function generateWithAI(topic: string, platform: Platform) {
  const key = process.env.AI_API_KEY;
  const model = process.env.AI_MODEL || "gpt-4o-mini";
  if (!key) return { ...fallbackPost(topic), source: "fallback" };

  const prompt = buildPrompt(topic, platform);
  const r = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model,
      temperature: 0.8,
      messages: [
        { role: "system", content: "You are MRK OFFICIAL DIGITAL 786's professional social content manager. Return valid JSON with title, body, hashtags." },
        { role: "user", content: prompt }
      ]
    })
  });
  if (!r.ok) throw new Error(`AI provider error: ${r.status}`);
  const data = await r.json();
  const raw = data.choices?.[0]?.message?.content || "";
  const cleaned = raw.replace(/^\`\`\`json\s*/i, "").replace(/\s*\`\`\`$/i, "").trim();
  const parsed = JSON.parse(cleaned);
  return { ...parsed, source: "ai" };
}