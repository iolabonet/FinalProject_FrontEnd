import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('tasks', {
  state: () => {
    tasks: []
  },
  actions: {
    async fetchTasks() {
    }
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
          inserted_at: new Date(data[0].inserted_at).toLocaleDateString(),
        });
      }
    },
    async removeTasks(taskId) {
      const { data, error } = await Supabase.from(TASK_DB_NAME).delete().match({ id:taskId });
      if (error) throw error;
      if (data && data.lenght) {
        const taskToRemoveIndex = this.tasls.findIndex((task) => task.id === taskId);
        this.tasks.splice(taskToRemoveIndex, 1);
       } else { throw new Error('Task not found');
        }
        };
      }
    
    },
  },
  // return {}
})
