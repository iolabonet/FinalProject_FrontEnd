<!-- v-if en templete-->

<template>
  <section v-if="user">
    

    <b-sidebar class="loginOut">
      <button id="btn-logOut" @click="handleSignOut">Logout</button>
    </b-sidebar>

    <h1 class="app-header">MY LIST...</h1>
    
    <div>
      <!-- https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody -->
    </div>
    <form @submit.prevent="addNewTasks">
      <h5>ADD NEW TASK</h5>
      <input v-model="newTitle" type="text" class="form-control" placeholder="Task to do" required />
      <button @click="addNewTask(tasks), emptyFields = false" type="submit" class="addTask-btn" title="Add New Task">
        Add</button>

    </form>
    <TaskItem v-for="task in tasks" :key="task.id" :title="task.title" :isCompleted="task.isCompleted"></TaskItem>
    <!-- <h4 v:if=(tasks.Is_Completed === 0 'Welldone, you haven´t tasks TO DO!')></h4> -->

  </section>

  <section class="gif" v-else>
    <img src="../assets/images/1f92d_gif_ups.gif" alt="">
    <p>You have to login first...</p>
  </section>
</template>

<script>
import useUserStore from '@/stores/user';
import useTasksStore from '@/stores/tasks';
import { mapActions, mapState } from 'pinia';
import TaskItem from '@/components/TaskItem.vue';
import { onMounted } from 'vue';

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
    ...mapActions(useTasksStore, ['fetchTasks', 'addNewTask']),

    async handleSignOut() {
      await this.signOut()
      this.$router.push({
        name: 'sign-in'
      })
    }
  },
  async created() {
    await this.fetchTasks()
  },
  async AddNewTask() {
    if (this.addNewTask === "") {
      this.emptyFields = true;
    } else {
      await this.addNewTask()
  }}
}

</script>


<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');

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

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>