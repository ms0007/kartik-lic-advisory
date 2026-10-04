import React from "react";
import { 
  AlertTriangle, 
  Home, 
  GraduationCap, 
  Receipt, 
  Activity, 
  TrendingDown, 
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export const EmotionalStorySection: React.FC = () => {
  const financialPressures = [
    {
      icon: TrendingDown,
      title: "Immediate Income Disruption",
      desc: "Monthly paychecks stop immediately, yet regular grocery, utility, and maintenance bills arrive uninterrupted."
    },
    {
      icon: Home,
      title: "Unforgiving Loan Obligations",
      desc: "Banks still require home loan EMIs and vehicle repayments on schedule, putting family assets at risk."
    },
    {
      icon: GraduationCap,
      title: "Children's Educational Compromise",
      desc: "Rising school and university tuition fees cannot pause without jeopardizing your child's career prospects."
    },
    {
      icon: Activity,
      title: "Emergency Medical & Care Costs",
      desc: "Hospitalization, post-critical care, or rehabilitation expenses rapidly deplete emergency household savings."
    },
    {
      icon: Receipt,
      title: "Long-Term Financial Uncertainty",
      desc: "Surviving family members are forced to make distress financial decisions or deplete long-term retirement savings."
    },
    {
      icon: AlertTriangle,
      title: "Loss of Dignity and Independence",
      desc: "Depending on distant relatives or emergency borrowing during profound grief adds immense emotional pain."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide uppercase">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Reality of Life's Unpredictability</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
            One Unexpected Event Can Change Everything.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            When a tragedy strikes a family, the loss is not merely emotional. The economic foundation that sustains everyday dignity is suddenly shaken.
          </p>
        </div>

        {/* Six Reality Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {financialPressures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-100 text-blue-900 flex items-center justify-center mb-5 group-hover:bg-blue-900 group-hover:text-amber-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emotional Synthesis Resolution Box */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-800">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0 shadow-lg">
              <ShieldCheck className="w-9 h-9" />
            </div>
            <div className="space-y-2 text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                Insurance is designed to create an unbreakable financial safety net against specified risks.
              </h3>
              <p className="text-sm text-blue-200 leading-relaxed">
                It does not prevent life's uncertainties, but it ensures that your spouse, children, and parents will never have to compromise their home, their education, or their dignity because of unpaid loans or missing paychecks.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
