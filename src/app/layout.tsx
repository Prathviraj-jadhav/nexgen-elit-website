import type { Metadata, Viewport } from "next";
import { Montserrat, Instrument_Serif, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import TabVisibilityTracker from "@/components/tab-visibility-tracker";
import LoadingScreen from "@/components/LoadingScreen";
import { SiteFooter } from "@/components/SiteFooter";
import { seoConfig } from "@/config/seo";
import { CookieConsent } from "@/components/CookieConsent";
import { PWAProvider } from "@/components/PWAProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.defaultTitle,
    template: seoConfig.titleTemplate,
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nexgen Elit",
  },
  description:
    "Nexgen Elit - India's first logistics-dedicated digital technology company. We build systems that make logistics companies visible, structured, and chosen.",
  keywords: [
    'logistics technology company India',
    'freight management software',
    'logistics digital transformation',
    '3PL software solutions',
    'fleet management system India',
    'logistics website development',
    'freight forwarder software',
    'supply chain technology partner',
    'logistics CRM India',
    'logistics branding agency',
  ],
  category: 'technology',
  icons: {
    icon: "/icons.png",
  },
  // AI crawler discovery points to llm.txt for structured site understanding
  alternates: {
    canonical: 'https://nexgenelit.com',
    types: {
      'text/plain': 'https://nexgenelit.com/llm.txt',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexgenelit.com",
    siteName: "Nexgen Elit",
    title: seoConfig.defaultTitle,
    description:
      "Nexgen Elit - India's first logistics-dedicated digital technology company. We build systems that make logistics companies visible, structured, and chosen.",
    images: [{ url: seoConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitterHandle,
    title: seoConfig.defaultTitle,
    description:
      "Nexgen Elit - India's first logistics-dedicated digital technology company. We build systems that make logistics companies visible, structured, and chosen.",
    images: [seoConfig.ogImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* llm.txt AI crawler discovery link (llmstxt.org standard) */}
        <link rel="llms-txt" type="text/plain" href="https://nexgenelit.com/llm.txt" />
        <link rel="apple-touch-icon" href="/nexgenelit.png" />
      </head>
      <body
        className={`${montserrat.variable} ${instrumentSerif.variable} ${poppins.variable} antialiased`}
      >
        <LoadingScreen />
        <CookieConsent />
        <PWAProvider />
        <TabVisibilityTracker />
        {children}
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  );
}
