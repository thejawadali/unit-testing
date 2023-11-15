<template>
  <form @submit="submitForm">
    <div>
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" id="password" v-model="password" />
    </div>
    <button type="submit">Sign Up</button>
    <p>Thanks for submitting {{ username }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const submitForm = (event) => {
  event.preventDefault();
};
</script>

<style scoped>
/* style the form */

</style>