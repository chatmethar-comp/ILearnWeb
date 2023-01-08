<template>
  <nav class="filter-nav flex flex-row justify-between my-3">
    <button
      @click="updateFilter('all')"
      class="px-2 py-1"
      :class="{ active: current === 'all' }"
    >
      View all
    </button>
    <button
      @click="updateFilter('completed')"
      class="px-2 py-1"
      :class="{ active: current === 'completed' }"
    >
      View completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      class="px-2 py-1"
      :class="{ active: current === 'ongoing' }"
    >
      View ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
</style>