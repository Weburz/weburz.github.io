<script setup lang="ts">
const { seo } = useAppConfig();
const { umamiWebsiteId } = useRuntimeConfig().public;

const { data: navigation } = await useAsyncData("navigation", () =>
  queryCollectionNavigation("openSource"),
);
const { data: files } = useLazyAsyncData(
  "search",
  async () => {
    const [openSource, blog] = await Promise.all([
      queryCollectionSearchSections("openSource"),
      queryCollectionSearchSections("blog"),
    ]);
    return [...openSource, ...blog];
  },
  {
    server: false,
  },
);

useHead({
  meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
  link: [
    { rel: "icon", type: "image/svg+xml", href: "/weburz-mark.svg" },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: "summary_large_image",
});

if (umamiWebsiteId) {
  useHead({
    script: [
      {
        async: true,
        src: "https://umami.weburz.com/script.js",
        "data-website-id": umamiWebsiteId,
      },
    ],
  });
}

provide("navigation", navigation);
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="navigation" />
    </ClientOnly>
  </UApp>
</template>
