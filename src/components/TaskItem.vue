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

<template>
  <div class="app-container" id="taskItem">

    <div class="tasks-container">
      <h4>To Do... {{ title }}</h4>
      <div>
        <button @click="handleRemoveTask" type="button" class="delete-btn">Delete</button>
        <span></span>
        <input type="checkbox" v-model="state" @change="handleChangeState" />

        <button @click="editTaskBox(TaskItem)" class="edit-btn">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import usetasksStore from '@/stores/tasks';
import { mapActions } from 'pinia';
export default {
  name: 'TaskItem',
  data() {
    return {
      newTitle: '',
      state: false,
    }
  },
  props: {
    taskId: Number,
    title: String,
    isCompleted: Boolean,
  },

  methods: {
    ...mapActions(usetasksStore, ['removeTask', 'updateTaskTitle', 'updateTaskState']),

    async handleRemoveTask() {
      await this.removeTask(this.taskId)
    },
    
    async handleChangeState() {
      await this.updateTaskState(this.state, this.taskId)
    },
  },

  created() {
    this.newTitle = this.title;
    this.state = this.isCompleted;
  }
}

</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

div {
  /* background-image: url(../assets/images/post_it_yellow.png); */
  width: auto;
  height: auto;
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
  background-color: rgb(91, 197, 188);
  padding-left: 5%;
  color: black;
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
  width: 20px;
}


/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>