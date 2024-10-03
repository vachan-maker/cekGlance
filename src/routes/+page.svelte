<script>
  import { Heading, A} from 'flowbite-svelte';
	import FrontCard from './front-card.svelte';
  export let data;
  const new_events= data.new_events;
  const past_events = data.past_events;
  </script>
  
  <div class="pl-16 py-28 bg-slate-100">
    <Heading tag="h1">Browse what's happening at CEK</Heading>
  </div>
  <div class="">
  <Heading tag="h2"><A href="/upcoming">Upcoming Events</A></Heading>
  </div>
  <p></p>
  {#if new_events}
  <div class="flex flex-row overflow-x-auto snap-x snap-mandatory">
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
  
  