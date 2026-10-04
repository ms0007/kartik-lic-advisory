import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Simple in-memory rate limiting map: IP -> timestamp[]
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const recent = timestamps.filter(t => now - t < windowMs);
  
  if (recent.length >= maxRequests) {
    return false; // Rate limit exceeded
  }
  
  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

// XSS Sanitizer: Escape HTML characters
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface LeadSubmissionPayload {
  interest: string;
  ageGroup: string;
  occupation: string;
  incomeRange: string;
  financialResponsibility: string;
  preferredContact: 'Call' | 'WhatsApp' | 'Email';
  name: string;
  phone: string;
  email?: string;
  notes?: string;
  honeypot?: string; // Bot detection
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "127.0.0.1";

    // 1. Rate Limiting Check
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before trying again." },
        { status: 429 }
      );
    }

    const body: LeadSubmissionPayload = await req.json();

    // 2. Honeypot check (Spam prevention)
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Silently accept without processing to fool bots
      return NextResponse.json({ success: true, message: "Request received." });
    }

    // 3. Strict Server-side Validation
    const { name, phone, interest, preferredContact } = body;

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please provide a valid full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Validate Indian phone number (10 digits, optional +91 prefix)
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    const validIndianPhone = cleanPhone.length === 10 || (cleanPhone.length === 12 && cleanPhone.startsWith("91"));
    if (!validIndianPhone) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit Indian phone number." },
        { status: 400 }
      );
    }

    if (!interest) {
      return NextResponse.json(
        { error: "Please select an area of interest." },
        { status: 400 }
      );
    }

    // 4. Sanitize and escape all text inputs
    const sanitizedLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      timestamp: new Date().toISOString(),
      interest: escapeHtml(String(body.interest).slice(0, 80)),
      ageGroup: escapeHtml(String(body.ageGroup || "Not specified").slice(0, 50)),
      occupation: escapeHtml(String(body.occupation || "Not specified").slice(0, 80)),
      incomeRange: escapeHtml(String(body.incomeRange || "Not specified").slice(0, 50)),
      financialResponsibility: escapeHtml(String(body.financialResponsibility || "Not specified").slice(0, 100)),
      preferredContact: (['Call', 'WhatsApp', 'Email'].includes(preferredContact) ? preferredContact : 'WhatsApp') as 'Call' | 'WhatsApp' | 'Email',
      name: escapeHtml(String(name).trim().slice(0, 100)),
      phone: cleanPhone.slice(-10),
      email: body.email ? escapeHtml(String(body.email).trim().slice(0, 100)) : undefined,
      notes: body.notes ? escapeHtml(String(body.notes).trim().slice(0, 500)) : undefined,
      ipAddressSubnet: ip.split('.').slice(0, 2).join('.') + '.x.x' // Masked IP for privacy
    };

    // 5. Store lead securely in lead journal
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, "leads.json");
      let existingLeads = [];
      if (fs.existsSync(leadsFile)) {
        try {
          existingLeads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
        } catch {
          existingLeads = [];
        }
      }
      existingLeads.push(sanitizedLead);
      fs.writeFileSync(leadsFile, JSON.stringify(existingLeads, null, 2));
    } catch (fsErr) {
      console.warn("Notice: Leads journal write bypassed (ephemeral host):", fsErr);
    }

    return NextResponse.json({
      success: true,
      leadId: sanitizedLead.id,
      message: "Thank you. Your consultation request has been securely received. Kartik Barmera will contact you via your preferred method shortly."
    });

  } catch (error) {
    console.error("Lead processing error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please call or WhatsApp directly." },
      { status: 500 }
    );
  }
}

// Authenticated Lead Inspection / CRM Webhook Retrieval
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");
  const adminSecret = process.env.ADMIN_LEAD_SECRET || "kartik_lic_admin_2026";

  if (!token || token !== adminSecret) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const leadsFile = path.join(process.cwd(), "data", "leads.json");
    if (!fs.existsSync(leadsFile)) {
      return NextResponse.json({ count: 0, leads: [] });
    }
    const leads = JSON.parse(fs.readFileSync(leadsFile, "utf-8"));
    return NextResponse.json({ count: leads.length, leads });
  } catch (err) {
    return NextResponse.json({ error: "Failed to read leads journal" }, { status: 500 });
  }
}
