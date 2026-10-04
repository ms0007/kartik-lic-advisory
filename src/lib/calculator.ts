/**
 * Insurance Protection Need Calculator Engine
 * Educational estimation tool based on Human Life Value (HLV) & Capital Needs Analysis.
 * Strictly labeled: NOT an official LIC premium calculator, NOT financial advice.
 */

export interface CalculatorInputs {
  age: number;
  annualIncome: number;
  monthlyExpenses: number;
  outstandingLoans: number;
  dependentsCount: number;
  childrenCount: number;
  educationCostPerChild: number;
  existingLifeCover: number;
  existingLiquidSavings: number;
  yearsUntilRetirement: number;
}

export interface CalculatorResult {
  totalProtectionRequired: number;
  householdSustenanceNeed: number;
  debtClearanceNeed: number;
  childEducationNeed: number;
  existingAssetsCover: number;
  protectionGap: number;
  isFullyCovered: boolean;
  recommendedQuestions: string[];
  disclaimer: string;
}

export const defaultCalculatorInputs: CalculatorInputs = {
  age: 32,
  annualIncome: 1200000, // 12 Lakhs
  monthlyExpenses: 50000,  // 50k / month
  outstandingLoans: 3500000, // 35 Lakhs home/car loan
  dependentsCount: 3,
  childrenCount: 1,
  educationCostPerChild: 2500000, // 25 Lakhs higher education
  existingLifeCover: 1000000, // 10 Lakhs existing cover
  existingLiquidSavings: 800000, // 8 Lakhs savings
  yearsUntilRetirement: 25
};

export function calculateProtectionGap(inputs: CalculatorInputs): CalculatorResult {
  const workingYearsRemaining = Math.max(5, Math.min(35, inputs.yearsUntilRetirement || (60 - inputs.age)));
  
  // 1. Household Sustenance Need: 15 to 20 years of family expenses
  // Using a conservative duration factor capped at 18 years to account for investment yield offsetting inflation
  const durationFactor = Math.min(workingYearsRemaining, 18);
  const annualExpenses = inputs.monthlyExpenses * 12;
  const householdSustenanceNeed = annualExpenses * durationFactor;

  // 2. Debt Obligations
  const debtClearanceNeed = Math.max(0, inputs.outstandingLoans);

  // 3. Child Education / Milestones
  const childEducationNeed = Math.max(0, inputs.childrenCount * inputs.educationCostPerChild);

  // Total Protection Capital Required
  const totalProtectionRequired = householdSustenanceNeed + debtClearanceNeed + childEducationNeed;

  // Existing Safety Net: Existing Life Cover + conservative 70% of liquid savings (30% retained for emergency buffer)
  const existingAssetsCover = Math.max(0, inputs.existingLifeCover) + Math.max(0, inputs.existingLiquidSavings * 0.7);

  // Net Protection Gap
  const rawGap = totalProtectionRequired - existingAssetsCover;
  const protectionGap = rawGap > 0 ? Math.round(rawGap / 50000) * 50000 : 0;
  const isFullyCovered = protectionGap === 0;

  const recommendedQuestions: string[] = [
    `How can a pure term insurance policy (like LIC's Yuva Term or Digi Term) efficiently cover your estimated ₹${(protectionGap / 100000).toFixed(1)} Lakh gap without stretching your monthly budget?`,
    inputs.childrenCount > 0 
      ? "Should you attach a Premium Waiver Benefit (PWB) and consider LIC's Jeevan Lakshya to ensure school & college fees continue uninterrupted if something happens?"
      : "What proportion of your insurance should be pure risk protection versus guaranteed capital preservation?",
    inputs.outstandingLoans > 0
      ? `Is your existing ₹${(inputs.outstandingLoans / 100000).toFixed(1)} Lakh loan debt adequately protected under an independent policy owned by you rather than a bank's single-premium scheme?`
      : "Would an Accidental Death and Disability Benefit Rider be suitable for your daily travel and occupation profile?",
    "How can you structure policy nominations or Married Women's Property (MWP) Act provisions to keep insurance proceeds 100% legally shielded for your family?"
  ];

  return {
    totalProtectionRequired,
    householdSustenanceNeed,
    debtClearanceNeed,
    childEducationNeed,
    existingAssetsCover,
    protectionGap,
    isFullyCovered,
    recommendedQuestions,
    disclaimer: "This calculator is an educational estimation tool based on general financial planning principles. It is NOT an official LIC premium calculator, does NOT constitute financial advice, and does NOT represent an official insurance recommendation or quotation. Exact policy terms, premiums, and underwriting eligibility are subject to formal application and official LIC evaluation."
  };
}
