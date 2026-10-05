"use client";

import React, { useState, useRef } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { EmotionalStorySection } from "@/components/home/EmotionalStorySection";
import { WhyInsuranceCards } from "@/components/home/WhyInsuranceCards";
import { HowInsuranceWorksVisual } from "@/components/home/HowInsuranceWorksVisual";
import { ProtectionNeedsInteractive } from "@/components/home/ProtectionNeedsInteractive";
import { SolutionsExplorer } from "@/components/home/SolutionsExplorer";
import { RidersSection } from "@/components/home/RidersSection";
import { ScenariosSection } from "@/components/home/ScenariosSection";
import { AboutKartikSection } from "@/components/home/AboutKartikSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ProtectionCalculator } from "@/components/calculator/ProtectionCalculator";
import { ConsultationModal } from "@/components/lead/ConsultationModal";
import { ConsultationWizard } from "@/components/lead/ConsultationWizard";
import { SmartPlanFinder } from "@/components/home/SmartPlanFinder";
import { ShieldCheck, Phone, MessageSquare, HeartHandshake, UserCheck } from "lucide-react";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalInterest, setModalInterest] = useState<string>("Family Protection");

  const calculatorRef = useRef<HTMLDivElement>(null);
  const consultationSectionRef = useRef<HTMLDivElement>(null);

  const openConsultation = (interest?: string) => {
    if (interest) setModalInterest(interest);
    setModalOpen(true);
  };

  const scrollToCalculator = () => {
    calculatorRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToConsultation = () => {
    consultationSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Header */}
      <Header onOpenConsultation={() => openConsultation()} />

      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenConsultation={() => openConsultation()}
          onScrollToCalculator={scrollToCalculator}
        />

        {/* 2. Trust Bar */}
        <TrustBar />

        {/* 3. Core Emotional Section */}
        <EmotionalStorySection />

        {/* 4. Why Life Insurance? */}
        <WhyInsuranceCards />

        {/* 5. Life Insurance Explained Simply */}
        <HowInsuranceWorksVisual />

        {/* 6. Protection Needs Interactive */}
        <ProtectionNeedsInteractive
          onSelectNeed={(needTitle) => openConsultation(`Planning for: ${needTitle}`)}
        />

        {/* 7. Smart Plan Finder (Decision Support) */}
        <SmartPlanFinder
          onOpenConsultationWithPlan={(planName) => openConsultation(planName)}
        />

        {/* 8. Insurance Need Calculator */}
        <section ref={calculatorRef} id="calculator" className="py-20 bg-[#030919] border-b border-white/10 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProtectionCalculator onOpenConsultation={() => openConsultation("Calculator Protection Gap Review")} />
          </div>
        </section>

        {/* 8. Policy & Solutions Explorer */}
        <SolutionsExplorer
          onOpenConsultationWithPlan={(planName) => openConsultation(planName)}
        />

        {/* 9. Riders Section */}
        <RidersSection
          onOpenConsultationWithRider={(riderName) => openConsultation(riderName)}
        />

        {/* 10. Real-Life Scenarios */}
        <ScenariosSection
          onOpenConsultationWithScenario={(scenarioTitle) => openConsultation(scenarioTitle)}
        />

        {/* 11. About Kartik Barmera Section */}
        <AboutKartikSection onOpenConsultation={() => openConsultation()} />

        {/* 12. FAQ Section */}
        <FAQSection limit={8} />

        {/* 13. Dedicated On-Page Consultation Booking Section */}
        <section 
          ref={consultationSectionRef} 
          id="consultation" 
          className="py-20 bg-[#020614] border-t border-white/10 relative overflow-hidden scroll-mt-24"
        >
          {/* Ambient Lighting Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-300 bg-gold-500/10 border border-gold-500/30 px-3.5 py-1 rounded-full">
                Step-by-Step Confidential Request
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Get a Personalised Advisory Consultation
              </h2>
              <p className="text-base text-slate-300 leading-relaxed">
                Take one minute to outline your circumstances. Kartik Barmera will review your details and connect with structured, objective guidance.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <ConsultationWizard initialInterest="Family Protection" />
            </div>

            {/* Quick Contact Alternatives */}
            <div className="mt-10 text-center text-xs text-slate-400 space-y-2">
              <p className="text-slate-300">Prefer direct conversation? You can also reach out immediately:</p>
              <div className="flex items-center justify-center gap-6 font-semibold">
                <a 
                  href={`tel:+91${advisorData.phone}`}
                  className="text-gold-300 hover:text-gold-200 hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call {advisorData.displayPhone}</span>
                </a>
                <span className="text-slate-600">•</span>
                <a 
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 hover:underline flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky CTA Bar */}
      <MobileStickyBar onOpenConsultation={() => openConsultation()} />

      {/* Modal Dialog */}
      <ConsultationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialInterest={modalInterest}
      />
    </>
  );
}
