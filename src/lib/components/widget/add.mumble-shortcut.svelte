<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { setItem, getItem } from "$lib/services/local-storage.service.js";

  let shortcutName = $state("");
  let mumbleUrl = $state("");

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
  }
</script>

<div class="grid grid-cols-2 gap-2 w-[500px]">
  <Input type="text" placeholder="Shortcut Name" bind:value={shortcutName} class="grid-cols-1" />
  <Input type="text" placeholder="Mumble URL" bind:value={mumbleUrl} class="grid-cols-1" />
  <Button onclick={addMumbleShortcut} class="col-span-2">Add</Button>
</div>