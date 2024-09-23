<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';

	import { Badge } from 'flowbite-svelte';
	import { ClockSolid } from 'flowbite-svelte-icons';

	export let href:string = '';
	export let heading:string='';
	export let text:string='';
	export let tags:string[];
	export let link:string='';
	export let date:string='';

</script>

<Card
	class="m-auto"
	img="{href}"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}
	</h5>
	{#if date}
	<Badge border>
		<ClockSolid class="text-primary-800 dark:text-primary-400 w-2.5 h-2.5 me-1.5" />{date}</Badge>
	  {/if}
	{#if tags}
	{#each tags as tag}
	<Badge large>{tag}</Badge>
	{/each}
	{/if}
	<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{text}</p>
	{#if link}
	<br />
	<Button href={link}>
		Learn More
	  </Button>
	{/if}
</Card>
