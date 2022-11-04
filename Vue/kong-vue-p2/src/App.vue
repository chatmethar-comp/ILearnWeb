
<template>
  <h1
    class="
      py-6
      text-4xl
      font-bold
      uppercase
      text-center
      tracking-wider
      bg-slate-300
    "
  >
    Management System
  </h1>
  <div>
    <FormComponent @savedata="insertEmp"></FormComponent>
    <!-- <ListData v-bind:employees="employees"></ListData> -->
    <ListData2
      v-if="employees.length > 0"
      v-bind:employees="employees"
    ></ListData2>
  </div>
</template>

<script>
import FormComponent from "./components/form-component.vue";
// import ListData from "./components/list-data.vue";
import ListData2 from "./components/list-data-2.vue";

export default {
  name: "App",
  components: {
    // ListData,
    FormComponent,
    ListData2,
  },
  data() {
    return {
      employees: [],
    };
  },
  methods: {
    insertEmp(data) {
      this.employees.push(data);
    },
  },
};
</script>

<style>
</style>