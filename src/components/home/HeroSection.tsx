"use client";

import React from "react";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { 
  ShieldCheck, 
  ChevronRight, 
  Calculator, 
  Phone, 
  MessageSquare, 
  User, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";

import { useLanguage } from "@/lib/LanguageContext";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onScrollToCalculator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onScrollToCalculator
}) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle geometric background accents */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#d49e24_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-600/50 text-xs font-semibold text-amber-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>{t.hero.trustPill}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {t.hero.titleStart}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400 block sm:inline">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Key Assurance Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.zeroPressure}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.verifiedTerms}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.hero.transparentGap}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent("contact_click", { location: "hero_primary" });
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent("calculator_started", { location: "hero_secondary" });
                  onScrollToCalculator();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-blue-800/80 hover:bg-blue-700/80 border border-blue-600/60 rounded-xl transition-all"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Direct Instant Contact Channels */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <span>Prefer instant direct contact?</span>
              <a 
                href={`tel:+91${advisorData.phone}`}
                onClick={() => trackEvent("call_click", { location: "hero_quick" })}
                className="text-amber-300 hover:underline font-semibold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> Call {advisorData.displayPhone}
              </a>
              <span>or</span>
              <a 
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero_quick" })}
                className="text-emerald-400 hover:underline font-semibold flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" /> Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Officer Profile Card with strict Placeholder Integrity */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-900 to-blue-950 border border-blue-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
              
              {/* Officer Badge */}
              <div className="flex items-center justify-between mb-6 border-b border-blue-800/60 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    Institutional Representation
                  </span>
                  <p className="text-xs text-slate-300">Life Insurance Corporation of India</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-900 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
              </div>

              {/* Portrait Placeholder Container adhering strictly to rule */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-blue-950/90 border border-dashed border-blue-600/70 flex flex-col items-center justify-center p-6 text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-900/80 border border-blue-600 flex items-center justify-center text-blue-300 mb-3 shadow-inner">
                  <User className="w-8 h-8" />
                </div>
                <span className="text-xs font-semibold text-amber-300 uppercase tracking-wide">
                  [OFFICIAL PORTRAIT OF KARTIK BARMERA]
                </span>
                <p className="text-[11px] text-slate-400 mt-1 max-w-xs">
                  Development Officer • LIC of India
                </p>
                <span className="text-[10px] text-slate-500 mt-1">
                  (Professional photograph to be updated upon client provision)
                </span>
              </div>

              {/* Identity & Mission Snippet */}
              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Kartik Barmera
                  </h3>
                  <span className="text-xs font-semibold text-amber-400">
                    Development Officer
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  "Insurance decisions are deeply personal. My objective is to help you thoroughly understand your coverage options and family needs before you make any commitment."
                </p>

                <div className="pt-3 border-t border-blue-900/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Market: India</span>
                  <a 
                    href="https://licindia.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Official LIC Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
