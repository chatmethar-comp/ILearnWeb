<template>
  <div
    class="
      flex flex-col
      py-6
      px-6
      border-l-8 border-secondary
      my-3
      bg-background
      rounded-md
      duration-150
    "
    :class="{ complete: project.complete }"
  >
    <div class="flex justify-between">
      <h3
        class="text-xl font-semibold"
        @click="
          () => {
            this.show = !this.show;
          }
        "
      >
        {{ project.title }}
      </h3>
      <div class="icons space-x-2 flex items-center">
        <router-link :to="{ name: 'EditProject', params: { id: project.id } }">
          <span
            class="
              material-icons
              text-lighterSec
              hover:text-primary
              cursor-pointer
            "
          >
            edit
          </span>
        </router-link>
        <span
          @click="deleteProject"
          class="
            material-icons
            text-lighterSec
            hover:text-primary
            cursor-pointer
          "
        >
          delete
        </span>
        <span
          @click="toggleComplete"
          id="done"
          class="
            material-icons
            text-lighterSec
            hover:text-primary
            cursor-pointer
          "
        >
          done
        </span>
      </div>
    </div>
    <div v-show="show">
      <p>{{ project.detail }}</p>
    </div>
  </div>
</template>

<style scoped>
.complete {
  border-color: #3ee143;
}
.complete #done {
  color: #3ee143;
}
</style>


<script>
export default {
  props: ["project"],
  data() {
    return {
      show: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => {
          this.$emit("complete", this.project.id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>