<template>
  <LoginForm />
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import { RouterView } from 'vue-router'

export default {
  name: 'AuthView',
  components: {
    RouterView,
    LoginForm
  }
}
</script>

<style scoped></style>
