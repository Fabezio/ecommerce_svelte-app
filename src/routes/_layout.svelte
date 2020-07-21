<!-- <script context="module">
	import { onMount } from 'svelte'
	onMount(() => {

	})


</script> -->

<script>
	import Nav from '../components/Nav.svelte';
	import User from '../components/User.svelte';
	let root = true
	export let segment;
	let user = ""
	let pw = ""
	let navType

</script>	
	<Nav {segment} {root} />
	<User {user} {root} {pw} />
	<main>
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



