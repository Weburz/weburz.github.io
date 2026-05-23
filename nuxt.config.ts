export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "nuxt-og-image",
  ],

  devtools: {
    enabled: true,
  },

  css: ["~/assets/css/main.css"],

  site: {
    url: "https://tech.weburz.com",
    name: "Tech at Weburz",
  },

  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "neutral",
        "success",
        "info",
        "warning",
        "error",
      ],
    },
  },

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
      },
    },
    experimental: {
      sqliteConnector: "native",
    },
  },

  compatibilityDate: "2026-05-23",

  runtimeConfig: {
    public: {
      umamiWebsiteId: "",
    },
  },

  nitro: {
    prerender: {
      routes: ["/", "/blog", "/open-source", "/careers", "/rss.xml"],
      crawlLinks: true,
      autoSubfolderIndex: false,
    },
  },

  icon: {
    provider: "iconify",
  },

  ogImage: {
    zeroRuntime: true,
  },

  vite: {
    optimizeDeps: {
      include: ["@vueuse/core"],
    },
  },
});
