import { NextResponse } from "next/server";
import { generateWithAI } from "../../../../lib/ai";
import { publishFacebook } from "../../../../lib/providers";
export async function GET(req: Request) {
  const auth = req.headers.get("authorization");
  if (process.env.CRON_SECRET && auth !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ok:false,error:"Unauthorized"},{status:401});
  try {
    const topic = "One useful daily technology, freelancing or online-business tip for Pakistan";
    const post = await generateWithAI(topic, "facebook");
    const published = process.env.META_ACCESS_TOKEN && process.env.META_PAGE_ID ? await publishFacebook(`${post.title}\n\n${post.body}\n\n${(post.hashtags||[]).join(" ")}`) : {ok:false,reason:"Facebook credentials not configured"};
    return NextResponse.json({ok:true,generated:post,published});
  } catch (e) {
    return NextResponse.json({ok:false,error:e instanceof Error?e.message:"Cron failed"},{status:500});
  }
}