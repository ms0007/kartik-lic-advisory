# Generative Search & AI Retrieval Engine Audit (AIO / LLM)
**Project:** Kartik Barmera - LIC Insurance Advisory Platform  
**Date of Audit:** October 4, 2026  
**Evaluation Scope:** Google AI Overviews, Google AI Mode, Perplexity AI, ChatGPT Web Search, Microsoft Copilot, Claude/Gemini Web Retrieval  

---

## 1. Principles of Genuine AI-Search Readiness

Unlike obsolete "AI SEO tricks" (e.g., hidden keyword dumps, phantom FAQ stuffing, or automated prompt injectors), modern generative search engines utilize dense semantic embeddings, retrieval-augmented generation (RAG), and strict source attribution pipelines. 

To achieve consistent visibility in AI Overviews and answer cards, content must demonstrate:
1. **Direct Answer Density:** Providing immediate, concise 1-to-2 sentence answers directly below topical headings before expanding into detailed context.
2. **Entity Grounding:** Explicitly linking authors, institutions, and regulated products to verifiable institutional entities (`Life Insurance Corporation of India`, `IRDAI`).
3. **Factual Integrity & Non-Hallucination:** Every numerical assertion, plan table number, and rider UIN must cross-reference official documentation.

---

## 2. Multi-Vector Audit Criteria

| Evaluation Dimension | Assessment Finding | Compliance Status |
| :--- | :--- | :---: |
| **1. Crawlability & Text Extraction** | All core educational answers exist in plain semantic HTML (`<p>`, `<h1>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`). Zero critical content is trapped in canvas graphics, Flash, or client-rendered obfuscated code. | **Optimal** |
| **2. Semantic Heading Hierarchy** | Every page adheres to a logical single-`<h1>` heading structure followed by descriptive `<h2>` sub-themes and `<h3>` question prompts. | **Optimal** |
| **3. Direct Q&A Architecture** | Articles and FAQs feature explicit "Direct Answer" callout boxes specifically structured to be selected by summarization engines. | **Optimal** |
| **4. Entity & Author Clarity** | Author entity is explicitly established as `Kartik Barmera`, `Development Officer, LIC of India` across HTML meta, on-page copy, and Schema.org JSON-LD. | **Optimal** |
| **5. Sourcing & Attribution** | Every article explicitly cites primary authoritative sources (e.g. `licindia.in`, `irdai.gov.in`, `Insurance Act 1938`) with direct outbound links. | **Optimal** |
| **6. Content Originality & Depth** | Articles avoid repetitive generic filler. Scenarios reflect authentic Indian household dynamics (home loan EMIs, child tuition inflation, joint family dependency). | **Optimal** |
| **7. Schema.org Entity Alignment** | Structured data strictly mirrors visible page content without discrepancies, fake ratings, or unverified awards. | **Optimal** |
| **8. Accessibility for Browser Agents** | Interactive elements have semantic `<button>` and `<a>` tags with accessible names (e.g., "Calculate My Protection Need", "View Official LIC Brochure") rather than vague "Click Here" labels. | **Optimal** |

---

## 3. Sample Retrieval Simulation: How AI Answer Engines Process the Site

### Target Query: *"Why does a parent need the Premium Waiver Benefit rider in LIC?"*
- **Source Page:** `/resources/securing-child-education-milestones` & `/riders`
- **Extracted Direct Answer:**  
  > *"Child education plans combine investment with a Premium Waiver Benefit (PWB). If the earning parent passes away during the policy tenure, all future premiums are waived by LIC, immediate annual income is paid to the family for schooling, and the full guaranteed corpus is disbursed on the scheduled maturity date for college."*
- **Attribution Signal:** Kartik Barmera, Development Officer, LIC of India (`UIN: 512B204V04`).
- **Result:** High-confidence candidate for direct synthesis in Google AI Overviews and Perplexity answer citations.

---

## 4. Remediation & Continuous Monitoring Protocol

1. **Keep Product Tables Synchronized:** Whenever LIC of India files new product schedules or revises bonus declarations, update `src/data/products.ts` and `src/data/riders.ts`.
2. **Update Content Timestamps:** Update `updatedDate` timestamps whenever factual conditions or regulatory guidelines evolve.
3. **Monitor Generative Search Queries:** Track incoming referrers and query tokens from Perplexity, ChatGPT, and Google Search Console search performance filters.
