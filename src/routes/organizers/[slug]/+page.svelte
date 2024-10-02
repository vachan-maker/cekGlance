<script>
	import { Heading, P } from "flowbite-svelte";
    export let data;
    const organizer = data.organizer[0];
</script>
<div class="p-20 bg-slate-100">
    <Heading tag="h1">{organizer.name}</Heading>
    {#if organizer.description}
    <P>{organizer.description}</P>
    {/if}
  </div>
