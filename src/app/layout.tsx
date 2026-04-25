import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
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

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  style: "italic",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexgen-elit-website.vercel.app"),
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
  description: seoConfig.description,
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
    description: seoConfig.description,
    images: [{ 
      url: seoConfig.ogImage, 
      width: 1200, 
      height: 630,
      alt: "Nexgen Elit - Systems That Run Logistics Companies" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: seoConfig.twitterHandle,
    title: seoConfig.defaultTitle,
    description: seoConfig.description,
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
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="dns-prefetch" href="https://d8j0ntlcm91z4.cloudfront.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} ${playfairDisplay.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQ8NSTJK"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1717276075602623&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <LoadingScreen />
        <CookieConsent />
        <PWAProvider />
        <TabVisibilityTracker />
        {children}
        <SiteFooter />
        <Toaster />

        {/* ───── Deferred 3rd-party scripts ─────────────────────────────────
            strategy="afterInteractive" loads AFTER hydration so they have
            zero impact on FCP, LCP, and Speed Index.
        ──────────────────────────────────────────────────────────────────── */}

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TQ8NSTJK');
            `,
          }}
        />

        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1717276075602623');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* Google AdSense */}
        <Script
          id="adsense-script"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7416978133348374"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
