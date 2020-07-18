<script>
  export let pagetitle = 'title'
</script>

<svelte:head>
  <title>
    eCommerce | {pagetitle}
  </title>
  <link rel="icon" type='image/jpg' href="https://img2.freepng.fr/20180413/vrq/kisspng-web-development-e-commerce-logo-electronic-busines-ecommerce-5ad142afa3fd01.2088356915236635356717.jpg">
</svelte:head>

<header>
  <h1>eCommerce</h1>
  <h2>{pagetitle}</h2>
</header>

<style>
  header {
    padding: 8rem O 4rem;
  }
</style>