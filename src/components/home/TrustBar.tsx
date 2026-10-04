"use client";

import React from "react";
import { ShieldCheck, UserCheck, HeartHandshake, Compass } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export const TrustBar: React.FC = () => {
  const { t } = useLanguage();

  const trustSignals = [
    {
      icon: ShieldCheck,
      title: t.trustBar.licIndia,
      desc: t.trustBar.licIndiaDesc
    },
    {
      icon: UserCheck,
      title: t.trustBar.guidance,
      desc: t.trustBar.guidanceDesc
    },
    {
      icon: Compass,
      title: t.trustBar.planning,
      desc: t.trustBar.planningDesc
    },
    {
      icon: HeartHandshake,
      title: t.trustBar.human,
      desc: t.trustBar.humanDesc
    }
  ];

  return (
    <div className="bg-[#050d1e] border-y border-white/10 py-7 relative z-20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustSignals.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-500/40 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lic-900 to-[#040b19] border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6 text-gold-400 group-hover:text-gold-300 transition-colors" />
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-white tracking-wide group-hover:text-gold-200 transition-colors">
                    {signal.title}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium leading-snug mt-0.5">
                    {signal.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
