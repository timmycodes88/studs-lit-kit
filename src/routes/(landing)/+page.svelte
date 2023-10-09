<script lang="ts">
  import { onMount } from 'svelte'
  import { blur, fade, scale, slide } from 'svelte/transition'
  import Feature from './features-list.svelte'
  import TypeWrite from './type-write.svelte'
  import Glow from './Glow.svelte'
  import Card from '$lib/components/ui/card.svelte'
  import LoadPageParticals from './load-page-particals.svelte'
  import { audioStore } from '$lib/stores/landing/audioStore'
  import { quintInOut } from 'svelte/easing'
  import { hasEnteredStore } from '$lib/stores/landing/hasEnteredStore'
  import { cn } from '$lib/utils'

  let scaleIn = false
  const start = () => {
    audioStore.update(c => ({ ...c, playing: true }))
    hasEnteredStore.set(true)
  }

  onMount(() => {
    if ($hasEnteredStore) scaleIn = true
  })

  $: if ($hasEnteredStore) {
    setTimeout(() => {
      scaleIn = true
    }, 1300)
  }

  let showGlow = false
</script>

{#if !$hasEnteredStore}
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
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-mouse-events-have-key-events -->
    <div
      class={cn(
        'life',
        $audioStore.playing && 'animate-life',
        scaleIn && 'scale-in'
      )}
    >
      <img src="/assets/metame.png" alt="Meta Me" class="bounce" />
    </div>
    <Glow />
    <div class="col">
      <TypeWrite />
      <Feature />
    </div>

    <div class="col">
      <Card let:C bg="bg-base-200/80">
        <C.Title>BrightSide Developer's Latest Creation!</C.Title>
        <C.Text>
          Stud's Lit Kit is the Ultimate Tech Stack to Develop High Quality
          Social Applications at Rapid Speeds.
        </C.Text>
        <C.Actions>
          <a href="/register" class="btn btn-primary"> Join Now! </a>
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
    <a
      href="https://github.com/timmycodes88/studs-lit-kit"
      target="_blank"
      class="lg:hidden btn btn-link"
    >
      Check out the Source Code
    </a>
  </div>
{/if}

<style lang="postcss">
  .bounce {
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
  .life {
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-1];
    @apply scale-0 origin-center transition-transform duration-1000;
  }

  .animate-life {
    animation: life 5s cubic-bezier(0, 0, 0, 0.5) infinite;
  }

  .scale-in {
    @apply scale-100;
  }

  @keyframes life {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  .col {
    @apply mx-auto flex flex-col gap-10 lg:w-[32rem] lg:m-0;
  }
  .wrapper {
    @apply p-2 min-h-[var(--body-height)] flex flex-col gap-6 items-center justify-center lg:flex-row lg:justify-around;
  }
</style>
