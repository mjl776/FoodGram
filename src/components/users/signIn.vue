<template>
<div class = "outside-border"> 
    <div class= 'border'>
        <form class = "sign-in-form" @submit.prevent= "post">
            <p>
                <label for = "username" > Username: </label>      
                <input id = "username" v-model="username"> 
            </p>
            
            <p>
                <label for = "password" > Password: </label>      
                <input id = "password" v-model="password"> 
            <p>
                <input type = "submit" value = "Sign In"> 
            </p>  
        </form> 
        <div class ="sign-up-redirect"> 
            <li> <button><router-link tag = a to = "/Accounts/sign-up">  Sign up  </router-link> </button></li>
        </div>
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

    .outside-border {
        padding: 20px;
    }

    .border {
        margin: auto;
        width: 40%;        
        padding: 30px;
        text-align: center;
        border: 1px solid black;
        background-color: white;
    }

    .sign-in-form {
        font-size: 20px;
        text-decoration: none;
    }

    .sign-up-redirect {
        font-size: 20px;
        text-transform: uppercase;
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