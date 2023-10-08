<script lang="ts">
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import Feature from './features-list.svelte'
  import TypeWrite from './type-write.svelte'
  import Glow from './Glow.svelte'
  import Card from '$lib/components/ui/card.svelte'

  let hasEntered = true
  let audio: HTMLAudioElement

  const play = () => {
    audio = new Audio('/assets/her.mp3')
    audio.loop = true
    audio.play()
    hasEntered = true
  }
  onMount(() => () => audio.pause())

  let showGlow = false
</script>

{#if !hasEntered}
  <div
    class="absolute inset-0 flex items-center justify-center bg-black z-10"
    out:fade={{ duration: 888 }}
  >
    <div
      role="group"
      on:mouseenter={() => (showGlow = true)}
      on:mouseleave={() => (showGlow = false)}
      class="flex items-center justify-center p-32"
    >
      <button
        on:click={play}
        class="text-white hover:scale-105 transition-transform"
      >
        Enter the Portal
      </button>
    </div>
    <Glow {showGlow} />
  </div>
{:else}
  <img src="/assets/metame.png" alt="Meta Me" />
  <Glow />
  <div class="wrapper">
    <div class="leftCol">
      <TypeWrite />
      <Feature />
    </div>

    <Card let:C>
      <C.Title>BrightSide Developer's Latest Creation!</C.Title>
      <C.Text>
        Stud's Lit Kit is the Ultimate Tech Stack to Develop High Quality Social
        Applications at Rapid Speeds.
      </C.Text>
      <C.Actions>
        <button class="btn btn-primary"> Join Now! </button>
      </C.Actions>
    </Card>

    <Feature mobile />
  </div>
{/if}

<style lang="postcss">
  img {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1];
  }

  .leftCol {
    @apply mx-auto flex flex-col gap-10 lg:w-[32rem] lg:m-0;
  }
  .wrapper {
    @apply p-2 min-h-[var(--body-height)] flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-around;
  }
</style>
