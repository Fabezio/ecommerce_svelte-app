<script>
	import Nav from '../components/Nav.svelte';
	// import Header from '../components/UI/Header.svelte'
	let mainTitle = 'ecommerce'
	export let segment;
</script>

<Nav {segment}/>

<main>
	<!-- <Header pagetitle={segment} /> -->
	<slot></slot>
</main>

<style>
	main {
		position: relative;
		/* max-width: 56em; */
		
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>


<!-- src/routes/_layout.html -->
<!-- {#if 	segment === 'login'}
	<svelte:component this={child.component} {...child.props}/>
{:else}
	<div class="fancy-layout">
		<svelte:component this={child.component} {...child.props}/>
	</div>
{/if} -->


