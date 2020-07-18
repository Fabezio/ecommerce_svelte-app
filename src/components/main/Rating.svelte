<script>
  let icon='star'
  let fullRating = []
  export let rating
	fullRating.length = 5
	fullRating.fill(`far fa-${icon}`)
	fullRating.fill(`fas fa-${icon}`, 0, rating)
</script>

{#if rating}
  <p>Rating: 
  {#each fullRating as el}
    <span class="{el}"></span>
  {/each}
  </p>
{:else}
  <p>not rated yet</p>
{/if}