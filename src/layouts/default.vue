<template>
  <main>
    <Header />
    <slot />
    <Footer />
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
