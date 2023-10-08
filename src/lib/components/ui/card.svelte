<script lang="ts">
  import CardTitle from './card/card-title.svelte'
  import CardText from './card/card-text.svelte'
  import CardActions from './card/card-actions.svelte'
  import CardGrandTitle from './card/card-grand-title.svelte'
  export let bg: string = 'bg-base-200'
  let C = {
    Title: CardTitle,
    GrandTitle: CardGrandTitle,
    Text: CardText,
    Actions: CardActions,
  }
</script>

<div class="card max-w-[24rem] shadow-xl {bg}">
  <div class="card-body">
    <slot {C} />
  </div>
</div>
