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
  ChevronRight 
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
            Real Indian Household Realities
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Real-Life Scenarios: What If Life Changes?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Examine how life insurance provides concrete solutions across different family and financial situations. No fabricated statistics—just grounded household realities.
          </p>
        </div>

        {/* Scenario Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {scenariosData.map((scenario) => (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveScenarioId(scenario.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeScenarioId === scenario.id
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {scenario.title}
            </button>
          ))}
        </div>

        {/* Active Scenario Card */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-10 max-w-4xl mx-auto">
          
          <div className="border-b border-slate-200 pb-4 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
              {current.badge}
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900 mt-2">
              {current.title}
            </h3>
            <p className="text-xs text-slate-600 mt-1 font-medium">
              <strong>Profile:</strong> {current.whoIsThis}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            
            {/* Box 1: What could happen? */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold uppercase tracking-wider text-[11px]">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>What Could Happen?</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {current.whatCouldHappen}
              </p>
            </div>

            {/* Box 2: Responsibilities continue */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-900 font-bold uppercase tracking-wider text-[11px]">
                <Receipt className="w-4 h-4 text-amber-600 shrink-0" />
                <span>What Responsibilities Continue?</span>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                {current.responsibilitiesContinue.map((resp, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-amber-600 font-bold">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: How protection helps */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-blue-900 font-bold uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-blue-800 shrink-0" />
                <span>How Can Financial Protection Help?</span>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                {current.howProtectionHelps.map((help, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{help}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4: What should you evaluate */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                <HelpCircle className="w-4 h-4 text-slate-700 shrink-0" />
                <span>What Should You Evaluate?</span>
              </div>
              <ul className="space-y-1.5 text-slate-600">
                {current.whatToEvaluate.map((evalItem, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{evalItem}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Advisory Tip */}
          <div className="mt-6 p-4 rounded-xl bg-blue-50/70 border border-blue-200/80 text-xs text-blue-950 flex items-start gap-2.5">
            <span className="font-bold shrink-0">Advisory Insight:</span>
            <span>{current.advisoryTip}</span>
          </div>

          {/* Consultation CTA */}
          <div className="mt-6 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 text-center sm:text-left">
              Does this scenario resonate with your family? Get an objective, confidential review.
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScenarioConsultation(current)}
                className="w-full sm:w-auto py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <UserCheck className="w-4 h-4" />
                <span>Speak with Kartik</span>
              </button>

              <a
                href={buildScenarioWhatsAppLink(current.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto py-2.5 px-3 rounded-xl text-xs font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
