"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Users, 
  Building2, 
  Sparkles, 
  Gem, 
  Hourglass, 
  Sunset, 
  GraduationCap, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

interface ProtectionNeedsInteractiveProps {
  onSelectNeed: (needTitle: string) => void;
}

export const ProtectionNeedsInteractive: React.FC<ProtectionNeedsInteractiveProps> = ({
  onSelectNeed
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const personaNeeds = [
    {
      id: "young-professional",
      title: "Young Professional",
      ageRange: "22–32 yrs",
      icon: Briefcase,
      summary: "Early career with low financial baggage. Prime window to lock in multi-crore pure term insurance at the lowest possible lifetime premium.",
      coreObjectives: [
        "Lock in lowest premium rates for 35–40 years before lifestyle diseases emerge",
        "Protect aged parents or dependent siblings from education or personal loan burdens",
        "Begin disciplined capital accumulation habits through conservative endowment plans"
      ],
      relevantSolutions: "Pure Risk Term Assurance (Yuva Term / Digi Term) + Accidental Disability Rider",
      advisoryNotice: "A thorough needs analysis is essential to calculate your exact Human Life Value (HLV) multiple before choosing coverage limits."
    },
    {
      id: "family-parent",
      title: "Family / Parent",
      ageRange: "30–45 yrs",
      icon: Users,
      summary: "Peak family responsibility. Primary breadwinner with mortgage debts, living expenses, and school tuition commitments.",
      coreObjectives: [
        "Ensure 15–20 years of household expenses are guaranteed if primary earner is absent",
        "Cover 100% of outstanding home loan principal so family never loses their residence",
        "Attach Premium Waiver Benefit (PWB) on all long-term savings policies"
      ],
      relevantSolutions: "High Sum Assured Term Cover + Jeevan Lakshya / New Jeevan Anand + PWB Rider",
      advisoryNotice: "Coverage must cover both recurring living sustenance and future milestone education costs."
    },
    {
      id: "child-education",
      title: "Child / Education Planning",
      ageRange: "Parents of 0–12 yr olds",
      icon: GraduationCap,
      summary: "Securing higher education corpus against 8–10% education inflation, ensuring graduation dreams are 100% funded no matter what happens.",
      coreObjectives: [
        "Guarantee college entrance funds regardless of breadwinner's presence",
        "Provide annual 10% income support during schooling years upon parent demise",
        "Benefit from attractive guaranteed additions for educational inflation defense"
      ],
      relevantSolutions: "LIC's Jeevan Lakshya (Plan 733) & LIC's Amritbaal (Plan 774)",
      advisoryNotice: "Always ensure the earning parent's life has maximum coverage before placing policies in a minor's name."
    },
    {
      id: "business-owner",
      title: "Business Owner",
      ageRange: "32–55 yrs",
      icon: Building2,
      summary: "Entrepreneurs managing commercial loans, creditor payables, and volatile business cash flows.",
      coreObjectives: [
        "Ring-fence personal family assets from business debt through the Married Women's Property Act",
        "Ensure bank overdrafts and business credit lines do not bankrupt the household",
        "Accumulate guaranteed collateral assets usable for business credit emergencies"
      ],
      relevantSolutions: "High-Value Term Cover under MWP Act + Whole Life Guaranteed Cash Flow (Jeevan Umang)",
      advisoryNotice: "Endorsement under Section 6 of the MWP Act must be executed strictly at policy proposal time."
    },
    {
      id: "self-employed",
      title: "Self-Employed & Consultants",
      ageRange: "28–50 yrs",
      icon: Sparkles,
      summary: "Professionals without employer gratuity or provident fund safety nets. Seeking predictable security.",
      coreObjectives: [
        "Replace variable income cycles with rock-solid family safety nets",
        "Build guaranteed personal pension reserves completely separate from client billings",
        "Protect against accidental loss of working capability via disability riders"
      ],
      relevantSolutions: "Pure Risk Term Cover + Limited Premium Paying Plans (Jeevan Labh)",
      advisoryNotice: "Financial underwriting considers 3 years of audited ITR statements to determine eligible sum assured."
    },
    {
      id: "high-income",
      title: "High-Income Professional",
      ageRange: "35–55 yrs",
      icon: Gem,
      summary: "Corporate executives, doctors, and senior leaders seeking estate preservation and tax-efficient wealth security.",
      coreObjectives: [
        "Multi-crore estate creation with sovereign backing and capital guarantee",
        "Diversify away from volatile public equities into guaranteed lifelong income",
        "Structured wealth transfer to children and grandchildren with zero probate delays"
      ],
      relevantSolutions: "LIC's Jeevan Utsav (10% Guaranteed Income) + High Sum Assured Term Assurance",
      advisoryNotice: "High-value proposals require specialized non-medical or special medical underwriting schedules."
    },
    {
      id: "pre-retirement",
      title: "Pre-Retirement",
      ageRange: "48–58 yrs",
      icon: Hourglass,
      summary: "Within 5–10 years of retirement. Focus switches from aggressive risk-taking to capital preservation and locking in guaranteed annuity rates.",
      coreObjectives: [
        "Insulate retirement nest egg against falling interest rate cycles",
        "Lock in guaranteed deferred annuity rates today before bond yields drop further",
        "Ensure debt obligations are 100% liquidated before exiting the workforce"
      ],
      relevantSolutions: "LIC's New Jeevan Shanti (Deferred Annuity) + Single Premium Endowment",
      advisoryNotice: "Deferred annuity allows locking in guaranteed lifetime pension rates up to 12 years in advance."
    },
    {
      id: "retirement-planning",
      title: "Retirement & Senior Living",
      ageRange: "58+ yrs",
      icon: Sunset,
      summary: "Retired or transitioning. Seeking immediate, unbroken monthly cash flow for life with return of purchase price to heirs.",
      coreObjectives: [
        "Guaranteed monthly or quarterly pension that cannot be outlived",
        "Joint life protection so pension continues seamlessly to the surviving spouse",
        "100% Return of Purchase Price (ROP) to children and nominees upon demise"
      ],
      relevantSolutions: "LIC's Jeevan Akshay-VII (Immediate Annuity) & Saral Pension",
      advisoryNotice: "Immediate annuities begin payout right from the month following deposit with 10 flexible options."
    }
  ];

  const current = personaNeeds[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section className="py-24 bg-[#030816] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Tailored Life-Stage Architecture</span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            Protection Needs Differ by Life Stage
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            One size does not fit all in life insurance. Select your current life stage to understand how financial priorities evolve and what to evaluate.
          </p>
        </div>

        {/* Horizontal Scrollable / Grid Tab Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-10">
          {personaNeeds.map((p, idx) => {
            const Icon = p.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`p-3.5 rounded-2xl border text-center flex flex-col items-center justify-center transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-gold-500 to-gold-400 text-slate-950 border-gold-400 shadow-gold-glow font-bold"
                    : "bg-white/[0.03] text-slate-300 border-white/10 hover:border-gold-500/40 hover:bg-white/[0.06]"
                }`}
              >
                <Icon className={`w-5 h-5 mb-1.5 ${isActive ? "text-slate-950" : "text-gold-400"}`} />
                <span className="text-xs font-semibold leading-tight">{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <div className="bg-[#050e20]/90 rounded-3xl border border-white/10 shadow-glass-dark p-6 sm:p-10 transition-all relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-gold-400 flex items-center justify-center shrink-0 shadow-md">
                  <CurrentIcon className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {current.title}
                    </h3>
                    <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-white/5 text-gold-300 border border-gold-500/20">
                      {current.ageRange}
                    </span>
                  </div>
                  <p className="text-xs text-gold-400 font-semibold mt-1">
                    Strategic Focus & Life Milestone Alignment
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                {current.summary}
              </p>

              {/* Core Objectives List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-gold-300">
                  Key Priorities to Address:
                </h4>
                <div className="space-y-2.5">
                  {current.coreObjectives.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Potentially Relevant Solutions */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-xs text-slate-300 leading-relaxed">
                <strong className="text-gold-300 font-bold block sm:inline mb-1 sm:mb-0">Relevant Product Categories to Evaluate: </strong>
                <span>{current.relevantSolutions}</span>
              </div>

              {/* Responsible Advisory Notice */}
              <p className="text-[11px] text-slate-400 italic">
                * Note: {current.advisoryNotice} A definitive policy recommendation is only provided after collecting sufficient personal details and assessing formal underwriting suitability.
              </p>
            </div>

            {/* Action Card */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#0a1733] to-[#040b19] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-2xl border border-gold-500/30">
              <div className="space-y-2.5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-gold-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  Personal Consultation
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-white leading-snug">
                  Explore Options for {current.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Discuss your circumstances directly with Kartik Barmera to structure an LIC portfolio that fits your exact goals.
                </p>
              </div>

              <button
                type="button"
                onClick={() => onSelectNeed(current.title)}
                className="w-full py-3.5 px-5 rounded-xl text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-gold-glow transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Personalised Guidance</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
