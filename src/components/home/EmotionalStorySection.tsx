import React from "react";
import { 
  AlertTriangle, 
  Home, 
  GraduationCap, 
  Receipt, 
  Activity, 
  TrendingDown, 
  ShieldCheck, 
  Lock
} from "lucide-react";

export const EmotionalStorySection: React.FC = () => {
  const financialPressures = [
    {
      icon: TrendingDown,
      title: "Immediate Income Disruption",
      desc: "Monthly salary deposits stop immediately, yet grocery, utility bills, society maintenance, and domestic costs arrive uninterrupted.",
      accent: "from-rose-500 to-amber-500"
    },
    {
      icon: Home,
      title: "Unforgiving Loan EMIs",
      desc: "Banks require home loan and vehicle EMIs strictly on time. Without a designated insurance corpus, family homes face foreclosure.",
      accent: "from-amber-500 to-yellow-500"
    },
    {
      icon: GraduationCap,
      title: "Children's Educational Compromise",
      desc: "School and university tuition fees cannot wait. A sudden income loss often forces promising children to abandon their career dreams.",
      accent: "from-blue-600 to-cyan-500"
    },
    {
      icon: Activity,
      title: "Critical Illness & Emergency Care",
      desc: "Major medical emergencies or prolonged treatments rapidly drain lifelong household mutual funds, fixed deposits, and emergency cash.",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      icon: Receipt,
      title: "Premature Asset Liquidation",
      desc: "Surviving families are forced into distress sales of property or gold at steep discounts simply to fund immediate day-to-day survival.",
      accent: "from-purple-600 to-indigo-500"
    },
    {
      icon: AlertTriangle,
      title: "Loss of Financial Dignity",
      desc: "Depending on distant relatives or informal loans during grief causes deep emotional pain. Insurance preserves self-reliance.",
      accent: "from-rose-600 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-[#030919] text-white border-b border-white/10 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-lic-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-extrabold tracking-wider uppercase shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>The Reality of Life's Unpredictability</span>
          </div>
          
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
            One Unexpected Event Can <span className="text-rose-400">Change Everything.</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            When tragedy strikes an earning member, the tragedy is never only emotional. The economic foundation sustaining everyday family dignity is instantly fractured.
          </p>
        </div>

        {/* Six Reality Cards with Luxury Obsidian Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">
          {financialPressures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-[#061226]/80 p-7 sm:p-8 rounded-3xl border border-white/10 shadow-glass-dark hover:border-gold-500/40 hover:bg-[#081730] hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group"
              >
                {/* Top Subtle Color Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent}`} />

                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-gold-400 flex items-center justify-center mb-6 shadow-md group-hover:scale-105 group-hover:border-gold-500/40 transition-all">
                  <Icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2.5 tracking-tight group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emotional Synthesis Resolution Box with Royal Navy & Gold Highlights */}
        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-[#061127] via-[#0b2046] to-[#040b18] text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-gold-500/40 relative overflow-hidden">
          {/* Subtle Ambient Light */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-7 relative z-10">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-gold-400 to-amber-300 opacity-40 blur-sm" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold-500 to-amber-300 text-slate-950 flex items-center justify-center shrink-0 shadow-gold-glow">
                <ShieldCheck className="w-10 h-10 text-slate-950" />
              </div>
            </div>
            
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gold-300 flex items-center justify-center md:justify-start gap-1.5">
                <Lock className="w-3.5 h-3.5 text-gold-400" />
                The Core Economic Purpose of Life Insurance
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-snug">
                Life insurance is designed to create an <span className="text-gold-300 font-extrabold underline decoration-gold-400/40 underline-offset-4">unbreakable financial fortress</span> for your family.
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                It does not prevent life's uncertainties, but it guarantees that your spouse, children, and parents will never have to compromise their home, their education, or their dignity because of unpaid debts or missing paychecks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
