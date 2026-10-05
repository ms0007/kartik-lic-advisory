"use client";

import React, { useState } from "react";
import { scenariosData, ScenarioItem } from "@/data/scenarios";
import { buildScenarioWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  AlertCircle, 
  Receipt, 
  ShieldCheck, 
  HelpCircle, 
  UserCheck, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles 
} from "lucide-react";

interface ScenariosSectionProps {
  onOpenConsultationWithScenario?: (scenarioTitle: string) => void;
}

export const ScenariosSection: React.FC<ScenariosSectionProps> = ({
  onOpenConsultationWithScenario
}) => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>(scenariosData[1].id); // default to Parent with children

  const current = scenariosData.find((s) => s.id === activeScenarioId) || scenariosData[1];

  const handleScenarioConsultation = (scenario: ScenarioItem) => {
    trackEvent("contact_click", { scenario: scenario.title, location: "scenarios_section" });
    if (onOpenConsultationWithScenario) {
      onOpenConsultationWithScenario(`Scenario Planning: ${scenario.title}`);
    }
  };

  return (
    <section className="py-24 bg-[#020716] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Real Indian Household Realities</span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Real-Life Scenarios: <span className="text-gold-300">What If Life Changes?</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Examine how life insurance provides concrete solutions across different family and financial situations. No fabricated statistics—just grounded household realities.
          </p>
        </div>

        {/* Scenario Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {scenariosData.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeScenarioId === scenario.id
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 border border-gold-400 shadow-gold-glow font-bold"
                  : "bg-white/[0.03] text-slate-300 border border-white/10 hover:border-gold-500/40 hover:bg-white/[0.06]"
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        <div className="bg-[#050e20]/95 rounded-3xl border border-white/10 shadow-glass-dark p-6 sm:p-10 max-w-4xl mx-auto text-white">
          
          <div className="border-b border-white/10 pb-4 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-300 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30">
              {current.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mt-2">
              {current.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1 font-medium">
              <strong className="text-gold-300">Profile:</strong> {current.whoIsThis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            
            {/* Box 1: What could happen? */}
            <div className="bg-[#061226]/80 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-[11px]">
                <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>What Could Happen?</span>
              </div>
              <p className="text-slate-300 leading-relaxed font-normal">
                {current.whatCouldHappen}
              </p>
            </div>

            {/* Box 2: Responsibilities continue */}
            <div className="bg-[#061226]/80 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold uppercase tracking-wider text-[11px]">
                <Receipt className="w-4 h-4 text-amber-400 shrink-0" />
                <span>What Responsibilities Continue?</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 font-normal">
                {current.responsibilitiesContinue.map((resp, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: How protection helps */}
            <div className="bg-[#061226]/80 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-gold-300 font-bold uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
                <span>How Can Financial Protection Help?</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 font-normal">
                {current.howProtectionHelps.map((help, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{help}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4: What should you evaluate */}
            <div className="bg-[#061226]/80 p-5 rounded-2xl border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-slate-200 font-bold uppercase tracking-wider text-[11px]">
                <HelpCircle className="w-4 h-4 text-gold-400 shrink-0" />
                <span>What Should You Evaluate?</span>
              </div>
              <ul className="space-y-1.5 text-slate-300 font-normal">
                {current.whatToEvaluate.map((evalItem, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-gold-400 font-bold">•</span>
                    <span>{evalItem}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Advisory Tip */}
          <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 flex items-start gap-2.5">
            <span className="font-bold text-gold-300 shrink-0">Advisory Insight:</span>
            <span>{current.advisoryTip}</span>
          </div>

          {/* Consultation CTA */}
          <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 text-center sm:text-left">
              Does this scenario resonate with your family? Get an objective, confidential review.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScenarioConsultation(current)}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-gold-glow flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-4 h-4 text-slate-950" />
                <span>Speak with Kartik</span>
              </button>

              <a
                href={buildScenarioWhatsAppLink(current.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
