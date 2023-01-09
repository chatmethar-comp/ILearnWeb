<template>
  <div class="container mx-auto flex flex-col items-center space-y-3">
    <p>mafddsin {{ name }} and my age is {{ age }}</p>
    <button class="bg-gray-200 px-2 py-1" @click="handleClick()">click</button>
    <button @click="age++" class="bg-gray-200 px-2 py-1">Add 1</button>
    <input v-model="name" type="text" src="" alt="" class="border" />
  </div>
</template>

<script setup>
// not reactive value, later

import { ref, reactive } from "@vue/reactivity";

// const p = ref(null);

console.log("setup");
const name = ref("mario");
const age = ref(30);

const handleClick = () => {
  console.log("you clicked me"); // p, p.value);
  // p.value.classList.toggle("text-primary");
  // p.value.textContent = "hello chamel";

  name.value = "luigi";
  age.value = 35;
};
</script>