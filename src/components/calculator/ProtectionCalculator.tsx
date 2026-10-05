"use client";

import React, { useState, useMemo } from "react";
import { 
  CalculatorInputs, 
  defaultCalculatorInputs, 
  calculateProtectionGap 
} from "@/lib/calculator";
import { formatCurrencyINR } from "@/lib/utils";
import { buildCalculatorWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  Calculator, 
  ShieldAlert, 
  ShieldCheck, 
  TrendingUp, 
  HelpCircle, 
  MessageSquare, 
  UserCheck, 
  Info,
  DollarSign,
  AlertTriangle,
  Printer,
  Sparkles,
  ArrowRight,
  PieChart
} from "lucide-react";
import { ProtectionBriefModal } from "./ProtectionBriefModal";

interface ProtectionCalculatorProps {
  onOpenConsultation?: () => void;
}

export const ProtectionCalculator: React.FC<ProtectionCalculatorProps> = ({ 
  onOpenConsultation 
}) => {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultCalculatorInputs);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showBrief, setShowBrief] = useState(false);

  const result = useMemo(() => calculateProtectionGap(inputs), [inputs]);

  const handleInputChange = (field: keyof CalculatorInputs, value: number) => {
    trackEvent("calculator_started", { field });
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleConsultationClick = () => {
    trackEvent("calculator_completed", { gap: result.protectionGap });
    if (onOpenConsultation) {
      onOpenConsultation();
    }
  };

  return (
    <div className="bg-[#050e20]/95 rounded-3xl border border-white/10 shadow-2xl overflow-hidden text-white">
      {/* Top Banner & Important Regulatory Educational Notice */}
      <div className="bg-gradient-to-r from-[#030919] via-[#091b3d] to-[#040c21] text-white p-6 sm:p-10 border-b border-white/10 relative overflow-hidden">
        {/* Subtle Ambient Light */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center justify-between gap-4 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider mb-3 backdrop-blur-md">
              <Calculator className="w-3.5 h-3.5 text-gold-400" />
              <span>Capital Needs & Human Life Value (HLV) Engine</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug">
              Calculate Your Family's <span className="text-gold-300 font-extrabold">Financial Protection Gap</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-2xl font-normal leading-relaxed">
              An institutional estimation tool evaluating how much financial protection capital your dependents would realistically require if your earning capacity ceased today.
            </p>
          </div>
        </div>

        {/* Clear Disclaimer Banner */}
        <div className="mt-5 p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3 text-xs text-slate-300 relative z-10 backdrop-blur-md">
          <Info className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-gold-300 font-bold">Educational Disclaimer:</strong> This tool provides planning approximations based on your self-reported inputs. It is <strong>NOT an official LIC premium quote calculator</strong> and does not constitute formal underwriting or financial advice.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 space-y-7">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <h3 className="text-sm font-extrabold uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 text-gold-300 border border-gold-500/30 text-xs flex items-center justify-center font-bold">1</span>
              <span>Your Household Financial Profile</span>
            </h3>
            <span className="text-xs text-gold-400 font-medium">Real-Time Calculation</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Age */}
            <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
              <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                <label htmlFor="calc-age">Current Age</label>
                <span className="text-gold-300 font-extrabold text-sm">{inputs.age} years</span>
              </div>
              <input
                id="calc-age"
                type="range"
                min={18}
                max={60}
                step={1}
                value={inputs.age}
                onChange={(e) => handleInputChange("age", Number(e.target.value))}
                className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>18 yrs</span>
                <span>60 yrs</span>
              </div>
            </div>

            {/* Annual Income */}
            <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
              <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                <label htmlFor="calc-income">Gross Annual Income</label>
                <span className="text-gold-300 font-extrabold text-sm">{formatCurrencyINR(inputs.annualIncome)}</span>
              </div>
              <input
                id="calc-income"
                type="range"
                min={300000}
                max={10000000}
                step={100000}
                value={inputs.annualIncome}
                onChange={(e) => handleInputChange("annualIncome", Number(e.target.value))}
                className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>₹3L</span>
                <span>₹1 Cr</span>
              </div>
            </div>

            {/* Monthly Living Expenses */}
            <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
              <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                <label htmlFor="calc-expenses">Monthly Living Expenses</label>
                <span className="text-gold-300 font-extrabold text-sm">{formatCurrencyINR(inputs.monthlyExpenses)}/mo</span>
              </div>
              <input
                id="calc-expenses"
                type="range"
                min={15000}
                max={300000}
                step={5000}
                value={inputs.monthlyExpenses}
                onChange={(e) => handleInputChange("monthlyExpenses", Number(e.target.value))}
                className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>₹15k</span>
                <span>₹3L</span>
              </div>
            </div>

            {/* Outstanding Debts & Loans */}
            <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
              <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                <label htmlFor="calc-loans">Debts (Home / Car / Business)</label>
                <span className="text-rose-400 font-extrabold text-sm">{formatCurrencyINR(inputs.outstandingLoans)}</span>
              </div>
              <input
                id="calc-loans"
                type="range"
                min={0}
                max={20000000}
                step={200000}
                value={inputs.outstandingLoans}
                onChange={(e) => handleInputChange("outstandingLoans", Number(e.target.value))}
                className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                <span>₹0</span>
                <span>₹2 Cr</span>
              </div>
            </div>
          </div>

          {/* Children & Education Section */}
          <div className="pt-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 text-gold-300 border border-gold-500/30 text-xs flex items-center justify-center font-bold">2</span>
              <span>Dependents & Future Milestones</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
                <label htmlFor="calc-children" className="block text-xs font-bold text-slate-200 mb-2">
                  Number of Minor Children
                </label>
                <select
                  id="calc-children"
                  value={inputs.childrenCount}
                  onChange={(e) => handleInputChange("childrenCount", Number(e.target.value))}
                  className="w-full px-4 py-2.5 text-sm font-semibold rounded-xl border border-white/20 bg-[#081836] text-white focus:outline-none focus:ring-2 focus:ring-gold-400 shadow-sm"
                >
                  <option value={0} className="bg-[#081836] text-white">0 (No minor children)</option>
                  <option value={1} className="bg-[#081836] text-white">1 Child</option>
                  <option value={2} className="bg-[#081836] text-white">2 Children</option>
                  <option value={3} className="bg-[#081836] text-white">3 Children</option>
                  <option value={4} className="bg-[#081836] text-white">4+ Children</option>
                </select>
              </div>

              {inputs.childrenCount > 0 && (
                <div className="bg-white/[0.04] p-4 rounded-2xl border border-white/10 hover:border-gold-500/30 transition-colors">
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-2">
                    <label htmlFor="calc-child-edu">Higher Education Target / Child</label>
                    <span className="text-gold-300 font-extrabold text-sm">{formatCurrencyINR(inputs.educationCostPerChild)}</span>
                  </div>
                  <input
                    id="calc-child-edu"
                    type="range"
                    min={500000}
                    max={10000000}
                    step={250000}
                    value={inputs.educationCostPerChild}
                    onChange={(e) => handleInputChange("educationCostPerChild", Number(e.target.value))}
                    className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
                    <span>₹5L</span>
                    <span>₹1 Cr</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Existing Assets Section Toggle */}
          <div className="pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-bold text-gold-300 hover:text-gold-200 flex items-center gap-1.5 transition-colors uppercase tracking-wider"
            >
              <span>{showAdvanced ? "— Hide existing assets & savings" : "+ Account for Existing Life Insurance & Liquid Savings"}</span>
            </button>

            {showAdvanced && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-1.5">
                    <label htmlFor="calc-existing-cover">Existing Life Cover</label>
                    <span className="text-emerald-400 font-extrabold">{formatCurrencyINR(inputs.existingLifeCover)}</span>
                  </div>
                  <input
                    id="calc-existing-cover"
                    type="range"
                    min={0}
                    max={30000000}
                    step={500000}
                    value={inputs.existingLifeCover}
                    onChange={(e) => handleInputChange("existingLifeCover", Number(e.target.value))}
                    className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-200 mb-1.5">
                    <label htmlFor="calc-existing-savings">Liquid Savings / Deposits</label>
                    <span className="text-emerald-400 font-extrabold">{formatCurrencyINR(inputs.existingLiquidSavings)}</span>
                  </div>
                  <input
                    id="calc-existing-savings"
                    type="range"
                    min={0}
                    max={20000000}
                    step={200000}
                    value={inputs.existingLiquidSavings}
                    onChange={(e) => handleInputChange("existingLiquidSavings", Number(e.target.value))}
                    className="w-full cursor-pointer h-2 bg-white/10 rounded-lg accent-gold-400"
                  />
                </div>
              </div>
            )}
          </div>
        </div>


        {/* Right Column: Dynamic Results Dashboard (Luxury High-Contrast Dossier) */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="bg-gradient-to-br from-[#061126] via-[#091a38] to-[#040b19] rounded-3xl border border-gold-500/40 p-7 sm:p-8 space-y-6 text-white shadow-2xl relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-center border-b border-white/10 pb-4 relative z-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold-300">
                Protection Assessment
              </span>
              {result.isFullyCovered ? (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-300 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Fully Covered
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-300 bg-rose-950/80 border border-rose-500/40 px-3 py-1 rounded-full shadow-sm">
                  <ShieldAlert className="w-3.5 h-3.5 text-rose-400" /> Protection Gap
                </span>
              )}
            </div>

            {/* Primary Result Headline */}
            <div className="relative z-10">
              <p className="text-xs text-slate-300 font-semibold tracking-wide">Estimated Family Protection Gap</p>
              <div className="text-3.5xl sm:text-5xl font-serif font-black text-gold-300 mt-1.5 tracking-tight drop-shadow-sm">
                {formatCurrencyINR(result.protectionGap)}
              </div>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal">
                {result.isFullyCovered
                  ? "Your current life cover and assets match your household economic obligations."
                  : "Additional sovereign-backed life protection recommended to guarantee complete living income and debt clearance."}
              </p>
            </div>

            {/* Financial Breakdown Table */}
            <div className="space-y-3 text-xs border-t border-white/10 pt-4 relative z-10">
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span>Family Living Sustenance (15–18 yrs):</span>
                <span className="font-bold text-white">{formatCurrencyINR(result.householdSustenanceNeed)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                <span>Outstanding Debts to Clear:</span>
                <span className="font-bold text-rose-300">{formatCurrencyINR(result.debtClearanceNeed)}</span>
              </div>
              {result.childEducationNeed > 0 && (
                <div className="flex justify-between py-1 border-b border-white/5 text-slate-300">
                  <span>Children's Education Target:</span>
                  <span className="font-bold text-gold-300">{formatCurrencyINR(result.childEducationNeed)}</span>
                </div>
              )}
              <div className="flex justify-between py-1.5 border-b border-white/10 text-white font-bold">
                <span className="text-gold-200">Total Capital Required:</span>
                <span className="text-gold-200 text-sm">{formatCurrencyINR(result.totalProtectionRequired)}</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-300 font-semibold">
                <span>Less Existing Cover & Liquid Assets:</span>
                <span>-{formatCurrencyINR(result.existingAssetsCover)}</span>
              </div>
            </div>

            {/* Key Questions Card */}
            <div className="bg-white/[0.04] rounded-2xl p-4 border border-white/10 space-y-2 relative z-10 backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold text-gold-300">
                <HelpCircle className="w-4 h-4 text-gold-400" />
                <span>Questions for Your Consultation</span>
              </div>
              <ul className="text-[11px] text-slate-300 space-y-1.5 list-disc pl-4 font-normal">
                {result.recommendedQuestions.slice(0, 3).map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2 relative z-10">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="w-full py-3.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <UserCheck className="w-4 h-4 text-slate-950" />
                <span>Discuss Gap with Officer</span>
              </button>

              <a
                href={buildCalculatorWhatsAppLink(formatCurrencyINR(result.protectionGap))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/70 hover:bg-emerald-900/80 border border-emerald-500/40 transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Discuss on WhatsApp Directly</span>
              </a>

              <button
                type="button"
                onClick={() => setShowBrief(true)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-gold-400" />
                <span>Save / Print Assessment Brief (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProtectionBriefModal
        isOpen={showBrief}
        onClose={() => setShowBrief(false)}
        inputs={inputs}
        result={result}
      />
    </div>
  );
};
