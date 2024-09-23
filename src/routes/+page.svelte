<script>
  import { Heading } from 'flowbite-svelte';
	import FrontCard from './front-card.svelte';
  export let data;
  const new_events= data.new_events;
  </script>
  
  <div class="p-20 bg-slate-100">
    <Heading tag="h1">Browse what's happening at CEK</Heading>
  </div>
  <Heading tag="h2">Upcoming Events</Heading>
  <p></p>
  <div class="flex">
    {#each new_events as event}
    <FrontCard href="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags}/>
    {/each}
  </div> 
  
  