<script>
	import { Heading, P, A } from "flowbite-svelte";
	import FrontCard from "../../front-card.svelte";
    export let data;
    const organizer = data.organizer[0];
    const events = data.events;
</script>
<div class="p-20 bg-slate-100">
    <Heading tag="h1">{organizer.name}</Heading>
    {#if organizer.description}
    <P>{organizer.description}</P>
    {/if}
  </div>
  <div class="p-12">
    <Heading tag="h2" class="text-center">Hosted Events</Heading>
    </div>
    <p></p>
    <div class="flex flex-wrap justify-center">
      {#each events as event}
      <FrontCard href="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags} date={event.date} link={event.link}/>
      {/each}
</div>