"use client";

import React, { useRef } from "react";
import { CalculatorInputs, CalculatorResult } from "@/lib/calculator";
import { formatCurrencyINR } from "@/lib/utils";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { 
  X, 
  Printer, 
  Download, 
  ShieldCheck, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Info 
} from "lucide-react";

interface ProtectionBriefModalProps {
  isOpen: boolean;
  onClose: () => void;
  inputs: CalculatorInputs;
  result: CalculatorResult;
}

export const ProtectionBriefModal: React.FC<ProtectionBriefModalProps> = ({
  isOpen,
  onClose,
  inputs,
  result
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="brief-title"
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Top Actions (Hidden on Print) */}
        <div className="print:hidden bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h2 id="brief-title" className="font-serif text-base sm:text-lg font-bold">
              Your Personal Protection Gap Assessment Brief
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="py-1.5 px-3 rounded-lg text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-white bg-slate-800 transition-colors"
              aria-label="Close Brief"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Container */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-6 text-slate-800">
          
          {/* Institutional Document Header */}
          <div className="border-b-2 border-blue-900 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">
                Confidential Financial Assessment
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Family Protection Gap Assessment
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">
                Prepared via Human Life Value (HLV) Diagnostic Engine • Date: {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            <div className="text-left sm:text-right text-xs">
              <span className="font-serif font-bold text-slate-900 text-sm block">Kartik Barmera</span>
              <span className="text-blue-900 font-semibold block">Development Officer, LIC of India</span>
              <span className="text-slate-500 font-mono text-[11px] block">{advisorData.displayPhone}</span>
            </div>
          </div>

          {/* Profile Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Current Age</span>
              <span className="font-bold text-slate-900 text-sm">{inputs.age} Years</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Annual Income</span>
              <span className="font-bold text-slate-900 text-sm">{formatCurrencyINR(inputs.annualIncome)}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Monthly Expenses</span>
              <span className="font-bold text-slate-900 text-sm">{formatCurrencyINR(inputs.monthlyExpenses)}</span>
            </div>
            <div>
              <span className="text-slate-500 block text-[10px] uppercase">Outstanding Loans</span>
              <span className="font-bold text-rose-700 text-sm">{formatCurrencyINR(inputs.outstandingLoans)}</span>
            </div>
          </div>

          {/* Core Calculation Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5">
              1. Total Household Financial Protection Required
            </h3>
            <table className="w-full text-xs border border-slate-200 rounded-xl overflow-hidden">
              <tbody className="divide-y divide-slate-100">
                <tr className="bg-slate-50/50">
                  <td className="p-3 text-slate-600">Household Living Sustenance Need (15–18 years factor):</td>
                  <td className="p-3 text-right font-bold text-slate-900">{formatCurrencyINR(result.householdSustenanceNeed)}</td>
                </tr>
                <tr>
                  <td className="p-3 text-slate-600">Outstanding Debt Liquidation (Mortgages, auto, personal):</td>
                  <td className="p-3 text-right font-bold text-slate-900">{formatCurrencyINR(result.debtClearanceNeed)}</td>
                </tr>
                {result.childEducationNeed > 0 && (
                  <tr className="bg-slate-50/50">
                    <td className="p-3 text-slate-600">Children's Higher Education Target ({inputs.childrenCount} Child):</td>
                    <td className="p-3 text-right font-bold text-slate-900">{formatCurrencyINR(result.childEducationNeed)}</td>
                  </tr>
                )}
                <tr className="bg-blue-50 text-blue-950 font-bold border-t border-blue-200">
                  <td className="p-3">Gross Family Protection Capital Required:</td>
                  <td className="p-3 text-right text-sm">{formatCurrencyINR(result.totalProtectionRequired)}</td>
                </tr>
                <tr className="text-emerald-800">
                  <td className="p-3">Less: Existing Life Cover & Liquid Savings Offset:</td>
                  <td className="p-3 text-right font-semibold">-{formatCurrencyINR(result.existingAssetsCover)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Primary Result Highlight Box */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">
                Recommended Action Target
              </span>
              <h4 className="font-serif text-lg font-bold">
                Net Estimated Life Protection Gap:
              </h4>
            </div>
            <div className="text-3xl font-serif font-black text-amber-300">
              {formatCurrencyINR(result.protectionGap)}
            </div>
          </div>

          {/* Discussion Questions */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              2. Key Questions for Your Advisory Session with Kartik Barmera:
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {result.recommendedQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="font-bold text-blue-900">•</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Educational Disclaimer */}
          <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[10px] text-slate-500 leading-relaxed">
            <strong>Important Educational Disclaimer:</strong> This brief provides general planning approximations based on self-reported inputs. It is NOT an official LIC premium quote, does NOT constitute formal financial advice, and does not represent an underwriting commitment. Exact policy terms, premiums, and underwriting eligibility are determined upon formal application to LIC of India.
          </div>

          {/* Print Footer Contact (Shown on print and web) */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600 gap-2">
            <div>
              <span>Advisor: <strong>Kartik Barmera</strong>, Development Officer, LIC of India</span>
            </div>
            <div className="flex items-center gap-4">
              <span>Phone: {advisorData.displayPhone}</span>
              <span>•</span>
              <a 
                href={buildWhatsAppLink(`Hello Kartik Ji, I generated my Protection Gap Brief (Gap: ${formatCurrencyINR(result.protectionGap)}) and would like to review it together.`)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-700 font-bold hover:underline"
              >
                Send via WhatsApp
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
