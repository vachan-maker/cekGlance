<script>
  import { Heading, A,P,Button,Span, Avatar,Hr} from 'flowbite-svelte';
   import { ArrowRightOutline} from 'flowbite-svelte-icons'
	import FrontCard from './front-card.svelte';
  export let data;
  const archive= data.archive;
  const upcoming_events = data.upcoming_events;
  const organizers = data.organizers;
  </script>
  
  <div class="p-10 min-h-64 bg-slate-100 flex flex-col justify-center items-center">
    <Heading tag="h1" class="text-center">Stay in the Loop with <Span gradient>CEK Glance!</Span></Heading>
  </div>
      {#if upcoming_events.length != 0}
  <div class="pt-6 flex justify-center items-center">
    <div class="container">
    <Heading tag="h3">Upcoming Events</Heading>
    </div>
    <Button pill={true} class="!p-2" href="/upcoming"><ArrowRightOutline class="w-6 h-6"/></Button>
    </div>
    <div class="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6 mb-6">
      {#each upcoming_events as upcoming}
      <FrontCard href="/event/{upcoming.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{upcoming.imagePath}" heading={upcoming.title} tags={upcoming.tags} date={upcoming.date}/>
      {/each}
    </div>
    {/if}
  <div class="pt-6 flex justify-center items-center">
  <div class="container">
  <Heading tag="h3">From the Archive</Heading>
  <P>Events hosted in the past</P>
  </div>
  <Button pill={true} class="!p-2 hover:animate-bounce" href="/archive"><ArrowRightOutline class="w-6 h-6"/></Button>
  </div>
  <div class="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6 mb-6">
    {#each archive as event}
    <FrontCard href="/event/{event.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags} date={event.date}/>
    {/each}
  </div>
  <Heading tag="h3">Organizations</Heading>
  <P>The wide range of student organizations at CEK</P>
      <div class="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-6 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6 mb-6">
    {#each organizers as org}
      <div class="flex flex-col justify-center items-center gap-5">
        <Avatar
          src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Logos/{org.logo}" class="size-36 hover:animate-pulse" border href="/organizers/{org.slug}"/>
                  <P class="font-semibold">{org.name}</P>
      </div>
    {/each}
  </div>


  
  