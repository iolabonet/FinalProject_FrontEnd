import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('tasks', {
  state: () => {
    tasks: []
  },
  actions: {
  },
  // return {}
})
