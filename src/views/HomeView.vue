<!-- Feature: Log out from the app
  Background: As a user, I want to be able to log out from the app
    Given I am logged in to the app
 
Scenario: As a user, I want to log out
  When I am viewing the home screen
  And I click the log out button 
  Then I expect to be logged out of the app
  And I expect to see the login page -->

<template>
  <div class="homePage">
    <img src="../assets/images/post_it_Blue.png" alt="">
    <h1>An important tool to your Daily</h1>
    <div>
      <ul>
        For personal and worker tasks
      </ul>
      <ul>
        Modernize your workflow
      </ul>
      <ul>
        Get work done early!
      </ul>
      <ul>
        Intelligently planned together.
      </ul>
    </div>
  </div>
</template>

<script>

</script>


<style scoped>
.homePage {
  width: 100%;
  height: 80vh;
}
img{
  width: 100%;
  z-index: -1;
}

</style>
