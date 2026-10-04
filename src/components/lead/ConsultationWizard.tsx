"use client";

import React, { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Lock, 
  Phone, 
  MessageSquare, 
  Mail,
  AlertCircle,
  Sparkles
} from "lucide-react";

interface ConsultationWizardProps {
  initialInterest?: string;
  onSuccess?: () => void;
  isModal?: boolean;
}

export const ConsultationWizard: React.FC<ConsultationWizardProps> = ({ 
  initialInterest, 
  onSuccess,
  isModal = false
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    interest: initialInterest || "Family Protection",
    ageGroup: "26–35 years",
    occupation: "Salaried (Private / Corporate)",
    incomeRange: "₹10 Lakhs to ₹25 Lakhs",
    financialResponsibility: "Child's Education & Family Support",
    preferredContact: "WhatsApp" as "WhatsApp" | "Call" | "Email",
    name: "",
    phone: "",
    email: "",
    honeypot: "" // Hidden anti-spam trap
  });

  const totalSteps = 7;

  const handleNext = () => {
    trackEvent("consultation_started", { step });
    setStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (cleanPhone.length !== 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit request.");
      }

      setSubmissionSuccess(true);
      trackEvent("consultation_completed", { interest: formData.interest });
      if (onSuccess) {
        onSuccess();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage("An unexpected error occurred. Please contact via phone or WhatsApp.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionSuccess) {
    return (
      <div className="bg-[#050f24] rounded-2xl p-6 sm:p-8 text-center max-w-lg mx-auto border border-gold-500/30 shadow-2xl">
        <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-white mb-2">
          Consultation Request Received
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-white">{formData.name}</strong>. Your request regarding <strong className="text-gold-300">{formData.interest}</strong> has been forwarded to <strong className="text-white">Kartik Barmera</strong>, Development Officer, LIC of India. You will be contacted via <strong className="text-emerald-300">{formData.preferredContact}</strong> shortly.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-300 mb-6 text-left space-y-1.5">
          <p className="font-bold text-gold-300">What happens next?</p>
          <p>• Zero sales pressure or pushy follow-ups.</p>
          <p>• Objective calculation of your family's exact protection gap.</p>
          <p>• Verified LIC plan brochures and transparent terms.</p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSubmissionSuccess(false);
            setStep(1);
          }}
          className="text-xs font-bold text-gold-300 hover:text-gold-200 hover:underline transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  const containerClasses = isModal
    ? "w-full"
    : "bg-[#050f24] rounded-3xl border border-gold-500/30 shadow-2xl p-5 sm:p-8 max-w-xl mx-auto";

  return (
    <div className={containerClasses}>
      {/* Progress Bar & Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-xs font-bold mb-2">
          <span className="text-gold-300 uppercase tracking-wider font-extrabold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Step {step} of {totalSteps}</span>
          </span>
          <span className="text-slate-300 font-semibold">{Math.round((step / totalSteps) * 100)}% Completed</span>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-lic-600 via-lic-500 to-gold-400 h-1.5 rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Anti-spam honeypot (invisible to humans) */}
        <input 
          type="text" 
          name="honeypot" 
          value={formData.honeypot} 
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          className="hidden" 
          tabIndex={-1} 
          autoComplete="off" 
        />

        {/* Step 1: Primary Interest */}
        {step === 1 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">What are you looking to plan or protect?</h3>
              <p className="text-xs text-slate-300 mt-0.5">Select the primary area you would like personal guidance on.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "Family Protection",
                "Pure Term Life Insurance",
                "Child's Education Planning",
                "Guaranteed Retirement Pension",
                "Disciplined Savings & Endowment",
                "Accident & Disability Protection",
                "Review of Existing Policies",
                "Not Sure / General Guidance"
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, interest: item });
                    handleNext();
                  }}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    formData.interest === item
                      ? "border-gold-400 bg-gold-500/20 text-gold-200 font-bold ring-1 ring-gold-400 shadow-sm"
                      : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Age Group */}
        {step === 2 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">What is your age bracket?</h3>
              <p className="text-xs text-slate-300 mt-0.5">Age determines premium bands and maximum policy term eligibility.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                "18 – 25 years",
                "26 – 35 years",
                "36 – 45 years",
                "46 – 55 years",
                "56 years and above"
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, ageGroup: item });
                    handleNext();
                  }}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    formData.ageGroup === item
                      ? "border-gold-400 bg-gold-500/20 text-gold-200 font-bold ring-1 ring-gold-400 shadow-sm"
                      : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Occupation */}
        {step === 3 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">What is your current occupation?</h3>
              <p className="text-xs text-slate-300 mt-0.5">Underwriting rules and medical schedules differ by profession.</p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Salaried (Private / Corporate)",
                "Salaried (Government / PSU)",
                "Business Owner / Manufacturer / Trader",
                "Professional (Doctor, CA, Lawyer, Architect)",
                "Self-Employed / Consultant / Freelancer",
                "Homemaker / NRI / Other"
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, occupation: item });
                    handleNext();
                  }}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    formData.occupation === item
                      ? "border-gold-400 bg-gold-500/20 text-gold-200 font-bold ring-1 ring-gold-400 shadow-sm"
                      : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Annual Income Range */}
        {step === 4 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">Approximate Annual Household Income</h3>
              <p className="text-xs text-slate-300 mt-0.5">Helps estimate maximum permissible Sum Assured under LIC underwriting guidelines.</p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Up to ₹5 Lakhs",
                "₹5 Lakhs to ₹10 Lakhs",
                "₹10 Lakhs to ₹25 Lakhs",
                "₹25 Lakhs to ₹50 Lakhs",
                "Above ₹50 Lakhs"
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, incomeRange: item });
                    handleNext();
                  }}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    formData.incomeRange === item
                      ? "border-gold-400 bg-gold-500/20 text-gold-200 font-bold ring-1 ring-gold-400 shadow-sm"
                      : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Primary Financial Responsibility */}
        {step === 5 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">What is your highest financial priority right now?</h3>
              <p className="text-xs text-slate-300 mt-0.5">Understanding your main responsibility shapes the right plan structure.</p>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Ensuring family income continues if I am not around",
                "Guaranteeing funds for my children's college education",
                "Covering outstanding home loans and business liabilities",
                "Building guaranteed, risk-free lifelong retirement income",
                "Shielding my savings against critical medical emergencies"
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, financialResponsibility: item });
                    handleNext();
                  }}
                  className={`text-left p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all ${
                    formData.financialResponsibility === item
                      ? "border-gold-400 bg-gold-500/20 text-gold-200 font-bold ring-1 ring-gold-400 shadow-sm"
                      : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10 text-slate-200 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 6: Preferred Contact Mode */}
        {step === 6 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">How would you prefer Kartik to connect?</h3>
              <p className="text-xs text-slate-300 mt-0.5">We respect your time and never engage in unsolicited telemarketing.</p>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: "WhatsApp", label: "WhatsApp", icon: MessageSquare, desc: "Quick info & PDF" },
                { id: "Call", label: "Phone Call", icon: Phone, desc: "Direct voice call" },
                { id: "Email", label: "Email", icon: Mail, desc: "Written summary" }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, preferredContact: item.id as "WhatsApp" | "Call" | "Email" });
                      handleNext();
                    }}
                    className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all ${
                      formData.preferredContact === item.id
                        ? "border-gold-400 bg-gold-500/20 text-gold-200 font-bold ring-1 ring-gold-400 shadow-sm"
                        : "border-white/10 bg-white/5 hover:border-gold-400/50 hover:bg-white/10 text-slate-200 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-1.5 text-gold-400" />
                    <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                    <span className="text-[10px] text-slate-400 mt-0.5">{item.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 7: Final Contact Information */}
        {step === 7 && (
          <div className="space-y-3.5">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif">Where should Kartik send your consultation summary?</h3>
              <p className="text-xs text-slate-300 mt-0.5">Your details are kept strictly private. Zero spam guaranteed.</p>
            </div>

            {errorMessage && (
              <div className="p-3 rounded-lg bg-rose-500/20 border border-rose-500/40 flex items-center gap-2 text-rose-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Full Name <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-white/20 bg-slate-900/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Mobile Number (WhatsApp) <span className="text-amber-400">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-white/20 bg-white/10 text-slate-300 text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                    className="w-full px-3.5 py-2 rounded-r-lg border border-white/20 bg-slate-900/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-1">
                  Email Address <span className="text-slate-400 font-normal">(Optional for plan comparisons)</span>
                </label>
                <input
                  type="email"
                  placeholder="ramesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-white/20 bg-slate-900/90 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
                />
              </div>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2.5 text-xs text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-white">Privacy Notice:</span> We do not collect sensitive data such as PAN, Aadhaar, bank credentials, or medical history through online forms. Your contact information is used exclusively by Kartik Barmera to respond to your advisory enquiry.
              </div>
            </div>
          </div>
        )}

        {/* Step Navigation Controls */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 hover:from-gold-300 hover:to-gold-400 rounded-xl shadow-gold-glow hover:shadow-gold-glow-lg disabled:opacity-50 transition-all transform hover:-translate-y-0.5"
            >
              <ShieldCheck className="w-4 h-4 text-slate-950" />
              <span>{isSubmitting ? "Submitting..." : "Submit Advisory Request"}</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
