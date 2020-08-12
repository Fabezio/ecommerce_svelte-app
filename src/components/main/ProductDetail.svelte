<script>
  export let content
</script>

<div class="sheet"> 
  <div class="image">
    <img src={content.image} alt={content.name}>
  </div>
  <div class="txt">
      <div>Produit: {content.name}</div>
      <div>Description: {content.description}</div>

      <!-- 3: Evaluations -->
      {#each content.rates as rate}
        <div class="sheet">
          <div>
            <img class='avatar' src='{rate.avatar}' alt='{rate.author}'>
          </div>
          <div class="txt">
            <div>{rate.author}</div>
            <div>{rate.comment}</div>
            <div>
              <div class="light">
                <div class="progress" style="background-color: hsl({120 * (rate.rating)/5}, 100%, 50%); width: {(rate.rating+1)*100/6}%;">
                </div>
              </div>
            </div>
          </div>
        </div>
      {/each}
  </div>


</div>
      <slot />

<style>
  .sheet {
    display: flex;
  }
  .image {
    width: 400px;
    height: 400px;
  }
  img {
    max-width: 400px;
    max-height: 400px;

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

</style>
    