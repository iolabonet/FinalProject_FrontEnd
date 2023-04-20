import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AuthView from '@/views/auth/AuthView.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import Page404 from '@/views/Page404.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [{
        path: 'sign-up',
        name: 'sign-up',
        component: SignUp,
      }, {
        path: 'sign-in',
        name: 'sign-in',
        component: SignIn,
      }],
    },
    {
      path: '/:pathMatch(.*)*',
      component: Page404,
    },
    // {
    //   path: '/task',
    //   name: 'task',
    //   component: NewTask,
    //   children: [{
    //     path: 'New-task',
    //     name: 'New-task',
    //     component: NewTask,
    //   }, {
    //     path: 'Task-item',
    //     name: 'Task-item',
    //     component: TaskItem,
    //   }],
    // },
  ]
})

export default router

// App.js
// <template>
//   <section>
//     <router-view class="app-main" /> <!-- your routes will load inside of these tags -->    
//   </section>
// </template>
 
// <script setup>
// import { onMounted } from 'vue'
// import { storeToRefs } from 'pinia'
// import { useRouter } from 'vue-router'
// import { useUserStore } from './store/user.js'
 
// const router = useRouter()
// const userStore = useUserStore()
// const { user } = storeToRefs(userStore)
 
// onMounted(async () => {
//   try {
//     await userStore.fetchUser() // here we call fetch user
//     if (!user.value) {
//       // redirect them to logout if the user is not there
//       router.push({ path: '/auth' });
//     } else {
//       // continue to dashboard
//       router.push({ path: '/' });
//     }
//   } catch (e) {
//     console.log(e)
//   }
// })
// </script>