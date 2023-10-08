<script lang="ts">
  import { blur } from "svelte/transition"

  export let name: string
  export let type: string
  export let placeholder: string
  export let label: string
</script>

<div in:blur class="form-control w-full">
  <label for={name} class="label">
    <span class="label-text">{label}</span>
  </label>
  <input
    {name}
    {type}
    {placeholder}
    class="input input-bordered input-primary w-full"
  />
</div>
