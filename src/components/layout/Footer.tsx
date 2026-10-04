import React from "react";
import Link from "next/link";
import { advisorData } from "@/data/advisor";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { ShieldCheck, Phone, MessageSquare, MapPin, Mail, ExternalLink, Sparkles } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020614] text-slate-300 pt-18 pb-28 md:pb-14 border-t border-white/10 relative overflow-hidden">
      {/* Ambient Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-lic-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1 & 2: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lic-900 via-lic-950 to-[#030712] border border-gold-500/40 text-gold-400 flex items-center justify-center shadow-lg">
                  <ShieldCheck className="w-7 h-7 text-gold-400" />
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                  Kartik Barmera
                </h3>
                <p className="text-xs font-bold text-gold-400 mt-0.5">
                  Development Officer, LIC of India
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md font-normal">
              Providing transparent, human-centered guidance on life insurance, family income protection, child education milestone planning, and lifelong guaranteed retirement security through official LIC solutions.
            </p>

            <div className="pt-2 flex flex-col gap-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <a href={`tel:+91${advisorData.phone}`} className="hover:text-gold-300 transition-colors font-bold text-sm">
                  {advisorData.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={buildWhatsAppLink()} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300 transition-colors font-bold"
                >
                  Direct WhatsApp Advisory Desk
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="italic font-mono">{advisorData.email}</span>
              </div>
              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span className="italic">{advisorData.officeAddress}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Insurance Solutions */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gold-300">
              Verified Solutions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/solutions#protection" className="hover:text-gold-300 transition-colors">
                  Pure Term Assurance
                </Link>
              </li>
              <li>
                <Link href="/solutions#savings" className="hover:text-gold-300 transition-colors">
                  Endowment & Savings
                </Link>
              </li>
              <li>
                <Link href="/solutions#children" className="hover:text-gold-300 transition-colors">
                  Child Education Plans
                </Link>
              </li>
              <li>
                <Link href="/solutions#whole-life" className="hover:text-gold-300 transition-colors">
                  Whole Life Guaranteed Income
                </Link>
              </li>
              <li>
                <Link href="/solutions#retirement" className="hover:text-gold-300 transition-colors">
                  Retirement & Annuities
                </Link>
              </li>
              <li>
                <Link href="/riders" className="hover:text-gold-300 transition-colors">
                  Optional Policy Riders
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gold-300 font-bold hover:text-white transition-colors">
                  Compare Plans Side-by-Side
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tools & Guidance */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gold-300">
              Tools & Guidance
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/insurance-calculator" className="hover:text-gold-300 transition-colors">
                  Protection Need Calculator
                </Link>
              </li>
              <li>
                <Link href="/claims-guide" className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors">
                  Claim Settlement Roadmap
                </Link>
              </li>
              <li>
                <Link href="/why-life-insurance" className="hover:text-gold-300 transition-colors">
                  Why Insurance Matters
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-gold-300 transition-colors">
                  Educational Guides & Hub
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold-300 transition-colors">
                  Knowledge Base & FAQ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-300 transition-colors">
                  About Kartik Barmera
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-300 transition-colors">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Institutional & Legal */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-gold-300">
              Regulatory & Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="/disclaimer" className="hover:text-gold-300 transition-colors">
                  Regulatory Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gold-300 transition-colors">
                  Privacy Policy & No-Spam
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gold-300 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a 
                  href="https://licindia.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <span>Official LIC Portal</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
              </li>
              <li>
                <a 
                  href="https://irdai.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-gold-300 transition-colors"
                >
                  <span>IRDAI Portal</span>
                  <ExternalLink className="w-3 h-3 text-gold-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimers Notice Block */}
        <div className="py-8 text-xs text-slate-400 space-y-3 leading-relaxed border-b border-white/10 font-normal">
          <p>
            <strong className="text-slate-200 font-bold">LEGAL & REGULATORY POSITIONING:</strong> This website is an independent professional informational and advisory portal operated by Kartik Barmera, Development Officer, LIC of India. It is NOT the official corporate website of the Life Insurance Corporation of India (LIC of India). For corporate information, investor relations, and statutory filings, please visit the official LIC website at <a href="https://licindia.in" target="_blank" rel="noopener noreferrer" className="text-gold-300 underline hover:text-gold-200">https://licindia.in</a>.
          </p>
          <p>
            <strong className="text-slate-200 font-bold">POLICY DISCLAIMER:</strong> Life insurance products, riders, bonuses, and terms are subject to eligibility, underwriting guidelines, and official policy documentation issued by LIC of India. Policy benefits vary by plan and policy terms. Information provided on this website is for general educational and informational purposes and does not constitute a legal offer, official quotation, or financial guarantee. Please refer to official LIC sales literature and policy bonds for exact terms and conditions.
          </p>
          <p>
            <strong className="text-slate-200 font-bold">INSURANCE IS THE SUBJECT MATTER OF SOLICITATION:</strong> Under Section 45 of the Insurance Act, 1938, full and true disclosure of all material facts regarding age, health, and occupation is required in the proposal form.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Kartik Barmera, Development Officer, LIC of India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-gold-300 transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-gold-300 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
