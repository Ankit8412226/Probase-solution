"use client";

import Link from "next/link";
import Script from "next/script";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  const fullItems = [{ label: "Home", href: "/" }, ...items];

  const schemaItems = fullItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: item.href.startsWith("http")
      ? item.href
      : `https://www.probasesolution.com${item.href}`,
  }));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems,
  };

  return (
    <>
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="w-full py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 overflow-x-auto whitespace-nowrap scrollbar-none">
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={idx} className="inline-flex items-center space-x-2">
                {idx > 0 && <ChevronRight size={14} className="text-gray-400 dark:text-gray-600" />}
                {isLast ? (
                  <span className="font-semibold text-purple-600 dark:text-purple-400">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-gray-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {idx === 0 && <Home size={14} />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
