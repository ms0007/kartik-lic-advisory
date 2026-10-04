"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { ProtectionCalculator } from "@/components/calculator/ProtectionCalculator";
import { ConsultationModal } from "@/components/lead/ConsultationModal";
import { ChevronRight, Calculator, Info, ShieldCheck } from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export default function InsuranceCalculatorPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Insurance Need Calculator", item: "/insurance-calculator" }
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
            <span className="font-semibold text-slate-800">Protection Need Calculator</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Interactive Planning Tool
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Human Life Value & Protection Need Calculator
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Find out your family's realistic financial protection gap based on household living expenses, outstanding mortgage debt, and future children's goals.
            </p>
          </div>
        </section>

        {/* Calculator Engine Component */}
        <section className="py-12 bg-slate-100/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProtectionCalculator onOpenConsultation={() => setModalOpen(true)} />
          </div>
        </section>

        {/* Educational Explainer on How the Math Works */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Understanding the Human Life Value (HLV) Method
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                How certified financial advisors calculate adequate life insurance protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-blue-900 text-sm block">1. Sustenance Capital</span>
                <p>
                  Multiplies your current monthly household expenses by 15 to 20 years to account for inflation-adjusted living expenses until your youngest dependent becomes financially self-reliant.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-blue-900 text-sm block">2. Debt Liquidation</span>
                <p>
                  Adds 100% of all outstanding home loans, auto loans, and personal borrowings so nominees can clear all bank claims immediately upon payout.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-blue-900 text-sm block">3. Milestone Security</span>
                <p>
                  Incorporates inflation-adjusted future higher education and career capital for minor children, while subtracting existing life cover and liquid savings.
                </p>
              </div>
            </div>

            {/* Clear Educational Labeling */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 space-y-1">
              <p className="font-bold flex items-center gap-1.5 text-blue-900">
                <Info className="w-4 h-4 text-blue-800" />
                <span>Important Regulatory Clarification:</span>
              </p>
              <p>
                This calculator is an educational estimation tool provided for financial awareness. It is <strong>NOT an official LIC premium calculator</strong> and does not constitute formal financial underwriting or an insurance offer. Policy issuance, premiums, and underwriting acceptance are governed solely by official LIC rules and medical schedules.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar onOpenConsultation={() => setModalOpen(true)} />
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest="Calculator Protection Gap Consultation"
      />
    </>
  );
}
