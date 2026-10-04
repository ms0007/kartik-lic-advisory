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
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{t.common.disclaimerRibbon}</span>
            <span className="hidden md:inline text-slate-500">|</span>
            <a 
              href="https://licindia.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-slate-400 hover:text-amber-300 transition-colors"
            >
              {t.common.verifyLic} <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-amber-300 border border-slate-700 transition-colors"
              aria-label={`Switch language to ${language === 'en' ? 'Hindi' : 'English'}`}
            >
              <Languages className="w-3 h-3 text-amber-400" />
              <span>{language === "en" ? "हिन्दी" : "English"}</span>
            </button>

            <a 
              href={`tel:+91${advisorData.phone}`} 
              onClick={handlePhoneClick}
              className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>{advisorData.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand Logo & Officer Details */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-amber-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-none group-hover:text-blue-900 transition-colors">
                  Kartik Barmera
                </span>
                <span className="text-xs font-semibold text-blue-800 tracking-wide mt-1">
                  Development Officer, LIC of India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-5 text-xs lg:text-sm font-medium text-slate-700">
              <Link href="/" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.home}
              </Link>
              <Link href="/why-life-insurance" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.whyInsurance}
              </Link>
              <Link href="/solutions" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.solutions}
              </Link>
              <Link href="/compare" className="hover:text-blue-800 transition-colors py-1 font-semibold text-blue-900">
                {t.nav.compare}
              </Link>
              <Link href="/riders" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.riders}
              </Link>
              <Link href="/insurance-calculator" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.calculator}
              </Link>
              <Link href="/claims-guide" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.claimsGuide}
              </Link>
              <Link href="/resources" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.resources}
              </Link>
              <Link href="/about" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.about}
              </Link>
              <Link href="/faq" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.faq}
              </Link>
              <Link href="/contact" className="hover:text-blue-800 transition-colors py-1">
                {t.nav.contact}
              </Link>
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                type="button"
                onClick={toggleLanguage}
                className="xl:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50"
              >
                <Languages className="w-3.5 h-3.5" />
                <span>{language === "en" ? "हिन्दी" : "EN"}</span>
              </button>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors"
                title="Direct WhatsApp with Kartik Barmera"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.nav.whatsapp}</span>
              </a>
              <button
                type="button"
                onClick={handleConsultationClick}
                className="inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-sm hover:shadow transition-all"
              >
                <span>{t.nav.consultationCTA}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                type="button"
                onClick={toggleLanguage}
                className="p-1.5 text-xs font-bold rounded-lg border border-slate-200 text-blue-900 bg-slate-50"
                aria-label="Toggle language"
              >
                {language === "en" ? "हिन्दी" : "EN"}
              </button>
              <a
                href={`tel:+91${advisorData.phone}`}
                onClick={handlePhoneClick}
                className="p-2 text-blue-900 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-2.5 font-medium text-slate-800 text-base">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.home}
              </Link>
              <Link 
                href="/why-life-insurance" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.whyInsurance}
              </Link>
              <Link 
                href="/solutions" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.solutions}
              </Link>
              <Link 
                href="/compare" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-900 font-semibold transition-colors flex items-center gap-2"
              >
                <Scale className="w-4 h-4 text-blue-800" />
                <span>{t.nav.compare}</span>
              </Link>
              <Link 
                href="/riders" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.riders}
              </Link>
              <Link 
                href="/insurance-calculator" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.calculator}
              </Link>
              <Link 
                href="/claims-guide" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-emerald-50 text-emerald-950 font-semibold transition-colors flex items-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-emerald-700" />
                <span>{t.nav.claimsGuide}</span>
              </Link>
              <Link 
                href="/resources" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.resources}
              </Link>
              <Link 
                href="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.about}
              </Link>
              <Link 
                href="/faq" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.faq}
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {t.nav.contact}
              </Link>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleConsultationClick();
                }}
                className="w-full py-3 text-center text-sm font-semibold rounded-lg bg-amber-400 text-slate-950 shadow-sm"
              >
                {t.nav.consultationCTA}
              </button>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full py-2.5 text-center text-sm font-medium rounded-lg bg-emerald-600 text-white flex items-center justify-center gap-2"
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
