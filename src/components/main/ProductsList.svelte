<script>
  import {createEventDispatcher } from 'svelte'
  export let content
  const dispatch = createEventDispatcher()
</script>

<div class="image">
        <img src={content.image} alt={content.name}>
      </div>

      <div>Produit: {content.name}</div>
      <div>Description: {content.description}</div>
      <button on:click={() => dispatch('voir')} >voir</button>