<script lang="ts">
  import Header from "$lib/components/shared/header.svelte"
  import ThemeToggle from "$lib/components/shared/theme-toggle.svelte"
  import { audioStore } from "$lib/stores/landing/audioStore"
  import { hasEnteredStore } from "$lib/stores/landing/hasEnteredStore"
  import { Volume2, VolumeX } from "lucide-svelte"
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import LandingPageParticals from "./landing-page-particals.svelte"
  import { cn } from "$lib/utils"

  onMount(() => {
    audioStore.update(c => ({ ...c, audio: new Audio("/assets/her.mp3") }))
    return () => {
      $audioStore.audio?.pause()
      audioStore.update(() => ({ playing: false, audio: null }))
    }
  })

  $: if ($audioStore.audio) $audioStore.audio.loop = true

  $: if ($audioStore.playing && $audioStore.audio) {
    $audioStore.audio.play()
  } else if ($audioStore.audio) {
    $audioStore.audio.pause()
  }

  let landingParticlesReady = false
  $: if ($hasEnteredStore) {
    setTimeout(() => {
      landingParticlesReady = true
    }, 1300)
  }
</script>

<Header landing>
  <svelte:fragment slot="left">Stud's Lit Kit</svelte:fragment>

  <svelte:fragment slot="right">
    <label class="swap">
      <!-- this hidden checkbox controls the state -->
      <input type="checkbox" bind:checked={$audioStore.playing} />

      <!-- volume on icon -->
      <Volume2
        on:click={() => audioStore.update(c => ({ ...c, playing: true }))}
        class="swap-on"
      />
      <VolumeX
        on:click={() => audioStore.update(c => ({ ...c, playing: false }))}
        class="swap-off"
      />
    </label>
    <ThemeToggle />
    {#if $page.url.pathname === "/register"}
      <a href="/login">
        <span>Login</span>
      </a>
    {:else}
      <a href="/register">
        <span class="md:hidden">Join</span>
        <span class="hidden md:inline">Create an Account</span>
      </a>
    {/if}
  </svelte:fragment>
</Header>

<slot />
<div
  class={cn(
    "fixed inset-0 z-[-2] opacity-0 transition-opacity duration-1000",
    landingParticlesReady && "opacity-100"
  )}
>
  {#if landingParticlesReady}
    <LandingPageParticals />
  {/if}
</div>

<style lang="postcss">
  header {
    @apply flex items-center justify-between sticky top-0 z-10;
    @apply px-6;
    @apply w-full h-[var(--header-height)];
    @apply shadow-md backdrop-blur;
  }

  .trail {
    @apply flex items-center gap-4;
  }

  a {
    @apply btn rounded-full;
  }
</style>
