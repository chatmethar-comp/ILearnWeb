<template>
  <div
    v-if="showBlock"
    class="
      w-80
      rounded-xl
      text-white
      bg-primary
      text-center text-xl
      py-[100px]
      my-[40px]
      mx-auto
    "
    @click="StopTimer"
  >
    Click me
  </div>
</template>

<script>
export default {
  name: "BlockVue",
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  props: ["delay"],
  mounted() {
    console.log(`component mounted`);
    setTimeout(() => {
      this.showBlock = true;
      this.StartTimer();
    }, this.delay);
  },
  // updated() {
  //   console.log(`component Updated`);
  // },
  // unmounted() {
  //   console.log(`Unmounted`);
  // },
  methods: {
    StartTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    StopTimer() {
      clearImmediate(this.timer);
      // console.log(this.reactionTime);
      this.showBlock = false;
      this.$emit("end", this.reactionTime);
    },
  },
};
</script>