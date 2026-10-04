/**
 * Official LIC Products Catalog
 * Verified against official LIC of India records (https://licindia.in).
 * All plans include Table Numbers, UINs, and verified descriptions.
 */

export interface LICProduct {
  id: string;
  name: string;
  tableNo: string;
  uin: string;
  category: 'protection' | 'savings' | 'children' | 'retirement' | 'whole-life';
  categoryLabel: string;
  badge: string;
  tagline: string;
  targetAudience: string;
  highLevelPurpose: string;
  keyFeatures: string[];
  importantConditions: string[];
  officialSourceUrl: string;
  slug: string;
}

export const productsData: LICProduct[] = [
  // 1. Term Assurance / Pure Protection
  {
    id: "yuva-term",
    name: "LIC's Yuva Term",
    tableNo: "875",
    uin: "512N355V02",
    category: "protection",
    categoryLabel: "Pure Term Protection",
    badge: "Pure Risk Cover",
    tagline: "Affordable pure risk life cover structured for young earners and professionals.",
    targetAudience: "Young working individuals, salaried professionals, and entrepreneurs seeking high life cover at accessible rates.",
    highLevelPurpose: "Provides substantial financial replacement to dependents in the unfortunate event of the policyholder's demise during the policy term.",
    keyFeatures: [
      "Pure risk, non-participating, non-linked individual term assurance plan.",
      "High sum assured rebates available for prudent coverage sizing.",
      "Option to choose between regular premium, limited premium, or single premium paying terms.",
      "Benefit payable as lump sum or structured monthly installments on claim."
    ],
    importantConditions: [
      "No maturity benefit is payable if the life assured survives the policy term.",
      "Subject to medical underwriting, age eligibility, and income criteria.",
      "Must refer to the official LIC policy document for exclusions, suicide clause, and waiting periods."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "yuva-term-875"
  },
  {
    id: "digi-term",
    name: "LIC's Digi Term",
    tableNo: "876",
    uin: "512N356V02",
    category: "protection",
    categoryLabel: "Pure Term Protection",
    badge: "Direct Digital Plan",
    tagline: "Direct individual term assurance plan offering seamless online underwriting.",
    targetAudience: "Tech-savvy individuals seeking convenient pure life protection directly from LIC.",
    highLevelPurpose: "Offers high sum assured protection directly with transparent terms and competitive premium rates.",
    keyFeatures: [
      "Non-linked, non-participating individual pure risk term plan.",
      "Structured for direct digital processing and medical scheduling.",
      "Differential premium rates for non-smokers and healthy lifestyle profiles.",
      "Optional rider attachment subject to underwriting."
    ],
    importantConditions: [
      "Pure risk plan with zero survival or maturity payout.",
      "Policy terms subject to standard verification of identity and medical health declaration."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "digi-term-876"
  },
  {
    id: "saral-jeevan-bima",
    name: "LIC's Saral Jeevan Bima",
    tableNo: "859",
    uin: "512N341V01",
    category: "protection",
    categoryLabel: "Pure Term Protection",
    badge: "Standard IRDAI Plan",
    tagline: "Standardized pure risk term insurance with simple, transparent terms prescribed by IRDAI.",
    targetAudience: "Individuals looking for straightforward, regulated life cover without complex add-on rules.",
    highLevelPurpose: "Delivers an accessible safety net with uniform wording and standard eligibility criteria.",
    keyFeatures: [
      "Standard individual pure term plan complying with IRDAI guidelines.",
      "Simple terms and transparent sum assured guidelines (₹5 Lakhs to ₹25 Lakhs).",
      "Flexible premium payment options: Regular, 5-year, 10-year, or Single Premium."
    ],
    importantConditions: [
      "45-day waiting period from inception (except in case of accident).",
      "No maturity or surrender benefit payable under pure term guidelines."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "saral-jeevan-bima-859"
  },

  // 2. Family Protection & Savings
  {
    id: "new-jeevan-anand",
    name: "LIC's New Jeevan Anand",
    tableNo: "715",
    uin: "512N279V03",
    category: "savings",
    categoryLabel: "Savings & Lifelong Protection",
    badge: "Dual Benefit Combination",
    tagline: "The iconic combination of savings, financial support on maturity, and lifelong cover.",
    targetAudience: "Family heads seeking both milestone savings and whole-life financial security for their loved ones.",
    highLevelPurpose: "Provides financial support to the family through savings during working years while continuing risk cover for the entirety of life.",
    keyFeatures: [
      "Participating, non-linked individual life assurance plan with annual bonus participation.",
      "Maturity benefit: Basic Sum Assured + Accrued Simple Reversionary Bonuses + Final Additional Bonus (if any).",
      "Lifelong risk cover continues even after maturity payout until the demise of the life assured.",
      "Loan facility available after 2 full years of premium payment."
    ],
    importantConditions: [
      "Bonus declarations depend on LIC's annual actuarial valuation and are not guaranteed.",
      "Policy terms, surrender values, and paid-up values apply as per official documentation."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "new-jeevan-anand-715"
  },
  {
    id: "jeevan-labh",
    name: "LIC's Jeevan Labh",
    tableNo: "736",
    uin: "512N304V03",
    category: "savings",
    categoryLabel: "Savings & Family Protection",
    badge: "Limited Premium Paying",
    tagline: "Limited premium paying endowment plan providing high returns discipline and safety.",
    targetAudience: "Disciplined savers looking to complete premium payments over a shorter period (10, 15, or 16 years) with long-term coverage.",
    highLevelPurpose: "Helps accumulate a guaranteed corpus for mid-to-long term family milestones while keeping premium commitments limited.",
    keyFeatures: [
      "Limited premium payment terms: Pay for 10, 15, or 16 years for terms of 16, 21, or 25 years respectively.",
      "Participating in profits through Simple Reversionary Bonuses and Final Additional Bonus.",
      "Comprehensive death benefit: Sum Assured on Death plus accrued bonuses.",
      "Riders available for accidental death, disability, and critical illness."
    ],
    importantConditions: [
      "Surrender and loan facilities subject to minimum 2 consecutive policy years completed.",
      "Bonuses are declared annually by LIC and subject to performance."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "jeevan-labh-736"
  },

  // 3. Child & Future Education Planning
  {
    id: "jeevan-lakshya",
    name: "LIC's Jeevan Lakshya",
    tableNo: "733",
    uin: "512N297V03",
    category: "children",
    categoryLabel: "Child Goal Protection",
    badge: "Education Security Shield",
    tagline: "Specially designed to ensure your child's education and future milestones are secured, no matter what.",
    targetAudience: "Parents with young children who want an ironclad guarantee that their child's education will continue uninterrupted.",
    highLevelPurpose: "Guarantees annual financial support for the child's schooling in the parent's absence, plus a lump-sum maturity corpus when the child turns of age.",
    keyFeatures: [
      "Unique child security mechanism: In case of unfortunate demise of the parent, future premiums are completely waived.",
      "Annual income benefit of 10% of Basic Sum Assured paid to family each year until the year before maturity.",
      "Full Maturity Sum Assured (110% of BSA) + Bonuses paid on the scheduled maturity date regardless of prior death claims.",
      "Limited premium payment term (Policy term minus 3 years)."
    ],
    importantConditions: [
      "Proposal is on parent's life with child as the goal beneficiary.",
      "Eligibility depends on parent's age and income documentation."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "jeevan-lakshya-733"
  },
  {
    id: "amritbaal",
    name: "LIC's Amritbaal",
    tableNo: "774",
    uin: "512N365V02",
    category: "children",
    categoryLabel: "Child Goal Protection",
    badge: "Guaranteed Additions",
    tagline: "Dedicated child higher education corpus builder with attractive guaranteed additions.",
    targetAudience: "Parents planning targeted capital for university education, professional degrees, or startup funding for children.",
    highLevelPurpose: "Provides structured capital accumulation with guaranteed additions to offset rising educational inflation.",
    keyFeatures: [
      "Non-linked, non-participating individual savings plan specifically created for children (age 30 days to 13 years).",
      "Attractive Guaranteed Additions of ₹80 per thousand sum assured accrued at the end of each policy year.",
      "Maturity age from 18 to 25 years, aligning perfectly with higher education entrance.",
      "Premium Waiver Benefit rider can be attached on the proposer's life."
    ],
    importantConditions: [
      "Guaranteed additions accrue only when all due premiums are paid.",
      "Risk cover on the minor child's life commences as per LIC standard child entry rules."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "amritbaal-774"
  },

  // 4. Whole Life & Lifelong Cash Flow
  {
    id: "jeevan-umang",
    name: "LIC's Jeevan Umang",
    tableNo: "745",
    uin: "512N312V03",
    category: "whole-life",
    categoryLabel: "Lifelong Guaranteed Income",
    badge: "8% Guaranteed Lifelong Flow",
    tagline: "Provides 8% guaranteed annual income of Basic Sum Assured for life after premium term until age 99.",
    targetAudience: "Individuals seeking regular guaranteed supplementary cash flow for life combined with a legacy corpus for heirs.",
    highLevelPurpose: "Combines income generation and whole-life risk coverage to guarantee financial peace of mind through all life phases.",
    keyFeatures: [
      "Non-linked, whole life assurance with profit participation.",
      "Guaranteed Annual Survival Benefit equal to 8% of Basic Sum Assured paid every year after completion of PPT until age 99.",
      "Lump sum maturity or death benefit paid at age 100 or earlier demise: Sum Assured + Bonuses.",
      "Premium paying terms of 15, 20, 25, or 30 years."
    ],
    importantConditions: [
      "8% payout is subject to all premiums paid during the premium-paying term.",
      "Surrender and loan facilities available after 2 years of active policy."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "jeevan-umang-745"
  },
  {
    id: "jeevan-utsav",
    name: "LIC's Jeevan Utsav",
    tableNo: "771",
    uin: "512N363V02",
    category: "whole-life",
    categoryLabel: "Lifelong Guaranteed Income",
    badge: "10% Guaranteed Income / Flexi",
    tagline: "Modern non-linked whole life plan offering 10% guaranteed income with flexible deferment and interest accumulation.",
    targetAudience: "Professionals and wealth builders wanting predictable lifelong returns with flexibility to accumulate cash flows.",
    highLevelPurpose: "Shields your retirement years with a guaranteed 10% annual income stream or gives compound growth on deferred payouts.",
    keyFeatures: [
      "Non-linked, non-participating, individual whole-life plan with Guaranteed Additions throughout PPT.",
      "Guaranteed Additions of ₹40 per thousand sum assured every year during premium paying term.",
      "Choice between Regular Income Benefit (10% of BSA annually) or Flexi Income Benefit (accumulate at compounding interest).",
      "Short premium paying terms available from 5 to 16 years."
    ],
    importantConditions: [
      "Guaranteed benefits strictly subject to timely premium payments.",
      "Terms and withdrawal flexibility as defined in official policy schedule."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "jeevan-utsav-771"
  },

  // 5. Retirement & Guaranteed Annuities
  {
    id: "new-jeevan-shanti",
    name: "LIC's New Jeevan Shanti",
    tableNo: "858",
    uin: "512N338V04",
    category: "retirement",
    categoryLabel: "Retirement & Pension",
    badge: "Deferred Annuity Guarantee",
    tagline: "Single premium deferred annuity plan with guaranteed pension rates locked at inception.",
    targetAudience: "Individuals nearing retirement (ages 30–79) who want to invest a lump sum today and lock in high guaranteed pension for life.",
    highLevelPurpose: "Eliminates reinvestment risk in declining interest rate environments by locking in guaranteed lifetime income.",
    keyFeatures: [
      "Single premium deferred annuity with deferment periods from 1 to 12 years.",
      "Annuity rates are guaranteed from day one and fixed for the entire life of the annuitant.",
      "Available on Single Life or Joint Life (with spouse, parent, child, or sibling).",
      "Death benefit during deferment includes purchase price + accrued guaranteed additions."
    ],
    importantConditions: [
      "No surrender value during deferment except under specified medical grounds as per IRDAI rules.",
      "Annuity is taxable as per applicable income tax slabs."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "new-jeevan-shanti-858"
  },
  {
    id: "jeevan-akshay-vii",
    name: "LIC's Jeevan Akshay-VII",
    tableNo: "857",
    uin: "512N337V04",
    category: "retirement",
    categoryLabel: "Retirement & Pension",
    badge: "Immediate Annuity",
    tagline: "Single premium immediate annuity providing immediate monthly/quarterly/annual pension for life.",
    targetAudience: "Retirees and seniors looking for immediate pension commencement right after depositing retirement gratuity or corpus.",
    highLevelPurpose: "Provides continuous lifelong cash flow starting from the very next month after policy purchase.",
    keyFeatures: [
      "Immediate annuity plan offering 10 distinct pension payout options.",
      "Option F provides lifelong annuity with 100% Return of Purchase Price (ROP) to nominees upon demise.",
      "Joint life annuity available to protect spouse's income for life.",
      "Payout modes: Monthly, Quarterly, Half-Yearly, or Yearly."
    ],
    importantConditions: [
      "Annuity rates depend on age at entry and purchase price band.",
      "Purchased via single one-time premium payment."
    ],
    officialSourceUrl: "https://licindia.in",
    slug: "jeevan-akshay-vii-857"
  }
];

export const productCategories = [
  { id: "all", label: "All Verified Plans" },
  { id: "protection", label: "Pure Term Cover" },
  { id: "savings", label: "Savings & Family Security" },
  { id: "children", label: "Child Education & Milestones" },
  { id: "whole-life", label: "Whole Life Cash Flow" },
  { id: "retirement", label: "Retirement & Guaranteed Pension" }
];
