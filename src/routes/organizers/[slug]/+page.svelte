<script>
	import { Heading, P, A,Avatar, Button } from "flowbite-svelte";
  import { ArrowUpRightFromSquareSolid } from "flowbite-svelte-icons";
   import { InstagramSolid,FacebookSolid, GithubSolid, DiscordSolid, TwitterSolid } from 'flowbite-svelte-icons'
	import FrontCard from "../../front-card.svelte";
    export let data;
    const organizer = data.organizer[0];
    const events = data.events;
</script>
<div class="bg-slate-100 flex flex-col justify-center items-center lg:flex-row min-h-64 p-8">
  <Avatar src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Logos/{organizer.logo}" rounded size="xl" />
  <div class="flex flex-col mx-8">  
  <Heading tag="h1" class="my-2 text-center">{organizer.name}</Heading>
    {#if organizer.description}
    <P justify size="sm">{organizer.description}</P>
    {/if}
    {#if organizer.website}
    <Button size="lg" class="max-w-32 my-5" href="{organizer.link}"><ArrowUpRightFromSquareSolid class="w-5 h-5 me-2" />Website</Button>
    {/if}
  </div>
  </div>
    <p></p>
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-8 auto-rows-auto grid-flow-row-dense py-6 mb-20">
      {#each events as event}
      <FrontCard href="/event/{event.identifier}" img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" heading={event.title} tags={event.tags} date={event.date}/>
      {/each}
</div>