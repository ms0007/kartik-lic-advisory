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
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2">
        {/* Call Button */}
        <a
          href={`tel:+91${advisorData.phone}`}
          onClick={handlePhoneClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-blue-50 text-blue-900 active:bg-blue-100 transition-colors"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-blue-800 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">{language === "hi" ? "कॉल" : "Call"}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-emerald-50 text-emerald-900 active:bg-emerald-100 transition-colors"
          aria-label="Direct WhatsApp Message"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">{language === "hi" ? "व्हाट्सएप" : "WhatsApp"}</span>
        </a>

        {/* Enquire Modal Button */}
        <button
          type="button"
          onClick={handleEnquireClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold shadow-sm active:scale-95 transition-transform"
          aria-label="Request Personalised Consultation"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">{language === "hi" ? "सलाह लें" : "Enquire"}</span>
        </button>
      </div>
    </div>
  );
};
