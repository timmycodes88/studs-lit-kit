<script>
  import { cn } from '$lib/utils'
  export let showGlow = true
</script>

<div
  class={cn(
    'absolute z-[-2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all scale-0 opacity-0 duration-500',
    showGlow && 'scale-100 opacity-100'
  )}
>
  <section class="glow" />
</div>

<style lang="postcss">
  .glow {
    @apply w-64 h-64 md:w-96 md:h-96;
    @apply rounded-full blur-[50px] transition-all;
    animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
      glow 8s linear infinite;
  }
  @keyframes glow {
    0% {
      @apply bg-[#d41876]/70;
    }
    33% {
      @apply bg-[#ebb305]/70;
    }
    66% {
      @apply bg-[#383efe]/70;
    }
    100% {
      @apply bg-[#d41876]/70;
    }
  }
  @keyframes pulse {
    50% {
      transform: scale(1.1);
    }
  }
</style>
