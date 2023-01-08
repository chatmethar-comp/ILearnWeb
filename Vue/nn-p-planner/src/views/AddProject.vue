<template>
  <div class="container mx-auto max-w-lg">
    <form
      @submit.prevent="handleSubmit"
      class="
        flex flex-col
        mx-8
        px-6
        md:px-12
        my-12
        bg-backgrounddk
        rounded-lg
        space-y-6
        py-8
      "
    >
      <label for="" class="text-2xl font-semibold">Title</label>
      <input
        v-model="title"
        class="px-4 py-2"
        type="text"
        name=""
        id=""
        required
      />
      <label for="" class="text-2xl font-semibold">Details</label>
      <textarea class="px-4 py-2" v-model="detail" required></textarea>
      <button class="bg-green w-1/2 mx-auto py-2 px-4 font-bold rounded-lg">
        Add Aroject
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      detail: "",
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        detail: this.detail,
        complete: false,
      };
      console.log(project);
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>