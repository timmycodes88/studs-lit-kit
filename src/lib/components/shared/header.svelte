<script lang="ts">
  export let landing: boolean = false
</script>

<header>
  <slot name="left" />

  <div class="trail">
    <slot name="right" />
  </div>
</header>
<div class="h-[var(--header-height)]" />

<slot />

<style lang="postcss">
  header {
    @apply flex items-center justify-between fixed left-0 right-0 top-0 z-10;
    @apply px-6;
    @apply w-full h-[var(--header-height)];
    @apply shadow-xl bg-base-200/50 backdrop-blur;
  }

  .trail {
    @apply flex items-center gap-4;
  }
</style>
