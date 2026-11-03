/*
 * No-op replacement for the source project's Helmet-based SEO component.
 * Metadata is now declared per-route in head() via src/lib/seo-head.ts,
 * so ported page components can keep their original <SEO .../> calls.
 */
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO = (_props: SEOProps) => null;

export default SEO;
