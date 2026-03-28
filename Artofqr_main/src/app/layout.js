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
    default: `${companyProfile.name} | ${companyProfile.tagline}`,
    template: `%s | ${companyProfile.name}`,
  },
  description: companyProfile.aboutDescription,
  keywords: [
    "digital marketing company",
    "web development company",
    "local seo services",
    "social media marketing agency",
    "google business profile optimization",
    "paid advertising agency",
    "lead generation campaigns",
    "content and creative marketing",
    "greater noida digital marketing",
    "website development greater noida west",
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
    title: `${companyProfile.name} | ${companyProfile.tagline}`,
    description: companyProfile.heroDescription,
    images: [
      {
        url: `${companyProfile.website}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${companyProfile.name} digital growth services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyProfile.name} | ${companyProfile.tagline}`,
    description: companyProfile.heroDescription,
    images: [`${companyProfile.website}/og-image.jpg`],
  },
  alternates: {
    canonical: companyProfile.website,
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/icons/SUHTechLogo (1).svg",
    shortcut: "/icons/SUHTechLogo (1).svg",
    apple: "/icons/SUHTechLogo (1).svg",
  },
  category: "Marketing",
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyProfile.name,
    url: companyProfile.website,
    logo: `${companyProfile.website}/icons/SUHTechLogo%20(1).svg`,
    description: companyProfile.aboutDescription,
    email: companyProfile.email,
    telephone: companyProfile.phones[0],
    founder: companyProfile.founder,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyProfile.address,
      addressLocality: "Greater Noida West",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    makesOffer: serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: companyProfile.name,
    image: `${companyProfile.website}/og-image.jpg`,
    url: companyProfile.website,
    telephone: companyProfile.phones[0],
    email: companyProfile.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyProfile.address,
      addressLocality: "Greater Noida West",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    description: companyProfile.heroDescription,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyProfile.name,
    url: companyProfile.website,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${companyProfile.website}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistMono.variable} ${inter.variable} ${poppins.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Script
            id="organization-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <Script
            id="local-business-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <Script
            id="website-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
