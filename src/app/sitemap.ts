import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/about", "/services", "/contact"].map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: new Date(),
  }));
}
