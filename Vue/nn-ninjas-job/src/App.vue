

<template>
  <header>
    <nav
      class="
        flex flex-row
        justify-center
        gap-6
        items-center
        my-6
        text-green-700
      "
    >
      <RouterLink
        to="/"
        class="focus:bg-green-800 focus:text-white px-2 py-1 rounded"
        >Home</RouterLink
      >
      <RouterLink
        class="focus:bg-green-800 focus:text-white px-2 py-1 rounded"
        :to="{ name: 'about' }"
        >About</RouterLink
      >
      <RouterLink
        class="focus:bg-green-800 focus:text-white px-2 py-1 rounded"
        :to="{ name: 'jobs' }"
        >Jobs</RouterLink
      >
    </nav>
  </header>
  <div class="flex justify-around max-w-md mx-auto my-3">
    <button
      class="border rounded px-2 py-1 hover:bg-slate-100"
      @click="redirect"
    >
      Redirect
    </button>
    <button class="border rounded px-2 py-1 hover:bg-slate-100" @click="back">
      Go back
    </button>
    <button
      class="border rounded px-2 py-1 hover:bg-slate-100"
      @click="forward"
    >
      Go forward
    </button>
  </div>

  <RouterView />
</template>

<script >
export default {
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
  },
};
</script>