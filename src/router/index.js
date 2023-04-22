import HomeView from '@/views/HomeView.vue';
import Page404 from '@/views/Page404.vue';
import AuthView from '@/views/auth/AuthView.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import userStore from '@/stores/user.js';
import { createRouter, createWebHistory } from 'vue-router';

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
      },
      {
        path: 'sign-in',
        name: 'sign-in',
        component: SignIn,
      }],
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
    {
      path: '/:pathMatch(.*)*',
      component: Page404,
    },
  ]
})

router.beforeEach(async (to) => {
  const useUserStore = userStore()
  await useUserStore.fetchUser() 
  const { user } = useUserStore
  if (!user && to.name !== 'sign-in' && to.name !== 'sign-up') {
    return { path: '/auth/sign-in' };
  }
})

export default router