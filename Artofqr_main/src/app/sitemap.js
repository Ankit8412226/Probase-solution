import { companyProfile, serviceCatalog } from "@/content/proBaseSolution";
import cities from "@/data/cities.json";

export default function sitemap() {
  const baseUrl = companyProfile.website;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/industries",
    "/careers",
    "/insights",
    "/privacy-policy",
    "/terms-conditions",
    ...serviceCatalog.map((service) => `/services/${service.slug}`),
  ];

  // Primary NCR cities for Programmatic SEO pages
  const targetCities = ["delhi", "noida", "gurgaon", "greater-noida", "noida-extension"];
  
  const targetServices = [
    "seo-company",
    "seo-services",
    "website-development",
    "web-dev",
    "custom-software",
    "software-development",
    "crm-software",
    "it-services",
    "it-company",
    "it-solutions",
    "digital-marketing",
    "ppc-agency",
    "performance-marketing",
    "ai-development-company",
    "ai-solutions-provider",
    "machine-learning-company",
    "generative-ai-services",
    "ai-voice-assistant"
  ];

  const programmaticRoutes = [];
  targetCities.forEach((city) => {
    targetServices.forEach((service) => {
      programmaticRoutes.push(`/${service}-${city}`);
    });
  });

  const cityRoutes = cities.map((city) => `/${city}`);
  
  // Combine all routes
  const routes = [...staticRoutes, ...programmaticRoutes, ...cityRoutes];

  return routes.map((route) => {
    let priority = 0.5;
    let changeFrequency = "monthly";

    if (route === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (staticRoutes.includes(route)) {
      priority = 0.8;
      changeFrequency = "weekly";
    } else if (programmaticRoutes.includes(route)) {
      priority = 0.9;
      changeFrequency = "weekly";
    } else if (targetCities.includes(route.replace("/", ""))) {
      priority = 0.85;
      changeFrequency = "weekly";
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    };
  });
}
