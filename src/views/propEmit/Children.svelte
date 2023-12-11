<script lang="ts">
  export let name: string;
  export let age: number;

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function sendData() {
    const data = "Hello from Child!";
    dispatch("message", data);
  }
</script>

<div>我叫{name}，今年{age}岁</div>

<button on:click={sendData}>发送</button>
