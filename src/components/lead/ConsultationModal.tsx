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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200">
        {/* Modal Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
          aria-label="Close Consultation Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-950 px-6 sm:px-8 py-5 text-white">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Confidential & Qualified Guidance</span>
          </div>
          <h2 id="consultation-modal-title" className="font-serif text-xl sm:text-2xl font-bold">
            Request Personalised Advisory
          </h2>
          <p className="text-xs text-blue-200 mt-1">
            Direct consultation with Kartik Barmera, Development Officer, LIC of India.
          </p>
        </div>

        {/* Wizard Body */}
        <div className="p-4 sm:p-6">
          <ConsultationWizard 
            initialInterest={initialInterest} 
            onSuccess={() => {
              // Keep open briefly so user reads confirmation
            }} 
          />
        </div>
      </div>
    </div>
  );
};
