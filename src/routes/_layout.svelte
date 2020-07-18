<script>
	import Nav from '../components/Nav.svelte';
	let mainTitle = 'ecommerce'
	export let segment;
</script>

<svelte:head>
	<link rel="icon" type='image/jpg' href="https://img2.freepng.fr/20180413/vrq/kisspng-web-development-e-commerce-logo-electronic-busines-ecommerce-5ad142afa3fd01.2088356915236635356717.jpg">
</svelte:head>

<style>
	main {
		position: relative;
		max-width: 56em;
		
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>