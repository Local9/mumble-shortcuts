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
  let draggedId = $state<string | null>(null);
  let dragPreviewShortcuts = $state<any[] | null>(null);
  let open = $state(false);

  function moveItem<T>(array: T[], fromIndex: number, toIndex: number): T[] {
    const copy = array.slice();
    const [moved] = copy.splice(fromIndex, 1);
    copy.splice(toIndex, 0, moved);
    return copy;
  }

  function handleDragStart(index: number, event: DragEvent) {
    const item = mumbleShortcuts[index];
    draggedId = item?.id ?? null;
    if (draggedId) {
      event.dataTransfer?.setData("text/plain", String(draggedId));
    }
  }

  function handleDragOver(hoveredId: string, event: DragEvent) {
    event.preventDefault();
    if (!draggedId) return;

    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const isAfter = event.clientY - rect.top > rect.height / 2;

    const base = dragPreviewShortcuts ?? mumbleShortcuts;
    const fromIndex = base.findIndex((x: any) => x.id === draggedId);
    const hoverIndex = base.findIndex((x: any) => x.id === hoveredId);
    if (fromIndex === -1 || hoverIndex === -1) return;

    let toIndex = hoverIndex + (isAfter ? 1 : 0);
    toIndex = Math.max(0, Math.min(base.length, toIndex));

    const next = moveItem(base, fromIndex, toIndex > base.length - 1 ? base.length - 1 : toIndex);
    dragPreviewShortcuts = next;
  }

  function handleDrop(hoveredId: string, event: DragEvent) {
    event.preventDefault();

    if (dragPreviewShortcuts) {
      mumbleShortcuts = dragPreviewShortcuts;
      setItem("mumbleShortcuts", JSON.stringify(mumbleShortcuts));
      dragPreviewShortcuts = null;
      draggedId = null;
      return;
    }

    const id = draggedId ?? event.dataTransfer?.getData("text/plain") ?? null;
    if (!id) {
      draggedId = null;
      return;
    }

    const target = event.currentTarget as HTMLElement | null;
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const isAfter = event.clientY - rect.top > rect.height / 2;

    const fromIndex = mumbleShortcuts.findIndex((x: any) => x.id === id);
    const hoverIndex = mumbleShortcuts.findIndex((x: any) => x.id === hoveredId);
    if (fromIndex === -1 || hoverIndex === -1) {
      draggedId = null;
      return;
    }

    let toIndex = hoverIndex + (isAfter ? 1 : 0);
    toIndex = Math.max(0, Math.min(mumbleShortcuts.length, toIndex));

    mumbleShortcuts = moveItem(mumbleShortcuts, fromIndex, toIndex > mumbleShortcuts.length - 1 ? mumbleShortcuts.length - 1 : toIndex);
    setItem("mumbleShortcuts", JSON.stringify(mumbleShortcuts));
    draggedId = null;
  }

  function handleDragEnd() {
    draggedId = null;
    dragPreviewShortcuts = null;
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
  {#each (dragPreviewShortcuts ?? mumbleShortcuts) as mumbleShortcut, index (mumbleShortcut.id)}
    <div
      class="grid grid-buttons gap-2"
      draggable="true"
      ondragstart={(e) => { handleDragStart(index, e); }}
      ondragover={(e) => { handleDragOver(mumbleShortcut.id, e); }}
      ondrop={(e) => { handleDrop(mumbleShortcut.id, e); }}
      ondragend={handleDragEnd}
      aria-label="Drag to reorder"
      aria-roledescription="Mumble shortcut"
      role="listitem"
      class:opacity-50={draggedId === mumbleShortcut.id}
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