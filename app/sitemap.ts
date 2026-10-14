import type { MetadataRoute } from "next";
import { SITE_URL } from "./utils/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/experience",
    "/services",
    "/personal-harness",
    "/privacy",
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
  }));
}
