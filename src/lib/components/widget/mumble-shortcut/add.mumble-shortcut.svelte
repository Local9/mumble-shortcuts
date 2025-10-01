<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { addShortcut } from "$lib/states/mumble-shortcut-state.svelte";
  import { toast } from "svelte-sonner";
  import PlusIcon from "@lucide/svelte/icons/plus";
  import type { Shortcut } from "$lib/types/shortcut.type.js";
  let shortcutName = $state("");
  let mumbleUrl = $state("");
  let nameInput = $state<HTMLInputElement | null>(null);

  function add() {
    if (shortcutName === "" || mumbleUrl === "") {
      return;
    }

    if (!mumbleUrl.startsWith("mumble://")) {
      return;
    }

    const id = crypto.randomUUID();
    const mumbleShortcut = { id, shortcutName, mumbleUrl } as Shortcut;
    addShortcut(mumbleShortcut);

    shortcutName = "";
    mumbleUrl = "";

    nameInput?.focus();

    toast.success("Mumble shortcut added successfully");
  }
</script> 

<div class="grid grid-add-mumble-shortcut gap-2 w-[500px]">
  <Input bind:ref={nameInput} type="text" placeholder="Name" bind:value={shortcutName} class="grid-cols-1" />
  <Input type="text" placeholder="URL (mumble://...)" bind:value={mumbleUrl} class="grid-cols-1" onkeydown={(e) => { if (e.key === "Enter") { add(); } }}  />
  <Button onclick={add} variant="outline" class="grid-cols-1 justify-end self-end w-fit"><PlusIcon />Add</Button>
</div>

<style>
  .grid-add-mumble-shortcut {
    grid-template-columns: 1fr 1fr auto;
  }
</style>