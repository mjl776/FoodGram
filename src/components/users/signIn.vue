<template>
    <div class= 'container'>
        <form class = "sign-in-form" @submit.prevent= "post">

            <p>
                <label for = "username" > Username: </label>      
                <input id = "username" v-model="username"> 
            </p>
            
            <p>
                <label for = "password" > Password: </label>      
                <input id = "password" v-model="password"> 
            <p>

                <v-btn><input type = "submit" value = "Submit"> </v-btn>
            </p>  
        </form> 
        <div class ="sign-up-redirect"> 
            <li> <v-btn><router-link tag = a to = "/Accounts/sign-up">  Sign up  </router-link></v-btn> </li>
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

    .sign-up-redirect {
        font-size: 20px;
        text-transform: uppercase;
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
        padding-top: 20px;
        margin-left: 0px;
    }


    a {
        text-decoration: none;
        color:black;
    }

    a:hover {
        color: turquoise;
    }
 

</style>