<script>
	const euro = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
});

// console.log(euro.format(8000)); 
// console.log(euro.format(25));
// console.log(euro.format(99600023147));
	export let price 
	// if (price)
	// price = euro.format(price)
</script>


{#if price}
	<p>Prix: 
		<span>{euro.format(price)}</span>
	</p>
{:else}
	<p>Gratuit</p>
{/if}