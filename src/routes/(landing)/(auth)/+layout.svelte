<script>
  import { fade, blur } from "svelte/transition"
</script>

<img
  in:fade
  class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-auto opacity-10"
  src="/assets/fire.png"
  alt="decoration"
/>
<div in:blur={{ duration: 888 }} class="relative">
  <main>
    <div class="flex flex-col gap-8 items-center justify-center">
      <h1 class="text-4xl font-bold text-center">Supa Realtime</h1>
      <img class="login" src="/icon-512x512.png" alt="logo" />
    </div>
    <slot />
  </main>
</div>

<style lang="postcss">
  main {
    @apply flex flex-col gap-8 lg:justify-around lg:flex-row items-center justify-center min-h-[var(--body-height)] py-2;
  }

  .login {
    @apply w-16 h-16 lg:w-96 lg:h-96 rounded-xl mx-auto lg:mx-0 lg:mr-6;
  }
</style>
