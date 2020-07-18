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
  export let product
  // $: console.log(id)

</script>
<div>
  product page
  {product.id}
	<ul>
		<li>{product.name}</li>
		<li>{product.description}</li>
	</ul>

<!-- id: {product.id} -->
</div>
<div>
  <!-- {@html product.html} -->
</div>