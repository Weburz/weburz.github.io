<template>
  <header>
    <nav>
      <span>Tech at Weburz</span>
      <ol class="nav-items">
        <li>
          <NuxtLink href="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/blog">Blog</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/technology">Technology</NuxtLink>
        </li>
      </ol>
    </nav>
  </header>
</template>

<script setup lang="ts">
console.log("Hello World!");
</script>

<style lang="scss" scoped>
nav {
  color: #fff;
  display: flex;
  justify-content: space-between;

  .nav-items {
    display: flex;
    gap: 1.75rem;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
}
</style>
