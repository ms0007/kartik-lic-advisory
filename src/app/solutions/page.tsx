"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { SolutionsExplorer } from "@/components/home/SolutionsExplorer";
import { ConsultationModal } from "@/components/lead/ConsultationModal";
import { ChevronRight, ShieldCheck, ExternalLink, HelpCircle } from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [planToDiscuss, setPlanToDiscuss] = useState<string>("LIC Solutions");

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Plans & Solutions", item: "/solutions" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header onOpenConsultation={() => setModalOpen(true)} />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-slate-100/70 border-b border-slate-200 py-2 px-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Plans & Solutions</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Verified Policy Portfolio
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              LIC Insurance Plans & Strategic Solutions
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Explore officially verified individual life insurance plans from the Life Insurance Corporation of India. Every plan listed includes verified Table Numbers and UINs.
            </p>
          </div>
        </section>

        {/* Regulatory Advisory Note */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
          <div className="bg-white border border-slate-200 shadow-md rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0" />
              <span>
                All specifications on this portal are verified against official records at <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-blue-900 font-semibold underline">licindia.in</a>. No speculative bonus promises or misleading returns.
              </span>
            </div>
            <a
              href="https://licindia.in"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-blue-900 font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Official LIC Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Full Interactive Explorer Component */}
        <SolutionsExplorer 
          onOpenConsultationWithPlan={(planName) => {
            setPlanToDiscuss(planName);
            setModalOpen(true);
          }} 
        />

        {/* How to Choose the Right Solution */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                How Should You Choose Between Plans?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                A structured four-step methodology to select the right policy for your family's circumstance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm">Step 1: Determine Primary Purpose</span>
                <p>Are you looking for catastrophic risk replacement (pure term) or disciplined capital accumulation with whole-life benefits (endowment/pension)?</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm">Step 2: Calculate Sum Assured Need</span>
                <p>Never pick an arbitrary number. Use our Human Life Value calculator to establish the exact income replacement required.</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm">Step 3: Evaluate Premium Paying Term</span>
                <p>Choose between regular premium payments or limited periods (e.g. paying for 10 or 15 years to match peak earning years).</p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-1.5">
                <span className="font-bold text-blue-900 text-sm">Step 4: Review Underwriting & Riders</span>
                <p>Ensure medical disclosures are 100% accurate, and add necessary Accidental Disability or Premium Waiver riders.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar onOpenConsultation={() => setModalOpen(true)} />
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest={planToDiscuss}
      />
    </>
  );
}
