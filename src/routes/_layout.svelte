<!-- <script context="module">
	import { onMount } from 'svelte'
	onMount(() => {

	})


</script> -->

<script>
	import Nav from '../components/Nav.svelte';
	// import ApiNav from '../components/Api/ApiNav.svelte';
	import User from '../components/User.svelte';
	// import Header from '../components/UI/Header.svelte'
	// let mainTitle = 'ecommerce'
	// export let root
	let root = true
	export let segment;
	let user = ""
	let pw = ""
	let navType 

	

	
	// let displayApi = false
	// $: displayApi = root == true ? true : false 
</script>

<Nav {segment} {root} />
<User {user} {root} {pw} />

<!-- <User {user} {root}/> -->
	

<main>
	<!-- <Header pagetitle={segment} /> -->
	<slot></slot>
</main>

<style>
	main {
		position: relative;
		/* max-width: 56em; */
		
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>


<!-- src/routes/_layout.html -->
<!-- {#if 	segment === 'login'}
	<svelte:component this={child.component} {...child.props}/>
{:else}
	<div class="fancy-layout">
		<svelte:component this={child.component} {...child.props}/>
	</div>
{/if} -->


