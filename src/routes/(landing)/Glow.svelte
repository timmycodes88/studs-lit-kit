<script>
  import { cn } from '$lib/utils'
  export let showGlow = true
  export let enter = false
</script>

<div
  class={cn(
    'absolute z-[-2] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all scale-0 opacity-0 duration-500',
    showGlow && 'scale-100 opacity-100'
  )}
>
  <section class={cn('glow', enter && 'glowSmall')} />
</div>

<style lang="postcss">
  .glow {
    @apply rounded-full blur-[50px] transition-all;
    @apply w-[22rem] h-[22rem] md:w-[32rem] md:h-[32rem];
    animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
      glow 8s linear infinite;
  }
  .glowSmall {
    @apply w-64 h-64 md:w-72 md:h-72;
    animation: pulse 5s cubic-bezier(0, 0, 0, 0.5) infinite,
      glow2 8s linear infinite;
  }
  @keyframes glow {
    0% {
      @apply bg-[#d41876]/50;
    }
    33% {
      @apply bg-[#ebb305]/50;
    }
    66% {
      @apply bg-[#383efe]/50;
    }
    100% {
      @apply bg-[#d41876]/50;
    }
  }
  @keyframes glow2 {
    0% {
      @apply bg-[#fff]/50;
    }
    33% {
      @apply bg-[#fff]/50;
    }
    66% {
      @apply bg-[#fff]/50;
    }
    100% {
      @apply bg-[#fff]/50;
    }
  }
  @keyframes pulse {
    50% {
      transform: scale(1.1);
    }
  }
</style>
