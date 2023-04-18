<template>
<div class="login">
    <h1>LOGIN</h1>
    <input type="handleSignIn">
    <button type="success" :icon='check' circle @click="handleSignIn">SignIn</button>
    <router-link to="/auth/sign-up">SignUp</router-link>
</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '@/store/user';
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue';

export default {
    name: 'SignIn',
    computed: {
        ...mapState(userStore, ['user']),
    },
    methods: {
        ...mapActions(userStore, ['SignIn']),
        handleSignIn(){
            const userData = {
                email: 'iolabonet.atg@gmail.com',
                password: 'Carlota',
            };
            this.SignIn(userData.email, userData.password);
        },
    },
};
</script>

<style scoped>
h1 {
    padding: 2rem;
}

input{
    width: fit-content;
}

button {
    
}

</style>