<template>
    <form class = "sign-up-form" @submit.prevent= "post">
        <p>
            <label for = "email"> email: </label>
            <input id = "email" v-model="email">
        </p>

        <p>
            <label for = "username" > username: </label>      
            <input id = "username" v-model="username"> 
        </p>
        
        <p>
            <label for = "password" > password: </label>      
            <input id = "password" v-model="password"> 
        <p>

            <input type = "submit" value = "Submit">  
        </p>  
    </form> 
</template>

<script>
export default {
    name:'signUp',
    data() {
        return {
            username: null,
            password: null, 
            email: null,  
            account: {
                username: null,
                password: null, 
                email: null
            }
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    .sign-up-form {
        margin: auto;
        width: 50%;        
        padding: 4px;
        text-align: center;
    }
</style>