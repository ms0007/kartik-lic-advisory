import React from "react";
import Link from "next/link";
import { 
  Users, 
  Target, 
  Landmark, 
  GraduationCap, 
  PiggyBank, 
  ShieldAlert, 
  ArrowRight 
} from "lucide-react";

export const WhyInsuranceCards: React.FC = () => {
  const cards = [
    {
      icon: Users,
      title: "1. Protect Family Income",
      desc: "Replaces your economic contribution so your family's everyday kitchen budget, rent, utilities, and lifestyle remain stable even if you are not there.",
      link: "/why-life-insurance#income-protection",
      cta: "Explore Income Protection"
    },
    {
      icon: Target,
      title: "2. Protect Long-Term Goals",
      desc: "Ensures that 15 to 25-year ambitions—such as building a family home or accumulating capital—are not aborted mid-way by life's disruptions.",
      link: "/why-life-insurance#long-term-goals",
      cta: "Learn About Long-Term Goals"
    },
    {
      icon: Landmark,
      title: "3. Manage Financial Responsibilities",
      desc: "Clears outstanding liabilities such as home loans, personal debt, and business credit lines without forcing family members to liquidate assets.",
      link: "/why-life-insurance#liabilities",
      cta: "View Debt Protection"
    },
    {
      icon: GraduationCap,
      title: "4. Plan for Children's Future",
      desc: "Guarantees that your child's schooling, university degrees, and early career milestones receive scheduled funding regardless of any eventuality.",
      link: "/solutions#children",
      cta: "Explore Child Planning"
    },
    {
      icon: PiggyBank,
      title: "5. Prepare for Retirement",
      desc: "Converts career earnings into guaranteed, lifelong regular pension streams that insulate you from falling interest rates and outliving your savings.",
      link: "/solutions#retirement",
      cta: "Explore Guaranteed Annuities"
    },
    {
      icon: ShieldAlert,
      title: "6. Protect Against Unexpected Risks",
      desc: "Guards against permanent accidental disability and serious health setbacks through verified LIC riders that waive future premiums and provide replacement income.",
      link: "/riders",
      cta: "Explore Verified Riders"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
            Strategic Financial Pillars
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Life Insurance Matters in Real Life
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Life insurance is neither an expense nor a simple tax deduction. It is an intentional structure that shields your life's work across six fundamental areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 p-7 flex flex-col justify-between hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center mb-5 group-hover:bg-blue-900 group-hover:text-amber-400 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link 
                    href={card.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 group-hover:text-amber-600 transition-colors"
                  >
                    <span>{card.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
