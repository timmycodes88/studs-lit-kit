<script lang="ts">
  import Card from "$lib/components/ui/card.svelte"
  import { blur } from "svelte/transition"
  export let title: string
  export let description: string
  export let button: string
  export let href: string
  export let linkText: string
</script>

<form class="w-full lg:w-auto">
  <Card bg="bg-base-200 max-w-[90%] mx-auto lg:min-w-[24rem]" let:C>
    <C.GrandTitle>{title}</C.GrandTitle>
    <C.Text>{description}</C.Text>
    <slot />
    <C.Actions>
      <a href="/home" class="mt-3 btn btn-primary w-full">{button}</a>
      <!-- <button class="mt-3 btn btn-primary w-full">{button}</button> -->
    </C.Actions>
    <a {href} class="btn btn-link">{linkText}</a>
  </Card>
</form>
