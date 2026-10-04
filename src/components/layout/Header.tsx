"use client";

import React, { useState } from "react";
import Link from "next/link";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { useLanguage } from "@/lib/LanguageContext";
import { 
  ShieldCheck, 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight, 
  ExternalLink,
  Languages,
  Scale,
  HeartHandshake
} from "lucide-react";

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handlePhoneClick = () => {
    trackEvent("call_click", { location: "header" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "header" });
  };

  const handleConsultationClick = () => {
    trackEvent("contact_click", { location: "header_cta" });
    if (onOpenConsultation) {
      onOpenConsultation();
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
    trackEvent("policy_resource_viewed", { language_toggled: nextLang });
  };

  return (
    <>
      {/* Accessible Skip to Content Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-slate-950 focus:font-bold focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Institutional & Regulatory Disclaimer Ribbon */}
      <div className="bg-[#030814] text-slate-300 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 font-medium tracking-wide">{t.common.disclaimerRibbon}</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a 
              href="https://licindia.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-gold-300/80 hover:text-gold-200 transition-colors font-medium"
            >
              {t.common.verifyLic} <ExternalLink className="w-3 h-3 text-gold-400" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-white/10 text-xs font-bold text-gold-300 border border-gold-500/30 backdrop-blur-md transition-all shadow-sm"
              aria-label={`Switch language to ${language === 'en' ? 'Hindi' : 'English'}`}
            >
              <Languages className="w-3.5 h-3.5 text-gold-400" />
              <span>{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            <a 
              href={`tel:+91${advisorData.phone}`} 
              onClick={handlePhoneClick}
              className="text-gold-400 hover:text-gold-300 font-bold flex items-center gap-1.5 tracking-wide text-xs sm:text-sm transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>{advisorData.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header with Luxury Glassmorphism */}
      <header className="sticky top-0 z-40 bg-[#060e1d]/90 backdrop-blur-xl border-b border-white/10 shadow-glass-dark transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo & Officer Details */}
            <Link 
              href="/" 
              className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-xl p-1"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gold-500 to-amber-300 opacity-30 blur group-hover:opacity-75 transition duration-300" />
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-lic-900 via-lic-950 to-[#030712] border border-gold-500/40 text-gold-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-gold-400" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-none group-hover:text-gold-300 transition-colors">
                  Kartik Barmera
                </span>
                <span className="text-xs font-semibold text-gold-400/90 tracking-wide mt-1.5 flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Development Officer, LIC of India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6 text-xs lg:text-[13px] font-semibold text-slate-200">
              <Link href="/" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.home}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/why-life-insurance" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.whyInsurance}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/solutions" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.solutions}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/compare" className="text-gold-300 hover:text-gold-200 transition-colors py-1.5 flex items-center gap-1 relative group">
                <Scale className="w-3.5 h-3.5 text-gold-400" />
                <span>{t.nav.compare}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-400"></span>
              </Link>
              <Link href="/riders" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.riders}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/insurance-calculator" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.calculator}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/claims-guide" className="text-emerald-300 hover:text-emerald-200 transition-colors py-1.5 flex items-center gap-1 relative group">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.nav.claimsGuide}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/resources" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.resources}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.about}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/faq" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.faq}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="hover:text-gold-300 transition-colors py-1.5 relative group">
                {t.nav.contact}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                className="xl:hidden inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/15 text-xs font-bold text-slate-200 hover:bg-white/10 transition-colors"
              >
                <Languages className="w-3.5 h-3.5 text-gold-400" />
                <span>{language === "en" ? "हिन्दी" : "EN"}</span>
              </button>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-bold text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-500/40 rounded-xl backdrop-blur-md transition-all shadow-sm hover:shadow"
                title="Direct WhatsApp with Kartik Barmera"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.nav.whatsapp}</span>
              </a>
              <button
                type="button"
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>{t.nav.consultationCTA}</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="p-2 text-xs font-bold rounded-lg border border-white/20 text-gold-300 bg-white/5"
                aria-label="Toggle language"
              >
                {language === "en" ? "हिन्दी" : "EN"}
              </button>
              <a
                href={`tel:+91${advisorData.phone}`}
                onClick={handlePhoneClick}
                className="p-2.5 text-gold-400 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-200 hover:text-white bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Luxury Dark Styling */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-white/10 bg-[#060e1d]/98 backdrop-blur-2xl px-5 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2 font-medium text-slate-200 text-base">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/why-life-insurance" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.whyInsurance}
              </Link>
              <Link 
                href="/solutions" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.solutions}
              </Link>
              <Link 
                href="/compare" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-300 font-semibold transition-colors flex items-center gap-2"
              >
                <Scale className="w-4 h-4 text-gold-400" />
                <span>{t.nav.compare}</span>
              </Link>
              <Link 
                href="/riders" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.riders}
              </Link>
              <Link 
                href="/insurance-calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.calculator}
              </Link>
              <Link 
                href="/claims-guide" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 font-semibold transition-colors flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-400" />
                <span>{t.nav.claimsGuide}</span>
              </Link>
              <Link 
                href="/resources" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.resources}
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link 
                href="/faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.faq}
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl hover:bg-white/5 hover:text-gold-300 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleConsultationClick();
                }}
                className="w-full py-3.5 text-center text-sm font-extrabold uppercase tracking-wider rounded-xl bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-slate-950 shadow-gold-glow"
              >
                {t.nav.consultationCTA}
              </button>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full py-3 text-center text-sm font-bold rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center gap-2 shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{language === "hi" ? "व्हाट्सएप पर बात करें" : "Chat on WhatsApp Directly"}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
