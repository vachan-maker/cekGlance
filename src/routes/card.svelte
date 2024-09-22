<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';

	import { Badge } from 'flowbite-svelte';

	export let href:string = '';
	export let heading:string='';
	export let text:string='';
	export let tags:string[];

</script>

<Card
	class="m-auto"
	img="{href}"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{heading}
	</h5>
	<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">{text}
	</p>
	{#each tags as tag}
	<Badge large>{tag}</Badge>
	{/each}
</Card>
