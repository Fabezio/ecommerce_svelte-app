<script>
  import { createEventDispatcher } from 'svelte'
  export let user
  export let root
  let pw = ''
  const rootname = 'joane'
  const rootpw = 'jfaiskejveu'
  function isRoot() {
    if (user === rootname && pw === rootpw) {
      root = true
    }
  }
  const dispatch = createEventDispatcher()

  function sendData(e) {
    user = e.target.user
  }
  
</script>

<form on:submit={sendData} >
  <label>Nom: 
    <input type="text" bind:value={user}>
  </label>
  <label>Nom: 
    <input type="password" bind:value={pw}>
  </label>
  <input type="submit" value="entrer" on:click={isRoot}>
</form>
