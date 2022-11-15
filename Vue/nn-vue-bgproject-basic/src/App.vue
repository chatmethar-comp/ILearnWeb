

<template>
  <div class="items-center flex flex-col gap-3 my-6">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
    <input type="text" ref="name" class="border-2" />
    <button @click="handleClick" class="bg-green-400 px-3 py-1 rounded-sm">
      Click me
    </button>
  </div>
</template>

<script >
export default {
  name: "App",
  data() {
    return {
      title: "My first Vue App :)",
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.toggle("Active");
      this.$refs.name.focus();
    },
  },
};
</script>

