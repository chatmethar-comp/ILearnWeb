<template>
  <div class="font-semibold text-3xl text-center my-2">{{ title }}</div>
  <div class="space-y-3 mx-auto max-w-lg">
    <PersonVue
      v-for="employee in employees"
      v-bind:key="employee.id"
      v-bind:id="employee.id"
      v-bind:name="employee.name"
      v-bind:salary="employee.salary"
      v-bind:position="employee.position"
      v-bind:isVisible="employee.isVisible"
      v-on:show="toggleVisible"
      v-on:delete="deleteItem"
    />
  </div>
</template>

<script>
import PersonVue from "./person.vue";
export default {
  name: "ListData",
  data() {
    return {
      title: "Information Record",
      employees: [
        {
          id: 0,
          name: "Kong",
          salary: 30000,
          postion: "programmer",
          isVisible: false,
        },
        {
          id: 1,
          name: "Kankrai",
          salary: 100000,
          position: "Techking",
          isVisible: false,
        },
        {
          id: 2,
          name: "Kaw",
          salary: 40000,
          position: "marketing",
          isVisible: false,
        },
        {
          id: 3,
          name: "Kaem",
          salary: 35000,
          position: "Designer",
          isVisible: false,
        },
        {
          id: 4,
          name: "Krit",
          salary: 25000,
          position: "business analyst",
          isVisible: false,
        },
      ],
    };
  },
  components: {
    PersonVue,
  },
  methods: {
    toggleVisible(id) {
      // this.employees[id].isVisible = !this.employees[id].isVisible;
      this.employees = this.employees.map((item) => {
        if (item.id === id) {
          // item.isVisible = !item.isVisible;
          return { ...item, isVisible: !item.isVisible };
        }
        return item;
      });
    },
    deleteItem(id) {
      this.employees = this.employees.filter((item) => {
        return item.id !== id;
      });
    },
  },
};
</script>

<style>
</style>