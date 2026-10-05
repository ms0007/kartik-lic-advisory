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
    <section className="py-24 bg-[#030816] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Specialized Add-On Protection</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Understanding <span className="text-gold-300">LIC Policy Riders</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Enhance and customize your base life insurance cover. Riders provide targeted financial shields against accidental disability, future premium waivers, and critical illnesses.
          </p>
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="max-w-3xl mx-auto mb-14 p-5 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-300 flex items-start gap-3 shadow-glass-dark backdrop-blur-md">
          <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-gold-300 font-bold">Crucial Clarification:</strong> Riders are optional additional benefits available upon payment of extra premium. They are NOT automatically included in every policy, and attachment is subject to base plan rules, maximum sum assured caps, age eligibility, and medical underwriting.
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
                      ? "bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 border-gold-400 shadow-gold-glow font-bold"
                      : "bg-[#050e20]/90 text-slate-300 border-white/10 hover:border-gold-500/40 hover:bg-[#071329] shadow-sm"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? "bg-slate-950/20 text-slate-950" : "bg-white/5 text-gold-400 border border-white/10"
                  }`}>
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`text-sm font-extrabold leading-snug ${isSelected ? "text-slate-950" : "text-white"}`}>
                      {rider.name}
                    </h4>
                    <span className={`text-[11px] font-mono mt-1 block font-semibold ${
                      isSelected ? "text-slate-950/80" : "text-slate-400"
                    }`}>
                      UIN: {rider.uin}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Rider Deep Dive Card */}
          <div className="lg:col-span-7 bg-[#050e20]/95 rounded-3xl border border-white/10 shadow-glass-dark p-7 sm:p-10 space-y-6 relative overflow-hidden text-white">
            <div className="border-b border-white/10 pb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-300 font-mono bg-white/5 px-2.5 py-1 rounded-md border border-gold-500/20">
                Official UIN: {activeRider.uin}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-2.5">
                {activeRider.name}
              </h3>
              <p className="text-sm font-medium text-slate-300 mt-2 leading-relaxed">
                {activeRider.purpose}
              </p>
            </div>

            {/* Detailed Benefit */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-200 space-y-1.5 shadow-sm">
              <strong className="text-gold-300 block text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                How this Rider Functions in Practice:
              </strong>
              <p className="leading-relaxed font-normal text-slate-300">
                {activeRider.detailedBenefit}
              </p>
            </div>

            {/* Eligibility & Conditions */}
            <div className="space-y-4 text-xs text-slate-300">
              <div>
                <strong className="text-white font-bold block mb-1">Eligibility Overview:</strong>
                <p className="leading-relaxed font-normal">{activeRider.eligibilitySnippet}</p>
              </div>

              <div>
                <strong className="text-white font-bold block mb-1">Key Underwriting Conditions & Exclusions:</strong>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-400 font-normal">
                  {activeRider.importantConditions.map((cond, idx) => (
                    <li key={idx} className="leading-relaxed">{cond}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 font-medium">
                <span className="font-bold">Advisory Takeaway:</span> {activeRider.keyTakeaway}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row gap-3">
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
                className="py-3 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="https://licindia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center justify-center gap-1.5 transition-colors"
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
