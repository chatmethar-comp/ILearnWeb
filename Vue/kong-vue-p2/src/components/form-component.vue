<template>
  <form @submit.prevent="submitForm" action="">
    <div class="container mx-auto my-6 space-y-3 w-3/4 md:w-1/3">
      <div class="form-ctrl space-y-1">
        <label for="emp-name" class="font-semibold text-xl">Name</label>
        <input
          class="block bg-gray-200 rounded-md px-4 py-2 w-full"
          type="text"
          name=""
          id="emp-name"
          v-model.trim="employee.name"
        />
      </div>
      <div class="form-ctrl space-y-1">
        <label for="emp-sal" class="font-semibold text-xl">Salary</label>
        <input
          class="block bg-gray-200 rounded-md px-4 py-2 w-full"
          type="number"
          name=""
          id="emp-sal"
          v-model="employee.salary"
        />
      </div>
      <div class="form-ctrl space-x-3">
        <label for="emp-pos" class="font-semibold text-xl">Position</label>
        <select
          name="emp-pos"
          id="emp-pos"
          class="bg-gray-200 px-4 py-2 rounded-md"
          v-model="employee.position"
        >
          <option value="marketing">marketing</option>
          <option value="developer">developer</option>
          <option value="Staff">Staff</option>
          <option value="Finance">Finance</option>
          <option value="Influencer">Influencer</option>
        </select>
      </div>
      <div class="form-ctrl space-y-1 flex flex-row space-x-6">
        <label for="emp-sal" class="font-semibold text-xl">Sex</label>
        <div class="flex flex-col">
          <div class="space-x-3">
            <input
              v-model="employee.gender"
              type="radio"
              value="male"
              name="male"
              id="m"
            />
            <label for="gender" class="text-md font-semibold">Male</label>
          </div>
          <div class="space-x-3">
            <input
              v-model="employee.gender"
              type="radio"
              value="female"
              name="female"
              id="m"
            />
            <label for="gender" class="text-md font-semibold">Female</label>
          </div>
          <div class="space-x-3">
            <input
              v-model="employee.gender"
              type="radio"
              value="other"
              name="other"
              id="m"
            />
            <label for="gender" class="text-md font-semibold">Other</label>
          </div>
        </div>
      </div>
      <div class="form-ctrl space-y-1 flex flex-row space-x-6">
        <label for="emp-sal" class="font-semibold text-xl">Language</label>
        <div class="flex flex-col">
          <div class="space-x-3">
            <input
              v-model="employee.language"
              type="checkbox"
              value="TH"
              name="TH"
              id="m"
            />
            <label for="language" class="text-md font-semibold">Thai</label>
          </div>
          <div class="space-x-3">
            <input
              v-model="employee.language"
              type="checkbox"
              value="ENG"
              name="ENG"
              id="m"
            />
            <label for="language" class="text-md font-semibold">English</label>
          </div>
          <div class="space-x-3">
            <input
              v-model="employee.language"
              type="checkbox"
              value="JP"
              name="JP"
              id="m"
            />
            <label for="language" class="text-md font-semibold">Japanese</label>
          </div>
          <div class="space-x-3">
            <input
              v-model="employee.language"
              type="checkbox"
              value="CHN"
              name="CHN"
              id="m"
            />
            <label for="language" class="text-md font-semibold">Chinese</label>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="
            my-3
            bg-green-500
            rounded-md
            px-4
            py-1
            text-slate-700
            drop-shadow-md
            font-bold
            hover:bg-green-400
          "
        >
          Save
        </button>
      </div>
    </div>
  </form>
  <!-- {{ JSON.stringify(employee) }} -->
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      employee: {
        name: "",
        salary: 0,
        position: "marketing",
        gender: "",
        language: [],
      },
    };
  },
  methods: {
    submitForm() {
      const newEmployee = {
        name: this.employee.name,
        salary: this.employee.salary,
        position: this.employee.position,
        gender: this.employee.gender,
        language: this.employee.language,
      };
      this.$emit("savedata", newEmployee);
      this.resetForm();
    },
    resetForm() {
      this.employee.name = "";
      this.employee.salary = "10000";
      this.employee.position = "marketing";
      this.employee.gender = "";
      this.employee.language = [];
    },
  },
};
</script>

<style>
</style>