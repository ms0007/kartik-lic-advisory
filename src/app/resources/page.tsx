import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articlesData } from "@/data/articles";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/schema";
import { ChevronRight, BookOpen, Clock, Calendar, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Educational Resources & Insurance Guides | LIC Advisory Hub",
  description: "Explore in-depth, source-backed articles on pure term cover, family protection gaps, child education planning, and avoiding common insurance mistakes.",
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
};

export default function ResourcesPage() {
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Educational Resources", item: "/resources" }
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
            <span className="font-semibold text-gold-300">Educational Resources</span>
          </div>
        </div>

        {/* Hero Banner */}
        <section className="relative text-white py-20 px-4 overflow-hidden" style={{background: 'linear-gradient(135deg, #030816 0%, #071329 60%, #0b1f4a 100%)'}}>
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(ellipse at 30% 50%, rgba(26,58,122,0.25) 0%, transparent 60%), radial-gradient(ellipse at 75% 25%, rgba(212,175,55,0.08) 0%, transparent 55%)'}} />
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
              Objective Financial Literacy
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
              Insurance Knowledge & Educational Guides
            </h1>
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Researched, source-backed analysis written for real families. No mass-generated thin content or misleading marketing claims.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesData.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-7 space-y-4 flex-grow">
                    {/* Metadata Header */}
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="inline-block px-2.5 py-0.5 rounded-full font-semibold text-blue-900 bg-blue-50 border border-blue-200">
                        {article.cluster}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[11px]">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                      <Link href={`/resources/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h2>

                    {/* Summary */}
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {article.summary}
                    </p>

                    {/* Key Takeaway Snippet */}
                    <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-700 space-y-1">
                      <strong className="text-blue-950 block uppercase tracking-wider text-[10px]">
                        Key Takeaway:
                      </strong>
                      <p className="italic text-slate-600">
                        "{article.keyTakeaways[0]}"
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-900 flex items-center justify-center text-[10px] font-bold">
                        KB
                      </div>
                      <span className="text-slate-600 font-medium">{article.author}</span>
                    </div>

                    <Link
                      href={`/resources/${article.slug}`}
                      className="font-bold text-blue-900 group-hover:text-amber-600 transition-colors inline-flex items-center gap-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
