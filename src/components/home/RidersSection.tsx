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
  AlertTriangle 
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
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
            Specialized Add-On Protection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Understanding LIC Policy Riders
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Enhance and customize your base life insurance cover. Riders provide targeted financial shields against accidents, disability, and critical illnesses.
          </p>
        </div>

        {/* Mandatory Educational Disclaimer */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p>
            <strong>Crucial Clarification:</strong> Riders are optional/additional benefits available upon payment of additional premium. They are NOT automatically included in every policy, and their attachment is subject to base plan rules, maximum sum assured caps, age eligibility, and medical underwriting.
          </p>
        </div>

        {/* Interactive Riders Grid & Detail Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Rider Selector Buttons */}
          <div className="lg:col-span-5 space-y-3">
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
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                    isSelected
                      ? "bg-blue-900 text-white border-blue-900 shadow-md ring-1 ring-blue-900"
                      : "bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-slate-100/70"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected ? "bg-blue-800 text-amber-400" : "bg-blue-50 text-blue-900"
                  }`}>
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold leading-snug">
                      {rider.name}
                    </h4>
                    <span className={`text-[11px] font-mono mt-0.5 block ${
                      isSelected ? "text-blue-200" : "text-slate-400"
                    }`}>
                      UIN: {rider.uin}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Rider Deep Dive Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 font-mono">
                    UIN: {activeRider.uin}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                    {activeRider.name}
                  </h3>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-700 mt-2 leading-relaxed">
                {activeRider.purpose}
              </p>
            </div>

            {/* Detailed Benefit */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-slate-800 space-y-1">
              <strong className="text-blue-950 block text-[11px] uppercase tracking-wide">
                How this Rider Functions in Practice:
              </strong>
              <p className="leading-relaxed">
                {activeRider.detailedBenefit}
              </p>
            </div>

            {/* Eligibility & Conditions */}
            <div className="space-y-3 text-xs text-slate-600">
              <div>
                <strong className="text-slate-900 block mb-1">Eligibility Overview:</strong>
                <p>{activeRider.eligibilitySnippet}</p>
              </div>

              <div>
                <strong className="text-slate-900 block mb-1">Key Underwriting Conditions & Exclusions:</strong>
                <ul className="space-y-1 list-disc pl-4 text-slate-600">
                  {activeRider.importantConditions.map((cond, idx) => (
                    <li key={idx}>{cond}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-950 font-medium">
                <span className="font-bold">Advisory Takeaway:</span> {activeRider.keyTakeaway}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => handleRiderEnquiry(activeRider)}
                className="py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>Discuss Rider Eligibility</span>
              </button>

              <a
                href={buildRiderWhatsAppLink(activeRider.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Inquire on WhatsApp</span>
              </a>

              <a
                href="https://licindia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl text-xs font-semibold text-blue-900 hover:underline flex items-center justify-center gap-1"
              >
                <span>Official LIC Terms</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
