<script>
	import { Heading, P, A,Avatar } from "flowbite-svelte";
	import FrontCard from "../../front-card.svelte";
    export let data;
    const organizer = data.organizer[0];
    const events = data.events;
</script>
<div class="p-2 bg-slate-100 flex flex-col justify-center items-center lg:flex-row lg:p-16">
  <Avatar src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Logos/{organizer.logo}" rounded size="xl" />
  <div class="flex flex-col mx-8">  
  <Heading tag="h1" class="my-2">{organizer.name}</Heading>
    {#if organizer.description}
    <P>{organizer.description}</P>
    {/if}
  </div>
  </div>
  <div class="p-12">
    <Heading tag="h2" class="text-center">Hosted Events</Heading>
    </div>
    <p></p>
    <div class="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6">
      {#each events as event}
      <FrontCard href="/event/{event.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags} date={event.date}/>
      {/each}
</div>