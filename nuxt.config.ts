import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/main.scss" as *;',
        },
      },
    },
  },
  modules: ["@nuxt/eslint"],
  compatibilityDate: "2024-07-19",
});
