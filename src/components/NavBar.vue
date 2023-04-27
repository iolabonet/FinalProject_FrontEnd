<template>
  <div class="navBar">

    <b-navbar toggleable="lg" type="dark" variant="info">
      <img src="../assets/images/logo1.png" alt="inatg">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#">Hello {{ NikName }}</b-nav-item> -->
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <RouterLink to="/auth/SignUp">Sign In</RouterLink>
            <RouterLink to="/auth/SignIn">Get started</RouterLink>
          </b-nav-item-dropdown>
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
  position: sticky;
  /* shape-divider:
  https://elementor.com/help/shape-divider/ */
}
img {
  width: 6vh;
}
a {
  align-items: flex-end;
}


/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>