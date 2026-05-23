<script setup lang="ts">
const { data: projects } = await useAsyncData("open-source-index", () =>
  queryCollection("openSource").order("title", "ASC").all(),
);

useSeoMeta({
  title: "Open Source",
  ogTitle: "Open Source",
  description: "Open-source projects from the Weburz team.",
  ogDescription: "Open-source projects from the Weburz team.",
});

defineOgImage("Docs", {
  title: "Open Source",
  description: "Open-source projects from the Weburz team.",
});
</script>

<template>
  <UContainer class="py-12 sm:py-16">
    <header class="max-w-3xl">
      <p class="text-xs uppercase tracking-wider text-muted">Open Source</p>
      <h1 class="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">
        Tools we build in the open.
      </h1>
      <p class="mt-3 text-muted">
        Small libraries we extracted from real Weburz projects and published
        under
        <NuxtLink to="https://github.com/Weburz" class="underline">
          github.com/Weburz </NuxtLink
        >. Each one has its own docs page below.
      </p>
    </header>

    <section v-if="projects?.length" class="mt-12 grid sm:grid-cols-2 gap-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.path"
        :project="project"
      />
    </section>
    <section v-else class="mt-12 text-muted border-t border-default pt-6">
      Nothing here yet.
    </section>
  </UContainer>
</template>
