<script setup lang="ts">
defineProps<{ label: string }>();
</script>

<template>
  <span
    class="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-elevated text-muted ring-1 ring-default"
  >
    {{ label }}
  </span>
</template>
