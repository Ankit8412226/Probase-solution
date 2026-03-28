"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { companyProfile, serviceCatalog } from "@/content/proBaseSolution";

function FooterSection() {
  const footerLinks = [
    {
      title: "Services",
      links: serviceCatalog.slice(0, 4).map((service) => ({
        name: service.title,
        href: `/services/${service.slug}`,
      })),
    },
    {
      title: "More Services",
      links: serviceCatalog.slice(4, 8).map((service) => ({
        name: service.title,
        href: `/services/${service.slug}`,
      })),
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/portfolio" },
        { name: "About us", href: "/industries" },
        { name: "Contact", href: "/contact" },
        { name: "All Services", href: "/services" },
      ],
    },
  ];

  return (
    <footer className="relative bg-gray-50 dark:bg-gray-900/50 pt-12 md:pt-16 pb-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-left md:text-center lg:text-left">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 md:mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-4">
            <Link href="/" className="inline-block mb-5 sm:mb-6">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                {companyProfile.name}
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base max-w-md md:mx-auto lg:mx-0 md:text-center lg:text-left">
              {companyProfile.aboutDescription}
            </p>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-start gap-3 md:justify-center lg:justify-start">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <div>{companyProfile.phones.join(" | ")}</div>
              </div>
              <div className="flex items-start gap-3 md:justify-center lg:justify-start">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href={`mailto:${companyProfile.email}`} className="hover:text-primary transition-colors">
                  {companyProfile.email}
                </a>
              </div>
              <div className="flex items-start gap-3 md:justify-center lg:justify-start">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <div>{companyProfile.address}</div>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {footerLinks.map((section, index) => (
              <div key={index} className="md:text-center lg:text-left">
                <h3 className="font-semibold sm:font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">
                  {section.title}
                </h3>
                <ul className="space-y-2.5 sm:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xs sm:text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} {companyProfile.name}. All rights reserved.
            </p>
            <div className="flex gap-3 sm:gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-conditions"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
