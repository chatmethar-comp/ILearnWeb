<template>
  <nav class="container max-w-lg mx-auto flex justify-evenly mt-6">
    <router-link
      :to="{ name: 'home' }"
      class="bg-primary px-4 py-2 text-white rounded-lg"
      >Projects</router-link
    >
    <router-link
      :to="{ name: 'AddProject' }"
      class="bg-primary px-4 py-2 text-white rounded-lg"
      >New</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>