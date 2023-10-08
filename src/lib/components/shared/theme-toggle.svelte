<script lang="ts">
  import { enhance } from '$app/forms'
  import type { SubmitFunction } from '../../../routes/(landing)/$types'
  import { Palette } from 'lucide-svelte'
  import { page } from '$app/stores'
  const submitUpdateTheme: SubmitFunction = ({ action }) => {
    const theme = action.searchParams.get('theme')

    if (theme) document.documentElement.setAttribute('data-theme', theme)
  }

  const themes = [
    'light',
    'dark',
    'cupcake',
    'synthwave',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'pastel',
    'luxury',
    'dracula',
    'business',
    'night',
    'coffee',
  ]
</script>

<div class="dropdown dropdown-bottom dropdown-end">
  <label tabindex="0" class="btn btn-ghost m-1">Theme<Palette /></label>
  <form method="POST" use:enhance={submitUpdateTheme}>
    <ul
      tabindex="0"
      class="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
    >
      {#each themes as theme}
        <li>
          <button
            formaction="/?/setTheme&theme={theme}&redirectTo={$page.url
              .pathname}"
          >
            {theme}
          </button>
        </li>
      {/each}
    </ul>
  </form>
</div>
