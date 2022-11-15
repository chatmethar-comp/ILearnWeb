<template>
  <div class="container mx-auto flex flex-col items-center gap-3">
    <h1 class="text-4xl font-bold self-center">Jobs</h1>
    <Suspense>
      <router-link
        v-for="job in jobs"
        :key="job.id"
        class="bg-slate-200 w-full max-w-md py-3 rounded hover:bg-slate-300"
        :to="{ name: 'JobDetails', params: { id: job.id } }"
      >
        <h2 class="text-xl text-center">
          {{ job.title }}
        </h2>
      </router-link>
      <template #fallback>
        <div
          v-for="job in jobs"
          :key="job.id"
          class="bg-slate-200 w-full max-w-md py-3 rounded hover:bg-slate-300"
          :to="{ name: 'JobDetails', params: { id: job.id } }"
        >
          <h2 class="text-xl text-center">
            {{ job.title }}
          </h2>
        </div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import JobDetail from "./JobDetail.vue";

export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs`)
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));
  },
};
</script>