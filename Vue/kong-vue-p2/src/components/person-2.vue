<template>
  <CardVue>
    <div
      class="
        flex flex-col
        space-y-3
        justify-between
        bg-slate-800
        rounded-md
        px-6
        py-3
        text-slate-300
      "
    >
      <div class="flex justify-between">
        <span class="font-bold text-xl">{{ name }}</span>
      </div>

      <div v-show="true" class="flex space-x-6 items-center">
        <span class="">{{ salary }} $</span>
        <span class="">{{ position }}</span>
      </div>
    </div>
  </CardVue>
</template>

<script>
import CardVue from "./card.vue";
export default {
  id: 0,
  name: "PersonVue2",
  salary: 0,
  isVisible: false,
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    salary: { type: Number, default: 15000 },
    position: { type: String, default: "general" },
  },
  components: { CardVue },
  data() {
    return {
      msg: "Officer Information",
    };
  },
  methods: {},
};
</script>

<style scoped>
</style>