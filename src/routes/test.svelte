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
  <div class="image">
    <img src={content.image} alt={content.name}>
  </div>

  <li>{content.name}</li>
  <li>{content.description}</li>
  <li>
  <ul class='third-degree'>{#each content.rates as rate}
  <div>
    <img class='avatar' src='{rate.avatar}' alt='{rate.author}'>
  </div>

  <li>{rate.author}</li>
  <li>{rate.comment}</li>
  <li>
  <div class="light">
  <div class="progress" style="background-color: hsl({120 * (rate.rating)/5}, 100%, 50%); width: {(rate.rating+1)*100/6}%;">
  </div>
  <!-- {rate.rating} -->
  </div>
  </li>
  {/each}
  </ul></li>
  {/each}
  </ul>
  {/each}
  </ul>
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