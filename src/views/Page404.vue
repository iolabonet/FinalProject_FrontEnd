<template>
  <div @click="goToHomePage">
    <img src="../assets/images/Page_404.png" alt="Page Error 404" />
  </div>
  <footer>
    <p>made by iola ♡</p>
  </footer>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goToHomePage() {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
}
img {
  width: 75%;
  height: 75%;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

footer {
  display: flex;
  justify-content: center;
  color: #53a8b6;
}
</style>
