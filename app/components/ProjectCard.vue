<script setup lang="ts">
defineProps<{
  project: {
    path?: string;
    title?: string;
    description?: string;
    icon?: string;
    tags?: string[];
  };
}>();
</script>

<template>
  <NuxtLink
    :to="project.path"
    class="group block border border-default rounded-lg p-6 bg-default hover:bg-elevated/40 transition-colors"
  >
    <div class="flex items-start gap-4">
      <div
        class="size-10 shrink-0 rounded-md bg-elevated flex items-center justify-center ring-1 ring-default"
      >
        <UIcon
          :name="project.icon || 'i-lucide-package'"
          class="size-5 text-default"
        />
      </div>
      <div class="flex-1 min-w-0">
        <h3
          class="text-lg font-semibold tracking-tight group-hover:underline decoration-2 underline-offset-4"
        >
          {{ project.title }}
        </h3>
        <p v-if="project.description" class="mt-2 text-sm text-muted">
          {{ project.description }}
        </p>
        <div v-if="project.tags?.length" class="mt-4 flex flex-wrap gap-1.5">
          <TechTag v-for="tag in project.tags" :key="tag" :label="tag" />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
