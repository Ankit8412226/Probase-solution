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
    default: `Best Digital Marketing & Web Development Agency in Greater Noida | ${companyProfile.name}`,
    template: `%s | ${companyProfile.name}`,
  },
  description: "Pro Base Solution is a leading digital marketing company in Greater Noida West. We provide SEO, website development, Meta & Google Ads, and Social Media Marketing for healthcare, real estate, and local businesses.",
  keywords: [
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
    title: `Leading Digital Marketing & Web Growth Agency | ${companyProfile.name}`,
    description: "Empower your local brand with expert SEO, high-converting websites, and precision advertising. Specializing in healthcare, real estate, and local service growth.",
    images: [
      {
        url: `${companyProfile.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} Digital Marketing Services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Grow Your Local Brand with ${companyProfile.name}`,
    description: "Expert digital marketing and web development services to scale your business in Greater Noida and beyond.",
    images: [`${companyProfile.website}/og-image.jpg`],
  },
  alternates: {
    canonical: companyProfile.website,
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Digital Marketing",
};

import ChatWidget from "@/app/components/ChatWidget";

export default function RootLayout({ children }) {
  const primarySiteLinks = [
    {
      name: "Services",
      url: `${companyProfile.website}/services`,
      description: "Explore digital marketing, SEO, ads, and web development services.",
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
      "https://www.linkedin.com/company/pro-base-solution"
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
