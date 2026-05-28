import cities from "@/data/cities.json";

export const targetServices = [
  { id: "seo-company", name: "SEO Company", category: "SEO" },
  { id: "seo-services", name: "SEO Services", category: "SEO" },
  { id: "website-development", name: "Website Development", category: "Web Dev" },
  { id: "web-dev", name: "Web Development", category: "Web Dev" },
  { id: "custom-software", name: "Custom Software Development", category: "Software Dev" },
  { id: "software-development", name: "Software Development", category: "Software Dev" },
  { id: "crm-software", name: "CRM Software Development", category: "Software Dev" },
  { id: "it-services", name: "IT Services", category: "IT Services" },
  { id: "it-company", name: "IT Company", category: "IT Services" },
  { id: "it-solutions", name: "IT Solutions", category: "IT Services" },
  { id: "digital-marketing", name: "Digital Marketing Agency", category: "Digital Marketing" },
  { id: "ppc-agency", name: "PPC Agency", category: "Digital Marketing" },
  { id: "performance-marketing", name: "Performance Marketing Agency", category: "Digital Marketing" },
  { id: "ai-development-company", name: "AI Development Company", category: "AI Solutions" },
  { id: "ai-solutions-provider", name: "AI Solutions Provider", category: "AI Solutions" },
  { id: "machine-learning-company", name: "Machine Learning Company", category: "AI Solutions" },
  { id: "generative-ai-services", name: "Generative AI Services", category: "AI Solutions" },
  { id: "ai-voice-assistant", name: "AI Voice Assistant Developers", category: "AI Solutions" }
];

export const targetCities = [
  "delhi",
  "noida",
  "gurgaon",
  "greater-noida",
  "noida-extension",
  "mumbai",
  "bengaluru",
  "pune",
  "hyderabad",
  "chennai",
  "kolkata",
  "ahmedabad"
];

export function formatCityName(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function parseSeoSlug(slug) {
  const normalized = slug.toLowerCase();
  
  // 1. Direct city check
  if (cities.includes(normalized)) {
    return {
      isValid: true,
      type: "city",
      city: normalized,
      cityName: formatCityName(normalized),
      serviceId: null,
      serviceName: "IT Services & Digital Marketing Solutions",
      category: "General"
    };
  }

  // 2. Programmatic service-city check
  for (const service of targetServices) {
    if (normalized.startsWith(`${service.id}-`)) {
      const cityPart = normalized.slice(service.id.length + 1);
      if (cities.includes(cityPart)) {
        return {
          isValid: true,
          type: "service-city",
          city: cityPart,
          cityName: formatCityName(cityPart),
          serviceId: service.id,
          serviceName: service.name,
          category: service.category
        };
      }
    }
  }

  return { isValid: false };
}
