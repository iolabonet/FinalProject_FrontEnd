import { defineStore } from "pinia";
import supabase from '@/supabase';

export default defineStore('user', {
    state: () => ({
        user: null,
    }),

    actions: {
        async fetchUser() {
            const { data: { user }} = await supabase.auth.getUser();
            console.log(user)
            this.user = user;
        },
        async signUp(email, password) {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if (error) throw error;
            if (user) this.user = user;
        },
        async signIn(email, password) {
            const { user, error } = await supabase.auth.signIn({
                email: email,
                password: password
            });
            if (error) throw error;
            if (user) this.user = user;
        },
        async signOut(email, password) {
            const { user, error } = await supabase.auth.signOut({
            });
            if (error) {
                throw error;
                this.user = null;
            };
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
    }
});
