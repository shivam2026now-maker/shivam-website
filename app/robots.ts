import type { MetadataRoute } from "next";

const productionDomain =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "shiwamchandravanshii.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/sanity-test", "/research-test"],
      },
    ],
    sitemap: `https://${productionDomain}/sitemap.xml`,
  };
}
