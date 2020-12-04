<template>
<div class = "outside-border"> 
    <div class= 'border'>
        <form class = "sign-in-form" @submit.prevent= "post">
            <p>
                <input id = "username" v-model="username" placeholder="Username"> 
            </p>
            
            <p>
                <input id = "password" v-model="password" placeholder="Password"> 
            <p>
                <input type = "submit" value = "Sign In"> 
            </p>  
        </form> 
        <div class ="sign-up-redirect"> 
            <label for="sign-up"> New to FoodGram? </label>
            <li> <button class = "button"><router-link tag = a to = "/Accounts/sign-up">  Sign up  </router-link> </button></li>
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
        width: 30%;        
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
        font-size: 14px;
        color: grey;;
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

    .button {
        color: blue;
    }
 

</style>