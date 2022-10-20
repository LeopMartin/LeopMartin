<style type="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<script>
  import { Router, Route } from "svelte-routing";
  import Home from "./views/home.svelte";

  export let url = "";
</script>

<Router url="{url}">
    <Route path="/" component="{Home}" />
</Router>