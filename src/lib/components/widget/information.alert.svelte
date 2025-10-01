<script lang="ts">
  import * as Alert from "$lib/components/ui/alert/index.js";
  import InfoIcon from "@lucide/svelte/icons/info";

  let classes: string = $state("hidden");

  $effect(() => {
    classes = "absolute bottom-10 right-10 w-[500px]";
    setTimeout(() => {
      classes = "hidden";
    }, 10000);
  });

</script>

<Alert.Root variant="default" class={classes}>
  <InfoIcon />
  <Alert.Title>Information</Alert.Title>
  <Alert.Description>
    When you copy the Mumble Channel URL, you can paste on this page to add it to your shortcuts.
  </Alert.Description>
</Alert.Root>