<script>
	import '../app.css';
	import Navbar from './navbar.svelte';
</script>
<div class="w-full border mb-3">
<Navbar/>
</div>
<div class="max-w-6xl m-auto px-6">
<slot></slot>
</div>

