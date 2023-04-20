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
    <button type="success" @click="handleSignIn">SignIn</button>
    <RouterLink to="/auth/sign-up">SignUp</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { mapState, mapActions } from 'pinia'
import useUserStore from '@/stores/user'
// import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue';

const userStore = useUserStore()
function handleSignIn() {
  const userData = {
    email: 'iolabonet.atg@gmail.com',
    password: 'Carlota'
  }
  userStore.SignIn(userData.email, userData.password)
}
</script>

<style scoped>
h1 {
  padding: 1rem;
}

input {
  width: fit-content;
}

button {
  background-color: aquamarine;
}
</style>