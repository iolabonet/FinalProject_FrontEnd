<!-- Feature: Add a new task
  Background: As a logged in user, I want to add a new task and have it appear on my to-do list
    Given I am logged in

Scenario: As a logged-in user I want to create a new task
  When I visit the home screen
  And I enter "My cool task" in the NewTask field
  And I click the submit button
  Then I expect to see "My cool task" in the To-Do list of tasks -->


<template>
  <div>
    <h1>newTask</h1>
    <input class="newTask">
    <b-form @submit.stop.prevent="alert('Form Submitted')">
      <b-form-input aria-label="Input" class="mr-1" placeholder="Title"></b-form-input>
      <b-button type="submit">Add Task</b-button>
    </b-form>
  </div>
</template>

<script>

</script>

<style scoped>
/* @import url('bootstrap/dist/css/bootstrap.min.css0'); */

div {
  background-image: url(../assets/images/post_it_Blue.png);
}

input {
  margin-top: 0.5rem;
}

input::placeholder {
  font-weight: bold;
  opacity: 0.5;
  color: blue;
}

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>