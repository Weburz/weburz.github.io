<script setup lang="ts">
const { data: posts } = await useAsyncData("blog-index", () =>
  queryCollection("blog").order("date", "DESC").all(),
);

useSeoMeta({
  title: "Blog",
  ogTitle: "Blog",
  description: "Engineering write-ups from the Weburz team.",
  ogDescription: "Engineering write-ups from the Weburz team.",
});

defineOgImage("Docs", {
  title: "Blog",
  description: "Engineering write-ups from the Weburz team.",
});
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <header class="max-w-3xl">
      <p class="text-xs uppercase tracking-wider text-muted">Blog</p>
      <h1 class="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
        Long-form engineering write-ups.
      </h1>
      <p class="mt-3 text-muted">
        Architecture decisions, production lessons, and tooling deep-dives from
        the Weburz team.
      </p>
    </header>

    <section
      v-if="posts?.length"
      class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12"
    >
      <PostCard v-for="post in posts" :key="post.path" :post="post" />
    </section>
    <section v-else class="mt-12 text-muted border-t border-default pt-6">
      No posts yet — check back soon.
    </section>
  </UContainer>
</template>
