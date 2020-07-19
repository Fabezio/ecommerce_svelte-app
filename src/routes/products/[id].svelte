<script context="module" >
  export async function preload({ params, query }) { 
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`products/${params.id}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { product: data };
		} else {
			this.error(res.status, data.message);
		}
	}
  
</script>

<script>
	// import products from './products'
	import Rating from '../../components/main/Rating.svelte'
	import Price from '../../components/main/Price.svelte'
	import Quantity from '../../components/main/Quantity.svelte'
	import Header from '../../components/UI/Header.svelte'
	export let product
	let icon='star'
	let fullRating = []
	fullRating.length = 5
	fullRating.fill(`far fa-${icon}`)
	fullRating.fill(`fas fa-${icon}`, 0, product.rating)
	// fullRating.fill('fa-heart')

  // $: console.log(id)

</script>

<Header pagetitle='Produit: {product.name}'  />

<div class="detail">
	<figure class="image"  class:empty-thumbnail={!product.image}>
		
  	<img src={product.image} alt={product.image? product.name : 'Image non disponible'}>
	</figure>
	<div class="content">
		<p>{product.name}</p>
		<p>Description: {product.description}</p>
		<code>
			<q>{product.comment}</q>
		</code>
		<Rating rating={product.rating} />
		<Quantity quantity={product.quantity} />
		<Price price={product.price} />
		<!-- {#if product.rating}
			<p>Rating: {product.rating}/5
			{#each fullRating as el}
				<span class="{el}"></span>
			{/each}
			</p>
		{:else}
			<p>not rated yet</p>
		{/if} -->

	</div>
	

<!-- id: {product.id} -->
</div>

  <!--
<div>
		 {@html product.html}
</div>
		  -->
<a href="products">Retour à la liste</a>

<style>
	.detail {
		display: flex;
		/* grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem; */
		
		justify-content: center;
	}
	.image {
		display: block;
	}
	.content {
		/* grid-column: 1/2; */
		text-align: left;

	}

	figure, img {
		width: 400px;
		height: 400px;
	}
	.empty-thumbnail {
		background: url('/images/robes.jpg');
		background-size: cover;
	}
	img[alt] {
		position: relative;
		right: 7px;
		top: 5px;
		color: orange;
		font-weight: 200;
		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	}
	a {
		float: right;
	}

</style>

