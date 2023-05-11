<template>
  <div class="login">
    <h1>Hello _____ ^^!</h1>
    <!-- <input type="handleSignIn" />
    <button type="success" @click="handleSignIn">Sign In</button>
    <RouterLink to="/auth/sign-up">Sign Up</RouterLink> -->

    <!-- <Page404 />  -->
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'
// import Page404 from '../Page404.vue';
export default {
  name: 'SignIn',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
h1 {
  padding: 1rem;
}

input {
  display: flex;
  width: 30%;
}

button {
  width: 5rem;
  height: 1.5rem;
  font-weight: 800;
  background-color: aquamarine;
  cursor: pointer;
}
</style>
