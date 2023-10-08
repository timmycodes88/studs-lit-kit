<script>
  // @ts-nocheck

  import { onMount } from 'svelte'
  import { loadSlim } from 'tsparticles-slim' // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

  let ParticlesComponent

  onMount(async () => {
    const module = await import('svelte-particles')

    ParticlesComponent = module.default
  })

  let particlesConfig = {
    particles: {
      color: {
        value: '#000',
      },
      links: {
        enable: true,
        color: '#000',
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
    await loadSlim(engine)
  }
</script>

<svelte:component
  this={ParticlesComponent}
  id="tsparticles"
  options={particlesConfig}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>
