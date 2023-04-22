import supabase from '@/supabase';
import { defineStore } from "pinia";

export default defineStore('user', {
    state: () => ({
        user: null,
    }),
    actions: {
        async fetchUser() {
            const { data: { user } } = await supabase.auth.getUser();
            this.user = user;
        },
        async signUp(email, password) {
            const { data, error } = await supabase.auth.signUp({
                email: '',
                password: '',
                options: {
                    data: {
                        nikName: '',
                    }
                }
            })
            if (error) throw error;
            if (user) this.user = user;
        },
        async signIn(email, password) {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: '',
                password: '',
            })
            if (error) throw error;
            if (user) this.user = user;
        },
        async signOut(email, password) {
            const { error } = await supabase.auth.signOut()
        }
    },

    persist: {
        enabled: true,
        stategies: [
            {
                key: 'user',
                Storage: localStorage,
            }
        ]
    },
},
)


