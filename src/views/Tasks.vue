<template>
  <section v-if="user">
    <b-sidebar class="loginOut">
      <button id="btn-logOut" @click="handleSignOut"></button>
    </b-sidebar>

    <div>
      <!--ADD NEW TASK !-->
      <input v-model="newTitle" type="text" class="form-control" placeholder="To do..." required />
      <button @click="handleAddNewTask" type="button" class="addTask-btn">Add</button>
    </div>
    <div v-if="tasks.lenght === 0">
      <p>Welldone, you haven´t tasks TO DO!</p>
    </div>

    <div class="taskList-container">
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :taskId="task.id"
        :title="task.title"
        :isCompleted="task.is_complete"
      ></TaskItem>
    </div>
    <!--LIST TASKS COMPLETED !-->
    <div class="box-completed-container">
      <img src="../assets/images/post_it_Blue_2.png" alt="" />
      <div class="box-completed-post">
        <h3>Task Completed:</h3>
        <div v-for="task in tasks" :key="task.id">
          <p v-if="task.is_complete">
            {{ task.title }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="gif" v-else>
    <img src="../assets/images/1f92d_gif_ups.gif" alt="" />
    <br />
    <p>Ups... You forgot to Sign In!</p>
  </section>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'
import useTasksStore from '@/stores/tasks'
import useUserStore from '@/stores/user'
import { mapActions, mapState } from 'pinia'
import tasks from '../stores/tasks'

export default {
  name: 'Tasks',
  components: {
    TaskItem
  },
  data() {
    return {
      newTitle: ''
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
      await this.addNewTask(this.newTitle, this.user.id)
    },
    async handleRemoveTask() {
      await this.removeTask(this.taskId.slice(index, 0))
    }
  },
  async created() {
    await this.fetchTasks()
  }
}
</script>

<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

h3 {
  font-weight: bold;
  text-decoration: double;
}

.loginOut {
  padding-top: 1vh;
  height: 5rem;
  display: flex;
  flex-direction: row-reverse;
}

#btn-logOut {
  width: 8rem;
  height: 4rem;
  font-weight: 800;
  background-color: rgb(46, 129, 238);
  border-radius: 30px;
  cursor: pointer;
  transition: 0.5s;
  overflow: hidden;
}

#btn-logOut::before {
  content: 'Sign Out';
  position: relative;
  transform: translate(-50%, -50%);
  transition: all;
}

#btn-logOut:hover::before {
  top: -40px;
  left: -60%;
}

#btn-logOut::after {
  position: relative;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s ease-in-out;
}

#btn-logOut:hover:after {
  content: '';
  background-image: url(../assets/images/right-from-bracket-solid.svg);
  display: inline-block;
  width: 30px;
  height: 30px;
  top: 30%;
  left: -20%;
}

input {
  width: 50%;
}

.addTask-btn {
  width: 4rem;
  height: 2rem;
  font-weight: 400;
  background-color: rgb(118, 118, 248);
  border-radius: 15px;
  cursor: pointer;
}

.gif {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.taskList-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 2vh;
  width: 100%;
}

img {
  max-width: 40vh;
  width: 100%;
  z-index: -1;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
}

.box-completed-container {
  padding-left: 2vh;
  position: relative;
  display: inline-block;
}

.box-completed-post {
  height: 100px;
  width: max-content;
  padding-left: 12vh;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
  color: rgb(3, 14, 107);
}

/*MOBILE*/
@media (max-width: 767px) {
}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {
}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {
  img {
    width: 100%;
    z-index: -1;
  }
}
</style>
