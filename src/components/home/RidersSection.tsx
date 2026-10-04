"use client";

import React, { useState } from "react";
import { ridersData, LICRider } from "@/data/riders";
import { buildRiderWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  ShieldAlert, 
  HeartHandshake, 
  ExternalLink, 
  MessageSquare, 
  Info, 
  CheckCircle2, 
  AlertTriangle,
  Sparkles,
  ShieldCheck
} from "lucide-react";

interface RidersSectionProps {
  onOpenConsultationWithRider?: (riderName: string) => void;
}

export const RidersSection: React.FC<RidersSectionProps> = ({
  onOpenConsultationWithRider
}) => {
  const [selectedRider, setSelectedRider] = useState<string>(ridersData[0].id);

  const activeRider = ridersData.find((r) => r.id === selectedRider) || ridersData[0];

  const handleRiderEnquiry = (rider: LICRider) => {
    trackEvent("contact_click", { rider: rider.name, location: "riders_section" });
    if (onOpenConsultationWithRider) {
      onOpenConsultationWithRider(`Rider Inquiry: ${rider.name}`);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#ffffff] via-[#f8fafc] to-[#ffffff] border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lic-50 border border-lic-200 text-lic-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Specialized Add-On Protection</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Understanding <span className="text-lic-900">LIC Policy Riders</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Enhance and customize your base life insurance cover. Riders provide targeted financial shields against accidental disability, future premium waivers, and critical illnesses.
          </p>
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="max-w-3xl mx-auto mb-14 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 flex items-start gap-3 shadow-sm">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-bold">Crucial Clarification:</strong> Riders are optional additional benefits available upon payment of extra premium. They are NOT automatically included in every policy, and attachment is subject to base plan rules, maximum sum assured caps, age eligibility, and medical underwriting.
          </p>
        </div>

        {/* Interactive Riders Grid & Detail Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Rider Selector Buttons */}
          <div className="lg:col-span-5 space-y-3.5">
            {ridersData.map((rider) => {
              const isSelected = selectedRider === rider.id;
              return (
                <button
                  key={rider.id}
                  type="button"
                  onClick={() => {
                    setSelectedRider(rider.id);
                    trackEvent("policy_resource_viewed", { rider: rider.name });
                  }}
                  className={`w-full text-left p-5 rounded-3xl border-2 transition-all flex items-start gap-4 ${
                    isSelected
                      ? "bg-lic-900 text-white border-lic-900 shadow-xl ring-2 ring-gold-500/50"
                      : "bg-white text-slate-800 border-slate-200 hover:border-gold-400 hover:bg-slate-50 shadow-sm"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? "bg-lic-800 text-gold-400 border border-gold-500/40" : "bg-lic-50 text-lic-900"
                  }`}>
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold leading-snug">
                      {rider.name}
                    </h4>
                    <span className={`text-[11px] font-mono mt-1 block font-semibold ${
                      isSelected ? "text-gold-300" : "text-slate-400"
                    }`}>
                      UIN: {rider.uin}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Rider Deep Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-7 sm:p-10 space-y-6 relative overflow-hidden">
            <div className="border-b border-slate-100 pb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-lic-900 font-mono bg-lic-50 px-2.5 py-1 rounded-md border border-lic-200/80">
                Official UIN: {activeRider.uin}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2.5">
                {activeRider.name}
              </h3>
              <p className="text-sm font-medium text-slate-600 mt-2 leading-relaxed">
                {activeRider.purpose}
              </p>
            </div>

            {/* Detailed Benefit */}
            <div className="p-5 rounded-2xl bg-lic-50/70 border border-lic-100 text-xs text-slate-800 space-y-1.5 shadow-sm">
              <strong className="text-lic-950 block text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-600" />
                How this Rider Functions in Practice:
              </strong>
              <p className="leading-relaxed font-normal text-slate-700">
                {activeRider.detailedBenefit}
              </p>
            </div>

            {/* Eligibility & Conditions */}
            <div className="space-y-4 text-xs text-slate-600">
              <div>
                <strong className="text-slate-900 font-bold block mb-1">Eligibility Overview:</strong>
                <p className="leading-relaxed font-normal">{activeRider.eligibilitySnippet}</p>
              </div>

              <div>
                <strong className="text-slate-900 font-bold block mb-1">Key Underwriting Conditions & Exclusions:</strong>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600 font-normal">
                  {activeRider.importantConditions.map((cond, idx) => (
                    <li key={idx} className="leading-relaxed">{cond}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
                <span className="font-bold">Advisory Takeaway:</span> {activeRider.keyTakeaway}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleRiderEnquiry(activeRider)}
                className="py-3 px-5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-slate-950" />
                <span>Discuss Rider Eligibility</span>
              </button>

              <a
                href={buildRiderWhatsAppLink(activeRider.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="https://licindia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-bold text-lic-900 hover:text-gold-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Official Terms</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
