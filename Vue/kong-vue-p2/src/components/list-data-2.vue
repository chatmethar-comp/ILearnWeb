<template>
  <div class="font-semibold text-3xl text-center my-2">{{ title }}</div>
  <div class="space-y-3 mx-auto max-w-lg">
    <PersonVue
      v-for="employee in employees"
      v-bind:key="employee.id"
      v-bind:name="employee.name"
      v-bind:salary="employee.salary"
      v-bind:position="employee.position"
    />
  </div>
</template>

<script>
import PersonVue from "./person.vue";
export default {
  name: "ListData2",

  data() {
    return {};
  },
  props: {
    employees: [],
  },
  components: {
    PersonVue,
  },
  methods: {},
};
</script>

<style>
</style>