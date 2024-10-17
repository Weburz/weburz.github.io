<template>
  <main>
    <header>
      <nav class="nav">
        <div>Tech at Weburz</div>
        <ol class="nav-items">
          <li>
            <NuxtLink href="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/blog">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/foss-projects">FOSS Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink href="/tech-stack">Technology Stack</NuxtLink>
          </li>
        </ol>
      </nav>
    </header>
    <slot />
    <footer>
      <small>
        Weburz LLC &copy; 2024-{{ new Date().getFullYear() }} &middot; Made with
        open-source ❤️
      </small>
    </footer>
  </main>
</template>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;

  .nav-items {
    display: flex;
    gap: 1.75rem;

    a {
      text-decoration: none;
    }
  }
}
</style>
