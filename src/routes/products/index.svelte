<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`products.json`).then(r => r.json()).then(products => {
			return { products };
		});
	}
</script>

<script>
	import products from './_products'
	import Header from '../../components/UI/Header.svelte'
	import Card from '../../components/main/Card.svelte'
	// export let products;
</script>

<style>
	/* ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	} */
		a {
		display: block;
	}

</style>

<Header pagetitle = 'Produits' />


{#each products as product}
	<!-- <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a> -->
		<a rel="prefetch" href="/products/{product.id}">
	<Card>
		<p>{product.name}</p>
		<p>{product.description}</p>
	</Card>
		</a>
{/each}