// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap"
import icon from "astro-icon";

export default defineConfig({
  site: "https://ihsanomia.my.id",
  integrations: [
    preact(),
    icon(),
    sitemap({
      entryLimit: 50000, // Tingkatkan limit jika banyak halaman
      customPages: ['https://ihsanomia.my.id/'], // Pastikan home page termasuk
      filter: (page) => {
        // Filter yang lebih longgar
        return !page.includes('admin') && 
               !page.includes('private') &&
               !page.endsWith('.json');
      }
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});
