<!-- v-if en templete-->

<template>
  <section v-if="user">
    <div>User Id</div>
    <div class="loginOut">
      <button id="btn-logOut" @click="handleSignOut">Logout</button>
    </div>
    <div>
      <!-- https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody -->
      <h1>Tabla de tareas</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Comprar</td>
            <td><button>borrar</button></td>
          </tr>
          <tr>
            <td>Limpiar</td>
            <td><button>borrar</button></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>Titlefuncion añadir tarea</td>
            <td><button>Add</button></td>
            <!-- TO DO: Añadir funcion añadir tarea a API por user.Id -->
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- <TaskItem /> -->
    
  </section>
  <section class="gif" v-else>
    <img src="../assets/images/1f92d_gif_ups.gif" alt="">
    <p>You have to login first...</p>
  </section>
</template>

<script>
import useUserStore from '@/stores/user';
import { mapActions, mapState } from 'pinia';

// import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'Tasks',
  components: {
    // TaskItem,
  },
  computed: {
    ...mapState(useUserStore, ['user'])
  },
  methods: {
    ...mapActions(useUserStore, ['signOut']),
    async handleSignOut() {
      await this.signOut()
      this.$router.push({
        name: 'sign-in'
      })
    }
  },
}


</script>


<style scoped>
@import url('bootstrap/dist/css/bootstrap.min.css');
.loginOut{
  height: 5rem;
  display: flex;
  flex-direction: row-reverse;
}
#btn-logOut{
  width: 6rem;
  height: 4rem;
  font-weight: 800;
  background-color: aquamarine;
  cursor: pointer;
}
img{
  max-width: 200px;
}
.gifUps{
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