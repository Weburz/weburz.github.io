<script setup lang="ts">
import { getCategoryStyle } from "~/utils/categories";

const props = defineProps<{ category: string }>();
const style = computed(() => getCategoryStyle(props.category));
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
    :style="{
      backgroundColor: style.from,
      color: style.to,
      borderColor: style.to + '33',
    }"
  >
    <UIcon :name="style.icon" class="size-3" />
    {{ category }}
  </span>
</template>
