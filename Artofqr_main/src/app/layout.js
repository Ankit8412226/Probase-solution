import { ThemeProvider } from "@/components/theme-provider";
import { companyProfile, serviceCatalog } from "@/content/proBaseSolution";
import { Geist_Mono, Inter, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(companyProfile.website),
  title: {
    default: `Best IT Services, Custom Software & Digital Marketing Agency in Delhi Noida | ${companyProfile.name}`,
    template: `%s | ${companyProfile.name}`,
  },
  description: "Pro Base Solution is a leading IT services and digital marketing company in Greater Noida West & Noida. We specialize in custom software development, web app development, SEO, and Meta/Google Ads to rank your business on top.",
  keywords: [
    // Delhi Noida IT Services & Software Focus
    "it services company in delhi",
    "it services in noida",
    "custom software development company delhi",
    "software development company in noida",
    "web app development company delhi",
    "web application development company noida",
    "custom software developers delhi ncr",
    "enterprise software solutions noida",
    "crm development company delhi",
    "erp software development noida",
    "saas product development company india",
    "it solutions provider greater noida",
    "it consulting services delhi ncr",
    "managed it services noida",
    "software company in greater noida",
    "it company in noida extension",

    // Digital Marketing & Web Dev Localized
    "best digital marketing agency in greater noida",
    "website development company in noida extension",
    "seo services greater noida west",
    "local seo for healthcare noida",
    "real estate digital marketing agency india",
    "google business profile optimization noida",
    "social media marketing for clinics",
    "pay per click advertising agency noida",
    "lead generation services for real estate",
    "e-commerce website developers noida",
    "digital marketing for automobile showrooms",
    "spa and wellness marketing noida",
    
    // Core Service Mappings
    ...serviceCatalog.map((service) => service.title.toLowerCase()),
  ],
  authors: [{ name: companyProfile.name }],
  creator: companyProfile.name,
  publisher: companyProfile.name,
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
    locale: "en_US",
    url: companyProfile.website,
    siteName: companyProfile.name,
    title: `Leading IT Services, Web App & Custom Software Company | ${companyProfile.name}`,
    description: "Scale your business with expert custom software engineering, high-performance web applications, ROI-driven SEO, and digital marketing in Delhi, Noida, and across India.",
    images: [
      {
        url: `${companyProfile.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} IT Services & Digital Marketing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Scale Your Business with ${companyProfile.name} IT Solutions`,
    description: "Expert IT consulting, custom software development, and digital marketing in Delhi NCR.",
    images: [`${companyProfile.website}/og-image.jpg`],
  },
  alternates: {
    canonical: companyProfile.website,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "IT Services",
};

import ChatWidget from "@/app/components/ChatWidget";

export default function RootLayout({ children }) {
  const primarySiteLinks = [
    {
      name: "Services",
      url: `${companyProfile.website}/services`,
      description: "Explore digital marketing, SEO, custom software, web apps, and IT services.",
    },
    {
      name: "Portfolio",
      url: `${companyProfile.website}/portfolio`,
      description: "Review selected client work and business growth case studies.",
    },
    {
      name: "About Us",
      url: `${companyProfile.website}/about`,
      description: "Learn about the company, founder vision, and operating approach.",
    },
    {
      name: "Contact",
      url: `${companyProfile.website}/contact`,
      description: "Get in touch for business enquiries and service consultations.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${companyProfile.website}/#organization`,
    "name": companyProfile.name,
    "url": companyProfile.website,
    "logo": `${companyProfile.website}/ProbaseLogo.jpeg`,
    "description": companyProfile.aboutDescription,
    "sameAs": [
      "https://www.facebook.com/probasesolution",
      "https://www.instagram.com/probasesolution",
      "https://www.linkedin.com/company/probasesolution"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${companyProfile.website}/#website`,
    "url": companyProfile.website,
    "name": companyProfile.name,
    "publisher": { "@id": `${companyProfile.website}/#organization` },
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${companyProfile.website}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": companyProfile.name,
    "image": `${companyProfile.website}/ProbaseLogo.jpeg`,
    "url": companyProfile.website,
    "telephone": companyProfile.phones[0],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": companyProfile.address,
      "addressLocality": "Greater Noida West",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.5355,
      "longitude": 77.3910
    },
    "areaServed": [
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Gurgaon" },
      { "@type": "City", "name": "Greater Noida" },
      { "@type": "City", "name": "Faridabad" },
      { "@type": "City", "name": "Ghaziabad" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT, Custom Software & Digital Marketing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Software Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Marketing & SEO"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Development"
          }
        }
      ]
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify([
                organizationSchema,
                websiteSchema,
                localBusinessSchema
              ])
            }}
          />
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
