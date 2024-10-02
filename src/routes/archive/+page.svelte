<script>
	import { Heading } from 'flowbite-svelte';

	import { Tabs, TabItem } from 'flowbite-svelte';
	import Card from '../card.svelte';
	export let data;
	const completed_events = data.completed_events;
</script>
<div class="p-10">
<Heading tag="h2" class="mb-4 text-center">Completed Events</Heading>
		<div class="flex flex-row flex-wrap gap-4 justify-start align-baseline">
			{#each completed_events as complete}
				<Card
					img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{complete.imagePath}"
					heading={complete.title}
					tags={complete.tags}
					link="/event/{complete.identifier}"
					date={complete.date}
				/>
			{/each}
		</div>
        </div>