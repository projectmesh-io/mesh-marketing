// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Static output: a marketing site is files on Cloudflare Pages
// (`wrangler pages deploy dist`). Add @astrojs/cloudflare only for a page
// that must render per request.
export default defineConfig({
  site: "https://projectmesh.io",
  output: "static",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
