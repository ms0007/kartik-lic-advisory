"use client";

import React, { useState } from "react";
import { productsData, LICProduct } from "@/data/products";
import { buildPlanWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  UserCheck, 
  MessageSquare,
  Award
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
          rationale = "Blends lifelong risk cover with milestone survival benefits.";
        }
      }

      // Match Horizon
      const featStr = p.keyFeatures.join(" ").toLowerCase();
      if (horizon === "limited" && (featStr.includes("limited") || p.category === "savings")) score += 20;
      if (horizon === "regular" && (featStr.includes("regular") || p.category === "protection")) score += 15;
      if (horizon === "single" && (featStr.includes("single") || p.category === "retirement")) score += 25;

      // Match Style
      if (style === "guaranteed") {
        if (p.name.includes("Yuva") || p.name.includes("Digi") || p.name.includes("Utsav") || p.name.includes("Amritbaal")) {
          score += 20;
        }
      } else if (style === "participating") {
        if (p.name.includes("Anand") || p.name.includes("Labh") || p.name.includes("Lakshya") || p.name.includes("Umang")) {
          score += 20;
        }
      }

      return { product: p, score, rationale };
    });

    return scored.sort((a, b) => b.score - a.score).slice(0, 2);
  };

  const handleCalculate = () => {
    trackEvent("smart_plan_finder_used", { goal, horizon, style });
    setHasCalculated(true);
  };

  const handleReset = () => {
    setHasCalculated(false);
  };

  const recommendations = getRecommendations();

  return (
    <section id="smart-plan-finder" className="py-24 bg-[#020716] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Interactive Suitability Engine</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Find the <span className="text-gold-300">Right LIC Plan</span> for Your Life Stage
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            No endless brochures or confusing jargon. Answer 3 simple questions to discover the most suitable official LIC solutions for your household.
          </p>
        </div>

        {/* Wizard Form & Results Container */}
        <div className="max-w-4xl mx-auto bg-[#050e20]/90 rounded-3xl border border-white/10 shadow-glass-dark overflow-hidden p-7 sm:p-12 relative">
          {!hasCalculated ? (
            <div className="space-y-9">
              {/* Question 1: Financial Goal */}
              <div className="space-y-4">
                <label className="block text-base font-extrabold text-white flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-white/10 text-gold-300 border border-gold-500/30 text-xs flex items-center justify-center font-bold">1</span>
                  <span>What is your primary financial protection goal?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`text-left p-5 rounded-2xl border-2 transition-all ${
                        goal === item.id
                          ? "border-gold-400 bg-gold-500/15 shadow-gold-glow ring-1 ring-gold-400 text-white font-bold"
                          : "border-white/10 hover:border-gold-500/40 text-slate-300 bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-extrabold block ${goal === item.id ? "text-gold-300" : "text-white"}`}>{item.title}</span>
                        {goal === item.id && <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></span>}
                      </div>
                      <span className="text-xs text-slate-400 leading-relaxed block font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 2: Premium Term Horizon */}
              <div className="space-y-4">
                <label className="block text-base font-extrabold text-white flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-white/10 text-gold-300 border border-gold-500/30 text-xs flex items-center justify-center font-bold">2</span>
                  <span>What is your preferred premium payment horizon?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: "limited", title: "Limited Term (Recommended)", desc: "Pay for 10, 15, or 16 years during peak earning years; stay covered longer." },
                    { id: "regular", title: "Regular Annual Payments", desc: "Distribute payments evenly across the entire duration of the policy." },
                    { id: "single", title: "One-Time Lump Sum", desc: "Deposit a single premium today without future payment obligations." }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setHorizon(item.id)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all ${
                        horizon === item.id
                          ? "border-gold-400 bg-gold-500/15 shadow-gold-glow ring-1 ring-gold-400 text-white font-bold"
                          : "border-white/10 hover:border-gold-500/40 text-slate-300 bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-extrabold block ${horizon === item.id ? "text-gold-300" : "text-white"}`}>{item.title}</span>
                        {horizon === item.id && <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></span>}
                      </div>
                      <span className="text-xs text-slate-400 leading-relaxed block font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Return Structure */}
              <div className="space-y-4">
                <label className="block text-base font-extrabold text-white flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-white/10 text-gold-300 border border-gold-500/30 text-xs flex items-center justify-center font-bold">3</span>
                  <span>What return / benefit structure aligns with your philosophy?</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "guaranteed", title: "100% Contractually Guaranteed Additions", desc: "No dependence on future market bonus declarations; benefits are locked at inception." },
                    { id: "participating", title: "Participating With-Profits (Bonuses)", desc: "Participates in LIC’s annual actuarial valuation profits through Simple Reversionary Bonuses." }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStyle(item.id)}
                      className={`text-left p-5 rounded-2xl border-2 transition-all ${
                        style === item.id
                          ? "border-gold-400 bg-gold-500/15 shadow-gold-glow ring-1 ring-gold-400 text-white font-bold"
                          : "border-white/10 hover:border-gold-500/40 text-slate-300 bg-white/[0.03]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className={`text-sm font-extrabold block ${style === item.id ? "text-gold-300" : "text-white"}`}>{item.title}</span>
                        {style === item.id && <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></span>}
                      </div>
                      <span className="text-xs text-slate-400 leading-relaxed block font-normal">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="py-4 px-8 rounded-xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center gap-2.5 transform hover:-translate-y-0.5"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Show My Recommended LIC Plans</span>
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/40">
                    Suitability Match Complete
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white mt-2">
                    Top Verified Matches for Your Criteria
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs font-bold text-gold-300 hover:text-gold-200 uppercase tracking-wider inline-flex items-center gap-1.5 self-start sm:self-auto py-2 px-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Adjust Preferences</span>
                </button>
              </div>

              {/* 2 Recommended Plans Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {recommendations.map((rec, idx) => (
                  <div
                    key={rec.product.id}
                    className="p-7 rounded-3xl border border-white/10 bg-[#061226] hover:border-gold-500/40 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-glass-dark transition-all"
                  >
                    <div className="absolute top-0 right-0 bg-gold-400 text-slate-950 text-[10px] font-extrabold px-3.5 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-sm">
                      {idx === 0 ? "★ Primary Match" : "Alternative Match"}
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-extrabold text-gold-300 bg-white/5 border border-gold-500/30 px-2.5 py-0.5 rounded-md">
                          Table {rec.product.tableNo}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 font-semibold">
                          UIN: {rec.product.uin}
                        </span>
                      </div>

                      <h4 className="font-serif text-2xl font-bold text-white">
                        {rec.product.name}
                      </h4>

                      <p className="text-xs text-slate-300 font-medium leading-relaxed">
                        {rec.product.tagline}
                      </p>

                      <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 space-y-1.5 shadow-sm">
                        <span className="font-extrabold text-gold-300 text-[10px] uppercase tracking-wide block flex items-center gap-1">
                          <Award className="w-3.5 h-3.5 text-gold-400" />
                          Why this matches your criteria:
                        </span>
                        <p className="text-slate-300 leading-relaxed font-normal">{rec.rationale}</p>
                      </div>

                      <div className="pt-2 text-xs space-y-1.5">
                        <span className="font-extrabold text-white text-[10px] uppercase tracking-wider block">
                          Key Advantages:
                        </span>
                        <ul className="space-y-1.5 text-xs text-slate-300 font-normal">
                          {rec.product.keyFeatures.slice(0, 2).map((kf, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{kf}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-white/10 flex flex-col gap-2.5">
                      <button
                        type="button"
                        onClick={() => onOpenConsultationWithPlan(`${rec.product.name} (Table ${rec.product.tableNo})`)}
                        className="w-full py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-gold-glow flex items-center justify-center gap-2"
                      >
                        <UserCheck className="w-4 h-4 text-slate-950" />
                        <span>Request Custom Illustration</span>
                      </button>

                      <a
                        href={buildPlanWhatsAppLink(rec.product.name, rec.product.tableNo)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Discuss with Kartik on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-400 leading-relaxed">
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
