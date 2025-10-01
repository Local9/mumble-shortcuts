<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher, mode } from 'mode-watcher';
	import ThemeSwitcher from '$lib/components/ui/theme-switcher/theme-switcher.svelte';
	import { Toaster } from 'svelte-sonner';
	import ToolsSheet from '$lib/components/widget/tools.sheet.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import AddMumbleShortcut from '$lib/components/widget/mumble-shortcut/add.mumble-shortcut.svelte';
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<Toaster theme={mode.current} />

<div class="w-full p-4 gap-2 flex justify-between">
	<div class="flex justify-start">
		<span class="text-2xl font-bold">Mumble Shortcuts</span>
	</div>
	<Separator orientation="vertical" />
	<AddMumbleShortcut />
	<Separator orientation="vertical" />
	<div class="flex justify-end">
		<ToolsSheet />
		<ThemeSwitcher />
	</div>
</div>

<div class="flex flex-col items-center justify-center gap-2 p-4 w-full">
	{@render children?.()}
</div>
