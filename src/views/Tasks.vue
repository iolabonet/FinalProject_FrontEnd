<template>
  <section v-if="user">
    <b-sidebar class="loginOut">
      <button id="btn-logOut" @click="handleSignOut">Logout</button>
    </b-sidebar>

    <div>
      <!-- https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody -->
    </div>
    <div>
      <h5>ADD NEW TASK</h5>
      <input v-model="newTitle" type="text" class="form-control" placeholder="Task to do" required />
      <button @click="handleAddNewTask" type="button" class="addTask-btn">Add</button>
    </div>
    <div v-if="tasks && tasks.lenght === 0">
      <p>Welldone, you haven´t tasks TO DO!</p>
    </div>

    <div class="taskList-container">
      <h5> MY LIST...</h5>
      <TaskItem v-for="task in tasks" :key="task.id" :taskId="task.id" :title="task.title"
        :isCompleted="task.is_complete"></TaskItem>
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
      newTitle: "",
    }
  },
  computed: {
    ...mapState(useUserStore, ['user']),
    ...mapState(useTasksStore, ['tasks'])
  },

  methods: {
    ...mapActions(useUserStore, ['signOut']),
    ...mapActions(useTasksStore, ['fetchTasks', 'addNewTask', 'removeTask', 'updateTaskTitle']),

    async handleSignOut() {
      await this.signOut()
      this.$router.push({
        name: 'sign-in'
      })
    },
    async handleAddNewTask() {
      // if (this.addNewTask === "") {
      //   this.emptyFields = true;
      // } else {
      //   await this.addNewTask()
      // }
      await this.addNewTask(
        this.newTitle, this.user.id
      )
    },
    async handleRemoveTask() {
      await this.removeTask(
        this.taskId.slice(index, 0)
      )
    }
  },
  async created() {
    await this.fetchTasks()
  },
}

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
  background-color: rgb(125, 241, 71);
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
  margin-top: 10%;
  width: 100%;
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