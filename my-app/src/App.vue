<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ getfullname() }}</h1>
  <p v-html="address"></p>
  <img v-bind:src="picture" alt="" :width="size" ref="imagmeurl" />
  <form @submit.prevent="submitForm">
    <label for="">Enter nickname</label>
    <input type="text" name="" id="" ref="nicknameEl" />
    <button type="submit">save</button>
  </form>
  <h3>{{ nickname }}</h3>
  <a :href="social" target="_blank">Facebook</a>
  <h4>Hobby</h4>
  <ul>
    <li>{{ hobby[0] }}</li>
    <li>{{ hobby[1] }}</li>
    <li>{{ hobby[2] }}</li>
  </ul>
  <h3>General</h3>
  <ul>
    <li>{{ age }}</li>
    <li>{{ general.gender }}</li>
    <li>{{ general.weight }}</li>
    <li>{{ general.height }}</li>
    <li>{{ general.status }}</li>
  </ul>
  <button v-on:click="showdata()">View information</button>
  <button @click.shift="increment(10)">older</button>
  <button @click.left="decrement()">younger</button>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      firstname: "k",
      lastname: "p",
      nickname: "",
      age: 15,
      address: "<strong>Chamel 21 Bager st.</strong>",
      picture:
        "https://images.unsplash.com/photo-1667060309672-cec930ed964a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      size: 500,
      social: "https://www.facebook.com",
      hobby: ["garden", "game", "music"],
      general: { gender: "male", weight: 80, height: 185, status: false },
    };
  },
  methods: {
    getfullname() {
      return this.firstname + " " + this.lastname;
    },
    showdata() {
      alert(this.firstname);
    },
    increment(arg) {
      this.age += arg;
    },
    decrement() {
      this.age -= 1;
    },
    setnickname(event) {
      console.log(event.target.value);
      this.nickname = event.target.value;
    },
    submitForm() {
      this.nickname = this.$refs.nicknameEl.value;
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
