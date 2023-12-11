<script lang="ts">
  import Children from "./Children.svelte";

  let name = "林三心";
  let age = 18;
</script>

<main>
  <div class="card">
    <Children {name} {age} />
  </div>
</main>
