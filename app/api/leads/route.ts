import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

const rateLimit = new Map<string, { count: number; resetTime: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    const record = rateLimit.get(ip);
    
    const contentType = request.headers.get("content-type") || "";

    if (record && record.resetTime > now) {
      if (record.count >= 3) {
        if (contentType.includes("application/x-www-form-urlencoded")) {
          return NextResponse.redirect(new URL("/?error=rate_limit", request.url), 303);
        }
        return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
      }
      record.count++;
    } else {
      rateLimit.set(ip, { count: 1, resetTime: now + 60 * 1000 * 15 }); // 15 mins limit
    }

    const supabase = await createClient();

    // Check if it's a FormData or JSON request

    let data: any = {};

    if (contentType.includes("multipart/form-data") || contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    } else {
      data = await request.json();
    }

    // Basic spam protection (honeypot field)
    if (data.website) {
      return NextResponse.json({ success: true, message: "Thanks!" }, { status: 200 }); // fake success for bots
    }

    const { error } = await supabase.from("leads").insert([
      {
        name: data.name,
        company: data.company,
        email: data.email,
        phone: data.phone,
        service_interest: data.service,
        budget: data.budget,
        message: data.message,
        landing_page: data.landing_page,
        utm_source: data.utm_source,
        utm_medium: data.utm_medium,
        utm_campaign: data.utm_campaign,
        utm_term: data.utm_term,
        utm_content: data.utm_content,
        gclid: data.gclid,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save lead." },
        { status: 500 }
      );
    }

    // Redirect or return JSON based on what the frontend expects
    // Usually forms submitting natively via action expect a redirect, but JS fetch expects JSON
    if (contentType.includes("application/x-www-form-urlencoded")) {
       return NextResponse.redirect(new URL("/?success=true", request.url), 303);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
