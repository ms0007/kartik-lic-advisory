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
    <section id="solutions-section" className="py-24 bg-[#020614] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Official Policy Portfolio</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            LIC Solutions & <span className="text-gold-300">Policy Explorer</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
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
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 border border-gold-400 shadow-gold-glow font-bold"
                  : "bg-white/[0.03] text-slate-300 hover:text-white hover:border-gold-500/40 border border-white/10 hover:bg-white/[0.06]"
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
              className="bg-[#050e20]/95 rounded-3xl border border-white/10 shadow-glass-dark hover:border-gold-500/50 hover:bg-[#071329] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Card Header with Table & UIN badges */}
              <div className="p-7 border-b border-white/10 bg-[#081836]/60">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-gold-500/10 text-gold-300 border border-gold-500/30">
                    {product.badge}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-slate-200 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/10">
                    Table {product.tableNo}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-gold-200 transition-colors leading-tight">
                  {product.name}
                </h3>
                
                <div className="text-[11px] text-slate-400 font-mono mt-1 font-medium">
                  IRDAI UIN: {product.uin}
                </div>

                <p className="text-xs text-slate-300 mt-3 font-normal leading-relaxed">
                  {product.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-7 space-y-5 text-xs text-slate-300 flex-grow">
                <div>
                  <span className="font-extrabold text-gold-300 uppercase tracking-wider text-[10px] block mb-1">
                    Who it is suited for:
                  </span>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    {product.targetAudience}
                  </p>
                </div>

                <div>
                  <span className="font-extrabold text-gold-300 uppercase tracking-wider text-[10px] block mb-1">
                    Primary Capital Objective:
                  </span>
                  <p className="text-slate-300 leading-relaxed font-normal">
                    {product.highLevelPurpose}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <span className="font-extrabold text-white uppercase tracking-wider text-[10px] block mb-2">
                    Key Policy Features:
                  </span>
                  <ul className="space-y-2">
                    {product.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-slate-200 font-medium leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Conditions */}
                <div className="pt-3 border-t border-white/10">
                  <span className="font-extrabold text-gold-400 uppercase tracking-wider text-[10px] block mb-1.5 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-gold-400" />
                    <span>Important Considerations:</span>
                  </span>
                  <ul className="space-y-1 text-[11px] text-slate-400 font-normal">
                    {product.importantConditions.slice(0, 2).map((cond, cIdx) => (
                      <li key={cIdx}>• {cond}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-6 bg-[#040c1e] border-t border-white/10 space-y-3">
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
                    className="py-3 px-3 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <a
                    href="https://licindia.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    <span>Official LIC Portal Source</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
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
