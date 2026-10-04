/**
 * Comprehensive Knowledge Base & FAQ Catalog
 * All answers are grounded in IRDAI guidelines and official LIC policy structures.
 * No fabricated statistics, false bonus promises, or misleading marketing claims.
 */

export interface FAQItem {
  id: string;
  category: 'basics' | 'riders' | 'policy-lifecycle' | 'claims-advisory';
  question: string;
  shortAnswer: string;
  detailedAnswer: string;
  officialSourceNote: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "what-is-life-insurance",
    category: "basics",
    question: "What is life insurance?",
    shortAnswer: "Life insurance is a legally binding contract between an individual and an insurer (such as LIC of India) where the insurer guarantees financial compensation to nominated beneficiaries upon the insured's demise or provides maturity benefits upon survival, in exchange for regular premium payments.",
    detailedAnswer: "In financial planning, life insurance acts as an economic replacement for the breadwinner's future earning power. Should the unforeseen happen, the policy pays a specified sum assured to the family so that loans can be repaid, children can continue their schooling, and household living standards do not collapse. In traditional savings plans, it also functions as a structured vehicle to build a guaranteed corpus over 10 to 30 years.",
    officialSourceNote: "Subject to policy terms, underwriting, and conditions specified in the official policy bond."
  },
  {
    id: "why-buy-life-insurance",
    category: "basics",
    question: "Why do people buy life insurance?",
    shortAnswer: "People purchase life insurance primarily to protect their family against income loss, eliminate debt burdens, fund long-term children's milestones, and guarantee lifelong post-retirement financial independence.",
    detailedAnswer: "Without life insurance, a family's financial stability depends entirely on the continued survival and health of the primary earner. Life insurance decouples family security from personal mortality. Furthermore, Indian families utilize LIC's endowment and pension plans for disciplined, sovereign-backed capital preservation shielded from speculative stock market volatility.",
    officialSourceNote: "Guidance compliant with IRDAI consumer awareness standards."
  },
  {
    id: "how-much-cover-needed",
    category: "basics",
    question: "How much life insurance cover might I need?",
    shortAnswer: "A standard benchmark for pure term insurance is 10 to 20 times your current annual gross income, plus 100% of all outstanding debts (home loans, car loans) and provisions for inflation-adjusted future child education goals.",
    detailedAnswer: "Known as the Human Life Value (HLV) principle, this calculation ensures that if the breadwinner is not around, the claim payout invested in safe instruments can generate sufficient monthly income to replace the breadwinner's salary and clear all outstanding bank liabilities. You can use our interactive Protection Need Calculator for a personalized educational estimate.",
    officialSourceNote: "Protection gap calculations are educational estimates and do not constitute an official underwriting quote."
  },
  {
    id: "what-is-a-premium",
    category: "basics",
    question: "What is an insurance premium?",
    shortAnswer: "A premium is the consideration amount you pay to LIC on a regular frequency (monthly, quarterly, half-yearly, yearly, or single one-time) to maintain your policy in an active, in-force state.",
    detailedAnswer: "Premium amounts are calculated based on your age at entry, policy term, sum assured, medical health category, occupation risk, and whether optional riders have been selected. Paying premiums on time ensures that death benefits, bonus accruals, and policy privileges remain uninterrupted.",
    officialSourceNote: "Grace periods apply (typically 15 days for monthly mode and 30 days for quarterly/half-yearly/yearly modes)."
  },
  {
    id: "what-is-a-rider",
    category: "riders",
    question: "What is an insurance rider?",
    shortAnswer: "A rider is an optional add-on benefit that you can attach to your base LIC policy to obtain extra specialized protection (such as accidental death, permanent disability, or critical illness) at an incremental premium.",
    detailedAnswer: "Rather than purchasing an entirely separate policy, riders allow policyholders to customize their existing cover. For example, adding LIC's Accidental Death and Disability Benefit Rider provides double sum assured in an accidental demise and waives future premiums if an accident results in permanent total disability.",
    officialSourceNote: "Riders are optional and subject to plan eligibility and maximum coverage limits defined by LIC."
  },
  {
    id: "what-is-accidental-death-disability-cover",
    category: "riders",
    question: "What is accidental death and disability cover?",
    shortAnswer: "It is an add-on protection that disburses an additional lump-sum benefit if the insured passes away due to an accident, or provides monthly income installments and premium waivers if an accident causes permanent total disability.",
    detailedAnswer: "Under LIC's Accidental Death and Disability Benefit Rider (UIN: 512B209V02), if the insured suffers permanent total disability from an accident, future premiums for the rider and the base policy up to basic sum assured are waived, and the accident sum assured is disbursed in equal monthly installments over a 10-year period to replace lost occupational income.",
    officialSourceNote: "Refer to official rider brochure for 180-day accident clause and medical definitions."
  },
  {
    id: "protect-family-income",
    category: "basics",
    question: "Can insurance help protect family income?",
    shortAnswer: "Yes. Both term insurance and specialized family protection plans (like LIC's Jeevan Lakshya) are specifically engineered to replace breadwinner income in the event of an untimely demise.",
    detailedAnswer: "In pure term plans, the nominee can receive the claim either as a lump sum or in structured monthly installments over 5, 10, or 15 years. Under LIC's Jeevan Lakshya, LIC directly pays the family 10% of the Basic Sum Assured every single year until maturity to meet recurring household living costs, followed by full maturity benefits.",
    officialSourceNote: "Payment mode options can be chosen at policy inception or altered as per policy rules."
  },
  {
    id: "what-is-term-insurance",
    category: "basics",
    question: "What is pure term insurance?",
    shortAnswer: "Term insurance is pure risk life cover that pays a predetermined sum assured to nominees if the insured dies during the policy term. It does not provide any maturity payout if the policyholder survives.",
    detailedAnswer: "Because term insurance does not invest money into savings or bonus funds, premium rates are extremely economical compared to traditional plans. It enables a 28-year-old to secure ₹1 Crore or more of life cover for a few hundred rupees per month, providing unmatched income replacement leverage.",
    officialSourceNote: "Refer to LIC's Yuva Term (Plan 875) and Digi Term (Plan 876) for official terms."
  },
  {
    id: "savings-oriented-insurance",
    category: "basics",
    question: "What is savings-oriented life insurance?",
    shortAnswer: "Savings-oriented insurance (such as Endowment or Money-Back plans) combines life risk protection with disciplined capital accumulation, paying a maturity corpus plus bonuses upon surviving the policy tenure.",
    detailedAnswer: "In plans like LIC's New Jeevan Anand or Jeevan Labh, the policyholder pays premiums for a set period. If they survive, they receive the full maturity amount alongside simple reversionary bonuses and final additional bonuses. If they pass away earlier, their nominees receive the full death sum assured regardless of how few premiums were paid.",
    officialSourceNote: "Bonuses are participating in profits and declared annually through actuarial valuations."
  },
  {
    id: "what-is-retirement-planning",
    category: "basics",
    question: "What is retirement planning in life insurance?",
    shortAnswer: "Retirement planning utilizes annuity and pension contracts to convert your career savings into guaranteed, lifelong monthly or annual cash flow that cannot be outlived.",
    detailedAnswer: "In India, where private sector employees lack statutory index-linked pensions, plans like LIC's New Jeevan Shanti (deferred annuity) and LIC's Jeevan Akshay-VII (immediate annuity) allow individuals to lock in a fixed guaranteed rate of interest for their entire lifespan, removing stock market volatility and reinvestment risk.",
    officialSourceNote: "Annuity rates are locked at policy inception and cannot be reduced by the insurer."
  },
  {
    id: "what-info-needed-before-policy",
    category: "policy-lifecycle",
    question: "What information is needed before choosing a policy?",
    shortAnswer: "You need to know your exact family protection requirement, outstanding liabilities, current age, medical history, disposable monthly budget, and the specific life milestone (child education, marriage, or pension) you are planning for.",
    detailedAnswer: "Insurance should never be purchased based on a casual recommendation. A professional consultation assesses your age proof (Aadhaar, Passport, PAN), income proof (ITR, Form 16, Salary Slips), family longevity history, and smoking/lifestyle habits to select the appropriate plan and underwriting schedule.",
    officialSourceNote: "Full disclosure in the proposal form is legally mandatory under Section 45 of the Insurance Act 1938."
  },
  {
    id: "how-to-compare-plans",
    category: "policy-lifecycle",
    question: "How do I compare insurance plans objectively?",
    shortAnswer: "Compare plans by identifying their primary objective (pure risk vs savings vs pension), premium paying terms, liquidity rules, guaranteed additions vs variable bonus participation, and exclusion clauses.",
    detailedAnswer: "Never compare a pure term insurance policy with an endowment or annuity plan on premium cost alone, as their financial mechanisms are fundamentally different. Evaluate what happens on demise, what happens on survival, loan availability, and surrender penalty schedules.",
    officialSourceNote: "All comparisons should be cross-verified against official LIC Sales Brochures."
  },
  {
    id: "where-to-verify-lic-info",
    category: "claims-advisory",
    question: "Where can I verify official LIC policy information?",
    shortAnswer: "All official policy documents, UINs, brochures, bonus rates, and statutory disclosures are publicly available on LIC's official portal at https://licindia.in.",
    detailedAnswer: "You can also verify policy details at any official LIC branch office across India or directly with Kartik Barmera, Development Officer, LIC of India, who will provide official sales literature and policy bonds for your examination.",
    officialSourceNote: "Always check the Unique Identification Number (UIN) registered with IRDAI."
  },
  {
    id: "how-premiums-determined",
    category: "policy-lifecycle",
    question: "How are LIC premiums determined?",
    shortAnswer: "Premiums are calculated actuarially based on your age at entry, gender, smoking status, medical health, family medical history, sum assured, policy tenure, and occupational hazards.",
    detailedAnswer: "Underwriting guidelines assess mortality and morbidity risks. Younger applicants with clean medical histories and non-hazardous desk occupations enjoy standard tabular rates. Adverse medical conditions or hazardous occupations may attract health or occupational extra premiums.",
    officialSourceNote: "Premium rates are filed and approved by IRDAI."
  },
  {
    id: "what-happens-if-stop-paying",
    category: "policy-lifecycle",
    question: "What happens if I stop paying premiums?",
    shortAnswer: "If you stop paying premiums during the initial years (less than 2 full years for traditional plans), the policy lapses and benefits cease. After 2 full years, it acquires a 'paid-up' value with reduced benefits.",
    detailedAnswer: "A lapsed policy loses risk cover, although LIC periodically conducts special Revival Campaigns allowing policyholders to revive lapsed policies with concessional interest rates. In paid-up policies, the sum assured reduces in proportion to the number of premiums actually paid versus total premiums originally due.",
    officialSourceNote: "Refer to policy conditions for exact paid-up calculation formulas."
  },
  {
    id: "can-policy-be-surrendered",
    category: "policy-lifecycle",
    question: "Can an insurance policy be surrendered?",
    shortAnswer: "Yes, traditional life insurance policies can be surrendered for cash value after completing at least two consecutive policy years with all due premiums paid.",
    detailedAnswer: "However, surrendering an insurance policy before maturity generally results in financial loss compared to the total premiums paid, because early premiums cover mortality risk and establishment expenses. IRDAI has introduced updated surrender value regulations to improve payouts, but continuing a policy to term remains the most beneficial course.",
    officialSourceNote: "Guaranteed Surrender Value (GSV) and Special Surrender Value (SSV) rules apply."
  },
  {
    id: "what-is-a-maturity-benefit",
    category: "policy-lifecycle",
    question: "What is a maturity benefit?",
    shortAnswer: "The maturity benefit is the total sum payable by LIC to the policyholder upon surviving the full policy tenure in an active, fully paid-up status.",
    detailedAnswer: "Under participating endowment plans, the maturity benefit consists of the Basic Sum Assured plus accrued Simple Reversionary Bonuses and Final Additional Bonus (FAB), if declared. Under whole-life plans like Jeevan Umang, maturity occurs at age 100 if the policyholder survives.",
    officialSourceNote: "Pure term plans do not have maturity benefits."
  },
  {
    id: "what-is-a-death-benefit",
    category: "claims-advisory",
    question: "What is a death benefit?",
    shortAnswer: "The death benefit is the payout disbursed to the designated nominee(s) if the life assured passes away while the policy is in full force during the policy term.",
    detailedAnswer: "Depending on the policy type, the death benefit may be the 'Sum Assured on Death' (which is typically the highest of 7x or 10x annualized premium or basic sum assured) plus accrued bonuses, or in child-specific plans, a continuous annual income plus full sum assured at maturity.",
    officialSourceNote: "Claim settlement requires submission of Death Certificate, original policy bond, and claim forms."
  },
  {
    id: "what-are-policy-exclusions",
    category: "claims-advisory",
    question: "What are policy exclusions?",
    shortAnswer: "Policy exclusions are specific conditions or events under which the insurer is not liable to pay standard death or rider benefits.",
    detailedAnswer: "The most common exclusion is suicide within 12 months of policy inception or revival (where typically only 80% of premiums paid or surrender value is returned). Rider exclusions include self-inflicted injuries, participation in hazardous sports, criminal acts, war, or intoxication-induced vehicular accidents.",
    officialSourceNote: "Exclusions are clearly stated in section 4 of the official policy bond."
  },
  {
    id: "why-read-policy-document",
    category: "claims-advisory",
    question: "Why should I carefully read the policy document?",
    shortAnswer: "The policy bond is the legal contract governing all claims, bonus rights, nominee entitlements, and exclusions. Reading it ensures complete alignment between what you expected and what is legally contracted.",
    detailedAnswer: "IRDAI mandates a 'Free Look Period' of 15 to 30 days from the date of receiving the policy bond. If you disagree with any terms, exclusions, or conditions, you have the statutory right to cancel the policy and receive a refund of premium (less proportional risk cover and medical exam charges).",
    officialSourceNote: "Free look cancellation must be submitted in writing within 15–30 days."
  },
  {
    id: "how-to-contact-kartik",
    category: "claims-advisory",
    question: "How can I contact Kartik Barmera for personal guidance?",
    shortAnswer: "You can reach Kartik Barmera, Development Officer, LIC of India, directly via phone at +91 8559916040, initiate a WhatsApp chat, or complete the 1-minute consultation request form on this website.",
    detailedAnswer: "Kartik Barmera offers objective, one-on-one consultations to help you assess your family's protection gap, clarify policy wording, understand riders, and structure an LIC portfolio that aligns with your specific family goals and budget.",
    officialSourceNote: "Consultation is complimentary and educational with zero sales pressure."
  },
  {
    id: "role-of-development-officer",
    category: "claims-advisory",
    question: "What is the role of an LIC Development Officer?",
    shortAnswer: "An LIC Development Officer is a full-time institutional officer responsible for mentoring advisors, maintaining professional underwriting standards, and ensuring policyholders receive authentic guidance and smooth claim support.",
    detailedAnswer: "Unlike freelance commission-only distributors, an LIC Development Officer represents the institutional leadership of LIC of India, working to uphold regulatory standards, assist with high-sum-assured financial underwriting, and provide direct guidance throughout the policy lifecycle.",
    officialSourceNote: "Development Officers operate under the administrative framework of LIC of India."
  }
];
