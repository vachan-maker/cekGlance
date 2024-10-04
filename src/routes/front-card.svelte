<script lang="ts">
	import { Card, Button, Heading } from 'flowbite-svelte';

	import { Badge } from 'flowbite-svelte';
	import { ClockSolid } from 'flowbite-svelte-icons';

	export let img: string = '';
	export let heading: string = '';
	export let text: string = '';
	export let tags: string[];
	export let date: string = '';
	export let href:string='';
</script>

<Card class="min-w-48 snap-normal snap-center" img={img} href={href}>
	<Heading tag="h5" align="left">{heading}</Heading>
	{#if date}
		<Badge border>
			<ClockSolid class="me-1.5 h-2.5 w-2.5 text-primary-800 dark:text-primary-400" />{date}</Badge>
	{/if}
	<div class="flex flex-row flex-wrap">
	{#if tags}
		{#each tags as tag}
			<Badge rounded color = "indigo" class="m-1" href="/organizer/{tag}">{tag}</Badge>
		{/each}
	{/if}
	</div>
	<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{text}</p>
</Card>
