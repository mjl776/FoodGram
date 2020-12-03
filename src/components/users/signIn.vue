<template>
<div class = "outside-border"> 
    <div class= 'border'>
        <form class = "sign-in-form" @submit.prevent= "post">
            <p>
                 <v-text-field label="Username"
                    v-model="username"> 
                 </v-text-field> 
            <p>      

            <p>
                <v-text-field label="Password"
                    v-model="password"> 
                </v-text-field>
            <p>
                <v-btn><input type = "submit" value = "Sign In"> </v-btn>
            </p>  
        </form> 
        <div class ="sign-up-redirect"> 
            <li> <v-btn><router-link tag = a to = "/Accounts/sign-up">  Sign up  </router-link></v-btn> </li>
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