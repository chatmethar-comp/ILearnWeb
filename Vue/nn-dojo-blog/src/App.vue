<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container mx-auto">
    <nav class="flex justify-center space-x-6 text-xl my-6">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </div>

  <RouterView />
</template>

<style scoped>
</style>
