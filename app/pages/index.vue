<script setup lang="ts">
const { seo } = useAppConfig();

const { data: posts } = await useAsyncData("home-posts", () =>
  queryCollection("blog").order("date", "DESC").all(),
);
const { data: projects } = await useAsyncData("home-projects", () =>
  queryCollection("openSource").order("title", "ASC").all(),
);

const featured = computed(() => posts.value?.[0]);
const rest = computed(() => posts.value?.slice(1) ?? []);

useSeoMeta({
  titleTemplate: "",
  title: seo?.siteName,
  ogTitle: seo?.siteName,
  description:
    "Engineering writing and open-source projects from the Weburz team.",
  ogDescription:
    "Engineering writing and open-source projects from the Weburz team.",
});

defineOgImage("Docs", {
  title: seo?.siteName,
  description:
    "Engineering writing and open-source projects from the Weburz team.",
});
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <section class="max-w-3xl">
      <p class="text-xs uppercase tracking-wider text-muted">Tech at Weburz</p>
      <h1
        class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
      >
        Engineering notes from the team behind
        <NuxtLink
          to="https://weburz.com"
          class="underline decoration-primary decoration-2 underline-offset-4"
          >weburz.com</NuxtLink
        >.
      </h1>
      <p class="mt-4 text-base sm:text-lg text-muted">
        Architecture decisions, production lessons, and the small open-source
        tools we build along the way.
      </p>
    </section>

    <section v-if="featured" class="mt-16 sm:mt-20">
      <p class="text-xs uppercase tracking-wider text-muted mb-6">Featured</p>
      <PostCard :post="featured" featured />
    </section>

    <section v-if="rest.length" class="mt-16 sm:mt-20">
      <p class="text-xs uppercase tracking-wider text-muted mb-6">
        Recent posts
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
        <PostCard v-for="post in rest" :key="post.path" :post="post" />
      </div>
    </section>

    <section v-if="!posts?.length" class="mt-16 text-muted">
      No posts yet — check back soon.
    </section>

    <section v-if="projects?.length" class="mt-20 sm:mt-24">
      <div class="flex items-end justify-between gap-4 mb-6">
        <p class="text-xs uppercase tracking-wider text-muted">Open source</p>
        <NuxtLink
          to="/open-source"
          class="text-sm text-muted hover:text-default underline-offset-4 hover:underline"
        >
          View all →
        </NuxtLink>
      </div>
      <div class="grid sm:grid-cols-2 gap-4">
        <ProjectCard
          v-for="project in projects"
          :key="project.path"
          :project="project"
        />
      </div>
    </section>
  </UContainer>
</template>
