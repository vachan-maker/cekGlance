<script>
	import { Heading,P } from 'flowbite-svelte';

	import { Tabs, TabItem } from 'flowbite-svelte';
	import Card from '../card.svelte';
	import FrontCard from '../front-card.svelte';
	export let data;
	const new_events = data.new_events;
	const completed_events = data.completed_events;
</script>
<div class="p-10 min-h-64 bg-slate-100 flex flex-col justify-center items-center">
    <Heading tag="h1" class="text-center">Upcoming Events</Heading>
  </div>
		<div class="flex flex-col gap-9 space-y-4">
			{#if new_events.length == 0}
				<div class="flex flex-col justify-center items-center h-80">
				<P size="xl" italic>There are no upcoming events.</P>
			</div>
			{:else}
			{#each new_events as event}
			<div class="flex flex-row overflow-x-auto snap-x snap-mandatory max-w-xs lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6">
				{#each new_events as new_event}
				<FrontCard href="/event/{new_event.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{new_event.imagePath}" heading={new_event.title} tags={new_event.tags} date={new_event.date}/>
				{/each}
			  </div>
			{/each}
			{/if}
		</div>
