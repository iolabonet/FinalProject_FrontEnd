<template>
  <div class="navBar">

    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/images/logo1.png" alt="inatg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">To do app</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
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
  background-color: rgb(51, 197, 197);
  width: auto;
  height: 6vh;
  position: sticky;
  /* shape-divider:
  https://elementor.com/help/shape-divider/ */
}
img {
  width: 4vh;
  
}


/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>