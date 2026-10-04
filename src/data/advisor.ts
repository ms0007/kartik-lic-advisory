/**
 * Client & Advisory Identity Configuration
 * Strictly adheres to client-provided factual boundaries.
 * No fabricated credentials, awards, years of experience, or client counts.
 */

export interface AdvisorProfile {
  name: string;
  designation: string;
  organization: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  defaultWhatsAppMessage: string;
  officeAddress: string;
  email: string;
  branchDetails: string;
  market: string;
  primaryObjective: string;
  disclaimerText: string;
  humanTrustPledge: string;
}

export const advisorData: AdvisorProfile = {
  name: "Kartik Barmera",
  designation: "Development Officer",
  organization: "Life Insurance Corporation of India (LIC of India)",
  phone: "8559916040",
  displayPhone: "+91 85599 16040",
  whatsappNumber: "918559916040",
  defaultWhatsAppMessage: "Hello Kartik Ji, I visited your advisory website and would like personal guidance on understanding LIC insurance solutions suitable for my family's needs.",
  officeAddress: "[OFFICE ADDRESS TO BE PROVIDED]",
  email: "[EMAIL TO BE PROVIDED]",
  branchDetails: "[OFFICIAL LIC BRANCH / DIVISION DETAILS TO BE VERIFIED]",
  market: "India",
  primaryObjective: "Provide personalized, transparent, and qualified advisory on LIC life insurance and family financial protection.",
  disclaimerText: "Independent professional advisory website operated by Kartik Barmera, Development Officer, LIC of India. This is not the official corporate website of LIC of India. LIC policies are subject to terms, conditions, eligibility, underwriting, and official policy documentation. Please verify exact conditions at https://licindia.in.",
  humanTrustPledge: "Insurance decisions are deeply personal and impact generations. Our role as an LIC Development Officer is to help you understand your real financial risks, calculate your family's protection gap, and explore appropriate solutions—without sales pressure, hidden conditions, or misleading promises."
};
