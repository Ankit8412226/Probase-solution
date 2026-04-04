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

  const cityRoutes = cities.map((city) => `/${city}`);
  const routes = [...staticRoutes, ...cityRoutes];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : staticRoutes.includes(route) ? 0.8 : 0.6,
  }));
}
