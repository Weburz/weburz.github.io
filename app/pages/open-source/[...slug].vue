<script setup lang="ts">
import type { ContentNavigationItem } from "@nuxt/content";
import { findPageHeadline } from "@nuxt/content/utils";

definePageMeta({
  layout: "docs",
});

const route = useRoute();
const { toc } = useAppConfig();
const navigation = inject<Ref<ContentNavigationItem[] | null>>("navigation");

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("openSource").path(route.path).first(),
);
const links = useTocBottomLinks(page);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings("openSource", route.path, {
    fields: ["description"],
  }),
);

const title = page.value.seo?.title || page.value.title;
const description = page.value.seo?.description || page.value.description;

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});

const headline = computed(() =>
  findPageHeadline(navigation?.value ?? undefined, page.value?.path),
);

defineOgImage("Docs", { title, description, headline: headline.value });
</script>

<template>
  <UPage v-if="page">
    <header class="mb-10">
      <div class="flex items-start gap-4">
        <div
          v-if="page.icon"
          class="size-12 shrink-0 rounded-md bg-elevated flex items-center justify-center ring-1 ring-default"
        >
          <UIcon :name="page.icon" class="size-6 text-default" />
        </div>
        <div class="flex-1 min-w-0">
          <p
            v-if="headline"
            class="text-xs uppercase tracking-wider text-muted"
          >
            {{ headline }}
          </p>
          <h1 class="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight">
            {{ page.title }}
          </h1>
          <p v-if="page.description" class="mt-3 text-lg text-muted">
            {{ page.description }}
          </p>
          <div v-if="page.tags?.length" class="mt-4 flex flex-wrap gap-1.5">
            <TechTag v-for="tag in page.tags" :key="tag" :label="tag" />
          </div>
        </div>
      </div>
      <div class="mt-6 flex items-center justify-between gap-3 flex-wrap">
        <div class="flex items-center gap-2 flex-wrap">
          <UButton
            v-for="(link, index) in page.links"
            :key="index"
            v-bind="link"
          />
        </div>
        <PageHeaderLinks />
      </div>
    </header>

    <UPageBody>
      <ContentRenderer :value="page" />

      <USeparator v-if="surround?.length" class="my-12" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template v-if="page?.body?.toc?.links?.length" #right>
      <UContentToc :title="toc?.title" :links="page.body?.toc?.links">
        <template v-if="toc?.bottom" #bottom>
          <div
            class="hidden lg:block space-y-6"
            :class="{ 'mt-6!': page.body?.toc?.links?.length }"
          >
            <USeparator v-if="page.body?.toc?.links?.length" type="dashed" />
            <UPageLinks :title="toc.bottom.title" :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
