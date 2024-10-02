<script>
	import { Heading } from 'flowbite-svelte';

	import { Tabs, TabItem } from 'flowbite-svelte';
	import Card from '../card.svelte';
	export let data;
	const new_events = data.new_events;
	const completed_events = data.completed_events;
</script>
		<Heading tag="h2" class="mb-4 text-center">Upcoming Events</Heading>
		<div class="flex flex-col gap-9 space-y-4">
			{#each new_events as event}
				<Card
					img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}"
					heading={event.title}
					text={event.description}
					tags={event.tags}
					link={event.link}
					date={event.date}
				/>
			{/each}
		</div>
