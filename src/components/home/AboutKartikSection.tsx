"use client";

import React from "react";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  User, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";

interface AboutKartikSectionProps {
  onOpenConsultation: () => void;
}

export const AboutKartikSection: React.FC<AboutKartikSectionProps> = ({
  onOpenConsultation
}) => {
  const areasOfAssistance = [
    "Objective family protection gap calculations (Human Life Value assessment)",
    "Pure risk term insurance planning (Yuva Term, Digi Term, Saral Jeevan Bima)",
    "Children's education & marriage fund structuring with Premium Waiver protection",
    "Lifelong guaranteed pension and annuity planning (Jeevan Shanti, Jeevan Akshay-VII)",
    "Whole life income and wealth preservation (Jeevan Umang, Jeevan Utsav)",
    "Accident, disability, and critical illness rider evaluation",
    "Assistance with policy revival, nomination updates, and claim documentation"
  ];

  return (
    <section className="py-24 bg-[#030816] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-[#050e20]/95 rounded-3xl border border-white/10 shadow-glass-dark overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-7 sm:p-12 lg:p-14 items-center">
            
            {/* Left: Officer Visual & Identity Box */}
            <div className="lg:col-span-5 space-y-6">
              {/* Executive Credential Portrait Box */}
              <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-b from-[#091736] to-[#040b19] border border-gold-500/30 p-7 flex flex-col items-center justify-center text-center shadow-xl overflow-hidden group">
                {/* Subtle Radial Glow */}
                <div className="absolute inset-0 bg-radial-gradient from-gold-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-gold-600 via-amber-400 to-gold-300 p-0.5 mb-3.5 shadow-gold-glow">
                  <div className="w-full h-full rounded-full bg-[#07132b] flex items-center justify-center text-gold-300">
                    <User className="w-10 h-10" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 mb-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                  </span>
                  <span>Active Consultation Desk</span>
                </div>

                <span className="text-xs font-extrabold text-gold-300 uppercase tracking-wider">
                  [OFFICIAL PORTRAIT OF KARTIK BARMERA]
                </span>
                <p className="text-xs text-slate-200 mt-1 font-medium">
                  Development Officer • LIC of India
                </p>
                <span className="text-[10px] text-slate-400 mt-1 italic">
                  [Professional portrait to be provided by client]
                </span>
              </div>

              {/* Verified Contact Details Card */}
              <div className="p-6 rounded-3xl bg-[#061226]/80 border border-white/10 text-xs space-y-3 shadow-sm">
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="font-bold text-slate-400">Organization:</span>
                  <span className="font-extrabold text-white">LIC of India</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="font-bold text-slate-400">Designation:</span>
                  <span className="font-extrabold text-gold-300">Development Officer</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="font-bold text-slate-400">Direct Phone:</span>
                  <a href={`tel:+91${advisorData.phone}`} className="font-extrabold text-gold-300 hover:text-gold-200 transition-colors">
                    {advisorData.displayPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="font-bold text-slate-400">Official Email:</span>
                  <span className="text-slate-400 italic font-mono">{advisorData.email}</span>
                </div>
                <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                  <span className="font-bold text-slate-400">Office Location:</span>
                  <span className="text-slate-400 italic">{advisorData.officeAddress}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-400">Branch Details:</span>
                  <span className="text-slate-400 italic">{advisorData.branchDetails}</span>
                </div>
              </div>
            </div>

            {/* Right: Bio & Advisory Philosophy */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 text-gold-300 text-xs font-extrabold uppercase tracking-wider mb-3 border border-gold-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                  <span>Institutional Advisory Officer</span>
                </div>
                <h2 className="font-serif text-3.5xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  Kartik Barmera
                </h2>
                <p className="text-sm font-bold text-gold-400 mt-1">
                  Development Officer, Life Insurance Corporation of India (LIC of India)
                </p>
              </div>

              {/* Core Ethical Positioning Quote */}
              <blockquote className="p-5 rounded-2xl bg-gradient-to-r from-gold-500/10 via-amber-500/5 to-transparent border-l-4 border-gold-400 text-slate-200 text-sm font-semibold italic leading-relaxed shadow-sm">
                "Insurance decisions are deeply personal. The goal is to help you understand your real options, evaluate your family's exact needs, and verify policy terms before you make any decision."
              </blockquote>

              {/* Verified Professional Background */}
              <div className="text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed font-normal">
                <p>
                  As an LIC Development Officer, Kartik Barmera represents the institutional foundation of India's largest and most trusted life insurer. His advisory practice is rooted in financial demystification, objective protection gap analysis, and long-term service commitment to policyholders.
                </p>
                <p className="p-3.5 bg-white/[0.02] border border-dashed border-white/20 rounded-xl text-slate-400 italic text-xs">
                  [Professional biography to be supplied by client. No unverified years of experience, awards, or client numbers are published.]
                </p>
              </div>

              {/* Areas of Assistance */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gold-300 mb-3">
                  How Kartik Can Personally Assist You:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                  {areasOfAssistance.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="font-medium leading-relaxed">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-5 border-t border-white/10 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("contact_click", { location: "about_section" });
                    onOpenConsultation();
                  }}
                  className="py-3.5 px-6 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-glow transition-all flex items-center gap-2"
                >
                  <span>Request Personal Consultation</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </button>

                <a
                  href={`tel:+91${advisorData.phone}`}
                  onClick={() => trackEvent("call_click", { location: "about_section" })}
                  className="py-3.5 px-5 rounded-xl text-xs font-bold text-white bg-white/5 hover:bg-white/10 border border-white/15 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Directly</span>
                </a>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "about_section" })}
                  className="py-3.5 px-5 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
