import React from "react";
import { User, CreditCard, Shield, FileCheck, Award, ArrowDown, ArrowRight, Sparkles } from "lucide-react";

export const HowInsuranceWorksVisual: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: User,
      title: "YOU",
      subtitle: "The Life Assured",
      desc: "An individual seeking to protect family dependents or build a disciplined savings fund for upcoming life goals."
    },
    {
      step: "02",
      icon: CreditCard,
      title: "PREMIUM",
      subtitle: "Predictable Deposits",
      desc: "You contribute an affordable premium (yearly, monthly, or single) tailored to your age, health, and chosen cover."
    },
    {
      step: "03",
      icon: Shield,
      title: "COVERAGE",
      subtitle: "Day 1 Risk Transfer",
      desc: "LIC undertakes a legally binding financial commitment (e.g. ₹50L, ₹1 Cr+) protecting your family from day one."
    },
    {
      step: "04",
      icon: FileCheck,
      title: "IN-FORCE",
      subtitle: "Continuous Security",
      desc: "The contract remains active through timely contributions and underwritten terms documented in your policy bond."
    },
    {
      step: "05",
      icon: Award,
      title: "BENEFITS",
      subtitle: "Maturity or Claim",
      desc: "Maturity corpus + bonuses upon survival, or immediate financial settlement to nominees in an unexpected tragedy."
    }
  ];

  return (
    <section className="py-24 bg-[#050e20] text-white border-y border-white/10 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Plain-English Mechanics</span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2]">
            What Does Life Insurance Actually Do?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Behind all the legal paperwork is an elegant economic principle: transferring life’s severe financial risks away from your family onto a trusted sovereign institution.
          </p>
        </div>

        {/* Desktop Step Sequence Flow with Illuminated Cards */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex flex-col items-center text-center relative group p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-500/40 hover:bg-white/[0.07] transition-all duration-300"
              >
                {/* Step Pill */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0c1d3f] to-[#040b19] border border-gold-500/40 text-gold-400 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:border-gold-400 transition-all">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>

                <span className="text-[11px] font-extrabold tracking-widest text-gold-400 mb-1">
                  STEP {item.step}
                </span>
                <h3 className="text-base font-extrabold text-white mb-0.5 tracking-wide">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 mb-2.5">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>

                {/* Connecting arrow if not last */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 transform translate-x-1/2 z-20 text-gold-400/80">
                    <ArrowRight className="w-5 h-5 drop-shadow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="lg:hidden space-y-5 max-w-md mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center bg-white/[0.04] border border-white/10 p-6 rounded-3xl backdrop-blur-md">
                <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-[#09152e] border border-gold-500/30 text-gold-400 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <span className="text-[10px] font-extrabold text-gold-400 tracking-widest mb-1">
                  STEP {item.step}
                </span>
                <h3 className="text-base font-extrabold text-white mb-0.5">
                  {item.title}
                </h3>
                <h4 className="text-xs font-semibold text-slate-400 mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="pt-4 text-gold-400">
                    <ArrowDown className="w-5 h-5 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clear Educational Note */}
        <div className="mt-16 max-w-3xl mx-auto text-center text-xs text-slate-300 bg-white/[0.03] p-5 rounded-2xl border border-white/10 backdrop-blur-md">
          <p className="leading-relaxed">
            <strong className="text-gold-300">Important Educational Note:</strong> Exact benefit entitlements, waiting periods, bonus accruals, and claim settlement conditions vary depending on the particular plan selected (e.g. pure term, endowment, money-back, or annuity). Please refer to the official LIC policy documents for precise terms.
          </p>
        </div>

      </div>
    </section>
  );
};
