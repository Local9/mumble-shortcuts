<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { setItem, getItem } from "$lib/services/local-storage.service.js";
  import { toast } from "svelte-sonner";
  import PlusIcon from "@lucide/svelte/icons/plus";
  
  let shortcutName = $state("");
  let mumbleUrl = $state("");
  let nameInput = $state<HTMLInputElement | null>(null);

  function addMumbleShortcut() {
    if (shortcutName === "" || mumbleUrl === "") {
      return;
    }

    if (!mumbleUrl.startsWith("mumble://")) {
      return;
    }

    const id = crypto.randomUUID();
    const mumbleShortcut = { id, shortcutName, mumbleUrl };
    setItem("mumbleShortcuts", JSON.stringify([...JSON.parse(getItem("mumbleShortcuts") || "[]"), mumbleShortcut]));

    shortcutName = "";
    mumbleUrl = "";

    nameInput?.focus();

    toast.success("Mumble shortcut added successfully");
  }
</script> 

<div class="grid grid-add-mumble-shortcut gap-2 w-[500px]">
  <Input bind:ref={nameInput} type="text" placeholder="Name" bind:value={shortcutName} class="grid-cols-1" />
  <Input type="text" placeholder="URL (mumble://...)" bind:value={mumbleUrl} class="grid-cols-1" onkeydown={(e) => { if (e.key === "Enter") { addMumbleShortcut(); } }}  />
  <Button onclick={addMumbleShortcut} variant="outline" class="grid-cols-1 justify-end self-end w-fit"><PlusIcon />Add</Button>
</div>

<style>
  .grid-add-mumble-shortcut {
    grid-template-columns: 1fr 1fr auto;
  }
</style>