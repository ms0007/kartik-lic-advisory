"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { PlanComparisonModal } from "@/components/solutions/PlanComparisonModal";
import { ConsultationModal } from "@/components/lead/ConsultationModal";
import { productsData } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ChevronRight, Scale, ShieldCheck, Check, MessageSquare, UserCheck, ExternalLink } from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export default function ComparePage() {
  const [selectedPlanIds, setSelectedPlanIds] = useState<string[]>([
    "yuva-term",
    "new-jeevan-anand",
    "jeevan-labh"
  ]);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedPlanForConsultation, setSelectedPlanForConsultation] = useState("Plan Comparison");

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Compare Plans", item: "/compare" }
  ]);

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

  const selectedPlans = productsData.filter((p) => selectedPlanIds.includes(p.id));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header onOpenConsultation={() => setConsultationModalOpen(true)} />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-[#060e1d] border-b border-white/10 py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-gold-300 text-slate-400">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-gold-300">Compare Plans</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Interactive Policy Comparison
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Compare LIC Insurance Plans Side-by-Side
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Objective, transparent comparison of pure term cover, savings endowments, and lifelong whole-life plans. Verify IRDAI UINs, premium options, and payout mechanisms.
            </p>
          </div>
        </section>

        {/* Plan Selectors Section */}
        <section className="py-10 bg-[#030816] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#071329] rounded-2xl p-6 border border-white/10 shadow-card-elevated space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Select 2 or 3 Plans to Compare:
                </span>
                <span className="text-xs text-gold-400/70 font-medium">
                  Currently comparing: {selectedPlans.length} of 3 maximum
                </span>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {productsData.map((prod) => {
                  const isSelected = selectedPlanIds.includes(prod.id);
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => togglePlan(prod.id)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                        isSelected
                          ? "bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 shadow-gold-glow ring-1 ring-gold-300"
                          : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-950" />}
                      <span>{prod.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className="py-12 bg-[#020610]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-[#071329] text-white border-b border-gold-500/20">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider w-56">Comparison Factor</th>
                    {selectedPlans.map((p) => (
                      <th key={p.id} className="p-4 text-xs">
                        <div className="font-serif text-lg font-bold text-amber-300">
                          {p.name}
                        </div>
                        <div className="text-[11px] text-blue-200 font-mono mt-0.5">
                          Table {p.tableNo} • UIN: {p.uin}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-xs text-slate-300">
                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">Plan Class</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 bg-[#060e1d]">
                        <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase bg-gold-400/10 text-gold-300 border border-gold-400/30">
                          {p.categoryLabel}
                        </span>
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">High-Level Objective</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 leading-relaxed bg-[#060e1d] text-slate-200">{p.highLevelPurpose}</td>
                    ))}
                  </tr>

                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">Best Suited For</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 leading-relaxed bg-[#060e1d] text-slate-200">{p.targetAudience}</td>
                    ))}
                  </tr>

                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">Survival / Maturity Benefit</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 leading-relaxed bg-[#060e1d]">
                        {p.category === "protection" ? (
                          <span className="text-slate-400 italic">Pure risk cover; no survival payout.</span>
                        ) : p.id === "jeevan-umang" ? (
                          <span className="font-semibold text-emerald-400">8% of BSA paid annually for life after PPT until age 99, plus maturity lump sum at 100.</span>
                        ) : p.id === "jeevan-utsav" ? (
                          <span className="font-semibold text-emerald-400">10% guaranteed income benefit or flexi income compound interest.</span>
                        ) : (
                          <span className="text-slate-200">Basic Sum Assured + Accrued Reversionary Bonuses + Final Additional Bonus.</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">Death Benefit Mechanism</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 leading-relaxed bg-[#060e1d] text-slate-200">
                        {p.category === "protection"
                          ? "100% of Sum Assured paid as lump-sum or structured monthly installments."
                          : "Sum Assured on Death plus accrued bonuses / guaranteed additions."}
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">Policy Loan Liquidity</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 bg-[#060e1d] text-slate-200">
                        {p.category === "protection" ? "No loan facility (Term Plan)" : "Available after 2 consecutive years of paid premiums."}
                      </td>
                    ))}
                  </tr>

                  <tr className="hover:bg-white/[0.03] transition-colors">
                    <td className="p-4 font-bold text-white bg-[#0b1c3a]">Actions</td>
                    {selectedPlans.map((p) => (
                      <td key={p.id} className="p-4 space-y-2 bg-[#060e1d]">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedPlanForConsultation(p.name);
                            setConsultationModalOpen(true);
                          }}
                          className="w-full py-2.5 px-3 rounded-xl text-xs font-extrabold text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-gold-glow flex items-center justify-center gap-1.5"
                        >
                          <UserCheck className="w-3.5 h-3.5" />
                          <span>Request Illustration</span>
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Verification Disclaimer */}
            <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 text-center">
              * Please verify official policy documents and current bonus tables at <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-gold-300 underline font-semibold hover:text-gold-200">https://licindia.in</a>. All plan parameters are subject to formal underwriting.
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar onOpenConsultation={() => setConsultationModalOpen(true)} />
      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        initialInterest={selectedPlanForConsultation}
      />
    </>
  );
}
