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
  <div class="app-container" id="taskItem">
    <h1 class="app-header">MY LIST...</h1>

    <form class="form-group" @submit.prevent="addTask">
      <h3>ADD NEW TASK</h3>
      <input v-model="title" type="text" class="form-control" placeholder="Name of task" required>
      <button @click="addTask(task)" type="submit" class="addTask-btn" title="Add Task"></button>
    </form>

    <table class="task-list">
      <thead>
        <tr>
          <th>Title</th>
          <th>Is completed ?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <!-- TO DO: orderedTasks = filteredTasks.sort((a, b) -->
          
          <td><button @click="editTaskBox(task)" class="edit-btn" title="Edit Task"></button></td>
          <td><button @click="deleteTaskBox(task)" class="delete-btn" title="Delete Task"></button></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Titlefuncion añadir tarea</td>
          <!-- TO DO: Añadir funcion añadir tarea a API por user.Id -->
        </tr>
      </tfoot>
    </table>

    <div class="deleteTaskBox">
      <img src="../assets/images/dead_line.png" alt="DeadLine" />
    </div>

  </div>
</template>

<script>
import usetasksStore from '@/stores/tasks';
import { mapActions, mapState } from 'pinia';
export default {
  name: 'TaskItem',
  data() {
    return {
      // searchTerm: ''
    }
  },
  computed: {
    ...mapState(usetasksStore, ['tasks']),
    filteredTasks() {
      let filteredTasks = this.tasks.filter((task) => {
        return task.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      })
      let orderedTasks = filteredTasks.sort((a, b) => {
        return b.priority - a.uppriority
      })
      return orderedTasks
    }
  },
  methods: {
    ...mapActions(usetasksStore, ['addNewTasks', 'removeTasks', 'updateTaskTitle']),
  }
}

</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

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

.app-container {
  background-color: brown;
}

#taskItem {
  background-color: yellowgreen;
}

.deleteTaskBox {
  background-color: white;
}

.addTask-btn {
  background-color: green;
  /* TO DO: añadir una imagen sumar */
}

.deleteButton {
  background-color: red;
}


/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>