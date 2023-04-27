<template>
  <LoginForm /> 
  <!-- <main>
    <RouterView />
  </main>
   -->
</template>
  
<script>
import { RouterView } from 'vue-router';
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Authview',
  components: {
    RouterView,
    LoginForm,
  }
}

</script>
  
  
<style scoped></style>