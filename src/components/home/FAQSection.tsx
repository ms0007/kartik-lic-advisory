"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData, FAQItem } from "@/data/faqs";
import { trackEvent } from "@/lib/analytics";
import { ChevronDown, Sparkles, ArrowRight, ExternalLink } from "lucide-react";

interface FAQSectionProps {
  limit?: number;
  showCategories?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ 
  limit = 8, 
  showCategories = true 
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqsData[0].id);

  const categories = [
    { id: "all", label: "All Topics" },
    { id: "basics", label: "Insurance Basics" },
    { id: "riders", label: "Riders & Benefits" },
    { id: "policy-lifecycle", label: "Premiums & Lifecycle" },
    { id: "claims-advisory", label: "Claims & Advisory" }
  ];

  const filteredFaqs = activeCategory === "all"
    ? faqsData
    : faqsData.filter((f) => f.category === activeCategory);

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  const toggleFaq = (id: string, question: string) => {
    const isOpening = openFaqId !== id;
    setOpenFaqId(isOpening ? id : null);
    if (isOpening) {
      trackEvent("faq_opened", { question });
    }
  };

  return (
    <section className="py-24 bg-[#020614] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Clear, Source-Backed Answers</span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Frequently Asked <span className="text-gold-300">Questions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Straightforward explanations regarding life insurance, premium terms, riders, and claims without technical obfuscation.
          </p>
        </div>

        {/* Category Filter Pills if enabled */}
        {showCategories && (
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 border border-gold-400 shadow-gold-glow font-bold"
                    : "bg-white/[0.03] text-slate-300 border border-white/10 hover:border-gold-500/40 hover:bg-white/[0.06]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {displayFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-white/10 rounded-2xl overflow-hidden bg-[#050e20]/90 transition-all duration-200 shadow-glass-dark"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id, faq.question)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-transparent hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-gold-400 text-slate-950 shadow-gold-glow" : "bg-white/5 text-gold-400 border border-white/10"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-slate-300 space-y-4">
                    {/* Concise Direct Answer for quick comprehension & AI retrieval */}
                    <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-slate-200 font-medium leading-relaxed">
                      <strong className="text-gold-300 font-bold block mb-1 text-xs uppercase tracking-wide">
                        Direct Answer:
                      </strong>
                      {faq.shortAnswer}
                    </div>

                    {/* Detailed Context */}
                    <p className="leading-relaxed text-slate-300 font-normal">
                      {faq.detailedAnswer}
                    </p>

                    {/* Institutional source citation note */}
                    <div className="text-[11px] text-slate-400 italic pt-2 border-t border-white/10 flex items-center justify-between">
                      <span>* {faq.officialSourceNote}</span>
                      <a 
                        href="https://licindia.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gold-400 hover:text-gold-300 hover:underline inline-flex items-center gap-1 font-normal transition-colors"
                      >
                        <span>Official LIC source</span>
                        <ExternalLink className="w-3 h-3 text-gold-400" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ Hub if limited */}
        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-gold-400/40 rounded-xl transition-all shadow-sm"
            >
              <span>Explore All 20+ Questions in Knowledge Hub</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
