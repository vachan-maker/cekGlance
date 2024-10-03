<script>
	import '../app.css';
	import BottomNav from './bottomNav.svelte';
	import MainContainer from './mainContainer.svelte';
	import Navbar from './navbar.svelte';
</script>
<Navbar/>
<div class="max-w-6xl m-auto">
<slot></slot>
</div>
<BottomNav/>
