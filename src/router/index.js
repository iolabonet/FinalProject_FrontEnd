import TaskItem from '@/components/TaskItem.vue';
import userStore from '@/stores/user.js';
import HomeView from '@/views/HomeView.vue';
import Page404 from '@/views/Page404.vue';
import Tasks from '@/views/Tasks.vue';
import AuthView from '@/views/auth/AuthView.vue';
import SignIn from '@/views/auth/SignIn.vue';
import SignUp from '@/views/auth/SignUp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        requireAuth: true,
      }
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
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks,
      children: [{
        path: 'New-task',
        name: 'New-task',
        component: TaskItem,
      },
      ],
    },
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
  if (to.meta.requiresAuth && user === null) {
    return { name: 'sign-in' }
  }
  if ((to.name === 'sign-in' || to.name === 'sign-up') && user !== null) {
    return { name: 'home' }
  }
})

export default router