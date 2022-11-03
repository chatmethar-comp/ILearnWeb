<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ getcomputeName }}</h1>
  <!-- <h1>{{ getrandCom }}</h1>
  <h1>{{ getrandCom }}</h1>
  <h1>{{ getrandMedthod() }}</h1>
  <h1>{{ getrandMedthod() }}</h1> -->
  <p v-html="address"></p>
  <h2>Salary {{ salary }}</h2>
  <button v-on:click="addSalary()">More salary</button>
  <h2>S/Y {{ getIncome }}</h2>
  <h1>Position {{ getDeparture }}</h1>
  <button v-on:click="toggleVisible">Details</button>
  <article v-show="isVisible">
    <img v-bind:src="picture" alt="" :width="size" ref="imagmeurl" />
    <form @submit.prevent="submitForm">
      <label for="">Enter nickname</label>
      <input type="text" name="" id="" ref="nicknameEl" />
      <button type="submit">save</button>
    </form>
    <h3>{{ nickname }}</h3>
    <a :href="social" target="_blank">Facebook</a>
    <h4 v-if="hobby.length === 0">No Hobby</h4>
    <div v-else>
      <h4>Hobby</h4>
      <ul>
        <li v-for="(item, index) in hobby" :key="index">{{ item }}</li>
      </ul>
    </div>
    <h3>General</h3>
    <ul>
      <li v-for="(value, key) in general" v-bind:key="key">
        {{ key }} - {{ value }}
      </li>
    </ul>
  </article>
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
      hobby: ["garden", "game", "gong", "garage"], //["garden", "game", "music"],
      general: { gender: "male", weight: 80, height: 185, status: false },
      isVisible: false,
      salary: 15000,
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
    toggleVisible() {
      this.isVisible = !this.isVisible;
    },
    getrandMedthod() {
      return Math.random() * 10;
    },
    getiincom() {
      return this.salary * 12;
    },
    addSalary() {
      this.salary += 5000;
    },
  },
  computed: {
    // getcomputeName() {
    //   return `${this.firstname} ${this.lastname}`;
    // },
    // getrandCom() {
    //   return Math.random() * 10;
    // },
    getIncome() {
      return this.salary * 12;
    },
    getDeparture() {
      return this.salary >= 50000 ? "Project Manager" : "programmer";
    },
  },
  watch: {
    salary(value) {
      if (value > 60000) {
        alert(`Too high`);
        setTimeout(() => {
          this.salary = 20000;
        }, 2000);
      }
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
