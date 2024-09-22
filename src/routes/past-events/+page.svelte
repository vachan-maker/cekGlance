<script>
	import { Heading } from 'flowbite-svelte';
import Card from '../card.svelte';
    export let data;
    const past_events= data.past_events;

</script>
<Heading tag="h2" class="text-center mb-4">Past Events</Heading>
<div  class="space-y-4 flex flex-col gap-9">
    {#each past_events as event}
    <Card href="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/{event.imagePath}" heading={event.title} text={event.description} tags={event.tags}/>
    {/each}
</div>