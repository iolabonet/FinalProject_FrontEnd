<template>
  <section v-if="user">
    <b-sidebar class="loginOut">
      <button id="btn-logOut" @click="handleSignOut">Logout</button>
    </b-sidebar>

    <div>
      <!-- https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody -->
    </div>
    <div @submit.prevent="addNewTasks">
      <h5>ADD NEW TASK</h5>
      <input v-model="newTitle" v-on:keyup.enter="addNewTask" type="text" class="form-control" placeholder="Task to do"
        required />
      <button @click="addNewTask(tasks), emptyFields = false" type="submit" class="addTask-btn">Add</button>
    </div>
    <div v:if="tasks.lenght === 0">
      <p>Welldone, you haven´t tasks TO DO!</p>
    </div>

    <div class="taskList-container">
      <h5> MY LIST...</h5>
      <TaskItem v-for="task in tasks" :key="task.id" :title="task.title" :isCompleted="task.isCompleted"></TaskItem>
    </div>

    <!-- TO DO: Que se vean todas las tasks como si fueran post-it y al hacer hover encima se haga zoom. -->
  </section>

  <section class="gif" v-else>
    <img src="../assets/images/1f92d_gif_ups.gif" alt="">
    <p>You have to login first...</p>
  </section>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue';
import useTasksStore from '@/stores/tasks';
import useUserStore from '@/stores/user';
import { mapActions, mapState } from 'pinia';

export default {
  name: 'Tasks',
  components: {
    TaskItem,
  },
  data() {
    return {
      addNewTitle: "",
      emptyFields: false,
    }
  },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useTasksStore, ['tasks'])
  },

  methods: {
    ...mapActions(useUserStore, ['signOut']),
    ...mapActions(useTasksStore, ['fetchTasks', 'addNewTask', 'removeTask', 'updateTaskTitle']),

    addNewTask() {
      const tasks = {
        title: this.taskTitle,
        isCompleted: true,
      };
      this.tasks.push(tasks);
      this.tasksTitle = '';
    },
    removeTasks() {
      removeTask(index);
      this.tasks.splice(index, 1);
    },
    updateTask(tasks) {
      tasks.status = !tasks.status;
    },
    async handleSignOut() {
      await this.signOut()
      this.$router.push({
        name: 'sign-in'
      })
    },
    async created() {
      await this.fetchTasks()
    },
    async AddNewTask() {
      if (this.addNewTask === "") {
        this.emptyFields = true;
      } else {
        await this.addNewTask()
      }
    },
  }}

</script>


<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

h4 {
  color: black;
}

.b-sidebar {
  width: 10%;
  float: right;
  overflow: hidden;
  min-height: 10%;
  transition: width 3s;
}

.b-sidebar:hover {
  width: 15%;
}

.loginOut {
  height: 5rem;
  display: flex;
  flex-direction: row-reverse;
}

#btn-logOut {
  width: 6rem;
  height: 4rem;
  font-weight: 800;
  background-color: aquamarine;
  cursor: pointer;
}

input {
  width: 50%;
}

.addTask-btn {
  width: 4rem;
  height: 2rem;
  font-weight: 400;
  background-color: aquamarine;
  cursor: pointer;
}

img {
  max-width: 200px;
}

.gifUps {
  width: 20rem;
  height: 20rem;
}

.taskList-container {
  width: 80%;
  background-color: black;
}

.tasks-container {
  width: auto;

}

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}

</style>