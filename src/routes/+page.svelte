<script>
  import { Heading, A,P,Button} from 'flowbite-svelte';
   import { ThumbsUpSolid, ArrowRightOutline } from 'flowbite-svelte-icons'
	import FrontCard from './front-card.svelte';
  export let data;
  const new_events= data.new_events;
  const past_events = data.past_events;
  </script>
  
  <div class="p-10 min-h-64 bg-slate-100 flex flex-col justify-center items-center">
    <Heading tag="h1" class="text-center">Browse what's happening at CEK</Heading>
  </div>
  <div class="pt-6 flex justify-center items-center">
  <div class="container">
  <Heading tag="h3">From the Archive</Heading>
  <P>Events hosted in the past</P>
  </div>
  <Button pill={true} class="!p-2" href="/archive"><ArrowRightOutline class="w-6 h-6"/></Button>
  </div>
  {#if new_events}
  <div class="flex flex-row overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-8 lg:auto-rows-auto lg:grid-flow-row-dense py-6">
    {#each new_events as event}
    <FrontCard href="/events/{event.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags} date={event.date} link={event.link}/>
    {/each}
  </div>
  {:else}
  <div class="">
    <Heading tag="h3">No Upcoming Events!</Heading>
  </div>
  {/if}
<div class="">
  <Heading tag="h2"><A href="/past-events">Past Events</A></Heading>
</div>
<p></p>
<div class="flex flex-row overflow-x-auto">
  {#each past_events as past_event}
  <FrontCard img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/{past_event.imagePath}" heading={past_event.title} tags={past_event.tags} text={past_event.description}/>
  {/each}
</div> 
  
  