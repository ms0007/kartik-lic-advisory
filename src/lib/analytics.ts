/**
 * Privacy-Aware Client Event Analytics
 * Strictly captures interaction telemetry without collecting PII (no names, phones, or bank info).
 */

export type AnalyticsEvent = 
  | 'page_view'
  | 'contact_click'
  | 'call_click'
  | 'whatsapp_click'
  | 'consultation_started'
  | 'consultation_completed'
  | 'calculator_started'
  | 'calculator_completed'
  | 'policy_resource_viewed'
  | 'faq_opened'
  | 'resource_viewed';

export function trackEvent(eventName: AnalyticsEvent, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;

  // Sanitize params to ensure no PII is accidentally passed
  const safeParams: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(params)) {
    if (['name', 'phone', 'email', 'address', 'aadhaar', 'pan'].includes(key.toLowerCase())) {
      continue;
    }
    safeParams[key] = value;
  }

  // Google Analytics 4 gtag support if configured
  if (typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === 'function') {
    (window as unknown as { gtag: (type: string, name: string, data: Record<string, unknown>) => void }).gtag(
      'event',
      eventName,
      safeParams
    );
  }

  // Developer logging in non-production
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Analytics Event] ${eventName}`, safeParams);
  }
}
