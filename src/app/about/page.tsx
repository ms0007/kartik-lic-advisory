"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { AboutKartikSection } from "@/components/home/AboutKartikSection";
import { ConsultationModal } from "@/components/lead/ConsultationModal";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { 
  ChevronRight, 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  HeartHandshake, 
  ExternalLink,
  Award,
  CheckCircle2,
  Lock
} from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "About Kartik Barmera", item: "/about" }
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
            <span className="font-semibold text-gold-300">About Kartik Barmera</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Institutional Leadership
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              About Kartik Barmera
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Development Officer, Life Insurance Corporation of India (LIC of India). Dedicated to transparent, human-centered insurance guidance.
            </p>
          </div>
        </section>

        {/* Main Profile Component */}
        <AboutKartikSection onOpenConsultation={() => setModalOpen(true)} />

        {/* Core Principles & Transparency Pledge */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center space-y-2">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Our Advisory & Ethical Commitments
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                How we conduct our consultation practice with policyholders and families across India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-slate-700">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center mx-auto mb-2">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">1. Fact-First Transparency</h3>
                <p className="text-slate-600">
                  Every policy condition, exclusion, waiting period, and premium term is presented honestly. We never exaggerate bonuses or promise speculative financial returns.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center mx-auto mb-2">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">2. Objective Sizing</h3>
                <p className="text-slate-600">
                  We use mathematical Human Life Value models rather than arbitrary recommendations, ensuring your family is neither dangerously underinsured nor overburdened.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-center">
                <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-2">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">3. Zero High-Pressure Tactics</h3>
                <p className="text-slate-600">
                  We reject aggressive telemarketing and fake deadlines. Insurance is a multi-decade family commitment that deserves calm, thoughtful consideration.
                </p>
              </div>
            </div>

            {/* Official Legal & Institutional Boundaries */}
            <div className="p-5 rounded-2xl bg-slate-100 border border-slate-300/80 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-900 uppercase tracking-wide">
                Institutional & Brand Clarification:
              </h4>
              <p>
                This website is an independent professional advisory platform created and operated by Kartik Barmera in his capacity as a Development Officer with the Life Insurance Corporation of India (LIC of India).
              </p>
              <p>
                It is <strong>not the official corporate website of LIC of India</strong>. For official corporate disclosures, board governance, and statutory financial reports, please visit <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline font-semibold">https://licindia.in</a>.
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
        initialInterest="About Kartik - Advisory Consultation"
      />
    </>
  );
}
