<script>
	const euro = new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: 'EUR',
		minimumFractionDigits: 2
	});
	export let price
	
</script>


{#if price}
	<p>Prix: 
		<span>{euro.format(price)}</span>
	</p>
{:else}
	<p>Gratuit</p>
{/if}