import { defineStore } from 'pinia';
import supabase from '../supabase/index';
import useUserStore from './user';

export default defineStore('tasks', {
  state: () => ({
    tasks: [],
  }),
  // getters: {
  //   tasksByInsertedDate() {
  //     return this.tasks.sort((a, b) => (a.inserted_at > b.inserted_at ? -1 : 1));
  //   },
  // },
  actions: {
    async fetchTasks() {
      const { data, error } = await supabase
        .from('tasks')
        .select()
      this.tasks = data;
    },

    async addNewTask( title, userId ) {
      const { data, error } = await supabase
        .from('tasks')
        .insert({ user_id: userId, title })
        .select()
      if (error) throw error
      this.tasks.push(data[0])
    },

    async removeTask(taskId) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)
        if (error) throw error
      // this.task.filter.taskId && this.task.taskId.splice(index,1) 
      // buscar en la lista de tasks la que acabo de eliminar y cuando la encuentre, sacarla del array
    },

    async updateTaskTitle(newTitle, taskId) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ title: newTitle })
        .eq('id', taskId)
        .select()
        if (error) throw error
      // this.task.filter .title = newTitle buscar en la lista de tasks la que tarea que acabo de actualizr  y cambiarle el titulo

    },
    async updateTaskState(newState, taskId) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ is_completed: newState })
        .eq('id', taskId)
        .select()
        if (error) throw error
      // this.task.filter .taskId = newState buscar en la lista de tasks la que tarea que acabo de actualizr  y cambiarle el estado

    }
  }
});






