<script>
  import {createEventDispatcher} from 'svelte'
  // export let rootname
  // export let rootpw
  // export let name = ""
  // export let passwd = ""
  export let user
  export let root
  // let name = ''
	let pw = ''
	// let user ='normal'
	const rootname = 'joane'
	const rootpw = 'jfaiskejveu'
	// let rootpage = false
	function isRoot() {
		if (user === rootname && pw === rootpw) {
			// user = 'admin'
			root = true
			// modal = false
		}
	}
  const dispatch = createEventDispatcher()
  function sendData(e) {
    user = e.target.user
  }
	$: console.log(user)
	// $: console.log(pw)
  $: console.log('root:', root)
  
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
