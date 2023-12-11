<script>
  let inputValue = "";
  let checkboxValue = false;
  /**
   * @type {null}
   */
  let groupValue = null;
</script>

<input bind:value={inputValue} />
<input type="checkbox" bind:checked={checkboxValue} />

<input type="radio" bind:group={groupValue} name="books" value="单选1" />
<input type="radio" bind:group={groupValue} name="books" value="单选2" />
<input type="radio" bind:group={groupValue} name="books" value="单选3" />
