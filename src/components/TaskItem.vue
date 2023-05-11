<!-- Feature: TO DO Basic CRUD: Ok -->

<template>
  <div class="app-container" id="taskItem">
    <div class="deadLine">
      <h3>{{ title }}</h3>
      <input class="deadLine" type="checkbox" v-model="state" @change="handleChangeState" />
    </div>
    <div class="tasks-container">
      <input v-model="newTitle" type="text" class="form-control" id="editTask" />
      <button @click="handleUpdateTaskTitle()" class="edit-btn">Edit</button>
      <div>
        <button @click="handleRemoveTask" type="button" class="delete-btn">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import usetasksStore from '@/stores/tasks'
import { mapActions } from 'pinia'
export default {
  name: 'TaskItem',
  data() {
    return {
      newTitle: '',
      state: false
    }
  },
  props: {
    taskId: Number,
    title: String,
    isCompleted: Boolean
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
    }
  },

  created() {
    this.newTitle = this.title
    this.state = this.isCompleted
  }
}
</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

div {
  width: auto;
  height: auto;
}

h3 {
  font-weight: bold;
  text-decoration: double;
  color: rgb(3, 14, 107);
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: flex-start;
  padding: 8vh 5vh 3vh 3vh;
  max-width: 100%;
  width: auto;
  height: 400px;
  flex-wrap: wrap;
}

#taskItem {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap-reverse;
  background-image: url(../assets/images/post_it_yellow_cut_black.png);
  background-size: contain;
  max-width: 390px;
  width: 100%;
  background-repeat: no-repeat;
  padding-left: 4vh;
  color: black;
}

.tasks-container {
  max-width: 100%;
  margin-top: 2.5vh;
  margin-left: 1.2vh;
  gap: 3vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

input {
  margin-top: 0.5rem;
  height: 4vh;
}

.form-control {
  max-width: 28vh;
}

#editTask {
  color: rgb(181, 192, 81);
}

#editTask:hover {
  color: rgb(12, 12, 12);
}

.deadLine {
  display: flex;
  margin-top: 2vh;
  width: 30vh;
  height: 3vh;
}

.edit-btn {
  margin-left: 10vh;
  background-color: rgb(118, 118, 248);
  color: rgb(3, 14, 107);
  font-weight: bold;
  width: 14vh;
  border-radius: 20px;
  border: none;
}

.delete-btn {
  margin-left: 2vh;
  background-color: rgb(245, 92, 92);
  border-color: rgb(245, 92, 92);
  border-radius: 20px;
  color: rgb(94, 2, 2);
  font-weight: bold;
  width: 8vh;
  cursor: pointer;
}
</style>
