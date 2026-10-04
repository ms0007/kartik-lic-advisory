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
        <section ref={calculatorRef} id="calculator" className="py-20 bg-slate-100/70 border-b border-slate-200">
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
          className="py-20 bg-gradient-to-b from-white to-blue-50/50 border-t border-slate-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-3 py-1 rounded-full">
                Step-by-Step Confidential Request
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                Get a Personalised Advisory Consultation
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Take one minute to outline your circumstances. Kartik Barmera will review your details and connect with structured, objective guidance.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <ConsultationWizard initialInterest="Family Protection" />
            </div>

            {/* Quick Contact Alternatives */}
            <div className="mt-12 text-center text-xs text-slate-500 space-y-2">
              <p>Prefer direct conversation? You can also reach out immediately:</p>
              <div className="flex items-center justify-center gap-6 font-semibold">
                <a 
                  href={`tel:+91${advisorData.phone}`}
                  className="text-blue-900 hover:underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {advisorData.displayPhone}</span>
                </a>
                <span>•</span>
                <a 
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:underline flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
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
