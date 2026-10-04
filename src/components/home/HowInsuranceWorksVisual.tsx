import React from "react";
import { User, CreditCard, Shield, FileCheck, Award, ArrowDown, ArrowRight } from "lucide-react";

export const HowInsuranceWorksVisual: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: User,
      title: "YOU",
      subtitle: "The Policyholder / Life Assured",
      desc: "An individual seeking to protect family dependents or build a disciplined savings fund for upcoming life goals."
    },
    {
      step: "02",
      icon: CreditCard,
      title: "PAY PREMIUM",
      subtitle: "Affordable Periodic Payments",
      desc: "You contribute a defined premium amount (monthly, quarterly, half-yearly, yearly, or single) based on age, health, and chosen sum assured."
    },
    {
      step: "03",
      icon: Shield,
      title: "SPECIFIED COVER",
      subtitle: "Immediate Risk Protection",
      desc: "LIC undertakes a legally binding financial liability (e.g. ₹50 Lakhs, ₹1 Crore+) to protect your beneficiaries from day one."
    },
    {
      step: "04",
      icon: FileCheck,
      title: "POLICY CONTINUES",
      subtitle: "Active Contract In-Force",
      desc: "The policy contract remains active subject to timely premium payments and underwriting terms specified in your official policy bond."
    },
    {
      step: "05",
      icon: Award,
      title: "ELIGIBLE BENEFITS",
      subtitle: "Maturity, Survival or Claim",
      desc: "Depending on your specific plan: maturity corpus + bonuses upon survival, or immediate financial support to nominees in the event of demise."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            Plain English Explanation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            What Does Life Insurance Actually Do?
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Behind all the legal paperwork is a simple, beautiful concept: transferring life’s financial risks away from your family to a trusted sovereign institution.
          </p>
        </div>

        {/* Desktop Step Sequence Flow */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center relative group">
                {/* Step Pill */}
                <div className="w-14 h-14 rounded-2xl bg-blue-950 border border-blue-700/60 text-amber-400 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:border-amber-400 transition-all">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="text-[11px] font-bold tracking-widest text-amber-400 mb-1">
                  STEP {item.step}
                </span>
                <h3 className="text-base font-bold text-white mb-1">
                  {item.title}
                </h3>
                <h4 className="text-xs font-medium text-slate-400 mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                {/* Connecting arrow if not last */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-2 transform translate-x-1/2 text-slate-600">
                    <ArrowRight className="w-4 h-4 text-amber-400/60" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Flow */}
        <div className="lg:hidden space-y-6 max-w-md mx-auto">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center bg-slate-950 border border-slate-800 p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-blue-900/60 text-amber-400 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-amber-400 tracking-wider mb-1">
                  STEP {item.step}
                </span>
                <h3 className="text-base font-bold text-white mb-0.5">
                  {item.title}
                </h3>
                <h4 className="text-xs text-slate-400 mb-2">
                  {item.subtitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>

                {idx < steps.length - 1 && (
                  <div className="pt-4 text-slate-600">
                    <ArrowDown className="w-5 h-5 text-amber-400/60 animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Clear Educational Note */}
        <div className="mt-14 max-w-2xl mx-auto text-center text-xs text-slate-400 bg-slate-950/80 p-4 rounded-xl border border-slate-800">
          <p>
            <strong>Important Educational Note:</strong> Exact benefit entitlements, waiting periods, bonus accruals, and claim settlement conditions vary depending on the particular plan selected (e.g. pure term, endowment, money-back, or annuity). Please refer to the official LIC policy documents for precise terms.
          </p>
        </div>

      </div>
    </section>
  );
};
