<div>
  <h1>{title}</h1>

  <Grid></Grid>

  <h4>Treeview</h4>
  <Treeview locations={locations}></Treeview>

  <h5>Unique Numbers</h5>
  <ul>
	{#each uniqNumbers as num}
		<li>{ num }</li>
	{/each}
</ul>
</div>

<script>
  import Grid from "./grid/Grid.svelte";
  import Treeview from './treeview/Treeview.svelte';

  import { LocationService } from './treeview/location-service';

  import uniq from 'lodash/uniq';
	
	const numbers = [1, 5, 5, 5, 1, 1, 15, 15, 15];

  const uniqNumbers = uniq(numbers);

  let locationService = new LocationService();
  let locations = locationService.getLocations();
  let title = "Svelte Bazel Demo";
</script>
