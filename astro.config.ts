import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { goLiveCheck } from "./src/integrations/go-live-check";

export default defineConfig({
  site: "https://hofclin.com.br",
  trailingSlash: "never",
  devToolbar: { enabled: false },
  build: {
    format: "file",
    inlineStylesheets: "auto",
  },
  integrations: [
    goLiveCheck(),
    sitemap({
      filter: (page) => !page.includes("/og-image"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
