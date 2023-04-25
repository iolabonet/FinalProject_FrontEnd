<!-- Feature: Log in to the app
  Background: As a user, I want to log in to the to-do app
    Given I already have an account

Scenario: As a user, I want to log in to the app
  When I visit the login page
  And I enter my email as "test@example.co.uk"
  And I enter my password as "****"
  And I click the Log In button
  Then I expect to be logged in to the app 
  And I expect to see the home screen -->

<template>
  <div class="login">
    <h1>LOGIN</h1>
    <input type="handleSignIn" />
    <button type="success" @click="handleSignIn">Sign In</button>
    <RouterLink to="/auth/sign-up">Sign Up</RouterLink>
    <!-- <Page404 />  -->
  </div>
</template>

<script>
import useUserStore from '@/stores/user';
import { RouterLink } from 'vue-router';
import { mapActions } from 'pinia';
// import Page404 from '../Page404.vue';
// import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue';
export default {
  name: 'SignIn',
  components: {
    RouterLink,
  },
  methods: {
    ...mapActions(useUserStore, ['SignIn']),
    handleSignIn() {
      const userData = {
        email: 'iolabonet.atg@gmail.com',
        password: 'Carlota'
      }
      this.SignIn(userData.email, userData.password)
    }
  },
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