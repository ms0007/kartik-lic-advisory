# Premium LIC Insurance Advisory & Lead-Generation Platform
### Independent Advisory Website for Kartik Barmera, Development Officer, LIC of India

An institutional-grade, responsive, and high-converting advisory portal engineered for **Kartik Barmera**, Development Officer, Life Insurance Corporation of India (LIC of India). Built with Next.js App Router, TypeScript, Tailwind CSS, and full Schema.org structured data.

---

## 1. Project Overview & Institutional Positioning

This digital platform operates as an independent professional advisory portal. It serves a dual mission:
1. **Financial Demystification:** Helping Indian families, salaried professionals, and entrepreneurs understand the true economic necessity of life insurance, calculating their Human Life Value (HLV) protection gaps, and clarifying policy mechanics.
2. **Qualified Lead Advisory:** Connecting interested visitors directly with Kartik Barmera for objective, personalized consultation without pushy sales tactics or false guarantees.

> **Legal & Regulatory Positioning:** This website is an independent professional advisory portal. It is **NOT the official corporate website of LIC of India**. All official product specifications, UINs, and brochures are cross-referenced directly with the official LIC portal (`https://licindia.in`).

---

## 2. Technical Stack

- **Framework:** Next.js (App Router, React 19, Server Components & Static Site Generation)
- **Language:** TypeScript 5.7+ (Strict Mode)
- **Styling:** Tailwind CSS 3.4 with bespoke LIC Trust & Indian Financial Services design tokens
- **Typography:** Inter (Modern Clean Sans) + Playfair Display (Refined Headline Serif)
- **Icons:** Lucide React (Clean, scalable SVG vector system)
- **SEO & AI Search:** Dynamic XML Sitemap, Dynamic Robots, OpenGraph, JSON-LD Schema (`Person`, `FinancialService`, `WebSite`, `FAQPage`, `Article`, `BreadcrumbList`)
- **Security:** Anti-spam honeypot, IP rate limiting, input sanitization, HTTP security headers (`nosniff`, `DENY`, `strict-origin-when-cross-origin`)

---

## 3. Directory & Content Architecture

```
/
├── docs/
│   ├── research.md                  # Comprehensive factual research notes & verified UINs
│   ├── strategy-and-architecture.md # Product strategy, wireframes & personas
│   ├── SEO-AUDIT.md                 # Complete technical & on-page SEO audit
│   ├── AI-SEARCH-AUDIT.md           # Generative AI / LLM retrieval optimization audit
│   └── UX-AUDIT.md                  # WCAG 2.2 AA usability & conversion audit
├── src/
│   ├── app/
│   │   ├── api/leads/route.ts       # Secure lead intake with honeypot & rate limiting
│   │   ├── why-life-insurance/      # Deep dive educational guide
│   │   ├── solutions/               # Curated LIC plans catalog
│   │   ├── riders/                  # Dedicated guide to LIC riders (UINs verified)
│   │   ├── insurance-calculator/    # Dedicated Human Life Value calculator page
│   │   ├── about/                   # Profile, philosophy, and institutional boundaries
│   │   ├── contact/                 # Multi-channel contact & consultation request
│   │   ├── faq/                     # 20+ comprehensive categorized FAQs
│   │   ├── resources/               # Educational hub
│   │   │   └── [slug]/              # In-depth SEO & AI-search optimized articles
│   │   ├── privacy/                 # Privacy policy & strict no-spam pledge
│   │   ├── terms/                   # Terms of service & official source precedence
│   │   ├── disclaimer/              # Regulatory disclaimer & Section 45 notice
│   │   ├── sitemap.ts               # Dynamic XML sitemap generator
│   │   ├── robots.ts                # Dynamic robots.txt
│   │   ├── layout.tsx               # Root layout, fonts, and global JSON-LD schemas
│   │   └── page.tsx                 # Full homepage conversion funnel
│   ├── components/
│   │   ├── layout/                  # Header, Footer, MobileStickyBar
│   │   ├── home/                    # Hero, TrustBar, EmotionalStory, Solutions, Riders, etc.
│   │   ├── calculator/              # Interactive ProtectionCalculator engine
│   │   └── lead/                    # ConsultationWizard (7-step form) & Modal
│   ├── data/
│   │   ├── advisor.ts               # Client profile configuration & placeholders
│   │   ├── products.ts              # Verified LIC plans catalog with Table Nos & UINs
│   │   ├── riders.ts                # Verified LIC riders catalog
│   │   ├── faqs.ts                  # 20+ source-backed FAQs
│   │   ├── scenarios.ts             # 5 grounded real-life household scenarios
│   │   └── articles.ts              # 6 rich educational articles
│   └── lib/
│       ├── calculator.ts            # HLV mathematical engine
│       ├── whatsapp.ts              # Dynamic contextual WhatsApp link builder
│       ├── schema.ts                # Schema.org structured data generator
│       ├── analytics.ts             # Privacy-compliant event telemetry
│       └── utils.ts                 # Class merging & INR formatting helpers
```

