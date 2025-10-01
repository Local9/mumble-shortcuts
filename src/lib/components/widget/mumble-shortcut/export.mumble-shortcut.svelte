<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { exportJson } from '$lib/services/json.service.js';
	import { getShortcuts } from '$lib/states/mumble-shortcut-state.svelte';
	import DownloadIcon from '@lucide/svelte/icons/download';

	let filename = $state('mumble-shortcuts');
	let mumbleShortcuts = $state(getShortcuts());

	function exportMumbleShortcuts() {
		// add the current date to the filename in the format of YYYY-MM-DD
		filename = `mumble-shortcuts-${new Date().toISOString().split('T')[0]}`;
		exportJson(filename, mumbleShortcuts);
	}
</script>

<Button onclick={exportMumbleShortcuts} class="w-full cursor-pointer" variant="outline">
	<DownloadIcon />
	Export</Button
>
