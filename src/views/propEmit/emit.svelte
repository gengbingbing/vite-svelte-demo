<script lang="ts">
  let age = 18;
  import Children from "./Children.svelte";

  const handleMessage = (event: { detail: any }) => {
    console.log(event.detail); // 输出子组件传递的数据
  };
</script>

// 父组件
<main>
  <div class="card">
    <Children name="000" {age} on:message={handleMessage} />
  </div>
</main>
