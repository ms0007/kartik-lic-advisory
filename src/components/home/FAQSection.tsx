"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqsData, FAQItem } from "@/data/faqs";
import { trackEvent } from "@/lib/analytics";
import { ChevronDown, HelpCircle, ArrowRight, ExternalLink } from "lucide-react";

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
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
            Clear, Source-Backed Answers
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Straightforward explanations regarding life insurance, premium terms, riders, and claims without technical obfuscation.
          </p>
        </div>

        {/* Category Filter Pills if enabled */}
        {showCategories && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCategory(c.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === c.id
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {displayFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id, faq.question)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-blue-900 text-white" : "text-slate-600"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 bg-slate-50/70 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-3">
                    {/* Concise Direct Answer for quick comprehension & AI retrieval */}
                    <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 text-slate-800 font-medium leading-relaxed">
                      <strong className="text-blue-950 font-bold block mb-1 text-xs uppercase tracking-wide">
                        Direct Answer:
                      </strong>
                      {faq.shortAnswer}
                    </div>

                    {/* Detailed Context */}
                    <p className="leading-relaxed">
                      {faq.detailedAnswer}
                    </p>

                    {/* Institutional source citation note */}
                    <div className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-200 flex items-center justify-between">
                      <span>* {faq.officialSourceNote}</span>
                      <a 
                        href="https://licindia.in" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-800 hover:underline inline-flex items-center gap-1 font-normal"
                      >
                        <span>Official LIC source</span>
                        <ExternalLink className="w-3 h-3" />
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
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-xl transition-colors"
            >
              <span>Explore All 20+ Questions in Knowledge Hub</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};
