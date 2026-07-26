import { companyProfile, serviceCatalog } from "@/content/proBaseSolution";
import cities from "@/data/cities.json";
import { targetCities, targetServices } from "@/lib/seo-helper";

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
    "/case-studies",
    "/privacy-policy",
    "/terms-conditions",
    ...serviceCatalog.map((service) => `/services/${service.slug}`),
  ];

  const targetServiceIds = targetServices.map((service) => service.id);

  const programmaticRoutes = [];
  targetCities.forEach((city) => {
    targetServiceIds.forEach((service) => {
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
