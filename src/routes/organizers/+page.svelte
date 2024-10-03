<script>
	import { Heading } from "flowbite-svelte";
	import Card from "../card.svelte";
    export let data;
    const organizers = data.organizer;
    console.log(organizers);
</script>
<div class="p-4 lg:p-10">
    <Heading tag="h2" class="mb-4 text-center">Completed Events</Heading>
            <div class="flex flex-row flex-wrap gap-4 justify-start align-baseline lg:grid lg:grid-cols-6">
                {#each organizers as org}
                    <Card
                        img="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Logos/{org.logo}"
                        heading={org.name}
                        link="/organizers/{org.slug}"
                    />
                {/each}
            </div>
            </div>