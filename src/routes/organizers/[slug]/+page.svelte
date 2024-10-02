<script>
	import { Heading } from "flowbite-svelte";
    export let data;
    const {organizer} = data;
</script>
<div class="p-20 bg-slate-100">
    <Heading tag="h1">{organizer.name}</Heading>
  </div>
