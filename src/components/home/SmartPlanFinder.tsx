"use client";

import React, { useState } from "react";
import { productsData, LICProduct } from "@/data/products";
import { buildPlanWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  RotateCcw, 
  UserCheck, 
  MessageSquare,
  HelpCircle
} from "lucide-react";

interface SmartPlanFinderProps {
  onOpenConsultationWithPlan: (planName: string) => void;
}

export const SmartPlanFinder: React.FC<SmartPlanFinderProps> = ({
  onOpenConsultationWithPlan
}) => {
  const [goal, setGoal] = useState<string>("protection");
  const [horizon, setHorizon] = useState<string>("limited");
  const [style, setStyle] = useState<string>("guaranteed");
  const [hasCalculated, setHasCalculated] = useState<boolean>(false);

  // Recommendation Scoring Logic
  const getRecommendations = (): { product: LICProduct; score: number; rationale: string }[] => {
    const scored = productsData.map((p) => {
      let score = 50;
      let rationale = "";

      // Match Goal
      if (goal === "protection") {
        if (p.category === "protection") {
          score += 40;
          rationale = "Engineered specifically for pure family income replacement at minimum premium outlay.";
        }
      } else if (goal === "children") {
        if (p.category === "children") {
          score += 45;
          rationale = "Includes child protection safeguards like Premium Waiver and guaranteed milestone maturity.";
        }
      } else if (goal === "retirement") {
        if (p.category === "retirement") {
          score += 45;
          rationale = "Guarantees lifelong annuity cash flows completely insulated from equity market volatility.";
        } else if (p.category === "whole-life") {
          score += 35;
          rationale = "Offers continuous lifelong survival income up to age 99/100.";
        }
      } else if (goal === "savings") {
        if (p.category === "savings") {
          score += 40;
          rationale = "Combines risk protection with sovereign-backed capital preservation and bonus participation.";
        } else if (p.category === "whole-life") {
          score += 35;
          rationale = "Offers whole-life asset protection with predictable cash flow generation.";
        }
      }

      // Match Horizon
      if (horizon === "limited") {
        if (p.id === "jeevan-labh" || p.id === "jeevan-utsav" || p.id === "jeevan-lakshya") {
          score += 20;
        }
      } else if (horizon === "single") {
        if (p.id === "new-jeevan-shanti" || p.id === "jeevan-akshay-vii") {
          score += 25;
        }
      }

      // Match Style
      if (style === "guaranteed") {
        if (p.id === "jeevan-utsav" || p.id === "amritbaal" || p.id === "new-jeevan-shanti") {
          score += 20;
        }
      } else if (style === "participating") {
        if (p.id === "new-jeevan-anand" || p.id === "jeevan-labh" || p.id === "jeevan-lakshya" || p.id === "jeevan-umang") {
          score += 20;
        }
      }

      return { product: p, score: Math.min(score, 98), rationale };
    });

    return scored.sort((a, b) => b.score - a.score).slice(0, 2);
  };

  const recommendations = getRecommendations();

  const handleCalculate = () => {
    setHasCalculated(true);
    trackEvent("policy_resource_viewed", { action: "smart_plan_finder_executed", goal });
  };

  const handleReset = () => {
    setHasCalculated(false);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/40 to-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/10 text-blue-900 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Intelligent Decision Support Tool</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Smart Plan Suitability Finder
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Unsure which LIC plan best matches your family's circumstances? Answer three quick questions to receive instant, objective plan recommendations with transparent rationale.
          </p>
        </div>

        {/* Wizard Form & Results Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
          {!hasCalculated ? (
            <div className="space-y-8">
              {/* Question 1: Financial Goal */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs flex items-center justify-center font-bold">1</span>
                  <span>What is your primary financial protection goal?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "protection", title: "Catastrophic Income Protection", desc: "Maximum life cover per rupee to replace monthly salary if I am absent (Pure Term)." },
                    { id: "children", title: "Child Education & Milestones", desc: "Guaranteed university funding with Premium Waiver protection (Child Plans)." },
                    { id: "savings", title: "Disciplined Savings & Wealth", desc: "Long-term capital accumulation with lifelong family risk protection (Endowment)." },
                    { id: "retirement", title: "Lifelong Guaranteed Pension", desc: "Lock in predictable, non-stop monthly income for retirement years (Annuity)." }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        goal === item.id
                          ? "border-blue-900 bg-blue-50/70 ring-1 ring-blue-900 text-blue-950 font-medium"
                          : "border-slate-200 hover:border-blue-300 text-slate-700 bg-white"
                      }`}
                    >
                      <span className="text-xs font-bold block text-slate-900 mb-1">{item.title}</span>
                      <span className="text-[11px] text-slate-500 leading-relaxed block">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Premium Term Horizon */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs flex items-center justify-center font-bold">2</span>
                  <span>What is your preferred premium payment horizon?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "limited", title: "Limited Term (Recommended)", desc: "Pay for 10, 15, or 16 years during peak earning years; stay covered longer." },
                    { id: "regular", title: "Regular Annual Payments", desc: "Distribute payments evenly across the entire duration of the policy." },
                    { id: "single", title: "One-Time Lump Sum", desc: "Deposit a single premium today without future payment obligations." }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHorizon(item.id)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        horizon === item.id
                          ? "border-blue-900 bg-blue-50/70 ring-1 ring-blue-900 text-blue-950 font-medium"
                          : "border-slate-200 hover:border-blue-300 text-slate-700 bg-white"
                      }`}
                    >
                      <span className="text-xs font-bold block text-slate-900 mb-1">{item.title}</span>
                      <span className="text-[11px] text-slate-500 leading-relaxed block">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Return Structure */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-xs flex items-center justify-center font-bold">3</span>
                  <span>What return / benefit structure aligns with your philosophy?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { id: "guaranteed", title: "100% Contractually Guaranteed Additions / Flow", desc: "No dependence on future market bonus declarations; benefits are locked at inception." },
                    { id: "participating", title: "Participating With-Profits (Bonuses)", desc: "Participates in LIC’s annual actuarial valuation profits through Simple Reversionary Bonuses." }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStyle(item.id)}
                      className={`text-left p-4 rounded-2xl border transition-all ${
                        style === item.id
                          ? "border-blue-900 bg-blue-50/70 ring-1 ring-blue-900 text-blue-950 font-medium"
                          : "border-slate-200 hover:border-blue-300 text-slate-700 bg-white"
                      }`}
                    >
                      <span className="text-xs font-bold block text-slate-900 mb-1">{item.title}</span>
                      <span className="text-[11px] text-slate-500 leading-relaxed block">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Show My Recommended LIC Plans</span>
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Suitability Analysis Complete
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                    Top Verified Matches for Your Profile
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-semibold text-blue-900 hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Adjust Preferences</span>
                </button>
              </div>

              {/* 2 Recommended Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recommendations.map((rec, idx) => (
                  <div
                    key={rec.product.id}
                    className="p-6 rounded-2xl border-2 border-blue-900/40 bg-blue-50/20 flex flex-col justify-between space-y-5 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 bg-blue-900 text-amber-300 text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                      {idx === 0 ? "Primary Match" : "Alternative Match"}
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                          Table {rec.product.tableNo}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          UIN: {rec.product.uin}
                        </span>
                      </div>

                      <h4 className="font-serif text-xl font-bold text-slate-900">
                        {rec.product.name}
                      </h4>

                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {rec.product.tagline}
                      </p>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                        <span className="font-bold text-blue-950 text-[10px] uppercase tracking-wide block">
                          Why this matches your criteria:
                        </span>
                        <p>{rec.rationale}</p>
                      </div>

                      <div className="pt-2 text-xs space-y-1">
                        <span className="font-bold text-slate-800 text-[10px] uppercase tracking-wide block">
                          Key Advantages:
                        </span>
                        <ul className="space-y-1 text-[11px] text-slate-600">
                          {rec.product.keyFeatures.slice(0, 2).map((kf, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{kf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-blue-100 flex flex-col gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenConsultationWithPlan(`${rec.product.name} (Table ${rec.product.tableNo})`)}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <UserCheck className="w-4 h-4" />
                        <span>Request Custom Illustration</span>
                      </button>

                      <a
                        href={buildPlanWhatsAppLink(rec.product.name, rec.product.tableNo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Discuss with Kartik on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
                <p>
                  <strong>Suitability Disclaimer:</strong> This algorithm generates educational approximations based on high-level goals. Official underwriting approval, premium calculations, and health classification are conducted formally through standard LIC of India proposal procedures.
                </p>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
