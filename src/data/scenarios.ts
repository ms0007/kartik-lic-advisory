/**
 * Real-Life Financial Scenarios
 * Grounded in everyday Indian household economic realities.
 * No fabricated statistics, fear-mongering, or misleading claims.
 */

export interface ScenarioItem {
  id: string;
  title: string;
  badge: string;
  whoIsThis: string;
  whatCouldHappen: string;
  responsibilitiesContinue: string[];
  howProtectionHelps: string[];
  whatToEvaluate: string[];
  advisoryTip: string;
}

export const scenariosData: ScenarioItem[] = [
  {
    id: "young-professional",
    title: "Young Earning Professional (24–32 yrs)",
    badge: "Early Career",
    whoIsThis: "Salaried IT, finance, healthcare, or corporate employee in early career years with growing income and dependent parents or spouse.",
    whatCouldHappen: "Premature illness, accidental injury, or sudden loss of life during peak career acceleration.",
    responsibilitiesContinue: [
      "Repayment of personal or higher education loans without burdening parents.",
      "Monthly household support or medical care for elderly, dependent parents.",
      "Early savings accumulation needed for marriage or future home down payment."
    ],
    howProtectionHelps: [
      "Pure risk term insurance (e.g., LIC's Yuva Term / Digi Term) locks in low premium rates for 30–40 years because entry age is young.",
      "Lump sum death cover ensures aged parents or dependent spouse are never left financially stranded.",
      "Accidental death and disability riders preserve earning power against disability."
    ],
    whatToEvaluate: [
      "Human Life Value (HLV) multiple (typically 15–20x annual income at this age).",
      "Term duration until age 60–65 rather than short 10-year periods.",
      "Adding Accidental Disability rider early on."
    ],
    advisoryTip: "The youngest age you buy life cover is the lowest premium rate you will ever lock in for life."
  },
  {
    id: "parent-with-children",
    title: "Parents with School-Going Children (30–44 yrs)",
    badge: "Family Core",
    whoIsThis: "Married couple with one or more minor children, managing daily household budget, school fees, and long-term education goals.",
    whatCouldHappen: "Sudden demise or critical illness of the primary earning parent before children complete schooling and college degrees.",
    responsibilitiesContinue: [
      "School tuition, coaching fees, and rising university education inflation.",
      "Day-to-day groceries, rent, utilities, and domestic staff expenses.",
      "Ongoing long-term savings for the child's higher degree and marriage."
    ],
    howProtectionHelps: [
      "Specialized structures like LIC's Jeevan Lakshya provide an immediate 10% annual income benefit to the family to pay school fees, plus full maturity corpus later.",
      "Premium Waiver Benefit rider guarantees all future premium dues are cancelled if the parent passes away, keeping the education fund 100% intact.",
      "High pure term cover replaces lost earning capacity during the 20-year child rearing phase."
    ],
    whatToEvaluate: [
      "Total estimated cost of undergraduate and postgraduate degrees with 8–10% education inflation.",
      "Adequate term cover to cover household expenses for at least 15–20 years.",
      "Inclusion of Premium Waiver Benefit on every child-linked policy."
    ],
    advisoryTip: "Do not buy insurance in the child's name without first ensuring the earning parent's life has maximum coverage."
  },
  {
    id: "home-loan-family",
    title: "Home Loan & Heavy Debt Obligations (32–50 yrs)",
    badge: "Debt Protection",
    whoIsThis: "Families who have taken substantial mortgage loans (₹30L to ₹1.5 Cr+) or business vehicle loans with 15–20 year EMI schedules.",
    whatCouldHappen: "Demise or permanent disability of the borrower while 10+ years of heavy EMIs remain outstanding.",
    responsibilitiesContinue: [
      "Bank EMIs continue regardless of tragic circumstances; failure to pay risks bank recovery proceedings.",
      "Spouse and children risk having their family home seized or forced into emergency distress sale.",
      "Ongoing maintenance, property taxes, and family living expenses."
    ],
    howProtectionHelps: [
      "Dedicated term cover or credit life plan equal to 100%+ of outstanding loan balance.",
      "Nominee receives immediate claim proceeds to pay off the bank in full and clear the title deed.",
      "Leaves the family home debt-free and safe for the surviving spouse and children."
    ],
    whatToEvaluate: [
      "Total outstanding principal across all home, car, and personal loans.",
      "Whether the bank's bundled mortgage insurance is single-premium diminishing cover or an independent policy owned by you.",
      "Tax implications and claim ease for the surviving spouse."
    ],
    advisoryTip: "Always hold a personal life insurance policy you own and control, rather than relying solely on employer or lender group schemes."
  },
  {
    id: "business-owner",
    title: "Entrepreneurs & Self-Employed (35–55 yrs)",
    badge: "Enterprise & Wealth",
    whoIsThis: "Proprietors, partners, manufacturers, retailers, and consultants whose enterprise cash flow depends intimately on their personal leadership.",
    whatCouldHappen: "Loss of the key promoter, causing creditors to recall loans, business partner disputes, and immediate cash-flow freeze.",
    responsibilitiesContinue: [
      "Creditor settlements, supplier payables, bank working capital lines, and GST liabilities.",
      "Staff salaries and operational overheads during business restructuring.",
      "Family lifestyle sustenance completely decoupled from volatile business assets."
    ],
    howProtectionHelps: [
      "High-value life assurance creates an immediate, legally protected pool of family liquidity.",
      "Policies registered under the Married Women's Property (MWP) Act 1874 protect insurance proceeds from business creditors and court attachments.",
      "Whole-life plans (LIC's Jeevan Umang / Jeevan Utsav) accumulate guaranteed surrender values usable as emergency business collateral."
    ],
    whatToEvaluate: [
      "Applicability of Section 6 of the Married Women's Property Act (MWPA).",
      "Separation of family financial security from business capital risk.",
      "Guaranteed cash-flow reserves for non-earning family members."
    ],
    advisoryTip: "A simple MWP Act endorsement at policy inception ensures no bank or business creditor can attach your family's insurance proceeds."
  },
  {
    id: "approaching-retirement",
    title: "Pre-Retirees & Pension Planners (48–62 yrs)",
    badge: "Retirement Security",
    whoIsThis: "Individuals within 5–12 years of retirement, or recently retired, looking to convert accumulated capital into guaranteed lifetime income.",
    whatCouldHappen: "Falling interest rates eroding bank fixed deposit returns, inflation diminishing real spending power, or living past 85 with exhausted savings.",
    responsibilitiesContinue: [
      "Independent monthly living expenses without having to depend financially on adult children.",
      "Increasing healthcare and prescription medication costs in senior years.",
      "Leaving a legacy or heritage corpus for grandchildren or surviving spouse."
    ],
    howProtectionHelps: [
      "Deferred Annuity (e.g., LIC's New Jeevan Shanti) locks in a guaranteed lifelong pension rate today, insulating against future interest rate drops.",
      "Immediate Annuity (e.g., LIC's Jeevan Akshay-VII) starts paying regular monthly pension immediately with 100% purchase price returned to heirs.",
      "Guaranteed lifetime income backed by LIC of India provides supreme peace of mind."
    ],
    whatToEvaluate: [
      "Joint life annuity options to ensure pension continues seamlessly to the surviving spouse.",
      "Balancing liquid contingency reserves with guaranteed lifelong annuity streams.",
      "Return of purchase price options for estate planning."
    ],
    advisoryTip: "Retirement security is not about chasing stock market volatility; it is about guaranteeing an unbroken monthly cash flow for as long as you live."
  }
];
