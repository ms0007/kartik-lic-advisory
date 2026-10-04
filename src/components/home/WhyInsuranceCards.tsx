import React from "react";
import Link from "next/link";
import { 
  Users, 
  Target, 
  Landmark, 
  GraduationCap, 
  PiggyBank, 
  ShieldAlert, 
  ArrowRight,
  Sparkles
} from "lucide-react";

export const WhyInsuranceCards: React.FC = () => {
  const cards = [
    {
      icon: Users,
      title: "1. Protect Family Income",
      desc: "Replaces your economic contribution so your family's everyday kitchen budget, rent, utilities, and lifestyle remain stable even if you are not there.",
      link: "/why-life-insurance#income-protection",
      cta: "Explore Income Protection",
      badge: "Household Survival"
    },
    {
      icon: Target,
      title: "2. Protect Long-Term Goals",
      desc: "Ensures that 15 to 25-year ambitions—such as building a family home or accumulating capital—are not aborted mid-way by life's disruptions.",
      link: "/why-life-insurance#long-term-goals",
      cta: "Learn About Long-Term Goals",
      badge: "Wealth Continuity"
    },
    {
      icon: Landmark,
      title: "3. Clear Financial Liabilities",
      desc: "Clears outstanding liabilities such as home loans, personal debt, and business credit lines without forcing family members to liquidate assets.",
      link: "/why-life-insurance#liabilities",
      cta: "View Debt Protection",
      badge: "Asset Shield"
    },
    {
      icon: GraduationCap,
      title: "4. Secure Children's Future",
      desc: "Guarantees that your child's schooling, university degrees, and early career milestones receive scheduled funding regardless of any eventuality.",
      link: "/solutions#children",
      cta: "Explore Child Planning",
      badge: "Guaranteed Milestone"
    },
    {
      icon: PiggyBank,
      title: "5. Prepare for Retirement",
      desc: "Converts career earnings into guaranteed, lifelong regular pension streams that insulate you from falling interest rates and outliving your savings.",
      link: "/solutions#retirement",
      cta: "Explore Guaranteed Annuities",
      badge: "Lifetime Dignity"
    },
    {
      icon: ShieldAlert,
      title: "6. Mitigate Health & Disability Risks",
      desc: "Guards against permanent accidental disability and serious health setbacks through verified LIC riders that waive future premiums and provide replacement income.",
      link: "/riders",
      cta: "Explore Verified Riders",
      badge: "Rider Protection"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lic-50 border border-lic-100 text-lic-900 text-xs font-extrabold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Strategic Financial Pillars</span>
          </div>
          <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Why Life Insurance Matters in Real Life
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Life insurance is neither an expense nor a simple tax deduction. It is an intentional capital structure that shields your life's work across six fundamental areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-slate-200/90 p-8 flex flex-col justify-between shadow-card-elevated hover:shadow-card-hover hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-gradient-to-br from-lic-900 to-lic-950 text-gold-400 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-[#071329] transition-all">
                      <Icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/80">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight group-hover:text-lic-900 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-100">
                  <Link 
                    href={card.link}
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-lic-900 group-hover:text-gold-700 transition-colors uppercase tracking-wider"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
