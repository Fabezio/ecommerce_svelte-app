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

<Header pagetitle='Produit:{product.name}'  />

<div class="detail">
	<figure class="image">
  	<img src={product.image} alt='product-name'>
	</figure>
	<div class="content">
		<p>{product.name}</p>
		<p>Description: {product.description}</p>
		<code>
			<q>{product.comment}</q>
		</code>
		<Rating rating={product.rating} />
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
			/* max-width: 66%; */
		}
	a {
		float: right;
	}

</style>

