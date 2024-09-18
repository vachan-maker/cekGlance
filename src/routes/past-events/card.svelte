<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';
	export let href:string = '';

</script>

<Card
	class="m-auto"
	img="{href}"
>
	<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		College Graduation Ceremony
	</h5>
	<p class="mb-3 font-normal leading-tight text-gray-700 dark:text-gray-400">
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</p>
</Card>
