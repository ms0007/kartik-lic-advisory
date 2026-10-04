"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

export interface Translations {
  nav: {
    home: string;
    whyInsurance: string;
    solutions: string;
    riders: string;
    calculator: string;
    compare: string;
    claimsGuide: string;
    resources: string;
    about: string;
    faq: string;
    contact: string;
    consultationCTA: string;
    whatsapp: string;
  };
  hero: {
    trustPill: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    zeroPressure: string;
    verifiedTerms: string;
    transparentGap: string;
  };
  trustBar: {
    licIndia: string;
    licIndiaDesc: string;
    guidance: string;
    guidanceDesc: string;
    planning: string;
    planningDesc: string;
    human: string;
    humanDesc: string;
  };
  calculator: {
    title: string;
    subtitle: string;
    disclaimer: string;
    gapFound: string;
    fullyCovered: string;
    discussCTA: string;
    discussWhatsApp: string;
    printBrief: string;
  };
  common: {
    disclaimerRibbon: string;
    callNow: string;
    verifyLic: string;
    footerDisclaimer: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      whyInsurance: "Why Insurance",
      solutions: "Plans & Solutions",
      riders: "Riders",
      calculator: "Need Calculator",
      compare: "Compare Plans",
      claimsGuide: "Claim Support",
      resources: "Resources",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      consultationCTA: "Personalised Consultation",
      whatsapp: "WhatsApp"
    },
    hero: {
      trustPill: "Personalised Financial Guidance • LIC of India",
      titleStart: "Protect the Life You’ve Built.",
      titleHighlight: "Prepare for the Life Ahead.",
      subtitle: "Understand life insurance, protection, and long-term financial security with personalized, objective guidance from Kartik Barmera, Development Officer, LIC of India.",
      ctaPrimary: "Get a Personalised Consultation",
      ctaSecondary: "Understand Your Insurance Need",
      zeroPressure: "Zero Sales Pressure",
      verifiedTerms: "Verified LIC Product Terms",
      transparentGap: "Transparent Gap Analysis"
    },
    trustBar: {
      licIndia: "LIC of India",
      licIndiaDesc: "Authorized Development Officer representation",
      guidance: "Personalised Guidance",
      guidanceDesc: "Tailored to your family milestones and income",
      planning: "Protection Planning",
      planningDesc: "Objective Human Life Value gap assessment",
      human: "Human Assistance",
      humanDesc: "Dedicated personal support for underwriting & claims"
    },
    calculator: {
      title: "Calculate Your Family's Financial Protection Gap",
      subtitle: "An educational estimation tool to evaluate how much financial coverage your dependents would realistically require if your income ceased today.",
      disclaimer: "Educational Disclaimer: This tool provides general planning approximations based on your self-reported inputs. It is NOT an official LIC premium calculator, does not provide legal quotes, and does not constitute formal underwriting or financial advice.",
      gapFound: "Protection Gap Identified",
      fullyCovered: "Fully Covered",
      discussCTA: "Discuss My Protection Needs",
      discussWhatsApp: "Discuss this Gap on WhatsApp",
      printBrief: "Save / Print Protection Brief"
    },
    common: {
      disclaimerRibbon: "Independent Advisory Portal of Kartik Barmera, Development Officer, LIC of India",
      callNow: "Call",
      verifyLic: "Verify at official LIC portal",
      footerDisclaimer: "LIC policies are subject to terms, conditions, eligibility, and underwriting. Please refer to official LIC documentation."
    }
  },
  hi: {
    nav: {
      home: "होम",
      whyInsurance: "बीमा क्यों?",
      solutions: "योजनाएं व समाधान",
      riders: "राइडर्स",
      calculator: "ज़रूरत कैलकुलेटर",
      compare: "योजनाओं की तुलना",
      claimsGuide: "क्लेम सहायता",
      resources: "रिसोर्सेज",
      about: "हमारे बारे में",
      faq: "प्रश्नोत्तरी (FAQ)",
      contact: "संपर्क करें",
      consultationCTA: "निःशुल्क परामर्श लें",
      whatsapp: "व्हाट्सएप"
    },
    hero: {
      trustPill: "व्यक्तिगत वित्तीय मार्गदर्शन • भारतीय जीवन बीमा निगम (LIC)",
      titleStart: "जो जीवन आपने संवारा है, उसकी रक्षा करें।",
      titleHighlight: "आने वाले कल के लिए तैयार रहें।",
      subtitle: "जीवन बीमा, पारिवारिक वित्तीय सुरक्षा और दीर्घकालिक बचत को समझें—कार्तिक बाड़मेरा, विकास अधिकारी (Development Officer), LIC of India के व्यक्तिगत व पारदर्शी मार्गदर्शन के साथ।",
      ctaPrimary: "व्यक्तिगत परामर्श प्राप्त करें",
      ctaSecondary: "अपनी बीमा ज़रूरत को समझें",
      zeroPressure: "बिना किसी दबाव के निष्पक्ष सलाह",
      verifiedTerms: "आधिकारिक LIC प्रमाणित शर्तें",
      transparentGap: "पारदर्शी रिस्क गैप विश्लेषण"
    },
    trustBar: {
      licIndia: "LIC of India",
      licIndiaDesc: "अधिकृत विकास अधिकारी (DO) प्रतिनिधित्व",
      guidance: "व्यक्तिगत मार्गदर्शन",
      guidanceDesc: "आपके पारिवारिक लक्ष्यों और आय के अनुरूप",
      planning: "सुरक्षा योजना",
      planningDesc: "ह्यूमन लाइफ वैल्यू (HLV) आधारित सटीक आंकलन",
      human: "विश्वसनीय मानवीय सहयोग",
      humanDesc: "पॉलिसी व क्लेम प्रक्रिया में पूर्ण व्यक्तिगत सहायता"
    },
    calculator: {
      title: "अपने परिवार का वित्तीय सुरक्षा गैप (Protection Gap) जानें",
      subtitle: "एक शैक्षणिक कैलकुलेटर जो यह आंकलन करने में मदद करता है कि यदि मुख्य कमाने वाले की आय अचानक बंद हो जाए तो आश्रितों को कितने फंड की आवश्यकता होगी।",
      disclaimer: "शैक्षणिक अस्वीकरण: यह टूल केवल सामान्य वित्तीय समझ के लिए है। यह कोई आधिकारिक LIC प्रीमियम कैलकुलेटर या कानूनी वित्तीय सलाह नहीं है।",
      gapFound: "वित्तीय सुरक्षा गैप की पहचान हुई",
      fullyCovered: "पर्याप्त कवरेज उपलब्ध है",
      discussCTA: "मेरी सुरक्षा जरूरतों पर चर्चा करें",
      discussWhatsApp: "इस गैप पर व्हाट्सएप पर चर्चा करें",
      printBrief: "सुरक्षा सारांश सेव / प्रिंट करें"
    },
    common: {
      disclaimerRibbon: "कार्तिक बाड़मेरा, विकास अधिकारी, भारतीय जीवन बीमा निगम (LIC) का स्वतंत्र परामर्श पोर्टल",
      callNow: "कॉल करें",
      verifyLic: "आधिकारिक LIC पोर्टल पर सत्यापित करें",
      footerDisclaimer: "जीवन बीमा पॉलिसियां नियमों, शर्तों, पात्रता और अंडरराइटिंग के अधीन हैं। कृपया आधिकारिक पॉलिसी दस्तावेज देखें।"
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: translations.en
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("preferred_lang") as Language;
      if (saved && (saved === "en" || saved === "hi")) {
        setLanguageState(saved);
      }
    } catch {
      // LocalStorage access safe fallback
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("preferred_lang", lang);
    } catch {
      // Safe fallback
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
