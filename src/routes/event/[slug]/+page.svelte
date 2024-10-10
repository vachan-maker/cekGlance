<script>
	import { Heading, Listgroup, ListgroupItem, P,Badge, Tooltip, Button } from "flowbite-svelte";
    import { ArrowUpRightFromSquareSolid } from "flowbite-svelte-icons";
    export let data;
    const event= data.event[0];
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let dateObject = new Date(event.date);
    let eventDate = dateObject.toDateString(); 
</script>
<div class="container">
    <div class="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
    <div class="flex m-7">
        <img src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" alt="" class="w-96 aspect-square shadow-xl rounded-md"/>
    </div>
    <div class="flex flex-col flex-1 mt-8 justify-center">
        <Heading tag="h1" class="mb-6">{event.title}</Heading>
        <P class="mb-2">{event.description}</P>
        {#if event.link}
        <Button size="lg" class="max-w-32 my-5" href="{event.link}"><ArrowUpRightFromSquareSolid class="w-5 h-5 me-2" />Register</Button>
        {/if}
        <Listgroup class="max-w-lg">
            <ListgroupItem class="text-base font-semibold gap-2 flex flex-row justify-between">
                <P class="font-semibold">Organised By:</P>
                <div>
                    {#each event.tags as tag}
                    <Badge large href="/organizers/{tag}">{tag}</Badge>
                    {/each}
                </div>
            </ListgroupItem>
            <ListgroupItem class="text-base font-semibold gap-2 flex flex-row justify-between">
                <P class="font-semibold">Date:</P>
                <P>{eventDate}</P>
            </ListgroupItem>
            {#if event.mode}
            <ListgroupItem class="text-base font-semibold gap-2 flex flex-row justify-between">
                <P class="font-semibold">Mode:</P>
                <Badge large color="pink" id="{event.mode}">{event.mode}</Badge>
                {#if event.mode == 'Hybrid'}
                <Tooltip triggeredBy="#Hybrid">Event is held both online and on campus</Tooltip>
                {/if}
            </ListgroupItem>
            {/if}
            {#if event.venue}
            <ListgroupItem class="text-base font-semibold gap-2 flex flex-row justify-between">
                <P class="font-semibold">Venue:</P>
                <Badge large color="red">{event.venue}</Badge>
            </ListgroupItem>
            {/if}
            {#if event.registrationFee}
            <ListgroupItem class="text-base font-semibold gap-2 flex flex-row justify-between">
                <P class="font-semibold">Registration Fee:</P>
                <P>&#8377{event.registrationFee}</P>
            </ListgroupItem>
            {/if}
          </Listgroup>
    </div>
</div>
</div>
