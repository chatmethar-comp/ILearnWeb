<template>
  <div
    v-if="job"
    class="container flex flex-col gap-6 mx-auto items-center font-bold"
  >
    <h1 class="text-4xl mt-6">{{ job.title }}</h1>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>loading Job detail..</div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
  },
  //   data() {
  //     return {
  //       id: this.$route.params.id,
  //     };
  //   },
};
</script>

<style>
</style>