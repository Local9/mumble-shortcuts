<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { importJson } from "$lib/services/json.service.js";
  import { setItem, getItem } from "$lib/services/local-storage.service.js";
  import { toast } from "svelte-sonner";
  
  let fileInput = $state<HTMLInputElement | null>(null);

  async function importMumbleShortcuts() {
    if (!fileInput?.files?.[0]) {
      toast.error("No file selected");
      return;
    }

    try {
      const json = await importJson<any[]>(fileInput.files[0] as File);
      console.log(json);
      
      if (!Array.isArray(json)) {
        toast.error("Invalid file format: expected an array");
        return;
      }

    // if there are existing mumble shortcuts, merge them with the new ones, if there are duplicates we can update them
    const existingMumbleShortcuts = (() => {
      try {
        const parsed = JSON.parse(getItem("mumbleShortcuts") || "[]");
        return Array.isArray(parsed) ? parsed : [];
      } catch {
        return [];
      }
    })();
    
    const mergedMumbleShortcuts = [...existingMumbleShortcuts, ...(json as any[])];
    // if there are duplicates we can update them
    const uniqueMumbleShortcuts = mergedMumbleShortcuts.filter((shortcut: any, index: number, self: any[]) =>
      index === self.findIndex((t: any) => t.id === shortcut.id)
    );
    setItem("mumbleShortcuts", JSON.stringify(uniqueMumbleShortcuts));

    toast.success("Mumble shortcuts imported and merged successfully");
      
      // Clear the file input so the same file can be re-imported if needed
      if (fileInput) fileInput.value = "";
    } catch (error) {
      console.error(error);
      toast.error("Failed to read or parse the selected file");
    }
  }
</script>

<Button onclick={importMumbleShortcuts} class="w-full cursor-pointer" variant="outline">Import</Button>
<Input type="file" bind:ref={fileInput} class="w-full cursor-pointer" accept=".json" />