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
	// import Card from '../../components/main/Card.svelte'
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
<div class="main">
<div class="detail">
	<figure>
		<div class={product.image ? "image" : "empty-thumbnail"}>
  		<img src={product.image} alt={product.image? product.name : 'Image non disponible'}>
		</div>
	</figure>
		
	<div class="content">
		<p>{product.category}</p>
		<p>{product.name}</p>
		<p>Description: {product.description}</p>
		<q>{product.comment}</q>
		<Rating rating={product.rating} />
		<Quantity quantity={product.quantity} />
		<Price price={product.price} />
	</div>
	
</div>
</div>
  
<a href="products">Retour à la liste</a>

<style> 
/* @import '../../style/theme.scss'; */
	.main {
		display: block;
		width: 800px;
		
		margin: auto; 

	}
	.detail {
		display: flex;
		/* grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
			*/
		justify-content: flex-start	;
	}

	.content {
		text-align: left;
		padding: 0;
	}
	figure {
		/* margin: auto; */
		padding: 0;
		text-align: center;
	}
	.image {
		/* background: $glass; */
		
		}

	img {
		max-width: 400px;
		max-height: 400px;
	}
	.empty-thumbnail , .image {
		width: 400px;
		height: 400px;
		
	}

	a {
		float: right;
	}

</style>

