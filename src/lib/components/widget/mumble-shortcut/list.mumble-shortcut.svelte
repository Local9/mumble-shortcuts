<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import TrashIcon from "@lucide/svelte/icons/trash";
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import PencilIcon from "@lucide/svelte/icons/pencil";
  import { toast } from "svelte-sonner";
  import { getShortcuts, updateShortcuts, shortcutState } from "$lib/states/mumble-shortcut-state.svelte";
  import type { Shortcut } from "$lib/types/shortcut.type.js";
  import Loader2Icon from "@lucide/svelte/icons/loader-2";
  import { onMount } from "svelte";
  import { onDestroy } from "svelte";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import ChevronDownIcon from "@lucide/svelte/icons/chevron-down";
  import { getItem, setItem } from "$lib/services/local-storage.service";

  let mumbleShortcut = $state<Shortcut>({} as Shortcut);
  let mumbleShortcuts = $state<Shortcut[]>(shortcutState.shortcuts);
  let loading = $state(shortcutState.loading);
  let draggedId = $state<string | null>(null);
  let dragPreviewShortcuts = $state<Shortcut[] | null>(null);
  let open = $state(false);
  let expandedPaths = $state<Record<string, boolean>>({});
  let hostBgColors = $state<Record<string, string>>({});

  // Initialize once on mount to avoid reactive update loops
  onMount(() => {
    getShortcuts();
    const stored = getItem("mumbleHostBgColors");
    if (stored) {
      try { hostBgColors = JSON.parse(stored) as Record<string, string>; } catch {}
    }
  });

  $effect(() => {
    mumbleShortcuts = shortcutState.shortcuts;
  });

  // Ensure new hosts get an entry so users can set a color
  $effect(() => {
    const next = { ...hostBgColors } as Record<string, string>;
    let changed = false;
    for (const s of mumbleShortcuts) {
      const parsed = parseMumbleUrl(s.mumbleUrl);
      if (!parsed) continue;
      const host = parsed.host;
      if (host && next[host] === undefined) {
        next[host] = "";
        changed = true;
      }
    }
    if (changed) {
      hostBgColors = next;
      setItem("mumbleHostBgColors", JSON.stringify(hostBgColors));
    }
  });

  function setHostColor(host: string, color: string) {
    hostBgColors = { ...hostBgColors, [host]: color };
    setItem("mumbleHostBgColors", JSON.stringify(hostBgColors));
  }

  onDestroy(() => {
    shortcutState.shortcuts = shortcutState.shortcuts;
  });

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
    const fromIndex = base.findIndex((x: Shortcut) => x.id === draggedId);
    const hoverIndex = base.findIndex((x: Shortcut) => x.id === hoveredId);
    if (fromIndex === -1 || hoverIndex === -1) return;

    let toIndex = hoverIndex + (isAfter ? 1 : 0);
    toIndex = Math.max(0, Math.min(base.length, toIndex));

    const next = moveItem(base, fromIndex, toIndex > base.length - 1 ? base.length - 1 : toIndex);
    dragPreviewShortcuts = next as Shortcut[];
  }

  function handleDrop(hoveredId: string, event: DragEvent) {
    event.preventDefault();

    if (dragPreviewShortcuts) {
      mumbleShortcuts = dragPreviewShortcuts;
      updateShortcuts(mumbleShortcuts as Shortcut[]);
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

    const fromIndex = mumbleShortcuts.findIndex((x: Shortcut) => x.id === id);
    const hoverIndex = mumbleShortcuts.findIndex((x: Shortcut) => x.id === hoveredId);
    if (fromIndex === -1 || hoverIndex === -1) {
      draggedId = null;
      return;
    }

    let toIndex = hoverIndex + (isAfter ? 1 : 0);
    toIndex = Math.max(0, Math.min(mumbleShortcuts.length, toIndex));

    mumbleShortcuts = moveItem(mumbleShortcuts, fromIndex, toIndex > mumbleShortcuts.length - 1 ? mumbleShortcuts.length - 1 : toIndex);
    updateShortcuts(mumbleShortcuts as Shortcut[]);
    draggedId = null;
  }

  function handleDragEnd() {
    draggedId = null;
    dragPreviewShortcuts = null;
  }

  function openMumbleShortcut(mumbleShortcut: Shortcut) {
    // mumble urls start with mumble:// so they do not need to open a new tab
    if (mumbleShortcut.mumbleUrl.startsWith("mumble://")) {
      window.location.href = mumbleShortcut.mumbleUrl;
    } else {
      window.open(mumbleShortcut.mumbleUrl, "_blank");
    }
  }

  function removeMumbleShortcut(mumbleShortcut: Shortcut) {
    mumbleShortcuts = mumbleShortcuts.filter((shortcut: Shortcut) => shortcut.id !== mumbleShortcut.id);
    updateShortcuts(mumbleShortcuts as Shortcut[]);

    toast.success("Mumble shortcut removed successfully");
  }

  function openMumbleShortcutEditSheet(shortcut: Shortcut) {
    mumbleShortcut = shortcut;
    open = true;
  }

  function update(mumbleShortcut: Shortcut) {
    if (mumbleShortcut.shortcutName === "" || mumbleShortcut.mumbleUrl === "") {
      return;
    }
    
    if (!mumbleShortcut.mumbleUrl.startsWith("mumble://")) {
      return;
    }

    mumbleShortcuts = mumbleShortcuts.map((shortcut: Shortcut) => shortcut.id === mumbleShortcut.id ? mumbleShortcut : shortcut);
    updateShortcuts(mumbleShortcuts as Shortcut[]);
    open = false;
  }

  // -------- Tree building & flattening --------
  type Leaf = { shortcut: Shortcut; label: string };
  type TreeNode = { name: string; path: string; children: TreeNode[]; leaves: Leaf[] };
  type Row = { kind: 'group'; name: string; path: string; depth: number } | { kind: 'leaf'; label: string; shortcut: Shortcut; depth: number };

  function sanitizeAndTrimUrl(raw: string): string {
    const trimmed = raw.trim().replace(/^@+/, "");
    return trimmed;
  }

  function parseMumbleUrl(url: string): { host: string; segments: string[]; leafLabel: string } | null {
    try {
      const cleaned = sanitizeAndTrimUrl(url);
      if (!cleaned.startsWith("mumble://")) return null;
      const withoutScheme = cleaned.slice("mumble://".length);
      const firstSlashIdx = withoutScheme.indexOf('/');
      const host = firstSlashIdx === -1 ? withoutScheme : withoutScheme.slice(0, firstSlashIdx);
      const pathPart = firstSlashIdx === -1 ? '' : withoutScheme.slice(firstSlashIdx + 1);
      const rawSegments = pathPart.length ? pathPart.split('/') : [];
      const decodedSegments = rawSegments
        .filter((s) => s.length > 0)
        .map((s) => s.split('?')[0])
        .map((s) => decodeURIComponent(s));
      const safeHost = decodeURIComponent(host);
      if (decodedSegments.length === 0) {
        return { host: safeHost, segments: [safeHost], leafLabel: safeHost };
      }
      const leafLabel = decodedSegments[decodedSegments.length - 1];
      const segments = [safeHost, ...decodedSegments.slice(0, -1)];
      return { host: safeHost, segments, leafLabel };
    } catch {
      return null;
    }
  }

  function getOrCreateChild(parent: TreeNode, name: string, path: string): TreeNode {
    const existing = parent.children.find((c) => c.name === name);
    if (existing) return existing;
    const node: TreeNode = { name, path, children: [], leaves: [] };
    parent.children.push(node);
    return node;
  }

  function buildTree(list: Shortcut[]): TreeNode {
    const root: TreeNode = { name: 'root', path: '', children: [], leaves: [] };
    for (const s of list) {
      const parsed = parseMumbleUrl(s.mumbleUrl);
      if (!parsed) continue;
      const { segments, leafLabel } = parsed;
      let current = root;
      let currentPath = '';
      for (const seg of segments) {
        currentPath = currentPath ? `${currentPath}/${seg}` : seg;
        current = getOrCreateChild(current, seg, currentPath);
      }
      current.leaves.push({ shortcut: s, label: leafLabel || s.shortcutName });
    }
    return root;
  }

  function isExpanded(path: string): boolean {
    // Default to true for undefined paths; only explicit false collapses
    return expandedPaths[path] !== false;
  }

  function pushVisibleRows(node: TreeNode, depth: number, rows: Row[]) {
    if (node.path) {
      rows.push({ kind: 'group', name: node.name, path: node.path, depth });
    }
    const expanded = node.path ? isExpanded(node.path) : true;
    if (!expanded) return;

    const childDepth = node.path ? depth + 1 : depth;

    // List this group's leaves first (order asc if defined, then alphabetical)
    const sortedLeaves = [...node.leaves].sort((a, b) => {
      const aHas = typeof a.shortcut.order === 'number';
      const bHas = typeof b.shortcut.order === 'number';
      if (aHas && bHas) {
        const cmp = (a.shortcut.order as number) - (b.shortcut.order as number);
        if (cmp !== 0) return cmp;
      } else if (aHas !== bHas) {
        return aHas ? -1 : 1; // items with order come first
      }
      return a.label.localeCompare(b.label, undefined, { sensitivity: 'base' });
    });
    for (const leaf of sortedLeaves) {
      rows.push({ kind: 'leaf', label: leaf.label, shortcut: leaf.shortcut, depth: childDepth });
    }

    // Then list child groups (alphabetically) and recurse
    const sortedChildren = [...node.children].sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    for (const child of sortedChildren) {
      pushVisibleRows(child, childDepth, rows);
    }
  }

  function getVisibleRows(): Row[] {
    const base = dragPreviewShortcuts ?? mumbleShortcuts;
    const tree = buildTree(base);
    const rows: Row[] = [];
    // sort hosts alphabetically
    tree.children.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    for (const host of tree.children) {
      pushVisibleRows(host, 0, rows);
    }
    return rows;
  }

  function toggle(path: string) {
    expandedPaths[path] = !isExpanded(path);
  }
</script>

<div class="grid gap-1 w-full grid-cols-4">
  {#if shortcutState.loading}
    <div class="flex justify-center items-center h-full">
      <Loader2Icon class="animate-spin" />
    </div>
  {/if}
  {#each getVisibleRows() as row (row.kind === 'leaf' ? row.shortcut.id : row.path)}
    {#if row.kind === 'group'}
      {#if row.depth === 0}
        <div class="flex items-center justify-between px-1 py-1 rounded-md" style={`grid-column: 1 / -1; padding-left: ${row.depth * 2}px; background: ${hostBgColors[row.name] ?? ''};`}>
          <button type="button" aria-expanded={isExpanded(row.path)} class="flex items-center gap-2 select-none cursor-pointer hover:bg-accent/50 px-1 py-1 rounded-md" onclick={() => toggle(row.path)}>
            {#if isExpanded(row.path)}
              <ChevronDownIcon />
            {:else}
              <ChevronRightIcon />
            {/if}
            <span class="font-semibold">{row.name}</span>
          </button>
          <input type="color" aria-label={`Set background color for ${row.name}`} value={hostBgColors[row.name] ?? "#000000"} oninput={(e) => setHostColor(row.name, (e.target as HTMLInputElement).value)} />
        </div>
      {:else}
        <button type="button" aria-expanded={isExpanded(row.path)} class="flex items-center gap-2 select-none cursor-pointer px-1 py-1 rounded-md hover:bg-accent" style={`grid-column: 1 / -1; padding-left: ${row.depth * 16}px;`} onclick={() => toggle(row.path)}>
          {#if isExpanded(row.path)}
            <ChevronDownIcon />
          {:else}
            <ChevronRightIcon />
          {/if}
          <span class="font-semibold">{row.name}</span>
        </button>
      {/if}
    {:else}
      <div
        class="grid grid-buttons gap-1"
        style={`padding-left: ${row.depth * 2}px;`}
        draggable="true"
        ondragstart={(e) => { handleDragStart((dragPreviewShortcuts ?? mumbleShortcuts).findIndex((x) => x.id === row.shortcut.id), e); }}
        ondragover={(e) => { handleDragOver(row.shortcut.id, e); }}
        ondrop={(e) => { handleDrop(row.shortcut.id, e); }}
        ondragend={handleDragEnd}
        aria-label="Drag to reorder"
        aria-roledescription="Mumble shortcut"
        role="listitem"
        class:opacity-50={draggedId === row.shortcut.id}
      >
        <Button variant="outline" onclick={() => {openMumbleShortcut(row.shortcut)}} class="grid-cols-1 justify-start self-start w-full overflow-hidden text-ellipsis">{row.label}</Button>
        <Button variant="outline" onclick={() => {openMumbleShortcutEditSheet(row.shortcut)}} class="grid-cols-1 justify-end self-end w-fit">
          <PencilIcon />
        </Button>
        <Button variant="outline" onclick={() => {removeMumbleShortcut(row.shortcut)}} class="grid-cols-1 justify-end self-end w-fit">
          <TrashIcon />
        </Button>
      </div>
    {/if}
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
      <Input type="number" placeholder="Order" bind:value={mumbleShortcut.order} />
    </div>
    <Sheet.Footer class="grid grid-cols-2 gap-2">
      <Button variant="outline" onclick={() => {update(mumbleShortcut)}} class="grid-cols-1 w-full">Update</Button>
      <Button variant="outline" onclick={() => {open = false}} class="grid-cols-1 w-full">Cancel</Button>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>