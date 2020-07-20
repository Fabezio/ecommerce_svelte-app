<script>

	// import Modal from './UI/Modal.svelte' 
	// import LoginForm from './main/LoginForm.svelte' 
	
  export let user
  export let root 
  export let pw = ''
  let loginDisplay = false
  let modal = false
  let firstLog = true
  let isLogged  = false
  let disabled = true
  // $: 

  $: isLogged = user.length > 0 ? true : false

  // formulaire 

  // let pw = ''
	// let user ='normal'
	const rootname = 'joane'
	const rootpw = 'jfaiskejveu'
	// let rootpage = false
  function enableSubmit() {
    }
  $: {
    if(user.length > 0 && pw.length > 0) {
      console.log('nom:', user.length)
      console.log('pw:', pw.length)
      disabled = false
      // console.log(user, pw)
      } else {
      disabled = true     
    }
  }
  
  function submitForm() {
    return (user, pw)
    // return user, pw
  }
  
    // $: console.log(pw)
    $: console.log('root:', root)
  function logOut() {
    if(!isLogged) return
      isLogged = false
      user = ""
      root = false
      firstLog = false
  }
	function isRoot() {
    if (user === rootname && pw === rootpw) {
      // user = 'admin'
      root = true
      // modal = false
    }
		
	}
  // const dispatch = createEventDispatcher()
  // function sendData() {
  //   return user, root
  // }

</script>

<section>
  {#if loginDisplay}
    <!-- <form on:submit|preventDefault={submitForm} > -->
    <div class="form">
      <label >Identifiant: 
        <input type="text"bind:value={user} >
      </label>
      <label >Mot de passe: 
        <input type="password" bind:value={pw} >
      </label>
      <button {disabled} type="submit" on:click={submitForm}>entrer</button>
    </div>
    <!-- </form> -->
  {:else}
    {#if !user.length}
      {#if firstLog}
        <p>Vous n'êtes pas connecté.e</p>
      {:else}
        <p>Vous êtes déconnecté.e</p>
      {/if}
    {:else}
      <p>
        {user}<span>{root ?  ' (admin)' : '' }</span>
      </p>
    {/if}
    
  <div>
    {#if root}
      <button>
        <a href='api' >
          administrer
        </a>
      </button>
    {/if}
      
    {#if isLogged}
      <button on:click={logOut}>Déconnexion</button>
    {:else}
      <button on:click={()=> loginDisplay = true}>Connexion</button>
    {/if}
  </div>

  {/if}

  
      <!-- <button>Me connecter</button> -->
  
  

</section>

<style>
  section {
    display: flex;
    justify-content: space-between;
    padding: 5px 8px;
    border-top: 1px solid rgba(0,0,255, 0.05);
    border-bottom: 1px solid rgba(0,0,255, 0.05);
    background: rgba(0,0,0, 0.05);
  }
  .form {
    width: 70%;
    margin: auto; 
  }

</style>