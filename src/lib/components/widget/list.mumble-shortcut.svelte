<script lang="ts">
  import { getItem } from "$lib/services/local-storage.service.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { setItem } from "$lib/services/local-storage.service.js";
  import TrashIcon from "@lucide/svelte/icons/trash";
  
  let mumbleShortcuts = $state(JSON.parse(getItem("mumbleShortcuts") || "[]"));

  function openMumbleShortcut(mumbleShortcut: any) {
    // mumble urls start with mumble:// so they do not need to open a new tab
    if (mumbleShortcut.mumbleUrl.startsWith("mumble://")) {
      window.location.href = mumbleShortcut.mumbleUrl;
    } else {
      window.open(mumbleShortcut.mumbleUrl, "_blank");
    }
  }

  function removeMumbleShortcut(mumbleShortcut: any) {
    mumbleShortcuts = mumbleShortcuts.filter((shortcut: any) => shortcut.id !== mumbleShortcut.id);
    setItem("mumbleShortcuts", JSON.stringify(mumbleShortcuts));
  }

  // list needs to update when a new shortcut is added or removed
  // we should poll for changes every 1000ms
  $effect(() => {
    setInterval(() => {
      mumbleShortcuts = JSON.parse(getItem("mumbleShortcuts") || "[]");
    }, 1000);
  });
</script>

<div class="flex flex-col gap-2">
  {#each mumbleShortcuts as mumbleShortcut}
    <div class="grid grid-buttons gap-2">
      <Button variant="outline" onclick={() => {openMumbleShortcut(mumbleShortcut)}} class="grid-cols-1 justify-start self-start w-full">{mumbleShortcut.shortcutName}</Button>
      <Button variant="outline" onclick={() => {removeMumbleShortcut(mumbleShortcut)}} class="grid-cols-1 justify-end self-end w-fit">
        <TrashIcon />
      </Button>
    </div>
  {/each}
</div>

<style>
  .grid-buttons {
    grid-template-columns: 1fr auto;
  }
</style>