<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { importJson } from '$lib/services/json.service.js';
	import { toast } from 'svelte-sonner';
	import FileUpIcon from "@lucide/svelte/icons/file-up";
	import { getShortcuts, updateShortcuts } from '$lib/states/mumble-shortcut-state.svelte';
	import type { Shortcut } from '$lib/types/shortcut.type.js';

	let fileInput = $state<HTMLInputElement | null>(null);

	async function importMumbleShortcuts() {
		if (!fileInput?.files?.[0]) {
			toast.error('No file selected');
			return;
		}

		try {
			const json = await importJson<Shortcut[]>(fileInput.files[0] as File);

			if (!Array.isArray(json)) {
				toast.error('Invalid file format: expected an array');
				return;
			}

      // check if the json urls start with mumble://
      if (json.some((shortcut: Shortcut) => !shortcut.mumbleUrl.startsWith('mumble://'))) {
        toast.error('Invalid file format: expected mumble urls to start with mumble://');
        return;
      }

			// if there are existing mumble shortcuts, merge them with the new ones, if there are duplicates we can update them
			const existingMumbleShortcuts = (() => {
				try {
					const parsed = getShortcuts();
					return Array.isArray(parsed) ? parsed : [];
				} catch {
					return [];
				}
			})();

			const mergedMumbleShortcuts = [...existingMumbleShortcuts, ...(json as Shortcut[])];
			// if there are duplicates we can update them by id
			const uniqueMumbleShortcuts = mergedMumbleShortcuts.filter(
				(shortcut: Shortcut, index: number, self: Shortcut[]) =>
					index === self.findIndex((t: Shortcut) => t.id === shortcut.id)
			);
			
			updateShortcuts(uniqueMumbleShortcuts as Shortcut[]);

			toast.success('Mumble shortcuts imported and merged successfully');

			// Clear the file input so the same file can be re-imported if needed
			if (fileInput) fileInput.value = '';
		} catch (error) {
			console.error(error);
			toast.error('Failed to read or parse the selected file');
		}
	}
</script>

<Button onclick={importMumbleShortcuts} class="w-full cursor-pointer" variant="outline"
	>
	<FileUpIcon />
	Import</Button
>
<Input type="file" bind:ref={fileInput} class="w-full cursor-pointer" accept=".json" />
