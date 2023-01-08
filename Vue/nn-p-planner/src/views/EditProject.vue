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
        Update Aroject
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      detail: "",
      uri: "http://127.0.0.1:3000/projects/" + this.id,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.detail = data.detail;
      });
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: this.title, detail: this.detail }),
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