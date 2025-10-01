<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import ThemeSwitcher from '$lib/components/ui/theme-switcher/theme-switcher.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />

<div class="flex justify-end p-4">
	<ThemeSwitcher />	
</div>

<div class="flex flex-col gap-2 justify-center p-4 items-center">
	<h1 class="text-2xl font-bold">Mumble Shortcuts</h1>
	<p class="text-sm text-muted-foreground">Add your mumble shortcuts to easily access them.</p>
	<div class="flex flex-col gap-2 w-[500px]">
		{@render children?.()}
	</div>
</div>

