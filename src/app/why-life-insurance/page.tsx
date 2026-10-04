import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhyInsuranceCards } from "@/components/home/WhyInsuranceCards";
import { HowInsuranceWorksVisual } from "@/components/home/HowInsuranceWorksVisual";
import { EmotionalStorySection } from "@/components/home/EmotionalStorySection";
import { ShieldCheck, ArrowRight, CheckCircle2, ChevronRight, Calculator } from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Why Life Insurance Matters | Income, Goals & Family Protection",
  description: "Understand the true economic purpose of life insurance: income replacement, loan protection, child milestones, and lifelong family security.",
  alternates: {
    canonical: `${SITE_URL}/why-life-insurance`,
  },
};

export default function WhyLifeInsurancePage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Why Life Insurance", item: "/why-life-insurance" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb Bar */}
        <div className="bg-slate-100/70 border-b border-slate-200 py-2 px-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Why Life Insurance</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Foundational Financial Education
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Why Life Insurance is the Bedrock of Family Security
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Every financial goal—from your children’s university degree to your family home—depends on your continued ability to generate an income. Life insurance guarantees that vision.
            </p>
          </div>
        </section>

        {/* Deep Dive Narrative Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
            
            {/* Section 1: The Breadwinner Equation */}
            <div id="income-protection" className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                1. The Breadwinner's Economic Equation
              </h2>
              <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-950 font-medium leading-relaxed">
                <strong>Quick Summary:</strong> Your greatest financial asset is your future lifetime earning ability. If you earn ₹15 Lakhs a year at age 30, your family relies on over ₹4.5 Crores of future income to sustain their life.
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When life proceeds normally, this income arrives predictably every month. It pays for your apartment EMI, purchases groceries, pays electricity and fuel bills, and funds weekend family vacations. But if that income stream terminates unexpectedly, everyday costs do not decrease proportionally.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Pure term life insurance (like LIC's Yuva Term or Digi Term) creates an instant financial reservoir equal to that missing future earning power. The capital ensures that the surviving spouse does not have to sell the family home, compromise children's education, or depend on charity.
              </p>
            </div>

            {/* Section 2: Long-Term Goals */}
            <div id="long-term-goals" className="space-y-4 pt-6 border-t border-slate-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                2. Protecting Long-Term Family Milestones
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Unlike purely market-linked investments (such as stocks or mutual fund SIPs) that stop immediately if contributions cease upon the investor's demise, specialized LIC plans like <strong>LIC's Jeevan Lakshya</strong> feature a built-in safety mechanism:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-blue-900 block">Premium Waiver</span>
                  <p className="text-slate-600">All remaining future premium dues are fully waived by LIC.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-blue-900 block">Annual Income</span>
                  <p className="text-slate-600">10% of Basic Sum Assured is paid each year for school tuition.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="font-bold text-blue-900 block">100% Maturity</span>
                  <p className="text-slate-600">Full maturity corpus + bonuses are paid on the scheduled date.</p>
                </div>
              </div>
            </div>

            {/* Section 3: Liabilities */}
            <div id="liabilities" className="space-y-4 pt-6 border-t border-slate-200">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                3. Insulation from Unforgiving Debt Obligations
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When a family takes a ₹50 Lakh or ₹1 Crore home loan, the financial obligation spans 15 to 20 years. In the unfortunate event of the borrower's passing, the lending bank will still expect monthly EMI payments. Without dedicated life cover, surviving family members face foreclosure notices or forced distress sales. An adequate life cover allows the family to repay the lender immediately and own the property free and clear.
              </p>
            </div>

          </div>
        </section>

        {/* Visual Flow Component */}
        <HowInsuranceWorksVisual />

        {/* 6 Core Cards */}
        <WhyInsuranceCards />

        {/* Core Emotional Section */}
        <EmotionalStorySection />

        {/* CTA to Calculator */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4 space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Ready to Discover Your Exact Protection Number?
            </h2>
            <p className="text-sm text-slate-300">
              Use our interactive educational calculator to compute your family's financial protection gap in less than 60 seconds.
            </p>
            <div className="pt-2">
              <Link
                href="/insurance-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg transition-all"
              >
                <Calculator className="w-4 h-4" />
                <span>Open Protection Need Calculator</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
