/**
 * Official LIC Riders Catalog
 * Riders are optional add-ons subject to base plan rules and underwriting.
 * Verified against official LIC of India records (https://licindia.in).
 */

export interface LICRider {
  id: string;
  name: string;
  uin: string;
  purpose: string;
  detailedBenefit: string;
  eligibilitySnippet: string;
  importantConditions: string[];
  keyTakeaway: string;
}

export const ridersData: LICRider[] = [
  {
    id: "accidental-death-disability",
    name: "LIC's Accidental Death and Disability Benefit Rider",
    uin: "512B209V02",
    purpose: "Provides dual financial protection in the event of accidental death or permanent total disability resulting from an accident.",
    detailedBenefit: "In case of accidental death, an additional Accident Benefit Sum Assured is paid alongside the base policy claim. In case of accidental total and permanent disability, the Accident Benefit Sum Assured is disbursed in equal monthly installments over 10 years, and future premiums for the rider and base policy (up to basic sum assured) are waived.",
    eligibilitySnippet: "Can be opted for at policy inception or on policy anniversary (if permitted by base plan). Minimum entry age: 18 years; Maximum entry age: typically 65 years.",
    importantConditions: [
      "Disability must be permanent, total, and caused exclusively by violent, accidental, external and visible means.",
      "Accident must occur during the rider term, with disability or death occurring within 180 days of the accident.",
      "Subject to overall maximum accidental cover limits set by LIC across all policies."
    ],
    keyTakeaway: "Essential for breadwinners who commute, travel, or work in active operational fields where accident risks could permanently impair earning capacity."
  },
  {
    id: "accident-benefit",
    name: "LIC's Accident Benefit Rider",
    uin: "512B203V03",
    purpose: "Specialized accidental death cover offering lump-sum financial support to nominees if demise occurs due to an accident.",
    detailedBenefit: "Pays an additional lump-sum amount equal to the Accident Benefit Sum Assured upon accidental death of the life assured, over and above the base death sum assured.",
    eligibilitySnippet: "Available to attach to eligible individual base policies. Entry age: 18 to 65 years.",
    importantConditions: [
      "Death must result directly from bodily injury caused by accidental means within 180 days.",
      "Excludes self-inflicted injury, hazardous sports, intoxication, or breaches of law.",
      "Cannot be opted alongside the Accidental Death and Disability Benefit Rider for the same cover."
    ],
    keyTakeaway: "A cost-effective way to enhance financial compensation for loved ones against unforeseen vehicular or environmental accidents."
  },
  {
    id: "premium-waiver-benefit",
    name: "LIC's Premium Waiver Benefit (PWB) Rider",
    uin: "512B204V04",
    purpose: "Shields your child's future goals by waiving all remaining future premiums if the proposer (parent) passes away.",
    detailedBenefit: "Upon the unfortunate demise of the proposer during the rider term, all future premiums payable under the base plan are completely waived. The base policy continues in full force, and all bonuses and maturity benefits are paid on schedule.",
    eligibilitySnippet: "Commonly attached to child plans (e.g., Amritbaal, Jeevan Lakshya) where proposer is parent and life assured is child.",
    importantConditions: [
      "Attached on the life of the proposer (parent). Proposer's age must be between 18 and 55 years.",
      "Lapses if the base policy is not kept in active, fully paid-up status."
    ],
    keyTakeaway: "The single most critical rider for parents, ensuring the child's education corpus reaches 100% maturity even if the parent is no longer there."
  },
  {
    id: "new-term-assurance",
    name: "LIC's New Term Assurance Rider",
    uin: "512B210V02",
    purpose: "Substantially boosts the pure risk life cover of an endowment or savings policy at economical premium rates.",
    detailedBenefit: "Provides additional pure term life cover. On unfortunate demise of the life assured during the policy term, the Term Assurance Rider Sum Assured is paid in addition to the base death benefit.",
    eligibilitySnippet: "Opted at inception of base plan. Entry age: 18 to 50/55 years depending on base policy term.",
    importantConditions: [
      "Rider sum assured cannot exceed the Basic Sum Assured of the base policy (or institutional limits).",
      "No survival or maturity benefit paid if the policyholder survives the term."
    ],
    keyTakeaway: "Allows you to double your family's financial protection under a traditional savings plan without having to purchase a separate standalone policy."
  },
  {
    id: "critical-illness-rider",
    name: "LIC's Critical Illness Health Rider",
    uin: "Verified LIC Health Add-on",
    purpose: "Provides a lump-sum financial cushion upon diagnosis of specified critical medical conditions.",
    detailedBenefit: "Disburses the Critical Illness Sum Assured upon verified first diagnosis of covered critical illnesses (such as cancer of specified severity, coronary artery bypass, stroke, or kidney failure requiring regular dialysis).",
    eligibilitySnippet: "Available with selected base policies. Entry age: 18 to 65 years.",
    importantConditions: [
      "Subject to 90-day waiting period from policy inception or revival.",
      "Strict 30-day survival period post-diagnosis is required before claim admissibility.",
      "Pre-existing conditions and early-stage non-invasive conditions are excluded as per policy wording."
    ],
    keyTakeaway: "Protects household savings from being wiped out by high-cost medical treatments and income loss during recovery."
  }
];
