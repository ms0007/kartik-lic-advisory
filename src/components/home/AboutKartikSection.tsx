"use client";

import React from "react";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  CheckCircle2, 
  User, 
  ArrowRight,
  ExternalLink
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
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 lg:p-12 items-center">
            
            {/* Left: Officer Visual & Identity Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-b from-blue-950 to-slate-900 border border-dashed border-blue-600/70 p-6 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="w-20 h-20 rounded-full bg-blue-900/80 border border-blue-500 text-amber-400 flex items-center justify-center mb-3">
                  <User className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  [OFFICIAL PORTRAIT OF KARTIK BARMERA]
                </span>
                <p className="text-xs text-slate-300 mt-1">
                  Development Officer • LIC of India
                </p>
                <span className="text-[10px] text-slate-400 mt-1 italic">
                  [Professional portrait to be provided by client]
                </span>
              </div>

              {/* Verified Contact Details Card */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2.5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-700">Organization:</span>
                  <span className="font-bold text-blue-900">LIC of India</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-700">Designation:</span>
                  <span className="font-bold text-slate-900">Development Officer</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-700">Direct Phone:</span>
                  <a href={`tel:+91${advisorData.phone}`} className="font-bold text-amber-700 hover:underline">
                    {advisorData.displayPhone}
                  </a>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-700">Official Email:</span>
                  <span className="text-slate-500 italic">{advisorData.email}</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                  <span className="font-semibold text-slate-700">Office Location:</span>
                  <span className="text-slate-500 italic">{advisorData.officeAddress}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700">Branch Details:</span>
                  <span className="text-slate-500 italic">{advisorData.branchDetails}</span>
                </div>
              </div>
            </div>

            {/* Right: Bio & Advisory Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
                  <span>About Your Advisor</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Kartik Barmera
                </h2>
                <p className="text-sm font-semibold text-blue-900 mt-0.5">
                  Development Officer, Life Insurance Corporation of India (LIC of India)
                </p>
              </div>

              {/* Core Human Positioning */}
              <blockquote className="p-4 rounded-xl bg-amber-50/80 border-l-4 border-amber-400 text-slate-800 text-sm font-medium italic leading-relaxed">
                "Insurance decisions are deeply personal. The goal is to help you understand your real options, evaluate your family's exact needs, and verify policy terms before you make any decision."
              </blockquote>

              {/* Placeholder Biography strictly adhering to non-fabrication rule */}
              <div className="text-xs sm:text-sm text-slate-600 space-y-3 leading-relaxed">
                <p>
                  As an LIC Development Officer, Kartik Barmera represents the institutional foundation of India's largest and most trusted life insurer. His advisory practice is rooted in financial demystification, objective protection gap analysis, and long-term service commitment to policyholders.
                </p>
                <p className="p-3 bg-slate-50 border border-dashed border-slate-300 rounded-lg text-slate-500 italic text-xs">
                  [Professional biography to be supplied by client. No unverified years of experience, awards, or client numbers are published.]
                </p>
              </div>

              {/* Areas of Assistance */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5">
                  How Kartik Can Personally Assist You:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {areasOfAssistance.map((area, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent("contact_click", { location: "about_section" });
                    onOpenConsultation();
                  }}
                  className="py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-sm transition-all flex items-center gap-1.5"
                >
                  <span>Request Personal Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`tel:+91${advisorData.phone}`}
                  onClick={() => trackEvent("call_click", { location: "about_section" })}
                  className="py-3 px-4 rounded-xl text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-800" />
                  <span>Call Directly</span>
                </a>

                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("whatsapp_click", { location: "about_section" })}
                  className="py-3 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
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
