<template>
  <header>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra.
  </header>
  <section>
    <!-- Example blog -->
    <div>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit
      </p>
      <hr />
      <span>Somraj Saha</span>
      <span>{{
        new Date().toLocaleDateString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
      }}</span>
    </div>
  </section>
</template>
