<script>
  import products from '../store/products.js'
  import Card from '../components/main/Card.svelte'
  // let data = {
  //   name: 'produits',
  //   categories: [
  //     {name: 'robes', content : [
  //       {name: 'petite robe en dentelle', description: 'idem' , rates: [
  //         {author: 'jamie', comment: 'trop joli', rating: 5},
  //         {author: 'Naomi', comment: 'bien réalisé', rating: 4}
  //         ]}
  //       ]}, 
  //       // 
  //       ]
  // }
</script>

<div>
  <h1>Produits</h1>
  <!-- 1: categories -->
  {#each products.categories as cat}
    <div>Catégorie: {cat.name}</div>
    <!-- 2: produits -->

    {#each cat.content as content}
      <Card >
      <div class="image">
        <img src={content.image} alt={content.name}>
      </div>

      <div>Produit: {content.name}</div>
      <div>Description: {content.description}</div>
      <div>Note: {content.rates.reduce()}/5
      <!-- 3: Evaluations -->
      <!-- {#each content.rates as rate}
        <div>
          <img class='avatar' src='{rate.avatar}' alt='{rate.author}'>
        </div>

        <div>{rate.author}</div>
        <div>{rate.comment}</div>
        <div>
          <div class="light">
            <div class="progress" style="background-color: hsl({120 * (rate.rating)/5}, 100%, 50%); width: {(rate.rating+1)*100/6}%;">
        </div>
        </div>
        </div>
      {/each} -->
      </div>
      </Card>
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
.avatar {
  max-width: 64px;
  max-height: 64px;
  border-radius: 50%;
}
  .light{background: white; width: 10rem;
  border-radius: 3px;
  }
.progress {
  
  border-radius: 3px;
  max-width: 10rem;
  height: 10px;
}
.image, img {max-width: 400px; max-height: 400px;}
</style>