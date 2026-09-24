import { NextResponse } from "next/server";
import { generateWithAI } from "../../../lib/ai";
export async function POST(req: Request) {
  try {
    const { topic = "Web development tips for Pakistani small businesses", platform = "facebook" } = await req.json().catch(() => ({}));
    const post = await generateWithAI(topic, platform);
    return NextResponse.json({ ok: true, post });
  } catch (error) {
    return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Generation failed" }, { status: 500 });
  }
}