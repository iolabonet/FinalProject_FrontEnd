<template>
  <div class="navBar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/images/logo1.png" alt="inatg">
      <b-navbar-nav>
        <b-nav-item href="#">TO DO App</b-nav-item>
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
  background-color: rgb(96, 230, 230);
  width: auto;
  height: 8vh;
}

img {
  margin: 1vh;
  position: relative;
  width: 5vh;

}

b-navbar-nav {
  margin-left: 2vh;
  position: relative;
  color: rgb(46, 129, 238);
  font-size: x-large;
  font-weight: bold;
}

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>