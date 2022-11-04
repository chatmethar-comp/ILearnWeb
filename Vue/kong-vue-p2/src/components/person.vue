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

        <div class="space-x-6">
          <button
            v-on:click="showDetail(id)"
            class="bg-amber-400 text-slate-900 px-2 py-1/2 rounded-sm"
          >
            Detail
          </button>
          <button
            v-on:click="deleteItem(id)"
            class="bg-red-500 text-slate-200 px-2 py-1/2 rounded-sm"
          >
            Delete
          </button>
        </div>
      </div>
      <transition name="fade">
        <div v-show="true" class="flex space-x-6 items-center">
          <span class="">{{ salary }} $</span>
          <span class="">{{ position }}</span>
        </div>
      </transition>
    </div>
  </CardVue>
</template>

<script>
import CardVue from "./card.vue";
export default {
  id: 0,
  name: "PersonVue",
  salary: 0,
  isVisible: false,
  props: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
    salary: { type: Number, default: 15000 },
    position: { type: String, default: "general" },
    gender: { type: String },
    language: { type: Array },
  },
  components: { CardVue },
  data() {
    return {
      msg: "Officer Information",
    };
  },
  methods: {
    showDetail(id) {
      //   console.log(id);
      this.$emit("show", id);
    },
    deleteItem(id) {
      this.$emit("delete", id);
    },
  },
};
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}
</style>