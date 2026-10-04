import React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, Home, Calculator, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 px-4 bg-slate-50 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-16 h-16 rounded-3xl bg-blue-100 text-blue-900 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
              Error 404
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-600 leading-relaxed">
              The page you are looking for may have been moved, updated, or does not exist. You can return home or use our key financial tools below.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <Link
              href="/insurance-calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-semibold text-blue-900 bg-white hover:bg-slate-100 border border-slate-300 transition-all"
            >
              <Calculator className="w-4 h-4" />
              <span>Need Calculator</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
