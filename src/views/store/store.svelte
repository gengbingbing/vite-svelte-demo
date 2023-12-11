<script lang="ts">
    import { count } from './store'
  
    const handleChange = () => {
      count.update((v) => {
        return v + 1
      })
    }
  </script>
  
  <div>{$count}</div>
  <button on:click={handleChange}>修改count</button>