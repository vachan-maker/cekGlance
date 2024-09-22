<script>
	import Card from '../card.svelte';
    export let data;
    const new_events= data.new_events;

</script>
<div  class="space-y-4 flex flex-col gap-9">
    {#each new_events as event}
    <Card href="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} text={event.description} tags={event.tags} link={event.link}/>
    {/each}
</div>