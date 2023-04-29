<!-- v-if en templete-->

<template>
  <div>
    <button @click="handleSignOut">Logout</button>
  </div>
  <div>
    <!-- https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody -->
    <h1>Tabla de tareas</h1>
    <table>
      <thead>
        <tr>
          <th>title</th>
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
</template>

<script>
import { mapActions } from 'pinia';
import useUserStore from '@/stores/user';

// import TaskItem from '@/components/TaskItem.vue';

export default {
  name: 'Tasks',
  components: {
    // TaskItem,
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

/*MOBILE*/
@media (max-width: 767px) {}

/*TABLET*/
@media (min-width: 768px) and (max-width: 1023px) {}

/*MOBILE Y TABLET*/
@media (max-width: 1023px) {}
</style>