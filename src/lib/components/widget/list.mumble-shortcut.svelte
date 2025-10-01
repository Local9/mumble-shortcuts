<script lang="ts">
  import { getItem } from "$lib/services/local-storage.service.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { setItem } from "$lib/services/local-storage.service.js";
  import TrashIcon from "@lucide/svelte/icons/trash";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import PencilIcon from "@lucide/svelte/icons/pencil";
  import { toast } from "svelte-sonner";
  
  let mumbleShortcut = $state<any>(null);
  let mumbleShortcuts = $state(JSON.parse(getItem("mumbleShortcuts") || "[]"));
  let draggedIndex = $state<number | null>(null);
  let open = $state(false);

  function moveItem<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const copy = array.slice();
    const [moved] = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, moved);
    return copy;
  }

  function handleDragStart(index: number, event: DragEvent) {
    draggedIndex = index;
    event.dataTransfer?.setData("text/plain", String(index));
  }

  function handleDragOver(index: number, event: DragEvent) {
    event.preventDefault();
  }

  function handleDrop(index: number, event: DragEvent) {
    event.preventDefault();
    const fromIndex = draggedIndex ?? parseInt(event.dataTransfer?.getData("text/plain") || "-1", 10);
    if (fromIndex < 0 || fromIndex === index) {
      draggedIndex = null;
      return;
    }
    mumbleShortcuts = moveItem(mumbleShortcuts, fromIndex, index);
    setItem("mumbleShortcuts", JSON.stringify(mumbleShortcuts));
    draggedIndex = null;
  }

  function handleDragEnd() {
    draggedIndex = null;
  }

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

    toast.success("Mumble shortcut removed successfully");
  }

  // list needs to update when a new shortcut is added or removed
  // we should poll for changes every 1000ms
  $effect(() => {
    setInterval(() => {
      mumbleShortcuts = JSON.parse(getItem("mumbleShortcuts") || "[]");
    }, 1000);
  });

  function openMumbleShortcutEditSheet(shortcut: any) {
    mumbleShortcut = shortcut;
    open = true;
  }

  function updateMumbleShortcut(mumbleShortcut: any) {
    if (mumbleShortcut.shortcutName === "" || mumbleShortcut.mumbleUrl === "") {
      return;
    }
    
    if (!mumbleShortcut.mumbleUrl.startsWith("mumble://")) {
      return;
    }

    mumbleShortcuts = mumbleShortcuts.map((shortcut: any) => shortcut.id === mumbleShortcut.id ? mumbleShortcut : shortcut);
    setItem("mumbleShortcuts", JSON.stringify(mumbleShortcuts));
    open = false;
  }
</script>

<div class="flex flex-col gap-2">
  {#each mumbleShortcuts as mumbleShortcut, index}
    <div
      class="grid grid-buttons gap-2"
      draggable="true"
      ondragstart={(e) => { handleDragStart(index, e); }}
      ondragover={(e) => { handleDragOver(index, e); }}
      ondrop={(e) => { handleDrop(index, e); }}
      ondragend={handleDragEnd}
      aria-label="Drag to reorder"
      aria-roledescription="Mumble shortcut"
      role="listitem"
    >
      <Button variant="outline" onclick={() => {openMumbleShortcut(mumbleShortcut)}} class="grid-cols-1 justify-start self-start w-full">{mumbleShortcut.shortcutName}</Button>
      <Button variant="outline" onclick={() => {openMumbleShortcutEditSheet(mumbleShortcut)}} class="grid-cols-1 justify-end self-end w-fit">
        <PencilIcon />
      </Button>
      <Button variant="outline" onclick={() => {removeMumbleShortcut(mumbleShortcut)}} class="grid-cols-1 justify-end self-end w-fit">
        <TrashIcon />
      </Button>
    </div>
  {/each}
</div>

<style>
  .grid-buttons {
    grid-template-columns: 1fr auto auto;
  }
</style>

<Sheet.Root open={open}>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Update Shortcut</Sheet.Title>
      <Sheet.Description>
        This action cannot be undone. This will permanently update your shortcut.
      </Sheet.Description>
    </Sheet.Header>
    <div class="flex flex-col gap-2 p-4">
      <Input type="text" placeholder="Shortcut Name" bind:value={mumbleShortcut.shortcutName} />
      <Input type="text" placeholder="Mumble URL" bind:value={mumbleShortcut.mumbleUrl} />
    </div>
    <Sheet.Footer class="grid grid-cols-2 gap-2">
      <Button variant="outline" onclick={() => {updateMumbleShortcut(mumbleShortcut)}} class="grid-cols-1 w-full">Update</Button>
      <Button variant="outline" onclick={() => {open = false}} class="grid-cols-1 w-full">Cancel</Button>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>