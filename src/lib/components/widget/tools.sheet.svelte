<script lang="ts">
  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import ExportMumbleShortcut from "./mumble-shortcut/export.mumble-shortcut.svelte";
  import ImportMumbleShortcut from "./mumble-shortcut/import.mumble-shortcut.svelte";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<Sheet.Root>
  <Sheet.Trigger>
    <Button variant="outline" class="mr-2">Tools</Button>
  </Sheet.Trigger>
  <Sheet.Content>
    <Sheet.Header>
      <Sheet.Title>Tools</Sheet.Title>
    </Sheet.Header>
    <div class="flex flex-col gap-2 p-4">
      <ExportMumbleShortcut />
      <Separator />
      <ImportMumbleShortcut />
    </div>
  </Sheet.Content>
</Sheet.Root>