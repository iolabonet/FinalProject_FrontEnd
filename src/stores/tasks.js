import { defineStore } from 'pinia'
import supabase from '../supabase/index'

export default defineStore('tasks', {
  state: () => ({
    tasks: []
  }),

  actions: {
    async fetchTasks() {
      const { data, error } = await supabase.from('tasks').select()
      this.tasks = data
    },

    async addNewTask(title, userId) {
      const { data, error } = await supabase
        .from('tasks')
        .insert({ user_id: userId, title })
        .select()
      if (error) throw error
      this.tasks.push(data[0])
    },

    async removeTask(taskId) {
      const { error } = await supabase.from('tasks').delete().eq('id', taskId)
      if (error) throw error
      const index = this.tasks.findIndex((task) => {
        return task.id === taskId
      })
      if (index > -1) {
        this.tasks.splice(index, 1)
      }
    },

    async updateTaskTitle(newTitle, taskId) {
      console.log(newTitle, taskId)
      const { data, error } = await supabase
        .from('tasks')
        .update({ title: newTitle })
        .eq('id', taskId)
        .select()
      if (error) throw error
      // TO DO: Buscar en la lista de tasks la que tarea que acabo de actualizr y cambiarle el titulo. OK!
      const index = this.tasks.findIndex((task) => {
        return task.id === taskId
      })
      if (index > -1) {
        this.tasks[index].title = newTitle
      }
    },
    async updateTaskState(newState, taskId) {
      const { data, error } = await supabase
        .from('tasks')
        .update({ is_complete: newState })
        .eq('id', taskId)
        .select()
      if (error) throw error
      // TO DO: Buscar en la lista de tasks la que tarea que acabo de actualizr y cambiarle el estado. OK!
      const index = this.tasks.findIndex((task) => {
        return task.id === taskId
      })
      if (index > -1) {
        this.tasks[index].is_complete = newState
      }
    }
  }
})
