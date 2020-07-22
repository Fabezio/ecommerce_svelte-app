<script context="module">
	export function preload({ params, query }) {
	  return this.fetch(`products.json`)
	    .then(r => r.json())
	    .then(products => {
	      return { products };
	    });
	}
</script>

<script>
	import products from './_products'
	import Card from '../../components/main/Card.svelte'
	import Rating from '../../components/main/Rating.svelte'
	import Price from '../../components/main/Price.svelte'
	import Quantity from '../../components/main/Quantity.svelte'
	import Header from '../../components/UI/Header.svelte'
</script>

				
				
		
<Header pagetitle = 'Produits' />
<section style={products.length < 5 ? `grid-template-columns: repeat(${products.length}, 1fr); margin: auto;`: 'grid-template-columns: repeat(5, 1fr);'}>
	{#each products as product}
		<Card>
			<figure>
				<div class="image" class:empty-thumbnail={!product.image}>
					<img src={product.image} alt={product.image? product.name : 'Image non disponible'} >
				</div>
				<figcaption>
					<p>Categorie: {product.category}</p>
					<p>Nom: {product.name}</p>
					<Rating rating={product.rating } />
					<Price price={product.price} />
				</figcaption>
			</figure>
			<div class="link-container">
			<a class="link" rel="prefetch" href="/products/{product.id}">Voir</a>
			</div>
		</Card>
	{/each}
</section>

<style lang='scss'>
	@import '../../style/global.scss';
	a {
		display: block;
	}

	section {
		display: grid;
		grid-gap: 2rem;
		margin: auto;
	}

	figure {
		margin: auto;
		text-align: center;
	}

	.image, .empty-thumbnail {
		// display: flex;
		// align-items: center;
		// justify-content: center;
		width: 200px;
		height: 200px;
	}
	p {
		text-align: left !important;
	}

	img {
		max-width: 200px;
		max-height: 200px;
	}

	// .empty-thumbnail {
	// 	background: url('/images/robes.jpg');
	// 	display: flex;
	// 	background-size: cover;
	// 	margin: auto;
		
	// }
	// .empty-thumbnail img[alt] {
	// 	justify-content: center;
	// 	color: gold;
	// 	margin: auto;
	// 	text-align: center;
	// 	font-weight: 200;
	// 	display: flex;
	// 	padding: 7px 0;
	// 	text-shadow: 1px 1px black;
	// 	background: rgba(0, 0,0 , 0.1);
	// 	width: 100%;
	// }

	.link {
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
	.link-container {
		width: 200px;

	}

	figcaption p {
		text-align: center;
	}

</style>