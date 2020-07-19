<script>
  let name = ""
  let passwd = ""
</script>

<form action="">
  <label>Nom: 
    <input type="text" bind:value={name}>
  </label>
  <label>Nom: 
    <input type="password" bind:value={passwd}>
  </label>
  <input type="submit" value="entrer">
</form>
