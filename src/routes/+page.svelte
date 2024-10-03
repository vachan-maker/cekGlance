<script>
  import { Heading, A,P,Button} from 'flowbite-svelte';
   import { ThumbsUpSolid, ArrowRightOutline } from 'flowbite-svelte-icons'
	import FrontCard from './front-card.svelte';
  export let data;
  const archive= data.archive;
  const past_events = data.past_events;
  const upcoming_events = data.upcoming_events;
  </script>
  
  <div class="p-10 min-h-64 bg-slate-100 flex flex-col justify-center items-center">
    <Heading tag="h1" class="text-center">Stay in the Loop with CEK Glance!</Heading>
  </div>
      {#if upcoming_events.length != 0}
  <div class="pt-6 flex justify-center items-center">
    <div class="container">
    <Heading tag="h3">Upcoming Events</Heading>
    </div>
    <Button pill={true} class="!p-2" href="/upcoming"><ArrowRightOutline class="w-6 h-6"/></Button>
    </div>
    <div class="flex flex-row overflow-x-auto snap-x snap-mandatory max-w-xs lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6">
      {#each upcoming_events as upcoming}
      <FrontCard href="/event/{upcoming.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{upcoming.imagePath}" heading={upcoming.title} tags={upcoming.tags} date={upcoming.date} link={upcoming.link}/>
      {/each}
    </div>
    {/if}
  <div class="pt-6 flex justify-center items-center">
  <div class="container">
  <Heading tag="h3">From the Archive</Heading>
  <P>Events hosted in the past</P>
  </div>
  <Button pill={true} class="!p-2" href="/archive"><ArrowRightOutline class="w-6 h-6"/></Button>
  </div>
  <div class="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6">
    {#each archive as event}
    <FrontCard href="/event/{event.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags} date={event.date} link={event.link}/>
    {/each}
  </div>
<div class="">
  <Heading tag="h2"><A href="/past-events">Past Events</A></Heading>
</div>
<p></p>
<div class="flex flex-row overflow-x-auto">
  {#each past_events as past_event}
  <FrontCard img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/{past_event.imagePath}" heading={past_event.title} tags={past_event.tags} text={past_event.description}/>
  {/each}
</div> 
  
  