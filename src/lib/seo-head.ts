/*
 * Per-page SEO metadata, ported from the source project's SEO.tsx
 * (react-helmet-async). Each route declares it in its head() option.
 */
export const SITE_NAME = "Stratus Project Group";
export const BASE_URL = "https://stratusprojectgroup.com.au";
export const OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export interface PageSeo {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

export function pageHead(seo: PageSeo) {
  const fullTitle = seo.title.startsWith(SITE_NAME)
    ? seo.title
    : `${seo.title} | ${SITE_NAME}`;
  const canonicalUrl = seo.canonical ? `${BASE_URL}${seo.canonical}` : undefined;

  const meta: Array<Record<string, string>> = [
    { title: fullTitle },
    { name: "description", content: seo.description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: seo.description },
    { property: "og:image", content: OG_IMAGE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: OG_IMAGE },
  ];
  if (canonicalUrl) meta.push({ property: "og:url", content: canonicalUrl });
  if (seo.noindex) meta.push({ name: "robots", content: "noindex, nofollow" });

  const links = canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [];

  return { meta, links };
}
