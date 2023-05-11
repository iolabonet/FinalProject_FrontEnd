<template>
  <div class="navBar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/images/logo1.png" alt="inatg" />
      <b-navbar-nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/auth/sign-in">Sign In</RouterLink>
        <RouterLink to="/tasks">Tasks</RouterLink>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

.navBar {
  background-color: rgb(46, 129, 238);
  width: auto;
  height: 8vh;
}

img {
  margin: 1vh;
  position: relative;
  width: 5vh;
}

b-navbar-nav {
  padding-left: 2rem;
  color: white;
  font-size: large;
  font-weight: bold;
}

b-navbar-nav a {
  margin-right: 2rem;
}

b-navbar-nav a:last-of-type {
  margin-right: 0;
}
</style>
