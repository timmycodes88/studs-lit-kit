<script lang="ts">
  import ThemeToggle from '$lib/components/shared/theme-toggle.svelte'
</script>

<header>
  <h1>Stud's Lit Kit</h1>

  <div class="trail">
    <ThemeToggle />
    <button>
      <span class="md:hidden">Join</span>
      <span class="hidden md:inline">Create an Account</span>
    </button>
  </div>
</header>

<slot />

<style lang="postcss">
  header {
    @apply flex items-center justify-between sticky top-0 z-10;
    @apply px-6;
    @apply w-full h-[var(--header-height)];
    @apply shadow-md backdrop-blur;
  }

  h1 {
    @apply text-4xl font-bold uppercase;
  }

  .trail {
    @apply flex items-center gap-4;
  }

  button {
    @apply btn rounded-full;
  }
</style>
