<script setup lang="ts">
const props = defineProps<{
  post: {
    path?: string;
    title?: string;
    description?: string;
    date?: string | Date;
    author?: string;
    category?: string;
    cover?: string;
  };
  featured?: boolean;
}>();

const formatted = useFormattedDate(() => props.post.date, "short");
</script>

<template>
  <NuxtLink :to="post.path" class="group block">
    <div
      class="flex flex-col gap-5"
      :class="featured ? 'sm:flex-row sm:gap-8 sm:items-center' : ''"
    >
      <div :class="featured ? 'sm:w-3/5 shrink-0' : 'w-full'">
        <CategoryArt
          :category="post.category"
          :cover="post.cover"
          :alt="post.title"
        />
      </div>

      <div class="flex-1 min-w-0 flex flex-col gap-3">
        <div class="flex items-center gap-3 flex-wrap">
          <CategoryChip v-if="post.category" :category="post.category" />
          <time
            v-if="formatted"
            :datetime="formatted.iso"
            class="text-xs text-muted"
          >
            {{ formatted.display }}
          </time>
        </div>

        <h2
          class="font-semibold text-default tracking-tight group-hover:underline decoration-2 underline-offset-4"
          :class="
            featured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-lg sm:text-xl'
          "
        >
          {{ post.title }}
        </h2>

        <p
          v-if="post.description"
          class="text-muted"
          :class="featured ? 'sm:text-lg' : 'text-sm'"
        >
          {{ post.description }}
        </p>

        <PostAuthor v-if="post.author" :name="post.author" />
      </div>
    </div>
  </NuxtLink>
</template>
