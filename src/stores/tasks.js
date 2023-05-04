import { defineStore } from 'pinia';
import supabase from '../supabase/index';
import useUserStore from './user';

export default defineStore('tasks', {
  state: () => ({
    tasks: null,
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
        .order('id', { ascending: false });
      this.tasks = data;
    },
    
    async addNewTask(tasks) {
      const { error } = await supabase
        .from('tasks')
        .insert({ user_id, title: '' })
    },
    
    async removeTask(tasks) {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('user_id', title)
    },

    async updateTaskTitle(tasks) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ title: '' })
        .eq('user_id', title)
        .delete()
    }   
  }
});






