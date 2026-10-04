"use client";

import React, { useEffect } from "react";
import { ConsultationWizard } from "./ConsultationWizard";
import { X, ShieldCheck } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialInterest?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialInterest
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#030917] rounded-2xl shadow-2xl border border-gold-500/30 text-white">
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close Consultation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-lic-950 via-[#030a1c] to-[#04112c] border-b border-white/10 px-6 sm:px-8 py-5">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>Confidential & Qualified Guidance</span>
          </div>
          <h2 id="consultation-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-white">
            Request Personalised Advisory
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Direct consultation with Kartik Barmera, Development Officer, LIC of India.
          </p>
        </div>

        {/* Wizard Body */}
        <div className="p-5 sm:p-7">
          <ConsultationWizard 
            initialInterest={initialInterest} 
            isModal={true}
            onSuccess={() => {
              // User sees confirmation screen inside wizard
            }} 
          />
        </div>
      </div>
    </div>
  );
};
