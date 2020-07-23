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

<style lang='scss'>
@import '../style/theme.scss';
nav {
    /* border-bottom: 1px solid rgba(0, 128, 128,0.1); */
    font-weight: 400;
    padding:  0.5em;
    background: $glass;
    
    ul {
        margin: 0;
        padding: 0;
        &::after {
            content: '';
            display: block;
            clear: both;
        }
    }
    li {
        display: block;
        float: left;
    }
    a {
        text-decoration: none;
        padding: 1em 0.5em;
        display: block;
        font-variant: small-caps;
    }
    #brand a {
        background: $info;
				// font-weight: 400;
        border-radius: 5px;
        line-height: 1rem;
        margin-top: 0.25rem;
        margin-right: 1rem;
        padding: auto 0.75rem;
        text-transform: uppercase;
    }
    [aria-current] {
        position: relative;
        display: inline-block;
        text-transform: uppercase;
        &::after {
            position: absolute;
            content: '';
            width: calc(100% - 1em);
            border-right: 3px;
            height: 3px;
            background-color: rgba(0, 128, 128, 0.65);
            display: block;
            bottom: -1px;
        }
    }
}
</style>