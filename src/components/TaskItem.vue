<!-- Feature: Edit a task
    Background: As a logged in user, I want to edit an existing task and have the app display the updated content
    Given I have already created a task
 
    Scenario: As a user, I want to edit the title of my task
    When I locate the task I'd like to edit
    And I click the corresponding Edit button to the task
    Then I expect the title of the task to become editable
    When I enter a new description for the task
    And I click submit
    Then I expect to see my updated task on the To-Do list -->

<!-- Feature: Mark a task as incomplete
    Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section 
    Given I have already created a task and marked it as complete
 
    Scenario: As a logged-in user I want to mark a task as incomplete
    When I locate the task I'd like to mark it as incomplete
    And I click the corresponding incomplete button to the task
    Then I expect to see that my task has immediately been moved to the to-do section -->

<!-- Feature: Mark a task as complete
    Background: As a logged in user, I want to be able to mark a task as complete and automatically move it to the completed section 
    Given I have already created a task
 
    Scenario: As a logged-in user I want to mark a task as complete
    When I locate the task I'd like to mark as complete
    And I click the corresponding done button to the task
    Then I expect to see that my task has immediately been moved to the completed section -->

<!-- Feature: Delete a task
    Background: As a logged in user, I want to be able to permanently delete an existing task
    Given I have already created a task
   
    Scenario: As a logged-in user I want to delete a task
    When I locate the task I'd like to delete
    And I click the corresponding delete button to the task
    Then I expect to see that my task has been permanently removed from every list -->

<template>
  <div>
    <img src="../assets/images/dead_line.png" alt="DeadLine" />
  </div>
</template>

<script setup>
 const taskItem = {
  data: {
    tasks: [
      {
        title: '',
        category: '',
        priority: '1 to 10', 
        // TO DO: Insertar un num del uno al 10.
        calendar: 'true or false',
        Notes: '',
        DeadLine: 'date',
        Done: 'true or false'
      }
    ],
    searchTerm: ''
  },
  computed: {
    filteredTasks() {
      let filteredTasks = this.tasks.filter((task) => {
        return task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
      let orderedTasks = filteredTasks.sort((a, b) => {
        return b.priority - a.uppriority
      })
      return orderedTasks
    }
  }
}
</script>

<style scoped>
div {
  background-image: url(../assets/images/post_it_yellow.png);
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