<script>
  export let user
  export let root
  export let pw
  let loginDisplay = false
  let modal = false
  let firstLog = true
  let isLogged = false
  let disabled = true
  $: isLogged = user.length > 0 ? true : false
  const rootname = 'joane'
  const rootpw = 'root'
  function enableSubmit() {}
  $: {
    if (user.length > 0 && pw.length > 0) {
      // console.log('nom:', user.length)
      // console.log('pw:', pw.length)
      disabled = false
    } else {
      disabled = true
    }
  }

  function submitForm() {
    loginDisplay = false
    return (user, pw)
  }
  // $: console.log('root:', root)

  function logOut() {
    if (!isLogged) return
    isLogged = false
    user = ""
    root = false
    firstLog = false
  }
  $: {
    if (user === rootname && pw === rootpw) {
      root = true
    }
  }
</script>
		
		<section>
		  {#if loginDisplay}
		    
			<div class="form">
				<label >Identifiant: 
          <input type="text"bind:value={user} >
        </label>
        
        <label >Mot de passe: 
          <input type="password" bind:value={pw} >
        </label>
        
        <button {disabled} class="success-btn" type="submit" on:click={submitForm}>entrer</button>
      </div>
		  {:else}
		    {#if !user.length}
		      {#if firstLog}
		        
					<p>Vous n'êtes pas connecté.e</p>
		      {:else}
		        
					<p>Vous êtes déconnecté.e</p>
		      {/if}
		    {:else}
		      
					<p>
		        {user}
						<span>{root ?  ' (admin)' : '' }</span>
					</p>
		    {/if}
		    
		  
					<div>
		    {#if root}
		      
						<button class='link-btn'>
							<a href='api' on:click={()=> root = true} >
		          administrer
		        </a>
						</button>
		    {/if}
		      
		    {#if isLogged}
		      
						<button class="danger-btn" on:click={logOut}>Déconnexion</button>
		    {:else}
		      
						<button class="info-btn" on:click={()=> loginDisplay = true}>Connexion</button>
		    {/if}
		  
					</div>
		
		  {/if}
		
				</section>
		
<style lang="scss" >
@import '../style/theme.scss';

  section {
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    padding: 0rem 8px;
    height: 3rem;
    border-top: 1px solid $primary-color;
    border-bottom: 1px solid $accent-color;
    background: $glass;
  }

  .form {
    width: 70%;
    margin: auto;
  }
  button {text-transform: uppercase;
  font-variant: normal;
  // text-shadow: 1px 1px 0 $dark;
  }

</style>