<!-- Feature: TO DO Basic CRUD: Ok -->

<!-- Feature: Mark a task as incomplete
    Background: As a logged in user, I want to be able to mark a task as incomplete and automatically move it back to the to-do section 
    Given I have already created a task and marked it as complete
 
    Scenario: As a logged-in user I want to mark a task as incomplete
    When I locate the task I'd like to mark it as incomplete
    And I click the corresponding incomplete button to the task
    Then I expect to see that my task has immediately been moved to the to-do section -->

<template>
  <div class="app-container" id="taskItem">
    <div class="tasks-container">
      <img src="../assets/images/—Pngtree—vector push pin paper_8586153.png" alt="">
      <h4>{{ title }}</h4>
      <input v-model="newTitle" type="text" class="form-control">
      <button @click="handleUpdateTaskTitle()" class="edit-btn">Edit</button>
      <div>
        <button @click="handleRemoveTask" type="button" class="delete-btn">Delete</button>
        <label class="isComplet">
          <img src="../assets/images/dead_line.jpg" alt=" Is completed?">
        </label>
        <input class="deadLine" type="checkbox" v-model="state" @change="handleChangeState"/>  
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

    async handleUpdateTaskTitle() {
      await this.updateTaskTitle(this.newTitle, this.taskId)
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

.deadLine {
  width: 2vh;
  height: 2vh;
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
}

.delete-btn {
  background-color: red;
  width: 100px;
}

.edit-btn {
  background-color: blue;
  width: 60px;
  border-radius: 20px solid black;

}

.tasks-container {
  width: auto;
  color:black;
  display: flex;
  flex-wrap: wrap;
}


img {
  width: 4vh;
}

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {

}
</style>