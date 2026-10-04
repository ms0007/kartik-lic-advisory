import { advisorData } from "@/data/advisor";
import { FAQItem } from "@/data/faqs";
import { ArticleItem } from "@/data/articles";

export const SITE_URL = "https://kartiklicadvisory.in"; // Production domain structure

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#kartik-barmera`,
    name: advisorData.name,
    jobTitle: advisorData.designation,
    worksFor: {
      "@type": "Organization",
      name: advisorData.organization,
      url: "https://licindia.in"
    },
    telephone: `+91${advisorData.phone}`,
    url: SITE_URL,
    description: "Kartik Barmera is a Development Officer with Life Insurance Corporation of India (LIC of India), offering qualified guidance on family financial protection, term life cover, child education planning, and retirement annuities."
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Kartik Barmera - LIC Insurance & Protection Advisory",
    description: "Personalized guidance on LIC life insurance, family protection gap analysis, child education planning, and retirement solutions by Kartik Barmera, Development Officer, LIC of India.",
    publisher: {
      "@id": `${SITE_URL}/#kartik-barmera`
    },
    inLanguage: "en-IN"
  };
}

export function getAdvisoryServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${SITE_URL}/#financial-service`,
    name: "Kartik Barmera - LIC Advisory & Consultation Service",
    url: SITE_URL,
    telephone: `+91${advisorData.phone}`,
    priceRange: "Free Initial Consultation",
    serviceType: [
      "Life Insurance Advisory",
      "Family Financial Protection Planning",
      "Child Education Security",
      "Retirement Annuity Advisory",
      "Policy Rider Guidance"
    ],
    areaServed: {
      "@type": "Country",
      name: "India"
    },
    provider: {
      "@id": `${SITE_URL}/#kartik-barmera`
    },
    description: "Independent professional life insurance advisory and consultation service operated by Kartik Barmera, Development Officer, LIC of India."
  };
}

export function getFAQPageSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${faq.shortAnswer} ${faq.detailedAnswer}`
      }
    }))
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `${SITE_URL}${crumb.item}`
    }))
  };
}

export function getArticleSchema(article: ArticleItem) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    author: {
      "@type": "Person",
      name: article.author,
      jobTitle: article.authorRole,
      worksFor: {
        "@type": "Organization",
        name: "Life Insurance Corporation of India",
        url: "https://licindia.in"
      }
    },
    datePublished: "2026-09-01T00:00:00+05:30",
    dateModified: "2026-10-04T00:00:00+05:30",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/resources/${article.slug}`
    },
    publisher: {
      "@id": `${SITE_URL}/#kartik-barmera`
    }
  };
}
