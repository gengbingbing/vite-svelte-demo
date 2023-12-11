<script lang="ts">
  let count = 1;
  let msg1 = `count现在是${count}`;
  let msg2 = `count的两倍是${count * 2}`;

  const handleChange = async () => {
    count++;
  };

  $: msg1 = `count现在是${count}`;
  $: {
    const res = count * 2;
    msg2 = `count的两倍是${res}`;
  }
</script>

<div>{msg1}</div>
<div>{msg2}</div>
<button on:click={handleChange}>修改count</button>
