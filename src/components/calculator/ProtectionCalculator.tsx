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
  Printer
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
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Banner & Important Regulatory Educational Notice */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-semibold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Capital Needs & Human Life Value (HLV) Engine</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight">
              Calculate Your Family's Financial Protection Gap
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              An educational estimation tool to evaluate how much financial coverage your dependents would realistically require if your income ceased today.
            </p>
          </div>
        </div>

        {/* Clear Disclaimer Banner */}
        <div className="mt-4 p-3 rounded-xl bg-blue-900/60 border border-blue-700/50 flex items-start gap-2.5 text-xs text-blue-200">
          <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>Educational Disclaimer:</strong> This tool provides general planning approximations based on your self-reported inputs. It is <strong>NOT an official LIC premium calculator</strong>, does not provide legal quotes, and does not constitute formal underwriting or financial advice.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-2">
            <span>1. Your Household Financial Profile</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Age */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <label htmlFor="calc-age">Current Age</label>
                <span className="text-blue-900 font-bold">{inputs.age} years</span>
              </div>
              <input
                id="calc-age"
                type="range"
                min={18}
                max={60}
                step={1}
                value={inputs.age}
                onChange={(e) => handleInputChange("age", Number(e.target.value))}
                className="w-full accent-blue-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>18 yrs</span>
                <span>60 yrs</span>
              </div>
            </div>

            {/* Annual Income */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <label htmlFor="calc-income">Gross Annual Income</label>
                <span className="text-blue-900 font-bold">{formatCurrencyINR(inputs.annualIncome)}</span>
              </div>
              <input
                id="calc-income"
                type="range"
                min={300000}
                max={10000000}
                step={100000}
                value={inputs.annualIncome}
                onChange={(e) => handleInputChange("annualIncome", Number(e.target.value))}
                className="w-full accent-blue-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>₹3L</span>
                <span>₹1 Cr</span>
              </div>
            </div>

            {/* Monthly Living Expenses */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <label htmlFor="calc-expenses">Monthly Family Living Expenses</label>
                <span className="text-blue-900 font-bold">{formatCurrencyINR(inputs.monthlyExpenses)}/mo</span>
              </div>
              <input
                id="calc-expenses"
                type="range"
                min={15000}
                max={300000}
                step={5000}
                value={inputs.monthlyExpenses}
                onChange={(e) => handleInputChange("monthlyExpenses", Number(e.target.value))}
                className="w-full accent-blue-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>₹15k</span>
                <span>₹3L</span>
              </div>
            </div>

            {/* Outstanding Debts & Loans */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                <label htmlFor="calc-loans">Total Outstanding Debts (Home/Car/Personal)</label>
                <span className="text-rose-700 font-bold">{formatCurrencyINR(inputs.outstandingLoans)}</span>
              </div>
              <input
                id="calc-loans"
                type="range"
                min={0}
                max={20000000}
                step={200000}
                value={inputs.outstandingLoans}
                onChange={(e) => handleInputChange("outstandingLoans", Number(e.target.value))}
                className="w-full accent-blue-800 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>₹0</span>
                <span>₹2 Cr</span>
              </div>
            </div>
          </div>

          {/* Children & Education Section */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
              <span>Dependents & Future Milestones</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="calc-children" className="block text-xs font-semibold text-slate-700 mb-1">
                  Number of Minor Children
                </label>
                <select
                  id="calc-children"
                  value={inputs.childrenCount}
                  onChange={(e) => handleInputChange("childrenCount", Number(e.target.value))}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value={0}>0 (No minor children)</option>
                  <option value={1}>1 Child</option>
                  <option value={2}>2 Children</option>
                  <option value={3}>3 Children</option>
                  <option value={4}>4+ Children</option>
                </select>
              </div>

              {inputs.childrenCount > 0 && (
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <label htmlFor="calc-child-edu">Higher Education Target / Child</label>
                    <span className="text-blue-900 font-bold">{formatCurrencyINR(inputs.educationCostPerChild)}</span>
                  </div>
                  <input
                    id="calc-child-edu"
                    type="range"
                    min={500000}
                    max={10000000}
                    step={250000}
                    value={inputs.educationCostPerChild}
                    onChange={(e) => handleInputChange("educationCostPerChild", Number(e.target.value))}
                    className="w-full accent-blue-800 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                    <span>₹5L</span>
                    <span>₹1 Cr</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Existing Assets Section */}
          <div className="pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-xs font-semibold text-blue-800 hover:text-blue-900 flex items-center gap-1"
            >
              <span>{showAdvanced ? "Hide existing assets & retirement horizon" : "+ Adjust existing savings & life cover"}</span>
            </button>

            {showAdvanced && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <label htmlFor="calc-existing-cover">Existing Life Insurance Cover</label>
                    <span className="text-emerald-700 font-bold">{formatCurrencyINR(inputs.existingLifeCover)}</span>
                  </div>
                  <input
                    id="calc-existing-cover"
                    type="range"
                    min={0}
                    max={30000000}
                    step={500000}
                    value={inputs.existingLifeCover}
                    onChange={(e) => handleInputChange("existingLifeCover", Number(e.target.value))}
                    className="w-full accent-emerald-700 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1.5">
                    <label htmlFor="calc-existing-savings">Liquid Savings / Investments</label>
                    <span className="text-emerald-700 font-bold">{formatCurrencyINR(inputs.existingLiquidSavings)}</span>
                  </div>
                  <input
                    id="calc-existing-savings"
                    type="range"
                    min={0}
                    max={20000000}
                    step={200000}
                    value={inputs.existingLiquidSavings}
                    onChange={(e) => handleInputChange("existingLiquidSavings", Number(e.target.value))}
                    className="w-full accent-emerald-700 cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Dynamic Results & Protection Gap Card */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-5">
            <div className="flex justify-between items-center border-b border-slate-200 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Protection Assessment</span>
              {result.isFullyCovered ? (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  <ShieldCheck className="w-3.5 h-3.5" /> Fully Covered
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                  <ShieldAlert className="w-3.5 h-3.5" /> Protection Gap Identified
                </span>
              )}
            </div>

            {/* Primary Result Headline */}
            <div>
              <p className="text-xs text-slate-500 font-medium">Estimated Net Protection Gap</p>
              <div className="text-3xl sm:text-4xl font-serif font-black text-slate-900 mt-1">
                {formatCurrencyINR(result.protectionGap)}
              </div>
              <p className="text-xs text-slate-500 mt-1">
                {result.isFullyCovered
                  ? "Based on your current numbers, your existing cover and liquid assets match your calculated liabilities."
                  : "Additional life protection capital recommended to ensure complete income continuation and debt freedom."}
              </p>
            </div>

            {/* Financial Breakdown Items */}
            <div className="space-y-2.5 text-xs border-t border-slate-200 pt-3">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Family Living Sustenance (15–18 yrs):</span>
                <span className="font-semibold text-slate-800">{formatCurrencyINR(result.householdSustenanceNeed)}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Outstanding Loans to Clear:</span>
                <span className="font-semibold text-slate-800">{formatCurrencyINR(result.debtClearanceNeed)}</span>
              </div>
              {result.childEducationNeed > 0 && (
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-600">Children's Education Target:</span>
                  <span className="font-semibold text-slate-800">{formatCurrencyINR(result.childEducationNeed)}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-600">Total Capital Required:</span>
                <span className="font-bold text-slate-900">{formatCurrencyINR(result.totalProtectionRequired)}</span>
              </div>
              <div className="flex justify-between py-1 text-emerald-800">
                <span>Less Existing Cover & Liquid Assets:</span>
                <span className="font-semibold">-{formatCurrencyINR(result.existingAssetsCover)}</span>
              </div>
            </div>

            {/* Key Questions to Discuss */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
                <HelpCircle className="w-4 h-4 text-blue-800" />
                <span>Questions for Your Personal Consultation</span>
              </div>
              <ul className="text-[11px] text-slate-600 space-y-1.5 list-disc pl-4">
                {result.recommendedQuestions.slice(0, 3).map((q, idx) => (
                  <li key={idx}>{q}</li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleConsultationClick}
                className="w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <UserCheck className="w-4 h-4" />
                <span>Discuss My Protection Needs</span>
              </button>

              <a
                href={buildCalculatorWhatsAppLink(formatCurrencyINR(result.protectionGap))}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Discuss this Gap on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setShowBrief(true)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4 text-blue-800" />
                <span>Save / Print Protection Brief</span>
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
