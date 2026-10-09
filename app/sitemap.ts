import type { MetadataRoute } from "next";
import { client } from "@/lib/sanity";

const productionDomain =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "shiwamchandravanshii.vercel.app";
const siteUrl = `https://${productionDomain}`;

type PublishedRoute = {
  _type: "article" | "research" | "project" | "journal";
  slug: string;
  _updatedAt?: string;
  publishedAt?: string;
};

const staticRoutes: MetadataRoute.Sitemap = [
  { url: siteUrl, changeFrequency: "weekly", priority: 1 },
  { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${siteUrl}/articles`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${siteUrl}/research`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${siteUrl}/projects`, changeFrequency: "weekly", priority: 0.8 },
  { url: `${siteUrl}/journal`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${siteUrl}/media`, changeFrequency: "weekly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const publishedRoutes: PublishedRoute[] = await client.fetch(`
      *[
        _type in ["article", "research", "project", "journal"] &&
        defined(slug.current) &&
        !(_id in path("drafts.**"))
      ]{
        _type,
        "slug": slug.current,
        _updatedAt,
        publishedAt
      }
    `);

    const contentRoutes = publishedRoutes.map((item) => ({
      url: `${siteUrl}/${item._type === "project" ? "projects" : item._type === "journal" ? "journal" : item._type === "research" ? "research" : "articles"}/${item.slug}`,
      lastModified: item.publishedAt ?? item._updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    return [...staticRoutes, ...contentRoutes];
  } catch {
    return staticRoutes;
  }
}
