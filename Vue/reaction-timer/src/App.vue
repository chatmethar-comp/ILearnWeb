<template>
  <div class="flex flex-col gap-6 max-w-md items-center mx-auto">
    <h class="text-4xl font-semibold mb-6">Ninja Reaction Timer</h>
    <button
      @click="start"
      :disabled="isPlaying"
      class="text-md px-3 py-1 bg-primary rounded-md disabled:bg-slate-400"
    >
      Play
    </button>
    <Block v-if="isPlaying" :delay="delay" @end="Endgame" />
    <Result v-if="score" :score="score"></Result>
  </div>
</template>

<script>
import Block from "./components/Block.vue";
import Result from "./components/Result.vue";

export default {
  name: "App",
  components: { Block, Result },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      console.log(this.delay);
      this.score = null;
    },
    Endgame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
