import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FAQSection } from "@/components/home/FAQSection";
import { faqsData } from "@/data/faqs";
import { SITE_URL, getFAQPageSchema, getBreadcrumbSchema } from "@/lib/schema";
import { ChevronRight, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Knowledge Center & Frequently Asked Questions (FAQ) | LIC Advisory",
  description: "Comprehensive, source-backed answers to 20+ essential questions on life insurance, term plans, riders, premiums, and LIC claim procedures.",
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
};

export default function FAQPage() {
  const faqSchemaJsonLd = getFAQPageSchema(faqsData);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Knowledge Center (FAQ)", item: "/faq" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-[#060e1d] border-b border-white/10 py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-gold-300 text-slate-400">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-gold-300">Knowledge Center & FAQ</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Clear & Verified Answers
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Insurance Knowledge Center & FAQ
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Find transparent, source-backed answers to essential questions regarding life insurance policies, premiums, riders, and claim rules.
            </p>
          </div>
        </section>

        {/* FAQ Full Component (Uncapped, showing all 20+ questions) */}
        <div className="py-12 bg-[#020614]">
          <FAQSection limit={faqsData.length} showCategories={true} />
        </div>
      </main>

      <Footer />
    </>
  );
}
