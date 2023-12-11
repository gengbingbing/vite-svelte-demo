<script lang="ts">
  import { onMount } from "svelte";
  let ele: HTMLDivElement;

  onMount(() => {
    console.log(ele);
  });
</script>

<div bind:this={ele}>哈哈</div>
