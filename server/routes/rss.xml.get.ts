import { getSiteConfig } from "#site-config/server/composables";
import { queryCollection } from "@nuxt/content/server";

const escape = (s: string | undefined) =>
  (s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export default eventHandler(async (event) => {
  const site = getSiteConfig(event);
  const baseUrl = site.url;

  const posts = await queryCollection(event, "blog")
    .order("date", "DESC")
    .all();

  const items = posts
    .map((p) => {
      const link = `${baseUrl}${p.path}`;
      const pubDate = new Date(p.date ?? Date.now()).toUTCString();
      const author = p.author ? `<author>${escape(p.author)}</author>` : "";
      const category = p.category
        ? `<category>${escape(p.category)}</category>`
        : "";
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escape(p.description)}</description>
      <pubDate>${pubDate}</pubDate>
      ${author}
      ${category}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(site.name)}</title>
    <link>${baseUrl}</link>
    <description>Engineering writing from the Weburz team.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  setHeader(event, "Content-Type", "application/rss+xml; charset=utf-8");
  return xml;
});
