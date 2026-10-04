import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articlesData } from "@/data/articles";
import { SITE_URL, getArticleSchema, getBreadcrumbSchema } from "@/lib/schema";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { 
  ChevronRight, 
  Clock, 
  Calendar, 
  User, 
  ShieldCheck, 
  ExternalLink, 
  CheckCircle2, 
  ArrowLeft,
  ArrowRight,
  MessageSquare
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | LIC Advisory Guide`,
    description: article.summary,
    authors: [{ name: `${article.author}, ${article.authorRole}` }],
    alternates: {
      canonical: `${SITE_URL}/resources/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      url: `${SITE_URL}/resources/${article.slug}`,
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate,
      authors: [article.author],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = getArticleSchema(article);
  const breadcrumbJsonLd = getBreadcrumbSchema([
    { name: "Home", item: "/" },
    { name: "Resources", item: "/resources" },
    { name: article.title, item: `/resources/${article.slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb Navigation */}
        <div className="bg-slate-100/70 border-b border-slate-200 py-2.5 px-4 text-xs text-slate-500">
          <div className="max-w-4xl mx-auto flex items-center gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-blue-900">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/resources" className="hover:text-blue-900">Resources</Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-800 truncate max-w-xs sm:max-w-md">
              {article.title}
            </span>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-slate-900 text-white py-14 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-800/80 text-amber-300 border border-blue-600/50">
              {article.cluster}
            </span>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Author, Publishing & Updated Timestamps for EEAT */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-800 text-amber-400 flex items-center justify-center font-bold text-xs">
                  KB
                </div>
                <div>
                  <span className="font-semibold text-white">{article.author}</span>
                  <span className="text-slate-400 block text-[11px]">{article.authorRole}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>Updated: {article.updatedDate}</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Article Body */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          
          {/* Direct Answer Box (Optimized for AI Overviews / Semantic Retrieval) */}
          <div className="p-5 rounded-2xl bg-blue-50 border-l-4 border-blue-900 text-slate-900 text-sm sm:text-base leading-relaxed space-y-1">
            <span className="font-bold text-blue-950 uppercase tracking-wider text-xs block">
              Direct Answer & Core Finding:
            </span>
            <p className="font-medium text-blue-950">
              {article.directAnswerSnippet}
            </p>
          </div>

          {/* Key Takeaways Card */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>Key Takeaways for Indian Families</span>
            </h2>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Article Narrative Content */}
          <article className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base space-y-5 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </article>

          {/* Sourcing & External Authority Validation */}
          <div className="mt-12 pt-8 border-t border-slate-200 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Verified Sources & Reference Documentation:
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {article.sources.map((src, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>•</span>
                  <a 
                    href={src.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-900 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>{src.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 pt-2">
              Official LIC Product Literature:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              {article.officialLicLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span>•</span>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-amber-800 hover:underline inline-flex items-center gap-1 font-medium"
                  >
                    <span>{link.title}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contextual Author Consultation Card */}
          <div className="mt-10 bg-gradient-to-br from-blue-950 to-blue-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-blue-800">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-800 text-amber-400 flex items-center justify-center font-bold text-lg">
                KB
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold">
                  Discuss this with Kartik Barmera
                </h4>
                <p className="text-xs text-slate-300">
                  Development Officer, Life Insurance Corporation of India (LIC of India)
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-200 leading-relaxed">
              Every family situation involves specific debts, goals, and health conditions. Request an objective, one-on-one consultation to assess your exact protection plan.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow flex items-center gap-1.5"
              >
                <span>Request Personal Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={buildWhatsAppLink(`Hello Kartik Ji, I read your article '${article.title}' and would like guidance for my family.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-4 rounded-xl text-xs font-semibold text-emerald-300 bg-blue-900 hover:bg-blue-800 border border-blue-700 transition-colors flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>Discuss on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Back to Resources Link */}
          <div className="pt-6">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:underline"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all educational articles</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
