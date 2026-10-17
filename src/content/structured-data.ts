import { plans } from "../config/plans";
import { site } from "../config/site";

/** SoftwareApplication with both Plans as monthly Offers. No ratings: there are no real reviews yet. */
export function softwareApplicationJsonLd(): Record<string, unknown> {
  return {
    "@type": "SoftwareApplication",
    "@id": `${site.url}/#software`,
    name: site.name,
    url: site.url,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Software de gestão para clínicas de odontologia e harmonização orofacial",
    operatingSystem: "Web",
    inLanguage: site.language,
    publisher: { "@id": `${site.url}/#organization` },
    offers: plans.map((plan) => ({
      "@type": "Offer",
      name: `Plano ${plan.name}`,
      price: plan.price.toFixed(2),
      priceCurrency: "BRL",
      url: `${site.url}/#precos`,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: plan.price.toFixed(2),
        priceCurrency: "BRL",
        billingDuration: "P1M",
        unitCode: "MON",
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}
