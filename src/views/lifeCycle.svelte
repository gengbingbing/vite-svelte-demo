<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from "svelte";

  onMount(() => {
    console.log("onMount");
  });
  beforeUpdate(() => {
    console.log("beforeUpdate");
  });
  afterUpdate(() => {
    console.log("afterUpdate");
  });
  onDestroy(() => {
    console.log("onDestroy");
  });
</script>
