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
        <div className="bg-[#060e1d] border-b border-white/10 py-2.5 px-4 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto flex items-center gap-1.5">
            <Link href="/" className="hover:text-gold-300 text-slate-400">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-gold-300">Contact & Advisory</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
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
        <section className="py-16 bg-[#020614] border-t border-white/10 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-lic-900/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Direct Contact Information */}
              <div className="lg:col-span-5 space-y-6">
                
                <div className="bg-[#050f24] rounded-3xl border border-gold-500/30 shadow-2xl p-6 sm:p-8 space-y-6 text-white">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-300">
                      Direct Advisory Channels
                    </span>
                    <h2 className="font-serif text-2xl font-bold text-white mt-1">
                      Direct Contact Details
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      Kartik Barmera • Development Officer, LIC of India
                    </p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                    {/* Phone */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20">
                      <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Phone Consultation:</span>
                        <a 
                          href={`tel:+91${advisorData.phone}`} 
                          className="font-mono text-gold-300 font-bold hover:underline"
                        >
                          {advisorData.displayPhone}
                        </a>
                        <p className="text-[11px] text-slate-300 mt-0.5">Direct phone call for policy guidance</p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30">
                      <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">WhatsApp Advisory:</span>
                        <a 
                          href={buildWhatsAppLink()} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-emerald-300 font-semibold hover:underline"
                        >
                          Chat on WhatsApp
                        </a>
                        <p className="text-[11px] text-slate-300 mt-0.5">Quick questions & brochure requests</p>
                      </div>
                    </div>

                    {/* Office Location Placeholder */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Office Location:</span>
                        <span className="text-slate-300 italic">{advisorData.officeAddress}</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">Primary market: India</p>
                      </div>
                    </div>

                    {/* Email Placeholder */}
                    <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white/5 border border-white/10">
                      <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block">Official Email:</span>
                        <span className="text-slate-300 italic">{advisorData.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                    <span className="font-bold text-white block">Branch & Divisional Details:</span>
                    <span className="italic text-slate-400">{advisorData.branchDetails}</span>
                  </div>
                </div>

                {/* Trust Pledge Box */}
                <div className="bg-gradient-to-br from-lic-950 via-[#030917] to-lic-900 text-white rounded-3xl p-6 sm:p-7 space-y-3 shadow-xl border border-gold-500/30">
                  <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                    <span>Privacy & Professional Pledge</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    Zero Spam. No Unsolicited Sales Calls.
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Your contact information is strictly used to answer your inquiry. We never sell, share, or broadcast your information to external marketing agencies.
                  </p>
                </div>

              </div>

              {/* Right Column: Interactive Consultation Wizard */}
              <div className="lg:col-span-7">
                <ConsultationWizard initialInterest="Life Insurance Advisory" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
