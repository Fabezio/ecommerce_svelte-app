<script>
	import NavLink from './UI/NavLink.svelte'
	export let segment;
	export let root;
	export let mainTitle = 'eCommerce';

	$: if (root) mainTitle = 'administration'

	$: console.log('segment')
	$: console.log(typeof segment)
	$: console.log( segment)
	
	
	// function openModal()
	// $: if()

</script>
<!-- src/routes/_layout.html -->
<!-- {#if child.segment === 'login'}
	<svelte:component this={child.component} {...child.props}/>
{:else}
	<div class="fancy-layout">
		<svelte:component this={child.component} {...child.props}/>
	</div>
{/if} -->
<nav>
	<ul>
		<li id='brand'><a href='.'>
		{mainTitle}
		</a></li>
	
		{#if root}
			<NavLink {segment} link='api' label='produits' hasPrefetch=true/>
			<NavLink {segment} path='api/' link='users' label='abonnés' hasPrefetch=true />
			<NavLink {segment} path='api/' link='comments' label='avis' hasPrefetch=true/>
		{:else}
			<NavLink {segment} link='.' label='accueil' />
			<NavLink {segment} link='products' label='produits' hasPrefetch=true />
			<NavLink {segment} link='about' label='à propos' />
		{/if}
		
	</ul>
</nav>


<style>
	
</style>