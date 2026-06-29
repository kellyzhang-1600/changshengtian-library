import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const body = await request.json();
  const required = ["name", "email", "text_slug", "content"];
  if (required.some((key) => !body[key])) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceKey) {
    return NextResponse.json({ ok: true, mode: "demo" });
  }

  const supabase = createClient(url, serviceKey);
  const { error } = await supabase.from("suggestions").insert({
    name: body.name,
    email: body.email,
    text_slug: body.text_slug,
    content: body.content,
    status: "pending"
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
