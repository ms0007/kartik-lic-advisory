import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";
import { 
  ChevronRight, 
  HeartHandshake, 
  FileCheck2, 
  Clock, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  AlertTriangle,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "LIC Claim Settlement & Nominee Assistance Guide | Kartik Barmera",
  description: "Step-by-step guidance for nominees on LIC life insurance claim settlement, required document checklists, and personal Development Officer support.",
  alternates: {
    canonical: `${SITE_URL}/claims-guide`,
  },
};

export default function ClaimsGuidePage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Claim Settlement Guide", item: "/claims-guide" }
  ]);

  const claimSteps = [
    {
      step: "01",
      title: "Immediate Notification",
      desc: "Notify the servicing LIC branch or reach out directly to Development Officer Kartik Barmera with the policy number, date of demise, and cause."
    },
    {
      step: "02",
      title: "Document Collation",
      desc: "Gather the original policy bond, certified Death Certificate issued by the Municipal Corporation, and the nominee's KYC & cancelled bank cheque."
    },
    {
      step: "03",
      title: "Claim Forms Execution",
      desc: "Fill out LIC Form 3783 (Claimant's Statement). If demise occurred within 3 years of policy commencement, early claim medical certificates apply."
    },
    {
      step: "04",
      title: "Branch Review & Processing",
      desc: "The branch claims committee scrutinizes documents and initiates NEFT bank transfer directly into the registered nominee’s bank account."
    }
  ];

  const requiredDocuments = [
    {
      doc: "Original LIC Policy Bond",
      notes: "Proof of title. If misplaced, an indemnity bond procedure (Form 3815) can be initiated."
    },
    {
      doc: "Official Death Certificate",
      notes: "Original or certified copy issued by the Municipal Corporation or local Registrar of Births and Deaths."
    },
    {
      doc: "Claimant Statement (Form 3783)",
      notes: "Prescribed claim application signed by the designated nominee."
    },
    {
      doc: "Nominee Bank Mandate (NEFT Form) + Cancelled Cheque",
      notes: "Ensures claim proceeds are transferred securely directly into the nominee's personal bank account."
    },
    {
      doc: "Nominee Identity & Address Proof (KYC)",
      notes: "Aadhaar Card, Voter ID, or Passport of the nominee."
    },
    {
      doc: "FIR & Post-Mortem Report (Accidental Claims Only)",
      notes: "Mandatory only if claiming Accidental Death Benefit under policy riders."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-[#060e1d] border-b border-white/10 py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-gold-300 text-slate-400">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-gold-300">Claim Settlement Guide</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
              Nominee Support & Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              LIC Claim Settlement & Nominee Roadmap
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              When a crisis strikes, your family should not face administrative confusion. Here is the transparent, step-by-step roadmap to a smooth claim settlement.
            </p>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section className="py-16 bg-[#030816] text-white border-t border-white/10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
            
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                The 4-Step Claim Settlement Lifecycle
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                How an LIC death claim progresses from notification to final bank disbursement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {claimSteps.map((s, idx) => (
                <div key={idx} className="relative bg-gradient-to-br from-[#071329] to-[#0b1f4a] border border-gold-500/20 rounded-2xl p-6 flex flex-col justify-between shadow-card-elevated hover:border-gold-400/40 hover:shadow-card-hover transition-all duration-300">
                  <div className="space-y-3">
                    <span className="text-3xl font-serif font-black text-gold-400/80 block">
                      {s.step}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Document Checklist Section */}
            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-300 bg-gold-400/10 border border-gold-400/30 px-3 py-1 rounded-full">
                  Checklist
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Essential Documents Required for Claim Submission
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
                  Keep these documents organized in a secure family folder to ensure rapid processing without delays.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requiredDocuments.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-white/10 bg-[#050e20]/90 space-y-1 flex items-start gap-3">
                    <FileCheck2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-xs text-white block">{doc.doc}</span>
                      <p className="text-[11px] text-slate-300 leading-snug">{doc.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 45 & Incontestability */}
            <div className="p-6 rounded-2xl bg-[#061226]/90 border border-gold-500/30 text-xs sm:text-sm text-slate-300 space-y-3 shadow-lg">
              <div className="flex items-center gap-2 font-bold text-gold-300 text-base">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span>Section 45 Incontestability Protection</span>
              </div>
              <p className="leading-relaxed">
                Under <strong className="text-white">Section 45 of the Insurance Act 1938</strong> (amended 2015), no policy of life insurance can be called in question by the insurer on any ground whatsoever after the expiry of <strong className="text-gold-300">3 years</strong> from the date of issuance or revival. This provides sovereign-backed peace of mind for long-term policyholders.
              </p>
              <p className="leading-relaxed text-xs text-slate-400">
                During the initial 3 years, full truthfulness regarding medical health and smoking habits in the proposal form ensures that claims are honored smoothly without disputes.
              </p>
            </div>

            {/* How Kartik Barmera Personally Assists Nominees */}
            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Institutional Advocacy
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    How an LIC Development Officer Supports Nominees
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-7 h-7" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
                <div className="space-y-1 p-4 rounded-xl bg-blue-900/50 border border-blue-700/50">
                  <span className="font-bold text-white block">1. Form Assistance</span>
                  <p>Guiding the family on filling out claimant forms correctly to avoid procedural rejections.</p>
                </div>
                <div className="space-y-1 p-4 rounded-xl bg-blue-900/50 border border-blue-700/50">
                  <span className="font-bold text-white block">2. Branch Liaison</span>
                  <p>Directly interfacing with the divisional claims committee to expedite file review.</p>
                </div>
                <div className="space-y-1 p-4 rounded-xl bg-blue-900/50 border border-blue-700/50">
                  <span className="font-bold text-white block">3. Status Tracking</span>
                  <p>Monitoring the NEFT payment dispatch to confirm funds reach the beneficiary promptly.</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
                <span>Need immediate guidance on an existing policy claim?</span>
                <div className="flex items-center gap-3">
                  <a
                    href={`tel:+91${advisorData.phone}`}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call {advisorData.displayPhone}</span>
                  </a>
                  <a
                    href={buildWhatsAppLink("Hello Kartik Ji, I need assistance regarding an LIC policy claim procedure.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-blue-900 hover:bg-blue-800 border border-blue-700 transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
