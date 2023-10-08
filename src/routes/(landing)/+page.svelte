<script lang="ts">
  import { onMount } from 'svelte'
  import { fade, scale } from 'svelte/transition'
  import Feature from './features-list.svelte'
  import TypeWrite from './type-write.svelte'
  import Glow from './Glow.svelte'
  import Card from '$lib/components/ui/card.svelte'
  import LoadPageParticals from './load-page-particals.svelte'
  import { audioStore } from '$lib/stores/landing/audioStore'
  import LandingPageParticals from './landing-page-particals.svelte'
  import { quintInOut } from 'svelte/easing'
  import { cn } from '$lib/utils'

  let hasEntered = false
  let audio: HTMLAudioElement

  $: if ($audioStore) {
    audio?.play()
  } else {
    audio?.pause()
  }
  let landingParticlesReady = false
  const start = () => {
    audio = new Audio('/assets/her.mp3')
    audio.loop = true
    audio.play()
    hasEntered = true
    setTimeout(() => {
      landingParticlesReady = true
    }, 1300)
  }
  onMount(() => () => audio.pause())

  let showGlow = false
</script>

{#if !hasEntered}
  <div
    class="absolute inset-0 flex items-center justify-center bg-black z-10"
    out:fade={{ duration: 1250, easing: quintInOut }}
  >
    <LoadPageParticals />
    <div
      role="group"
      on:mouseenter={() => (showGlow = true)}
      on:mouseleave={() => (showGlow = false)}
      class="flex items-center justify-center p-[24rem]"
    >
      <button
        on:click={start}
        class="text-white text-lg font-bold hover:scale-105 transition-transform"
      >
        Enter the Portal
      </button>
    </div>
    <Glow enter {showGlow} />
  </div>
{:else}
  <div in:fade={{ duration: 4000, easing: quintInOut }} class="wrapper">
    <img src="/assets/metame.png" alt="Meta Me" />
    <Glow />
    <div class="col">
      <TypeWrite />
      <Feature />
    </div>

    <div class="col">
      <Card let:C bg="bg-base-200/50">
        <C.Title>BrightSide Developer's Latest Creation!</C.Title>
        <C.Text>
          Stud's Lit Kit is the Ultimate Tech Stack to Develop High Quality
          Social Applications at Rapid Speeds.
        </C.Text>
        <C.Actions>
          <button class="btn btn-primary"> Join Now! </button>
        </C.Actions>
      </Card>

      <a
        href="https://github.com/timmycodes88/studs-lit-kit"
        target="_blank"
        class="hidden btn btn-link lg:inline-flex"
      >
        Check out the Source Code
      </a>
    </div>
    <Feature mobile />
  </div>
  <div
    class={cn(
      'fixed inset-0 z-[-2] opacity-0 transition-opacity duration-700',
      landingParticlesReady && 'opacity-100'
    )}
  >
    {#if landingParticlesReady}
      <LandingPageParticals />
    {/if}
  </div>
{/if}

<style lang="postcss">
  img {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1];
  }

  .col {
    @apply mx-auto flex flex-col gap-10 lg:w-[32rem] lg:m-0;
  }
  .wrapper {
    @apply p-2 min-h-[var(--body-height)] flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-around;
  }
</style>
