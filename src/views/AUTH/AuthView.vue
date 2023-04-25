<template>
  <main>
    <RouterView />
  </main>
  <!-- <login-form /> -->
</template>
  
<script>
import { RouterView } from 'vue-router';
// import LoginForm from '@/components/LoginForm.vue'


export default {
  name: 'Authview',
  components: {
    RouterView,
  }
}

</script>
  
  
<style scoped></style>