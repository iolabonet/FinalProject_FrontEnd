<template>
  <NavBar />
  
  <header>
    <div class="wrapper">
    </div>
  </header>

  <RouterView />
  
  <MyFooter />
</template>

<script>
import MyFooter from '@/components/MyFooter.vue';
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
    MyFooter,
  },
  methods: {
    ...mapActions(UserStore, ['fetchUser'])
  },
  async created() {
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

#btnToTop {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color: rgb(233, 54, 218);
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 10px;
  font-size: 18px;
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

