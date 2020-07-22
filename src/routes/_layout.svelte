<!-- <script context="module">
	import { onMount } from 'svelte'
	onMount(() => {

	})


</script> -->

<script>

	import Nav from '../components/Nav.svelte';
	import rootUser from '../components/API/.rootUser'
	import User from '../components/User.svelte';
	let root 
	export let segment;
	let user = ""
	let pw = ""
	let navType

	$: user = rootUser.name || 'machin'
	$: user = rootUser.isRoot || false
	// $: user = rootUser.name

	$: console.log(rootUser)

</script>	
	<Nav {segment} {root} />
	<hr>
	<User {user} {root} {pw} />
	<main>
		<slot></slot>
	</main>
	<footer>ecommerce</footer>
	
<style lang='scss' global>
	@import "../style/global.scss";
	// @import "../style/theme.scss";
	main {
		position: relative;
		/* max-width: 56em; */
		
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;

}
footer {
	position: fixed;
	bottom: 0;
	padding: 16px;
	border-top: 1px solid $accent-color;
	width: 100%;
	display: block;
	text-align: center;
	background: $glass;

}
hr {
	color: $accent-color;
	padding: 0;
	margin: 0;
	opacity: 0.25;
}
</style>




