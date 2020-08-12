<script>
  import {createEventDispatcher } from 'svelte'
  export let item
  const dispatch = createEventDispatcher()
</script>

<div class="image">
        <img src={item.image} alt={item.name}>
      </div>

      <div>Produit: {item.name}</div>
      <div>Description: {item.description}</div>
      <button on:click={() => dispatch('voir')} >voir</button>