<script>
  import products from '../store/products.js'
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
  <ul class='first-degree'>{products.name}:
  {#each products.categories as cat}
  <li>{cat.name}
  <ul class='second-degree'>{#each cat.content as content}
  <li>{content.name}</li>
  <li>{content.description}</li>
  <li>
  <ul class='third-degree'>{#each content.rates as rate}
  <li>{rate.author}</li>
  <li>{rate.comment}</li>
  <li>{rate.rating}</li>
  {/each}
  </ul></li>
  {/each}
  </ul>
  {/each}
  </ul>
</div>

<style>
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
</style>