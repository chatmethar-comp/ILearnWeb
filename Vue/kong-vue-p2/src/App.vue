
<template>
  <div>
    <FormComponent></FormComponent>
    <ListData v-bind:employees="employees"></ListData>
  </div>
</template>

<script>
import FormComponent from "./components/form-component.vue";
import ListData from "./components/list-data.vue";

export default {
  name: "App",
  components: {
    ListData,
    FormComponent,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>