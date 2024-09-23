<script>
	import { Heading } from 'flowbite-svelte';

	import { Tabs, TabItem } from 'flowbite-svelte';
	import Card from '../card.svelte';
	export let data;
	const new_events = data.new_events;
    const completed_events = data.completed_events;
</script>

<Tabs tabStyle="full" defaultClass="flex rounded-lg divide-x rtl:divide-x-reverse divide-gray-200 shadow dark:divide-gray-700">
    <TabItem class="w-full" open>
      <span slot="title">Upcoming Events</span>
      <Heading tag="h2" class="mb-4 text-center">Upcoming Events</Heading>
      <div class="flex flex-col gap-9 space-y-4">
        {#each new_events as event}
            <Card
                href="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}"
                heading={event.title}
                text={event.description}
                tags={event.tags}
                link={event.link}
            />
        {/each}
    </div>
    </TabItem>
    <TabItem class="w-full">
      <span slot="title">Completed Events</span>
      <Heading tag="h2" class="mb-4 text-center">Completed Events</Heading>
      <div class="flex flex-col gap-9 space-y-4">
        {#each completed_events as complete}
            <Card
                href="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{complete.imagePath}"
                heading={complete.title}
                text={complete.description}
                tags={complete.tags}
                link={complete.link}
            />
        {/each}
    </div>
    </TabItem>
  </Tabs>
