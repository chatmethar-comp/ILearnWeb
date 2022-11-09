<template>
  <div>
    <Suspense>
      <AsyncCityView />

      <template #fallback> <p class="text-secondary">Loading...</p> </template>
    </Suspense>
  </div>
</template>

<script setup>
import AsyncCityView from "../components/AsyncCityView.vue";
</script>
