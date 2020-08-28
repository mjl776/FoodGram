<template>
    <div class= 'container'>
        <form class = "sign-in-form" @submit.prevent= "post">

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
        <div class ="sign-up redirect"> 
            <li> <router-link tag = a to = "/Accounts/sign-up">  Sign up for account  </router-link> </li>
        </div>
    </div>
</template>

<script>
export default {
    name:'signIn',
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

    .sign-in-form {
        font-size: 20px;
        text-decoration: none;
    }

     .container {
        margin: auto;
        width: 50%;        
        padding: 30px;
        text-align: center;
    }

    li {
        list-style: none;
        position:relative;
    }

    a {
        text-decoration: none;
        text-transform: none;
        color:black;
        text-align: center;
    }

    a:hover {
        color: turquoise
    }

</style>