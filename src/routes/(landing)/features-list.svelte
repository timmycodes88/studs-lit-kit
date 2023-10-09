<script>
  import Card from '$lib/components/ui/card.svelte'
  import { cn } from '$lib/utils'

  export let mobile = false
</script>

<div
  class={cn(
    'mx-auto',
    mobile ? 'flex lg:hidden text-center' : 'hidden lg:flex '
  )}
>
  <Card bg="bg-base-200/80">
    <ul>
      <li class="text-lg">
        Uses <span class="font-bold">SvelteKit</span> as app
        <span class="underline">frame-work</span>.
      </li>
      <li class="text-lg">
        <span class="font-bold">Tailwind</span> for
        <span class="underline">styling</span>.
      </li>
      <li class="text-lg">
        <span class="font-bold">Daisy</span> for
        <span class="underline">UI</span>.
      </li>
      <li class="text-lg">
        <span class="font-bold">SupaBase</span> for
        <span class="underline">authentication</span>
        and <span class="underline">database</span>.
      </li>
      <li class="text-lg">
        <span class="font-bold">LiveKit</span> for realtime
        <span class="underline">text</span>,
        <span class="underline">audio</span> and
        <span class="underline">video</span>.
      </li>
      <li class="text-lg">
        And <span class="font-bold">TypeScript</span> for
        <span class="underline">type-safety</span>.
      </li>
    </ul>
  </Card>
</div>
