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
  FileText,
  Sparkles,
  ArrowRight
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
    <section id="solutions-section" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lic-50 border border-lic-200 text-lic-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Official Policy Portfolio</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            LIC Solutions & <span className="text-lic-900">Policy Explorer</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Transparent, source-backed specifications for flagship individual insurance plans. All Table Numbers and IRDAI UINs are verified directly with official LIC circulars.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                trackEvent("policy_resource_viewed", { category: cat.id });
              }}
              className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold transition-all duration-200 shadow-sm ${
                activeCategory === cat.id
                  ? "bg-lic-900 text-gold-300 ring-2 ring-gold-500/50 shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200/80 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid with Luxury Financial Card Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-card-elevated hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Card Header with Table & UIN badges */}
              <div className="p-7 border-b border-slate-100 bg-gradient-to-b from-slate-50/50 to-white">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-lic-50 text-lic-900 border border-lic-200/80">
                    {product.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-lic-900 bg-slate-100 px-2.5 py-0.5 rounded-md border border-slate-200">
                    Table {product.tableNo}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-slate-900 group-hover:text-lic-900 transition-colors leading-tight">
                  {product.name}
                </h3>
                
                <div className="text-[11px] text-slate-500 font-mono mt-1 font-medium">
                  IRDAI UIN: {product.uin}
                </div>

                <p className="text-xs text-slate-600 mt-3 font-normal leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-5 text-xs text-slate-600 flex-grow">
                <div>
                  <span className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px] block mb-1">
                    Who it is suited for:
                  </span>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    {product.targetAudience}
                  </p>
                </div>

                <div>
                  <span className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px] block mb-1">
                    Primary Capital Objective:
                  </span>
                  <p className="text-slate-600 leading-relaxed font-normal">
                    {product.highLevelPurpose}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <span className="font-extrabold text-slate-900 uppercase tracking-wider text-[10px] block mb-2">
                    Key Policy Features:
                  </span>
                  <ul className="space-y-2">
                    {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Conditions */}
                <div className="pt-3 border-t border-slate-100">
                  <span className="font-extrabold text-amber-800 uppercase tracking-wider text-[10px] block mb-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Important Considerations:</span>
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-500 font-normal">
                    {product.importantConditions.slice(0, 2).map((cond, cIdx) => (
                      <li key={cIdx}>• {cond}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-200/80 space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handlePlanConsultation(product)}
                    className="py-3 px-3 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all flex items-center justify-center gap-1.5 shadow-gold-glow"
                  >
                    <UserCheck className="w-4 h-4 text-slate-950" />
                    <span>Talk to Kartik</span>
                  </button>

                  <a
                    href={buildPlanWhatsAppLink(product.name, product.tableNo)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-xl text-xs font-bold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <a
                    href="https://licindia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-lic-900 hover:text-gold-700 transition-colors"
                  >
                    <span>Official LIC Portal Source</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-600" />
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
