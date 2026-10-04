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
    <div className="bg-slate-900 border-y border-slate-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {trustSignals.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-900/60 border border-blue-700/40 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {signal.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">
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
