import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";
import { ChevronRight, ShieldCheck, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Use | Kartik Barmera LIC Advisory",
  description: "Terms and conditions governing the informational and educational use of this advisory website.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
};

export default function TermsPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Terms of Use", item: "/terms" }
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
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
              Legal Agreement
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-2">
              Terms of Use & Service
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Effective Date: October 4, 2026 • Last Reviewed: October 2026
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                1. Informational & Educational Scope
              </h2>
              <p>
                This website is created and managed by Kartik Barmera, Development Officer, LIC of India, for consumer financial literacy, policy explanation, and consultation scheduling. Content published herein is intended solely for educational guidance and does not constitute a legally binding insurance contract or financial guarantee.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                2. Official LIC Source Precedence
              </h2>
              <p>
                In the event of any unintentional discrepancy between illustrations, summaries, or descriptions on this site and the official policy bond issued by Life Insurance Corporation of India (LIC of India), the provisions of the official policy bond and IRDAI-approved sales literature shall strictly prevail.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                3. Calculator Disclaimer
              </h2>
              <p>
                The Protection Need Calculator provides approximations based on user-supplied variables and standard financial planning assumptions. It is not an official premium calculator and does not constitute an insurance quote or underwriting approval.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                4. Intellectual Property & Non-Affiliation Notice
              </h2>
              <p>
                "Life Insurance Corporation of India" and "LIC" trademarks, logos, and product names belong to Life Insurance Corporation of India. This independent advisory portal makes reference to official plans solely for informational accuracy under applicable fair use provisions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-slate-900">
                5. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by the laws of India. Any legal disputes arising out of the use of this website shall be subject to the exclusive jurisdiction of the competent courts in India.
              </p>
            </section>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
