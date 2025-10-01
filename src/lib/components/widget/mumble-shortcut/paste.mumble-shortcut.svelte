<script lang="ts">
  import { toast } from "svelte-sonner";
  import type { Shortcut } from "$lib/types/shortcut.type.js";
  import { getShortcuts, addShortcut } from "$lib/states/mumble-shortcut-state.svelte";

  function handleWindowPaste(event: ClipboardEvent): void {
    try {
      const text = event.clipboardData?.getData('text') ?? '';
      if (!text) return;

      // check the text starts with mumble://
      if (!text.startsWith('mumble://')) {
        return;
      }

      // check if the URL already exists in the list
      const mumbleShortcuts = getShortcuts();
      if (mumbleShortcuts.some((shortcut: Shortcut) => shortcut.mumbleUrl === text)) {
        toast.error("Mumble shortcut already exists");
        return;
      }

      // we want the mumble channel name from the url
      // url looks like this: mumble://channel/channel-name?key=value
      // we want the channel-name
      const mumbleChannelName = text.split('/').pop()?.split('?')[0];
      if (!mumbleChannelName) {
        return;
      }

      // we need to format the mumble channel name as its HTML encoded
      const formattedMumbleChannelName = decodeURIComponent(mumbleChannelName);

      const mumbleShortcut = {
        id: crypto.randomUUID(),
        shortcutName: formattedMumbleChannelName,
        mumbleUrl: text
      };

      addShortcut(mumbleShortcut);
      toast.success("Mumble shortcut added successfully");

      console.log('Pasted via Ctrl+V:', text);
    } catch (err) {
      console.error('Paste handler error:', err);
    }
  }
</script>

<svelte:window onpaste={handleWindowPaste} />