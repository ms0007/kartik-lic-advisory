"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { RidersSection } from "@/components/home/RidersSection";
import { ConsultationModal } from "@/components/lead/ConsultationModal";
import { ChevronRight, ShieldAlert, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export default function RidersPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState<string>("LIC Riders");

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Riders & Add-ons", item: "/riders" }
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
        <div className="bg-[#060e1d] border-b border-white/10 py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-gold-300 text-slate-400">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-gold-300">Riders & Add-ons</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Targeted Policy Customization
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Official LIC Policy Riders Demystified
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Understand how optional riders enhance your base insurance policy. Learn when to attach accidental disability, critical illness, or premium waiver benefits.
            </p>
          </div>
        </section>

        {/* Important Regulatory Disclaimer */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 space-y-1.5">
            <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-amber-800">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Mandatory Regulatory Notice:</span>
            </div>
            <p className="leading-relaxed">
              Riders are optional/additional benefits available upon payment of additional premium. They are NOT automatically included in every policy. Attachment is strictly subject to base plan eligibility, maximum sum assured caps, age boundaries, and underwriting approval by LIC of India.
            </p>
          </div>
        </div>

        {/* Interactive Riders Explorer Component */}
        <RidersSection 
          onOpenConsultationWithRider={(riderName) => {
            setModalInterest(riderName);
            setModalOpen(true);
          }} 
        />

        {/* Deep Dive: Common Rider Questions */}
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 text-center">
              Frequently Asked Questions About LIC Riders
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Can I attach a rider after the policy has already commenced?
                </h3>
                <p className="leading-relaxed">
                  Most riders (such as the Accidental Death and Disability Benefit Rider) can generally be attached on any subsequent policy anniversary, provided the policy is in full force and the policyholder satisfies age and medical criteria. However, riders like the Premium Waiver Benefit Rider are best attached at inception.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  What is the difference between Accident Benefit and Accidental Death & Disability?
                </h3>
                <p className="leading-relaxed">
                  The standalone <strong>Accident Benefit Rider (UIN: 512B203V03)</strong> only pays out upon accidental death. In contrast, <strong>LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02)</strong> pays for accidental death AND provides a 10-year monthly income replacement with premium waiver if the policyholder suffers total permanent disability from an accident.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">
                  Why is the Premium Waiver Benefit (PWB) crucial for child policies?
                </h3>
                <p className="leading-relaxed">
                  Without PWB, if the parent (proposer) passes away, the surviving family members must somehow continue paying annual premiums to prevent the child's policy from lapsing. With PWB, LIC waives 100% of all future premiums while ensuring the child receives the full guaranteed maturity sum on schedule.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => {
                  setModalInterest("Rider Suitability Assessment");
                  setModalOpen(true);
                }}
                className="py-3 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Request a Personal Rider Suitability Review</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyBar onOpenConsultation={() => setModalOpen(true)} />
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest={modalInterest}
      />
    </>
  );
}
