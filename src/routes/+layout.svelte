<script>
	import '../app.css';
	import BottomNav from './bottomNav.svelte';
	import MainContainer from './mainContainer.svelte';
	import Navbar from './navbar.svelte';
</script>
<Navbar/>
<MainContainer/>
<slot></slot>
<BottomNav/>
