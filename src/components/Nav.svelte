<script>
	import NavLink from './UI/NavLink.svelte'
	export let segment;
	// export let root;
	export let mainTitle = 'eCommerce';
	// $: if (root  == true) mainTitle = 'administration'
	// $: console.log('segment')
	// $: console.log(typeof segment)
	// $: console.log(segment)
	const links = [
		{link: '.', label: 'accueil', hasPrefetch: "false"},
		{link: 'products', label: 'produits', hasPrefetch: "false"},
		{link: 'about', label: 'à propos', hasPrefetch: "false"},
	]

</script>

<nav>
	<ul>
		<li id='brand'><a href='.'>
		{mainTitle}
		</a></li>
		<!-- {#each links as link} -->
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">accueil</a></li>
		<li><a aria-current="{segment === 'products' ? 'page' : undefined}" href="products" >produits</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">à propos</a></li>
		<!-- {/each} -->
		
	</ul>
</nav>
