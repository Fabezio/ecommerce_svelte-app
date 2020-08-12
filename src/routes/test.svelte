<script>
  import products from '../store/products.js'
  import Card from '../components/main/Card.svelte'
  import Category from '../components/main/ProductsCategory.svelte'
  import Detail from '../components/main/ProductDetail.svelte'
  let view = 'category'
  let content = ''
  let cat = ''

  function voirDetail (event) {
    view = "detail"
    content = event.detail
  }
  function voirCategorie (event) {
    view = "category"
    cat = event.detail

  }
</script>

<div>
  <h1>Produits</h1>
  <!-- <button></button> -->
  <!-- 1: categories -->
  {#each products.categories as cat}
    <div on:click={voirCategorie}>Catégorie: {cat.name}</div>
    <!-- 2: produits -->

    {#each cat.content as content}
        {#if view == "category"}
          <Card >
            <Category on:voir={voirDetail} {content} >
              <!-- <button on:click={() => view = "detail"}>voir produit</button> -->
            </Category>
          </Card>
        {:else}
          <Detail {content}>

          </Detail>
          <button on:click={() => view = "category"}>retour liste</button>
        {/if}

    {/each}
  {/each}
       
</div>

<style global>
li {
  list-style: none;
}
ul {
  margin: 5px;
}
.first-degree {
  font-weight: bold;
}
.second-degree {
  font-weight: 700;
}
.second-degree {
  font-weight: 500;
}

.image, img {max-width: 400px; max-height: 400px;}
</style>