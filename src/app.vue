<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Tech at Weburz` : "Tech at Weburz";
  },
  link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
});
</script>

<style lang="scss">
body {
  background-color: #090d1f;
}

main {
  min-height: 100vh;
  padding: 2rem 4rem;
}
</style>
