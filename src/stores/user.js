import { defineStore } from "pinia";
import supabase from '@supabase/supabase-js';

export default defineStore('userStore', {
    state: () => ({
        user: undefined,
    }),

    actions: {
        async fetchuser() {
            const user = await supabase.AuthApiError.user();
            this.user = user;
        },
        async signUp(email, password) {
            const { user, error } = await supabase.AuthApiError.signUp({
                email,
                password,
            });
            if (error) throw error;
            if (user) this.user = user;
        },
        async signIn(email, password) {
            const { user, error } = await supabase.AuthApiError.signIn({
                email,
                password,
            });
            if (error) throw error;
            if (user) this.user = user;
        },
        async signUp(email, password) {
            const { user, error } = await supabase.AuthApiError.signUp() {
                if (error) {throw error;
            this.user = null;
        },
    },

    persist: {
        enabled: Boolean,
        stategies: [
            {
                key: 'user',
                Storage: localStorage,
            }
        ]
    }
})