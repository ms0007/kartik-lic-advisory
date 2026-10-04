import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { 
  SITE_URL, 
  getPersonSchema, 
  getWebsiteSchema, 
  getAdvisoryServiceSchema 
} from "@/lib/schema";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b2046",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kartik Barmera | LIC Development Officer | Financial Protection & Life Insurance Advisory",
    template: "%s | Kartik Barmera - LIC Development Officer"
  },
  description: "Personalised life insurance guidance, family protection gap analysis, child education security, and retirement planning by Kartik Barmera, Development Officer, LIC of India.",
  keywords: [
    "Kartik Barmera",
    "LIC Development Officer",
    "LIC of India",
    "Life Insurance Advisor India",
    "Term Insurance Guidance",
    "Child Education Plan LIC",
    "Retirement Annuity LIC",
    "Protection Need Calculator",
    "Family Financial Security"
  ],
  authors: [{ name: "Kartik Barmera, Development Officer, LIC of India", url: SITE_URL }],
  creator: "Kartik Barmera",
  publisher: "Kartik Barmera",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Kartik Barmera | LIC Development Officer | Life Insurance & Protection Advisory",
    description: "Understand life insurance, protection gap analysis, and long-term financial security with personalized guidance from Kartik Barmera, Development Officer, LIC of India.",
    siteName: "Kartik Barmera - LIC Insurance Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kartik Barmera | LIC Development Officer",
    description: "Personalised LIC insurance guidance, protection gap analysis, and retirement planning.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = getPersonSchema();
  const websiteJsonLd = getWebsiteSchema();
  const serviceJsonLd = getAdvisoryServiceSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
