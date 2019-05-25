<ul>
  {#each locations as loc}
    <li>
      {loc.name}
      <svelte:self locations={loc.locations} />
    </li>
  {/each}
</ul>

<script>
  export let locations;
</script>

<style>
  ul {
    list-style: none
  }
</style>