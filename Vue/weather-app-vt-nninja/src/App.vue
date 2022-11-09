<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-primary">
    <siteNavigation></siteNavigation>
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import siteNavigation from "./components/siteNavigation.vue";
export default {
  components: { siteNavigation },
};
</script>

<style>
</style>