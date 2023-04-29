<!-- Step By Step 
1. Import
2. Add to Components
3. Add to template-->

<template>
  <NavBar />
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/auth/sign-in">Auth</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
      </nav>
    </div>
    
  </header>
  
  <RouterView />
  
  <Footer />

</template>

<script>
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';
import UserStore from '@/stores/user.js';
import { mapActions } from 'pinia';
import { RouterLink, RouterView } from 'vue-router';

export default {
  name: "App",
  components: {
    RouterLink,
    RouterView,
    NavBar,
    Footer,
  },
  methods: {
    ...mapActions(UserStore, ['fetchUser'])
  },
 async created(){
    await this.fetchUser()
  }
}
</script>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 1em;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text, white);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  color: white;
  font-weight: 700;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center; 
    /* padding-right: calc(var(--section-gap) / 2); */
  }

  header .wrapper {
    display: flex;
    /* place-items: flex-start;  */
    flex-wrap: wrap;
  }

  nav {
    text-align: center;
    /* margin-left: -1rem; */
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

