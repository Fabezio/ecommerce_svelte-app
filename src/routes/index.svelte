<script>
	// import products from '../products-store'
	import Header from '../components/UI/Header.svelte'
	let title = 'ecommerce'
	// let products = 
	// $: console.log(products)
</script>

<Header pagetitle='accueil' />

<p>Bienvenue!</p>

<style>
	p {
		text-align: center;
		margin: 0 auto;
	}

	/* h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	} */

	p {
		margin: 1em auto;
	}


	/* @media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	} */
</style>

