# Product Strategy & Information Architecture
**Project:** Kartik Barmera - LIC Advisory & Consultation Digital Platform  
**Target Market:** India (Urban & Emerging Metro Families, Professionals, Business Owners)  
**Positioning:** Independent Advisory Portal by Kartik Barmera, Development Officer, LIC of India  

---

## 1. Product Strategy (Phase 2)

### The Dual Value Proposition
1. **Human Financial Literacy & Demystification:**
   - 90%+ of insurance purchasers in India buy policies out of emotional obligation, tax-saving rush in February/March, or friend/relative pressure without knowing their actual family risk gap, policy terms, exclusions, or survival benefits.
   - The platform reorients insurance from an abstract transaction into a concrete protective shield: What happens to mortgage payments, kids' school fees, and daily household sustenance if the primary breadwinner does not return tomorrow?
2. **High-Trust, Qualified Advisory Conversion:**
   - Instead of aggressive push marketing, the site empowers the visitor with genuine knowledge, clear calculators, verified LIC product sheets, and direct access to personal consultation with Kartik Barmera (Development Officer, LIC of India).

### Target Personas
- **The Young IT/Corporate Professional (24–32 yrs):** High ambitions, minimal dependents initially, student or car loans. Needs high-sum-assured pure term protection (Yuva Term/Digi Term) + early discipline.
- **The Young Parent (30–42 yrs):** Primary breadwinner, home loan EMI, school tuition obligations. Needs comprehensive income replacement + milestone funding (Jeevan Lakshya / Amritbaal) + Accident/Disability riders.
- **The Business Owner / Self-Employed (35–55 yrs):** Variable income cycles, business debt/creditor liabilities. Needs asset-shielded wealth protection and whole-life liquidity (Jeevan Umang / Jeevan Utsav).
- **The Pre-Retiree (48–60 yrs):** Children settled or finishing college. Focus turns towards guaranteed lifelong pension and capital preservation (New Jeevan Shanti / Jeevan Akshay-VII).

---

## 2. Information Architecture (Phase 3) & Sitemap

```
/
├── /why-life-insurance           (Educational foundation: Family security, risk mitigation)
├── /solutions                    (Solution category hub)
│   ├── /solutions/protection     (Pure risk term insurance: Yuva Term, Digi Term, Saral Jeevan Bima)
│   ├── /solutions/family         (Family income & goal protection: Jeevan Lakshya, New Jeevan Anand)
│   ├── /solutions/children       (Education & marriage milestone security: Amritbaal, Jeevan Lakshya)
│   └── /solutions/retirement     (Lifelong pension & guaranteed annuity: Jeevan Umang, Jeevan Shanti)
├── /riders                       (Comprehensive educational guide to all verified LIC riders)
├── /insurance-calculator         (Interactive Protection Need & Human Life Value calculator)
├── /about                        (Kartik Barmera DO profile, advisory philosophy, trust pledge)
├── /contact                      (Multi-channel advisory contact: Form, WhatsApp, Call)
├── /resources                    (Knowledge repository: deep dive guides, policy awareness)
│   └── /resources/[slug]         (In-depth SEO & AI-search optimized cluster articles)
├── /faq                          (Comprehensive 20+ verified FAQ directory)
├── /disclaimer                   (Regulatory compliance, legal boundaries, institutional disclaimers)
├── /privacy                      (Privacy policy, lead data handling, no-spam pledge)
└── /terms                        (Terms of use, educational limitation, external links)
```

---

## 3. UX Wireframe & Conversion Funnel Flow (Phase 4)

```
[Top Utility Bar: Official LIC DO Disclaimer + Direct Phone + WhatsApp Direct Link]
[Header: Brand / DO Title | Navigation Links | "Get Free Consultation" CTA]
        ↓
[Hero Section: "Protect the Life You've Built. Prepare for the Life Ahead." + Value Hook + Kartik DO Card]
        ↓
[Verified Trust Bar: LIC of India | 100% Personal Guidance | Objective Gap Analysis | Direct DO Support]
        ↓
[Emotional Reality Anchor: "One Unexpected Event Can Change Everything" - Income, Loans, Goals]
        ↓
[Educational Visual: "What Does Life Insurance Actually Do?" - Infographic Flow]
        ↓
[Interactive Life Stage Cards: Young Earner | Parent | Business Owner | Pre-Retirement]
        ↓
[Interactive Need Calculator Teaser & CTA: Instant Protection Gap Estimation]
        ↓
[Curated LIC Solutions Explorer: Term, Savings, Child, Retirement with official UINs]
        ↓
[Riders Demystified: Accidental Disability, PWB, Critical Illness, Term Rider]
        ↓
[Real-Life Case Scenarios: "What happens if..." - Interactive Problem/Solution tabs]
        ↓
[Why Work with a Human DO: Direct underwriting assistance, claim support, personalized planning]
        ↓
[Multi-Step Lead Consultation Form: Frictionless 4-step wizard with zero financial intrusion]
        ↓
[Knowledge Center FAQs: Accordion with authoritative, verified answers]
        ↓
[Footer: Full sitemap, IRDAI advisory disclaimer, copyright, local service notices]
[Sticky Mobile Action Bar: Quick Call (+91 8559916040) | WhatsApp Chat | Quick Consultation Modal]
```

---

## 4. Design System Specifications (Phase 5)

- **Color Tokens:**
  - `lic-blue-900`: `#0c2340` (Deep authoritative LIC Navy)
  - `lic-blue-800`: `#12335c`
  - `lic-blue-600`: `#1d4ed8`
  - `lic-gold-500`: `#c59b27` (Warm sovereign gold accent)
  - `lic-gold-600`: `#a37d1d`
  - `lic-gold-50`: `#fbf8ee`
  - `surface-light`: `#f8fafc`
  - `surface-card`: `#ffffff`
  - `text-dark`: `#0f172a`
  - `text-muted`: `#475569`
  - `success-emerald`: `#059669`

- **Typography Scale:**
  - Font Sans: Inter / Plus Jakarta Sans / system-ui
  - Font Serif (Refined Headlines): Playfair Display / Georgia / Merriweather
  - Hierarchy: H1 (2.5rem–3.75rem), H2 (1.875rem–2.5rem), H3 (1.25rem–1.5rem), Body (1rem/1.125rem), Caption (0.875rem)

- **Interaction Principles:**
  - Micro-elevations on hover (`hover:-translate-y-1 hover:shadow-lg transition-all duration-300`)
  - Crisp accessible focus rings (`focus-visible:ring-2 focus-visible:ring-blue-600`)
  - Clear visual affordances on all interactive cards and form controls.
