<script>
  let age = 20;
  let count = 20;

  const items = [
    { id: 1, name: "林三心" },
    { id: 2, name: "林六心" },
    { id: 3, name: "林百心" },
  ];
</script>

{#if age > 50}
  <p>老年人</p>
{:else if count > 30}
  <p>中年人</p>
{:else}
  <p>小朋友</p>
{/if}

{#each items as item (item.id)}
  <p>{item.name}</p>
{/each}
