<div>
  <h1>{title}</h1>

  <Grid></Grid>

  <h4>Treeview</h4>
  <Treeview locations={locations}></Treeview>
</div>

<script>
  import Grid from "./grid/Grid.svelte";
  import Treeview from './treeview/Treeview.svelte';

  import { LocationService } from './treeview/location-service';

  let locationService = new LocationService();
  let locations = locationService.getLocations();
  let title = "Svelte Bazel Demo";
</script>
