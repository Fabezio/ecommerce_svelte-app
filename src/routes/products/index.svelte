<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`products.json`).then(r => r.json()).then(products => {
			return { products };
		});
	}
</script>

<script>
	import products from './_products'
	import Card from '../../components/main/Card.svelte'
	import Rating from '../../components/main/Rating.svelte'
	
	import Header from '../../components/UI/Header.svelte'
	// export let products;
</script>


<Header pagetitle = 'Produits' />

<section style={products.length < 5 ? `grid-template-columns: repeat(${products.length}, 1fr); margin: auto;`: 'grid-template-columns: repeat(5, 1fr);'}>
{#each products as product}
	<!-- <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a> -->
	<Card>
		<figure>
			
			<div class="image" class:empty-thumbnail={!product.image}>
				<img src={product.image} alt="">

			</div>
			<figcaption>
				<p>{product.name}
				<br>{product.description}</p>
				<q>{product.comment}</q>
				<Rating rating={product.rating } />
				{#if product.quantity}
				<p>{product.quantity} articles available
					{#if product.quantity < 10}
					<span>, almost empty</span>
					{/if}
				</p>
				
				{:else}
				<p>not available</p>
				{/if}
				<p>price: 
				{#if product.price}
				<span>{product.price}</span>
				{:else}
				<span>free</span>
				{/if}
				</p>
			</figcaption>
		</figure>
		<a class="link" rel="prefetch" href="/products/{product.id}">Voir
		</a>
	</Card>
{/each}
</section>

<style>
	/* ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	} */
		a {
		display: block;
	}
	section {
		display: grid;
		grid-gap: 2rem;
		margin: auto;
	}
	.maxcolumns {
		grid-template-columns: repeat(5, 1fr);

	}
	
	figure {
		margin: auto;
		text-align: center;
	}

	.image {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 200px;
		height: 200px;
	}
	img {
		max-width: 200px;
		max-height: 200px;
	}

	.empty-thumbnail {
		background: repeating-linear-gradient(135deg, grey , silver 25%);
		/* position: relative; */
		/* margin: auto; */

	}

	.link {
			
		width: 100%;
		font-size: 1rem;
		padding: 5px;
		border: none;
		border-radius: 3px;
		background: whitesmoke;
		color: #37f;
		text-align: center;
		text-decoration: none;
		font-variant: small-caps;

	}

	figcaption p {
		text-align: center;
	}

</style>