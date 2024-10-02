<script>
	import { Heading, P } from "flowbite-svelte";

    export let data;
    const event= data.event[0];
</script>
<div class="flex flex-col items-center gap-2 p-8 bg-slate-100 lg:flex-row lg:items-start ">
    <div class="flex m-7">
        <img src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}" alt="" class="w-96 aspect-square"/>
    </div>
    <div class="flex flex-col flex-1">
        <Heading tag="h1" class="mb-6">{event.title}</Heading>
        <P>{event.description}</P>
    </div>
</div>