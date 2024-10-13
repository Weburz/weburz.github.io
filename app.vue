<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} | Tech at Weburz` : "Tech at Weburz";
  },
  link: [{ rel: "icon", type: "image/svg+xml", href: "./favicon.svg" }],
});
</script>

<style lang="scss">
@use "~/assets/styles/main.scss" as *;
</style>
