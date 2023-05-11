import supabase from '@/supabase'
import { defineStore } from 'pinia'

export default defineStore('user', {
  state: () => ({
    user: undefined
  }),
  actions: {
    async fetchUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser()
      this.user = user
    },
    async signUp(email, password) {
      const {
        data: { user },
        error
      } = await supabase.auth.signUp({
        email: email,
        password: password
      })
      if (error) throw error
      if (user) this.user = user
    },
    async signIn(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if (error) throw error
      if (data) this.user = data
    },
    async signOut() {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      this.user = null
    }
  },

  persist: {
    enabled: true,
    stategies: [
      {
        key: 'user',
        Storage: localStorage
      }
    ]
  }
})
