<script>
  import Header from '$lib/components/shared/header.svelte'
  import ThemeToggle from '$lib/components/shared/theme-toggle.svelte'
  import { drawerStore } from '$lib/stores/app-layout/drawerStore'
  import { Menu } from 'lucide-svelte'
</script>

<Header>
  <svelte:fragment slot="left"
    ><a class="hidden md:inline" href={'/home'}
      ><h1><slot name="left" />Stud's Lit Kit</h1></a
    >
    <div class="drawer md:hidden">
      <input
        id="my-drawer"
        type="checkbox"
        class="drawer-toggle"
        bind:value={$drawerStore}
      />
      <div class="drawer-content">
        <div class="topPadding">
          <label for="my-drawer" class="btn btn-primary btn-sm drawer-button">
            <Menu />
          </label>
        </div>
      </div>
      <div class="drawer-side z-50">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        />
        <ul class="list">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div></svelte:fragment
  >

  <svelte:fragment slot="right">
    <ThemeToggle />
    <a href="/" class="btn btn-primary">Logout</a>
  </svelte:fragment>
</Header>

<section>
  <nav />

  <main>
    <slot />
  </main>
</section>

<style lang="postcss">
  section {
    @apply flex h-[var(--body-height)] w-full;
  }
  nav {
    @apply h-full bg-base-200/50 z-50 w-full max-w-0 md:max-w-[18rem] transition-all duration-500 fixed left-0 bottom-0 top-[var(--header-height)];
  }
  main {
    @apply p-6 h-full w-full transition-all duration-500 md:ml-72;
  }

  h1 {
    @apply text-4xl font-bold uppercase;
  }

  .drawerSide {
    @apply drawer-side bg-red-500 top-[var(--header-height)];
  }

  .list {
    @apply menu p-4 w-80 min-h-full bg-base-200 text-base-content;
  }
</style>
