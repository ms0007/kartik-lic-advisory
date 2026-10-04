"use client";

import React, { useState } from "react";
import { productsData, productCategories, LICProduct } from "@/data/products";
import { buildPlanWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  ShieldCheck, 
  ExternalLink, 
  MessageSquare, 
  UserCheck, 
  CheckCircle2, 
  AlertCircle,
  FileText
} from "lucide-react";

interface SolutionsExplorerProps {
  onOpenConsultationWithPlan?: (planName: string) => void;
}

export const SolutionsExplorer: React.FC<SolutionsExplorerProps> = ({
  onOpenConsultationWithPlan
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProducts = activeCategory === "all"
    ? productsData
    : productsData.filter((p) => p.category === activeCategory);

  const handlePlanConsultation = (plan: LICProduct) => {
    trackEvent("contact_click", { plan: plan.name, location: "solution_explorer" });
    if (onOpenConsultationWithPlan) {
      onOpenConsultationWithPlan(`${plan.name} (Table ${plan.tableNo})`);
    }
  };

  return (
    <section id="solutions-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
            Official Catalog & Verified Specifications
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            LIC Solutions & Policy Explorer
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Transparent, source-backed information on prominent individual insurance plans. All Plan Table Numbers and Unique Identification Numbers (UINs) are verified against official LIC records.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                trackEvent("policy_resource_viewed", { category: cat.id });
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-blue-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Header */}
              <div className="p-6 border-b border-slate-100">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200">
                    {product.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    Table {product.tableNo}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                  {product.name}
                </h3>
                
                <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                  UIN: {product.uin}
                </div>

                <p className="text-xs text-slate-600 mt-2.5 font-medium leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4 text-xs text-slate-600 flex-grow">
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block mb-1">
                    Who it may be relevant for:
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {product.targetAudience}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block mb-1">
                    Core Objective:
                  </span>
                  <p className="text-slate-600 leading-relaxed">
                    {product.highLevelPurpose}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <span className="font-bold text-slate-800 uppercase tracking-wider text-[10px] block mb-1.5">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5">
                    {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Conditions */}
                <div className="pt-2 border-t border-slate-100">
                  <span className="font-bold text-amber-800 uppercase tracking-wider text-[10px] block mb-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    <span>Important Conditions:</span>
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-500">
                    {product.importantConditions.slice(0, 2).map((cond, cIdx) => (
                      <li key={cIdx}>• {cond}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mandatory Official Verification Disclaimer & Actions */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 space-y-3">
                <p className="text-[10px] text-slate-500 italic text-center">
                  * Verify current terms on the official LIC website before making a decision.
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handlePlanConsultation(product)}
                    className="py-2.5 px-3 rounded-lg text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <UserCheck className="w-3.5 h-3.5" />
                    <span>Talk to Kartik</span>
                  </button>

                  <a
                    href={buildPlanWhatsAppLink(product.name, product.tableNo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-lg text-xs font-semibold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <a
                    href="https://licindia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-blue-800 hover:underline"
                  >
                    <span>View Official LIC Brochure</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
