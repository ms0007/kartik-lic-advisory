import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { advisorData } from "@/data/advisor";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";
import { ChevronRight, ShieldCheck, Lock, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & No-Spam Pledge | Kartik Barmera LIC Advisory",
  description: "Learn how your contact information is protected. We collect minimal information solely to provide insurance consultations and never sell or share data.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Privacy Policy", item: "/privacy" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 space-y-8">
          
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
              Trust & Data Governance
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Privacy Policy & Data Security
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: October 4, 2026 • Last Reviewed: October 2026
            </p>
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex items-start gap-2.5">
            <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Strict No-Spam Pledge:</strong> We do NOT collect PAN numbers, Aadhaar numbers, bank account details, credit card information, OTPs, or confidential medical records through marketing web forms. Your contact information is used solely by Kartik Barmera to respond to your explicit advisory inquiry.
            </div>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                1. Information We Collect
              </h2>
              <p>
                When you request a personalized insurance consultation or use our Protection Need Calculator, we collect voluntary information:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Your name, telephone/WhatsApp number, and optional email address.</li>
                <li>General demographic ranges (age bracket, occupation type, income bracket, broad financial priorities).</li>
                <li>Technical telemetry: anonymized IP subnet, device type, and interaction timestamps to prevent automated spam and server abuse.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                2. Purpose of Information Use
              </h2>
              <p>Your details are used exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Contacting you via your preferred channel (Phone, WhatsApp, or Email) to schedule or conduct your insurance advisory review.</li>
                <li>Sharing official LIC product brochures, plan eligibility parameters, and premium tables relevant to your request.</li>
                <li>Preventing malicious bot submissions through automated honeypot verification.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                3. Zero Third-Party Selling or Marketing Telemarketing
              </h2>
              <p>
                We do not sell, rent, license, or exchange your personal information with external lead brokers, telemarketing call centers, or unauthorized third parties.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                4. Formal LIC Proposal Disclosures
              </h2>
              <p>
                Should you decide to formally apply for an LIC of India policy, statutory medical schedules, KYC documents (Aadhaar/PAN), and banking details for direct-debit ECS/NACH are collected through standard, physical, or official LIC authorized digital onboarding portals (e-KYC / LIC Portal) under IRDAI guidelines, and not via public marketing forms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                5. Contact for Privacy Inquiries
              </h2>
              <p>
                For questions regarding your data or to request deletion of your consultation inquiry records, please contact:
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                <p><strong>Kartik Barmera</strong>, Development Officer, LIC of India</p>
                <p>Phone: {advisorData.displayPhone}</p>
                <p>Email: {advisorData.email}</p>
                <p>Office Address: {advisorData.officeAddress}</p>
              </div>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
