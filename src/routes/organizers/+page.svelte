<script>
	import { Heading, Avatar,P } from 'flowbite-svelte';
	export let data;
	const organizers = data.organizer;
	console.log(organizers);
</script>

<div class="p-10 min-h-64 bg-slate-100 flex flex-col justify-center items-center">
    <Heading tag="h1" class="text-center">Organizations</Heading>
  </div>
<div class="flex flex-row flex-wrap justify-center items-center gap-10 align-baseline mt-8 lg:grid lg:grid-cols-3">
	{#each organizers as org}
		<div class="flex flex-col justify-center items-center gap-5">
			<Avatar
				src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Logos/{org.logo}" class="size-36 hover:animate-pulse" border href="/organizers/{org.slug}"/>
                <P class="font-semibold">{org.name}</P>
		</div>
	{/each}
</div>
