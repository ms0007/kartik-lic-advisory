"use client";

import React, { useState } from "react";
import { productsData, LICProduct } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { 
  X, 
  Check, 
  HelpCircle, 
  ExternalLink, 
  MessageSquare, 
  UserCheck, 
  ArrowRight,
  ShieldCheck,
  Scale
} from "lucide-react";

interface PlanComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultationWithPlan?: (planName: string) => void;
  initialPlanIds?: string[];
}

export const PlanComparisonModal: React.FC<PlanComparisonModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultationWithPlan,
  initialPlanIds = ["yuva-term", "new-jeevan-anand"]
}) => {
  const [selectedPlanIds, setSelectedPlanIds] = useState<string[]>(initialPlanIds);

  if (!isOpen) return null;

  const selectedPlans = productsData.filter((p) => selectedPlanIds.includes(p.id));

  const togglePlan = (id: string) => {
    if (selectedPlanIds.includes(id)) {
      if (selectedPlanIds.length > 1) {
        setSelectedPlanIds(selectedPlanIds.filter((pId) => pId !== id));
      }
    } else {
      if (selectedPlanIds.length < 3) {
        setSelectedPlanIds([...selectedPlanIds, id]);
      }
    }
  };

  const getComparisonRow = (label: string, renderValue: (p: LICProduct) => React.ReactNode) => (
    <tr className="border-b border-slate-200 hover:bg-slate-50/50 transition-colors">
      <td className="p-3.5 text-xs font-bold text-slate-800 bg-slate-50 w-48 shrink-0 align-top">
        {label}
      </td>
      {selectedPlans.map((p) => (
        <td key={p.id} className="p-3.5 text-xs text-slate-700 align-top">
          {renderValue(p)}
        </td>
      ))}
    </tr>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-title"
    >
      <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Scale className="w-5 h-5 text-amber-400" />
            <div>
              <h2 id="comparison-title" className="font-serif text-lg sm:text-xl font-bold">
                Side-by-Side LIC Policy Comparison Matrix
              </h2>
              <p className="text-[11px] text-blue-200">
                Compare up to 3 plans objectively across underwriting, death benefits, and liquidity.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-300 hover:text-white bg-blue-900/60 hover:bg-blue-800 transition-colors"
            aria-label="Close Comparison"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Plan Selectors Bar */}
        <div className="p-4 bg-slate-100 border-b border-slate-200 overflow-x-auto">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 shrink-0">Select Plans (1 to 3):</span>
            {productsData.map((prod) => {
              const isSelected = selectedPlanIds.includes(prod.id);
              return (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => togglePlan(prod.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isSelected
                      ? "bg-blue-900 text-white shadow-sm ring-1 ring-blue-900"
                      : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {isSelected && <Check className="w-3 h-3 text-amber-400" />}
                  <span>{prod.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparison Table Body */}
        <div className="overflow-y-auto flex-grow p-4 sm:p-6">
          <table className="w-full border-collapse border border-slate-200 rounded-2xl overflow-hidden text-left">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-3.5 text-xs font-bold uppercase tracking-wider w-48">Parameter</th>
                {selectedPlans.map((p) => (
                  <th key={p.id} className="p-3.5 text-xs font-bold">
                    <div className="font-serif text-sm sm:text-base font-bold text-amber-300">
                      {p.name}
                    </div>
                    <div className="text-[10px] text-blue-200 font-mono mt-0.5">
                      Table {p.tableNo} • UIN: {p.uin}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {getComparisonRow("Category & Class", (p) => (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-950">
                  {p.categoryLabel}
                </span>
              ))}

              {getComparisonRow("Primary Objective", (p) => (
                <p className="leading-relaxed">{p.highLevelPurpose}</p>
              ))}

              {getComparisonRow("Target Audience", (p) => (
                <p className="leading-relaxed">{p.targetAudience}</p>
              ))}

              {getComparisonRow("Maturity / Survival Benefit", (p) => {
                if (p.category === "protection") {
                  return <span className="text-slate-500 italic">No survival benefit. 100% pure risk protection.</span>;
                }
                if (p.id === "jeevan-umang") {
                  return <span className="font-semibold text-emerald-800">8% of Basic Sum Assured paid annually for life after PPT until age 99, plus maturity lump sum at age 100.</span>;
                }
                if (p.id === "jeevan-utsav") {
                  return <span className="font-semibold text-emerald-800">10% guaranteed annual income or compounding flexi income benefit for life.</span>;
                }
                if (p.category === "retirement") {
                  return <span className="font-semibold text-emerald-800">Guaranteed lifelong monthly or annual annuity payments locked at inception.</span>;
                }
                return <span>Full Basic Sum Assured + Simple Reversionary Bonuses + Final Additional Bonus (if declared).</span>;
              })}

              {getComparisonRow("Death Benefit Payout", (p) => (
                <span className="font-medium text-slate-800">
                  {p.category === "protection"
                    ? "Full Basic Sum Assured paid as lump-sum or structured monthly installments to nominees."
                    : "Sum Assured on Death plus accrued bonuses / guaranteed additions paid to nominees."}
                </span>
              ))}

              {getComparisonRow("Policy Loan Liquidity", (p) => (
                <span>
                  {p.category === "protection"
                    ? "Loan facility not available under pure risk term policies."
                    : "Loan available after 2 consecutive years of completed premium payments."}
                </span>
              ))}

              {getComparisonRow("Key Conditions & Disclosures", (p) => (
                <ul className="space-y-1 text-[11px] text-slate-600 list-disc pl-3">
                  {p.importantConditions.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              ))}
            </tbody>
          </table>

          {/* Table Actions */}
          <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {selectedPlans.map((p) => (
              <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-2">
                <span className="font-bold text-xs text-slate-800 block truncate">{p.name}</span>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenConsultationWithPlan) {
                      onOpenConsultationWithPlan(`Comparison Inquiry: ${p.name}`);
                    }
                  }}
                  className="w-full py-2 px-3 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-sm"
                >
                  Discuss {p.name.replace("LIC's ", "")}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <a
              href={buildWhatsAppLink(`Hello Kartik Ji, I am comparing ${selectedPlans.map(p => p.name).join(" vs ")} on your website and would like your personalized recommendation.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:underline"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>Discuss this comparison with Kartik on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
