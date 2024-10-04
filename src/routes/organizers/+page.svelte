<script>
	import { Heading, Avatar,P } from 'flowbite-svelte';
	import Card from '../card.svelte';
	import FrontCard from '../front-card.svelte';
	export let data;
	const organizers = data.organizer;
	console.log(organizers);
</script>

<Heading tag="h2" class="mb-4 text-center">Completed Events</Heading>
<div class="flex flex-row flex-wrap justify-center items-center gap-10 align-baseline lg:grid lg:grid-cols-3">
	{#each organizers as org}
		<div class="flex flex-col justify-center items-center gap-5">
			<Avatar
				src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Logos/{org.logo}" class="size-36 hover:animate-pulse" border href="/organizers/{org.slug}"/>
                <P class="">{org.name}</P>
		</div>
	{/each}
</div>
