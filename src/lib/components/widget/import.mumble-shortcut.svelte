<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { importJson } from "$lib/services/json.service.js";
  import { setItem, getItem } from "$lib/services/local-storage.service.js";
  import { toast } from "svelte-sonner";
  
  let fileInput = $state<HTMLInputElement | null>(null);

  function importMumbleShortcuts() {
    const json = importJson(fileInput?.files?.[0] as File) as any;

    if (!json) {
      return;
    }

    // if there are existing mumble shortcuts, merge them with the new ones, if there are duplicates we can update them
    const existingMumbleShortcuts = JSON.parse(getItem("mumbleShortcuts") || "[]");
    if (!existingMumbleShortcuts) {
      setItem("mumbleShortcuts", JSON.stringify(json));
      return;
    }
    
    const mergedMumbleShortcuts = [...existingMumbleShortcuts, ...json];
    // if there are duplicates we can update them
    const uniqueMumbleShortcuts = mergedMumbleShortcuts.filter((shortcut: any, index: number, self: any) =>
      index === self.findIndex((t: any) => t.id === shortcut.id)
    );
    setItem("mumbleShortcuts", JSON.stringify(uniqueMumbleShortcuts));

    toast.success("Mumble shortcuts imported successfully");
  }
</script>

<Button onclick={importMumbleShortcuts} class="w-full" variant="outline">Import</Button>
<Input type="file" bind:ref={fileInput} class="w-full" accept=".json" />