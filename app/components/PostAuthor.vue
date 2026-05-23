<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    size?: "sm" | "md";
  }>(),
  { size: "sm" },
);

const initials = computed(() =>
  props.name
    .split(/\s+/)
    .map((s) => s[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase(),
);

const isLarge = computed(() => props.size === "md");
</script>

<template>
  <span class="inline-flex items-center gap-2">
    <span
      class="rounded-full bg-elevated text-default flex items-center justify-center font-semibold ring-1 ring-default"
      :class="isLarge ? 'size-9 text-sm' : 'size-6 text-[11px]'"
    >
      {{ initials }}
    </span>
    <span
      v-if="name"
      class="text-muted"
      :class="isLarge ? 'text-sm font-medium' : 'text-xs'"
    >
      {{ name }}
    </span>
  </span>
</template>
