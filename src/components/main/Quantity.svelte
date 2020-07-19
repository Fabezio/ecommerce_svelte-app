<script>
  export let quantity 
</script>


{#if quantity}
	<p>{quantity} disponibles
		{#if quantity < 10}
			<span>, bientôt épuisé</span>
		{/if}
	</p>
	
{:else}
	<p>Plus en stock</p>
{/if}