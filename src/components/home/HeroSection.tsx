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
  ExternalLink,
  Award,
  Sparkles
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
    <section className="relative overflow-hidden bg-[#030816] text-white pt-14 pb-24 lg:pt-24 lg:pb-32">
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-lic-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle Micro-Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#fae9b5_1px,transparent_1px)] [background-size:28px_28px]" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & High-Converting CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Live Trust & Designation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-gold-500/30 backdrop-blur-xl shadow-sm max-w-full">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span className="text-[11px] sm:text-xs font-bold tracking-wide text-gold-300 truncate">
                {t.hero.trustPill}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
              {t.hero.titleStart}{" "}
              <span className="block mt-1 sm:inline text-gold-300 drop-shadow-sm">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* High-Contrast Supporting Subtitle */}
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {t.hero.subtitle}
            </p>

            {/* 3 Strategic Assurance Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs">
              <div className="flex items-center justify-center lg:justify-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-200 font-semibold">{t.hero.zeroPressure}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-200 font-semibold">{t.hero.verifiedTerms}</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-slate-200 font-semibold">{t.hero.transparentGap}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent("contact_click", { location: "hero_primary" });
                  onOpenConsultation();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                type="button"
                onClick={() => {
                  trackEvent("calculator_started", { location: "hero_secondary" });
                  onScrollToCalculator();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-bold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-gold-400/40 rounded-xl backdrop-blur-xl transition-all"
              >
                <Calculator className="w-4 h-4 text-gold-400" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            {/* Direct Instant Contact Channels */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <span className="font-medium text-slate-400">Instant Advisory Desk:</span>
              <a 
                href={`tel:+91${advisorData.phone}`}
                onClick={() => trackEvent("call_click", { location: "hero_quick" })}
                className="text-gold-300 hover:text-gold-200 font-bold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Call {advisorData.displayPhone}</span>
              </a>
              <span className="text-slate-600">•</span>
              <a 
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("whatsapp_click", { location: "hero_quick" })}
                className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Executive Officer Credentials Dossier Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-[#0c1833]/90 to-[#060e22]/95 border border-gold-500/30 rounded-3xl p-7 sm:p-8 shadow-2xl backdrop-blur-2xl">
              
              {/* Top Accent Rim Light */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

              {/* Officer Badge Header */}
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    LIC Advisory Office
                  </span>
                  <p className="text-xs text-slate-300 font-medium mt-0.5">Life Insurance Corporation of India</p>
                </div>
                <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/40 flex items-center justify-center text-gold-400 shadow-sm">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              {/* Refined Dignified Executive Portrait Presentation */}
              <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-b from-[#0e1d3f] to-[#081229] border border-gold-500/20 flex flex-col items-center justify-center p-6 text-center mb-6 overflow-hidden group">
                {/* Subtle Radial Glow inside portrait box */}
                <div className="absolute inset-0 bg-radial-gradient from-gold-500/10 via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-gold-600 via-amber-400 to-gold-300 p-0.5 mb-3 shadow-gold-glow">
                  <div className="w-full h-full rounded-full bg-[#07132b] flex items-center justify-center text-gold-300">
                    <User className="w-10 h-10" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-bold text-emerald-300 mb-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                  </span>
                  <span>Active Consultation Desk</span>
                </div>

                <span className="text-xs font-bold text-gold-200 tracking-wide uppercase">
                  [OFFICIAL PORTRAIT OF KARTIK BARMERA]
                </span>
                <span className="text-[11px] text-slate-400 mt-0.5 font-medium">
                  Development Officer • LIC of India
                </span>
                <span className="text-[10px] text-slate-500 mt-1 italic">
                  (Professional officer photo will be updated here)
                </span>
              </div>

              {/* Officer Details & Mission */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-white/5 pb-3">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight">
                      Kartik Barmera
                    </h3>
                    <p className="text-xs font-semibold text-gold-400">
                      Development Officer • Advisory Specialist
                    </p>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono">
                    ID: DO-LIC
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  "Life insurance is not a product to be sold under pressure. It is an economic foundation that guarantees your family's dignity and future goals remain intact."
                </p>

                {/* Direct Action Chips on Card */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <a
                    href={`tel:+91${advisorData.phone}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-bold text-slate-200 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>Call Officer</span>
                  </a>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 text-xs font-bold text-emerald-300 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Statutory Reference Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Authorized Market: India</span>
                  <a 
                    href="https://licindia.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gold-300 hover:text-gold-200 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>Official LIC Portal</span>
                    <ExternalLink className="w-3 h-3 text-gold-400" />
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
