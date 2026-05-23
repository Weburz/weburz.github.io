<script setup lang="ts">
definePageMeta({
  layout: "blog",
});

const route = useRoute();
const { toc } = useAppConfig();

const { data: page } = await useAsyncData(route.path, () =>
  queryCollection("blog").path(route.path).first(),
);
const links = useTocBottomLinks(page);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Post not found",
    fatal: true,
  });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryCollectionItemSurroundings("blog", route.path, {
    fields: ["description", "date"],
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

const formatted = useFormattedDate(() => page.value?.date, "long");

defineOgImage("Docs", {
  title,
  description,
  headline: page.value.category || undefined,
});
</script>

<template>
  <UPage v-if="page">
    <header class="mb-10 sm:mb-12">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 flex-wrap">
          <CategoryChip v-if="page.category" :category="page.category" />
          <time
            v-if="formatted"
            :datetime="formatted.iso"
            class="text-sm text-muted"
          >
            {{ formatted.display }}
          </time>
        </div>

        <h1
          class="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
        >
          {{ page.title }}
        </h1>

        <p v-if="page.description" class="mt-4 text-lg text-muted">
          {{ page.description }}
        </p>
      </div>

      <div class="mt-8">
        <CategoryArt
          :category="page.category"
          :cover="page.cover"
          :alt="page.title"
        />
      </div>

      <div
        class="mt-8 pt-6 border-t border-default flex items-center justify-between gap-4 flex-wrap"
      >
        <PostAuthor v-if="page.author" :name="page.author" size="md" />
        <span v-else />
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
