<script>
    import { FastAverageColor } from 'fast-average-color';
	import { Heading, Listgroup, ListgroupItem, P, Badge, Tooltip, Button } from 'flowbite-svelte';
	import { ArrowUpRightFromSquareSolid } from 'flowbite-svelte-icons';
	export let data;
	const event = data.event[0];
    const imgURL = `https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/${event.imagePath}`
</script>

<div class="container">
	<div class="flex flex-col items-center gap-2 lg:flex-row lg:items-start">
		<div class="m-7 flex">
			<img
				src="https://xnpuqvymwwzjiwycsabx.supabase.co/storage/v1/object/public/cekStorage/Upcoming/{event.imagePath}"
				alt=""
				class="aspect-square w-96 rounded-md shadow-xl"
			/>
		</div>
		<div class="mt-8 flex flex-1 flex-col justify-center">
			<Heading tag="h1" class="mb-6">{event.title}</Heading>
			<P class="mb-2">{event.description}</P>
			{#if event.link}
				<Button size="lg" class="my-5 max-w-32" href={event.link}
					><ArrowUpRightFromSquareSolid class="me-2 h-5 w-5" />Register</Button
				>
			{/if}
			<Listgroup class="max-w-lg">
				<ListgroupItem class="flex flex-row justify-between gap-2 text-base font-semibold">
					<P class="font-semibold">Organised By:</P>
					<div>
						{#each event.tags as tag}
							<Badge large href="/organizers/{tag}">{tag}</Badge>
						{/each}
					</div>
				</ListgroupItem>
				<ListgroupItem class="flex flex-row justify-between gap-2 text-base font-semibold">
					<P class="font-semibold">Date:</P>
					<P>{event.date}</P>
				</ListgroupItem>
				{#if event.mode}
					<ListgroupItem class="flex flex-row justify-between gap-2 text-base font-semibold">
						<P class="font-semibold">Mode:</P>
						<Badge large color="pink" id={event.mode}>{event.mode}</Badge>
						{#if event.mode == 'Hybrid'}
							<Tooltip triggeredBy="#Hybrid">Event is held both online and on campus</Tooltip>
						{/if}
					</ListgroupItem>
				{/if}
				{#if event.venue}
					<ListgroupItem class="flex flex-row justify-between gap-2 text-base font-semibold">
						<P class="font-semibold">Venue:</P>
						<Badge large color="red">{event.venue}</Badge>
					</ListgroupItem>
				{/if}
				{#if event.registrationFee}
					<ListgroupItem class="flex flex-row justify-between gap-2 text-base font-semibold">
						<P class="font-semibold">Registration Fee:</P>
						<P>&#8377{event.registrationFee}</P>
					</ListgroupItem>
				{/if}
			</Listgroup>
		</div>
	</div>
</div>
