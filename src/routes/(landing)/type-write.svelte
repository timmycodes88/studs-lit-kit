<script lang="ts">
  import Typewriter from 'svelte-typewriter'
</script>

<div class="w-fit h-[83.5px] lg:h-[124px] mx-auto typer">
  <Typewriter mode="loop" interval={120}>
    <h2>SvelteKit</h2>
    <h2>Tailwind</h2>
    <h2>DaisyUI</h2>
    <h2>SupaBase</h2>
    <h2>LiveKit</h2>
    <h2>TypeScript</h2>
    <h2>All-in-one Kit</h2>
    <h2>Welcome to...</h2>
    <h2>Stud's Lit Kit</h2>
  </Typewriter>
</div>

<style lang="postcss">
  .typer {
    --cursor-color: #d41876;
    --cursor-width: 3px;
  }
  h2 {
    @apply text-[45px] lg:text-[72px] font-bold;
    background: -webkit-linear-gradient(45deg, #ebb305, #d41876);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding-bottom: 1rem;
  }
</style>
