<template>
  <footer>
    <p class="myFooter">by iola ♡</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}

</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

footer{
  display: flex;
  justify-content: center;
  color: #53a8b6;
}

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>