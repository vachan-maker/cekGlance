<script>
	import { Heading } from 'flowbite-svelte';
	import FrontCard from '../front-card.svelte';
	export let data;
	const completed_events = data.completed_events;
</script>
<div class="p-10 min-h-64 bg-slate-100 flex flex-col justify-center items-center">
    <Heading tag="h1" class="text-center">Archive</Heading>
  </div>
<div class="grid grid-cols-2 lg:grid-cols-5 gap-8 auto-rows-auto grid-flow-row-dense py-6">
	{#each completed_events as completed}
	<FrontCard href="/event/{completed.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{completed.imagePath}" heading={completed.title} tags={completed.tags} date={completed.date}/>
	{/each}
  </div>
