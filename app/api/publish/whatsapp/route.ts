import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { to, body } = await req.json();
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phone = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phone) return NextResponse.json({ ok:false, reason:"WhatsApp Business credentials not configured" }, { status:400 });
  if (!to || !body) return NextResponse.json({ ok:false, error:"to and body are required" }, { status:400 });
  const r = await fetch(`https://graph.facebook.com/v21.0/${phone}/messages`, {
    method:"POST", headers:{ "Content-Type":"application/json", Authorization:`Bearer ${token}` },
    body:JSON.stringify({ messaging_product:"whatsapp", recipient_type:"individual", to, type:"text", text:{ body } })
  });
  return NextResponse.json({ ok:r.ok, data:await r.json() }, { status:r.ok?200:502 });
}