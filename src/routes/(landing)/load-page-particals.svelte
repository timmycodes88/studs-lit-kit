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
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        resize: true,
      },
    },
    particles: {
      color: {
        value: [
          '#3998D0',
          '#2EB6AF',
          '#A9BD33',
          '#FEC73B',
          '#F89930',
          '#F45623',
          '#D62E32',
          '#EB586E',
          '#9952CF',
        ],
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 800,
            y: 800,
          },
        },
        direction: 'none',
        enable: true,
        outModes: {
          default: 'destroy',
        },
        random: false,
        speed: 3,
        straight: false,
        trail: {
          fillColor: '#000',
          length: 30,
          enable: true,
        },
      },
      number: { density: { enable: true, area: 800 }, value: 0 },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: 25,
        animation: {
          startValue: 'min',
          enable: true,
          minimumValue: 1,
          speed: 2,
          destroy: 'max',
          sync: true,
        },
      },
    },
    detectRetina: true,
    emitters: {
      direction: 'none',
      rate: {
        quantity: 10,
        delay: 0.25,
      },
      size: {
        width: 0,
        height: 0,
      },
      position: {
        x: 50,
        y: 50,
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
  class="absolute inset-0 z-[-2]"
  {options}
  on:particlesLoaded={onParticlesLoaded}
  {particlesInit}
/>
