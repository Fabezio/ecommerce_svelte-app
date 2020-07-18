<script>
	export let segment;
	export let mainTitle = 'eCommerce';
</script>

<nav>
	<ul>
		<li id='brand'><a href='.'>
		{mainTitle}
		<!-- <img src='https://img2.freepng.fr/20180413/vrq/kisspng-web-development-e-commerce-logo-electronic-busines-ecommerce-5ad142afa3fd01.2088356915236635356717.jpg' alt={mainTitle} /> -->
		</a></li>
		<!-- <li><a href='.'>
		</a></li> -->
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">accueik</a></li>
		<li><a aria-current="{segment === 'products' ? 'page' : undefined}" href="products">produits</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">à propos</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>


<style>
	nav {
		/* border-bottom: 1px solid rgba(0, 128, 128,0.1); */
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		border-right: 3px;
		height: 3px;
		background-color: rgba(0, 128, 128,0.65);
		/* opacity: 0.7;	 */
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	/* img {
		height: 48px;
	} */
	#brand a {
		background: rgba(0, 0, 255, 0.7);
		font-weight: 300;
		border-radius: 5px;
		line-height: 1rem;
		margin-top: 0.25rem;
		margin-right: 1rem;
		padding: auto	 0.75rem;
		
	}
</style>