<script lang="ts">
	import { Card, Button} from 'flowbite-svelte';

	import { Badge } from 'flowbite-svelte';
	import { ClockSolid } from 'flowbite-svelte-icons';

	export let link:string = '';
	export let heading:string='';
	export let text:string='';
	export let tags:string[]=[''];
	export let date:string='';
	export let img:string='';

</script>

<Card
	class="m-auto max-w-48"
	img="{img}" href="{link}"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}
	</h5>
	{#if date}
	<Badge border>
		<ClockSolid class="text-primary-800 dark:text-primary-400 w-2.5 h-2.5 me-1.5" />{date}</Badge>
	  {/if}
	{#if tags}
	{#each tags as tag}
	<Badge large href="/organizers/{tag}">{tag}</Badge>
	{/each}
	{/if}
	<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{text}</p>
</Card>
