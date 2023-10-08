<script>
  import Header from "$lib/components/shared/header.svelte"
  import ThemeToggle from "$lib/components/shared/theme-toggle.svelte"
</script>

<Header>
  <svelte:fragment slot="left">Stud's Lit Kit</svelte:fragment>

  <svelte:fragment slot="right">
    <ThemeToggle />
    <a href='/' class="btn btn-primary">Logout</a>
  </svelte:fragment>
</Header>

<section>
  <nav />

  <main>
    <slot />
  </main>
</section>

<style lang="postcss">
  section {
    @apply flex h-[var(--body-height)] w-full;
  }
  nav {
    @apply h-full bg-base-200/50 w-0 md:w-72 fixed left-0 bottom-0 top-[var(--header-height)];
  }
  main {
    @apply p-6 h-full w-full md:ml-72;
  }
</style>