---

## 4. Local Development & Build

### Prerequisites
- Node.js 18.17+ or 20+ (tested on Node v24.18.0)
- npm 10+ or yarn / pnpm

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser
http://localhost:3000
```

### Production Build & Verification
```bash
# Typecheck TypeScript files
npm run typecheck

# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 5. Client Information & Placeholder Verification Protocol

In strict accordance with advisory integrity, no credentials, awards, years of experience, or client counts have been fabricated.

The following client information is active:
- **Name:** Kartik Barmera
- **Designation:** Development Officer
- **Organization:** Life Insurance Corporation of India (LIC of India)
- **Primary Phone:** `+91 85599 16040`
- **Primary Market:** India

The following placeholders are established in `src/data/advisor.ts` and will be updated once confirmed:
- `[OFFICE ADDRESS TO BE PROVIDED]`
- `[EMAIL TO BE PROVIDED]`
- `[OFFICIAL LIC BRANCH / DIVISION DETAILS TO BE VERIFIED]`
- `[OFFICIAL PORTRAIT OF KARTIK BARMERA]`

---

## 6. How to Update Site Content

The codebase is engineered with a **content-driven architecture** so updates do not require rewriting application logic.

### 1. Updating Advisor Information
Edit `src/data/advisor.ts`:
- Update `officeAddress`, `email`, `branchDetails`, or `displayPhone`.
- Replace portrait placeholder in `src/components/home/HeroSection.tsx` and `src/components/home/AboutKartikSection.tsx` once high-resolution photograph is available.

### 2. Updating LIC Plans & Riders
Edit `src/data/products.ts` or `src/data/riders.ts`:
- Add new plans, update Table Numbers, or adjust UINs. The Solutions Explorer and category filters automatically adapt.

### 3. Adding New Educational Articles
Edit `src/data/articles.ts`:
- Append a new article object with `slug`, `title`, `cluster`, `summary`, `keyTakeaways`, `directAnswerSnippet`, `content`, and authoritative `sources`.
- The sitemap (`/sitemap.xml`) and dynamic routing (`/resources/[slug]`) immediately index the new article.

### 4. Updating FAQs
Edit `src/data/faqs.ts`:
- Add or modify questions. The FAQ page, homepage accordion, and JSON-LD `FAQPage` schema automatically stay synchronized.

---

## 7. Search Console & Analytics Deployment Guide

### Google Search Console Setup
1. Deploy the site to your production domain (e.g. `https://kartiklicadvisory.in`).
2. Open [Google Search Console](https://search.google.com/search-console).
3. Add a **Domain Property** (`kartiklicadvisory.in`) and verify via DNS TXT record.
4. Navigate to **Sitemaps** and submit `https://kartiklicadvisory.in/sitemap.xml`.
5. Request URL inspection for `/`, `/why-life-insurance`, `/solutions`, `/insurance-calculator`, and `/riders`.

### Google Analytics 4 (GA4)
1. Set up a GA4 Web Data Stream.
2. Add your Measurement ID (`G-XXXXXXXXXX`) to your deployment environment variables.
3. Event tracking hooks are already pre-wired in `src/lib/analytics.ts` for `call_click`, `whatsapp_click`, `consultation_started`, `consultation_completed`, `calculator_started`, and `calculator_completed`.
