import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";
import { ChevronRight, ShieldAlert, ExternalLink, AlertTriangle, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Regulatory & Legal Disclaimer | Kartik Barmera LIC Advisory",
  description: "Official legal disclaimers, IRDAI regulatory positioning, and policy terms notice for Kartik Barmera, Development Officer, LIC of India.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
};

export default function DisclaimerPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Regulatory Disclaimer", item: "/disclaimer" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-sm p-8 sm:p-12 space-y-8">
          
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-800 border border-rose-200">
              <Scale className="w-3.5 h-3.5" />
              <span>Statutory Compliance Notice</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Regulatory Disclaimers & Institutional Notice
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              In accordance with Insurance Regulatory and Development Authority of India (IRDAI) guidelines.
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
            
            {/* Box 1: Independent Representation */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-blue-900" />
                <span>1. Independent Professional Advisory Representation</span>
              </h2>
              <p>
                This website is an independent professional advisory and lead-generation portal operated by <strong>Kartik Barmera</strong> in his professional capacity as a <strong>Development Officer with the Life Insurance Corporation of India (LIC of India)</strong>.
              </p>
              <p>
                This website is <strong>NOT the official corporate portal of the Life Insurance Corporation of India</strong>. For official corporate filings, corporate press announcements, and investor documents, please visit the official LIC website at <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-blue-900 underline font-semibold">https://licindia.in</a>.
              </p>
            </div>

            {/* Box 2: Policy Terms & Conditions */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="font-serif text-base font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>2. Policy Terms, Eligibility & Underwriting</span>
              </h2>
              <p>
                Life insurance policies, riders, bonuses, and terms are subject to terms, conditions, eligibility, medical and financial underwriting, and applicable official policy documents issued by LIC of India.
              </p>
              <p>
                Policy benefits vary by plan and policy terms. Information provided on this website is for general educational and informational purposes. Please refer to official LIC policy documents for exact terms and conditions.
              </p>
            </div>

            {/* Box 3: No Guaranteed Investment Outcomes */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="font-serif text-base font-bold text-slate-900">
                3. Bonus Variability & No Speculative Guarantees
              </h2>
              <p>
                Under participating (with-profits) plans, bonus declarations are determined annually by LIC of India based on statutory actuarial valuation and are not legally guaranteed for the future. Guaranteed additions or guaranteed survival rates apply solely to non-participating plans where explicitly contracted under official policy schedules.
              </p>
            </div>

            {/* Box 4: Section 45 & Material Disclosure */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="font-serif text-base font-bold text-slate-900">
                4. Insurance is the Subject Matter of Solicitation (Section 45)
              </h2>
              <p>
                Under Section 45 of the Insurance Act 1938, as amended from time to time, no policy of life insurance shall be called in question after the expiry of three years from the date of the policy. However, during the initial three years, complete, accurate, and true disclosure of all material facts regarding age, personal medical history, family health background, and tobacco/substance habits is legally mandatory. Non-disclosure can lead to claim repudiation.
              </p>
            </div>

            {/* Box 5: Free Look Period */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="font-serif text-base font-bold text-slate-900">
                5. Statutory Free-Look Period
              </h2>
              <p>
                IRDAI provides a statutory Free-Look Period of 15 days (or 30 days in case of policies obtained through electronic or distance marketing) from the date of receipt of the physical or digital policy bond. If the policyholder disagrees with any terms, they have the legal right to return the policy with stated reasons and receive a refund as per regulatory rules.
              </p>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
