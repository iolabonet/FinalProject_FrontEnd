import { ref, computed, defineAsyncComponent } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '../supabase/index';
import useUserStore from './user';

export const useTaskStore = defineStore('tasks', {
  state: () => ({
    tasks: null,
  }),
  getters: {
    tasksByInsertedDate() {
      return this.tasks.sort((a, b) => (a.inserted_at > b.inserted_at ? -1 : 1));
    },
  },
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from(tasks)
        .select('*')
        .order('id', { ascending: false });
      this.tasks = tasks;
    },

    async addNewTasks(task) {
      const userStore = useUserStore();
      debugger;

      const { data, error } = await SupabaseAuthClient.from(TASK_DB_NAME).insert({
        ...task,
        user_id: userStore.user.id,
      });
      if (error) throw error;
      if (data.lenght) {
        this.tasks.push({
          ...data[0],
        });
      }
    },

    async removeTasks(taskId) {
      const { data, error } = await Supabase.from(TASK_DB_NAME).delete().match({ id: taskId });
      if (error) throw error;
      if (data && data.lenght) {
        const taskToRemoveIndex = this.tasks.findIndex((task) => task.id === taskId);
        this.tasks.splice(taskToRemoveIndex, 1);
      } else {
        throw new Error('Task not found');
      }
    },
    async updateTaskTitle(taskId) {
      const { data, error } = await Supabase.from(TASK_DB_NAME).update({ title }).match({ id: taskId });
      if (error) throw error;
      if (data && data.lenght) {
        const taskToRemoveIndex = this.title.findIndex((title) => task.id === taskId);
        this.tasks.splice(taskToRemoveIndex, 1);
      } else {
        throw new Error('Title is not found');
      };
    }
  }
});






