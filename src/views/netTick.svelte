<script lang="ts">
  import { tick } from "svelte";
  let ele: HTMLDivElement;
  let msg = "哈哈";

  const handleChange = async () => {
    msg = "嘿嘿";
    console.log(ele.innerHTML); // 哈哈
    await tick();
    console.log(ele.innerHTML); // 嘿嘿
  };
</script>

<div bind:this={ele}>{msg}</div>
<button on:click={handleChange}>修改文本</button>
