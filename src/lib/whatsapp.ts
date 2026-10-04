import { advisorData } from "@/data/advisor";

/**
 * Contextual WhatsApp Link Generator
 * Automatically formats verified contact number and URL-encoded message.
 */
export function buildWhatsAppLink(customMessage?: string): string {
  const number = advisorData.whatsappNumber; // 918559916040
  const message = customMessage || advisorData.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

export function buildPlanWhatsAppLink(planName: string, tableNo?: string): string {
  const msg = `Hello Kartik Ji, I am reviewing ${planName}${tableNo ? ` (Table ${tableNo})` : ''} on your website and would like to understand its eligibility, terms, and how it fits my family's financial goals.`;
  return buildWhatsAppLink(msg);
}

export function buildRiderWhatsAppLink(riderName: string): string {
  const msg = `Hello Kartik Ji, I would like to understand more about adding ${riderName} to an LIC policy and its specific coverage terms.`;
  return buildWhatsAppLink(msg);
}

export function buildCalculatorWhatsAppLink(gapAmountFormatted: string): string {
  const msg = `Hello Kartik Ji, I completed your Protection Need Calculator and found an estimated protection gap of ${gapAmountFormatted}. I would appreciate your personalized guidance to explore suitable LIC plans to bridge this gap.`;
  return buildWhatsAppLink(msg);
}

export function buildScenarioWhatsAppLink(scenarioTitle: string): string {
  const msg = `Hello Kartik Ji, I read about the '${scenarioTitle}' scenario on your website. My family situation is quite similar, and I would like your guidance on securing our future.`;
  return buildWhatsAppLink(msg);
}
