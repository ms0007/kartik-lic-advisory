"use client";

import React from "react";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { Phone, MessageSquare, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

interface MobileStickyBarProps {
  onOpenConsultation: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenConsultation }) => {
  const { language } = useLanguage();

  const handlePhoneClick = () => {
    trackEvent("call_click", { location: "mobile_sticky_bar" });
  };

  const handleWhatsAppClick = () => {
    trackEvent("whatsapp_click", { location: "mobile_sticky_bar" });
  };

  const handleEnquireClick = () => {
    trackEvent("contact_click", { location: "mobile_sticky_bar" });
    onOpenConsultation();
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060e1d]/95 backdrop-blur-2xl border-t border-white/10 px-2.5 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:+91${advisorData.phone}`}
          onClick={handlePhoneClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white/5 border border-white/10 text-gold-300 active:bg-white/10 transition-colors shadow-sm"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5 shrink-0" />
          <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">{language === "hi" ? "कॉल करें" : "Call"}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 active:bg-emerald-900/70 transition-colors shadow-sm"
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5 shrink-0" />
          <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">{language === "hi" ? "व्हाट्सएप" : "WhatsApp"}</span>
        </a>

        {/* Enquire Modal Button */}
        <button
          type="button"
          onClick={handleEnquireClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-slate-950 font-extrabold shadow-gold-glow active:scale-95 transition-transform"
          aria-label="Request Personalised Consultation"
        >
          <CalendarCheck className="w-4 h-4 text-slate-950 mb-0.5 shrink-0" />
          <span className="text-[11px] font-extrabold tracking-tight whitespace-nowrap">{language === "hi" ? "सलाह लें" : "Enquire"}</span>
        </button>
      </div>
    </div>
  );
};
