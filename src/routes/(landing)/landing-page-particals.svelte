<script>
  // @ts-nocheck

  import { onMount } from 'svelte'
  // import { loadSlim } from 'tsparticles-slim' // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
  import { loadFull } from 'tsparticles' // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

  let ParticlesComponent

  onMount(async () => {
    const module = await import('svelte-particles')

    ParticlesComponent = module.default
  })

  const options = {
    particles: {
      color: {
        value: ['#d41876', '#ebb305', '#383efe'],
      },
      links: {
        enable: true,
        color: ['#d41876', '#ebb305', '#383efe'],
      },
      move: {
        enable: true,
      },
      number: {
        value: 100,
      },
    },
  }

  let onParticlesLoaded = event => {
    const particlesContainer = event.detail.particles
  }

  let particlesInit = async engine => {
    await loadFull(engine)
  }
</script>

<svelte:component
  this={ParticlesComponent}
  id="tsparticles"
  class="absolute inset-0 z-[-3]"
  {options}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>
