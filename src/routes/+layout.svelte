<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, mode } from 'mode-watcher';
	import ThemeSwitcher from '$lib/components/ui/theme-switcher/theme-switcher.svelte';
	import { Toaster } from 'svelte-sonner';
	import ToolsSheet from '$lib/components/widget/tools.sheet.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Toaster theme={mode.current} />

<div class="flex justify-end p-4">
	<ToolsSheet />
	<ThemeSwitcher />	
</div>

<div class="flex flex-col gap-2 justify-center p-4 items-center">
	<h1 class="text-2xl font-bold">Mumble Shortcuts</h1>
	<p class="text-sm text-muted-foreground w-[500px]">Add your mumble shortcuts to easily access them, you can export and import your shortcuts to share them with others and drag and drop the shortcuts to reorder them.</p>
	<div class="flex flex-col gap-2 w-[500px]">
		{@render children?.()}
	</div>
</div>

