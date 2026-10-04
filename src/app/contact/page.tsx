import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ConsultationWizard } from "@/components/lead/ConsultationWizard";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { 
  ChevronRight, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  ShieldCheck, 
  Clock, 
  ExternalLink 
} from "lucide-react";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Kartik Barmera | LIC Development Officer Advisory",
  description: "Schedule a confidential life insurance consultation with Kartik Barmera, Development Officer, LIC of India. Connect via phone, WhatsApp, or request a call.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

export default function ContactPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Contact & Advisory", item: "/contact" }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-slate-100/70 border-b border-slate-200 py-2 px-4 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Contact & Advisory</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="bg-gradient-to-b from-blue-950 to-blue-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Personalized Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Get in Touch with Kartik Barmera
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Have questions about your family’s insurance needs, policy terms, or riders? Connect directly for objective, confidential assistance.
            </p>
          </div>
        </section>

        {/* Contact Methods & Consultation Form Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Direct Contact Information */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                      Direct Advisory Channels
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                      Direct Contact Details
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      Kartik Barmera • Development Officer, LIC of India
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                    {/* Phone */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-blue-50/60 border border-blue-100">
                      <Phone className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">Phone Consultation:</span>
                        <a 
                          href={`tel:+91${advisorData.phone}`} 
                          className="font-mono text-blue-900 font-bold hover:underline"
                        >
                          {advisorData.displayPhone}
                        </a>
                        <p className="text-[11px] text-slate-500 mt-0.5">Direct phone call for policy guidance</p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
                      <MessageSquare className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-900 block">WhatsApp Advisory:</span>
                        <a 
                          href={buildWhatsAppLink()} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-emerald-800 font-semibold hover:underline"
                        >
                          Chat on WhatsApp
                        </a>
                        <p className="text-[11px] text-slate-500 mt-0.5">Quick questions & brochure requests</p>
                      </div>
                    </div>

                    {/* Office Location Placeholder */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <MapPin className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Office Location:</span>
                        <span className="text-slate-500 italic">{advisorData.officeAddress}</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Primary market: India</p>
                      </div>
                    </div>

                    {/* Email Placeholder */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                      <Mail className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-slate-800 block">Official Email:</span>
                        <span className="text-slate-500 italic">{advisorData.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100 text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-800 block">Branch & Divisional Details:</span>
                    <span className="italic text-slate-500">{advisorData.branchDetails}</span>
                  </div>
                </div>

                {/* Trust Pledge Box */}
                <div className="bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-6 sm:p-7 space-y-3 shadow-md border border-blue-800">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Privacy & Professional Pledge</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Zero Spam. No Unsolicited Sales Calls.
                  </h3>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Your contact information is strictly used to answer your inquiry. We never sell, share, or broadcast your information to external marketing agencies.
                  </p>
                </div>

              </div>

              {/* Right Column: Interactive Consultation Wizard */}
              <div className="lg:col-span-7">
                <div className="bg-white rounded-3xl border border-slate-200/90 shadow-md p-6 sm:p-8">
                  <div className="mb-6 border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
                      Online Form
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-slate-900 mt-1">
                      Request a Consultation
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out this 1-minute form to receive a structured assessment from Kartik Barmera.
                    </p>
                  </div>

                  <ConsultationWizard initialInterest="Life Insurance Advisory" />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
