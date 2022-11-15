<template>
  <div>
    <p>Reaction time - {{ score }} ms</p>
    <p class="text-4xl font-bold text-primary my-4">{{ rank }}</p>
  </div>
</template>

<script>
export default {
  name: "ResultVue",
  props: ["score"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.score < 250) {
      this.rank = "Ninja Finger";
    } else if (this.score < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snail pace...";
    }
  },
};
</script>