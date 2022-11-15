<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-primary">
    <siteNavigation></siteNavigation>
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <Component :is="Component" />
      </Transition>
    </RouterView>
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
.page-enter-active,
.page-leave-active {
  transition: 400ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>