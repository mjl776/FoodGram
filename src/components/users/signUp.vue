<template>
    <div class ="outside-border">
        <div class= "border"> 
            <form class = "sign-up-form" @submit.prevent= "signup">
                <p>
                    <input id = "email" v-model="email" placeholder ="email"> 
                </p>

                <p>     
                    <input id = "username" v-model="username" placeholder="username"> 
                </p>
                
                <p>
                    <input id = "name" v-model="name" placeholder ="name"> 
                </p>

                <p>
                    <input id = "password" v-model="password" placeholder="password"> 
                </p>

                <p>
                    <label class = "business-account"> Would you like a business account? </label>
                    <input type = "checkbox" id = "checkbox" v-model = "business_account">
                </p>

                <p>
                    <input type = "submit" value = "Sign up" class = "button"/>
                </p>  

            </form> 
        </div>
    </div>
</template>

<script>
import firebase from '../../firebase/init';

import slugify from 'slugify';
export default {
    name:'signUp',
    data() {
        return {
            username: null,
            password: null, 
            email: null,  
            name: null,
            feedback: null,
            business_account: false,
            slug: null,
            account: {
                username: null,
                password: null, 
                email: null,
                name: null,
                business_account: false,
                slug: null,
            }
        }
    },
    methods: {

        signup: function() {
            this.account.username = this.username
            this.account.password = this.password
            this.account.name = this.name
            this.account.email = this.email
            this.account.business_account = this.business_account

            var db = firebase.firestore()
            if (this.username && this.email && this.password) {
                this.slug = slugify(this.username,{
                    replacement: '-', 
                    remove: /[$*_+~()'"!-:@]/g,
                    lower: true
                })
                let ref = db.collection('user').doc(this.slug)
                ref.get().then(doc => {
                    if(doc.exists) {
                        this.feedback = "this username already exists"
                    } else {
                        this.account.username = this.slug 
                        firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password).then(cred=>{
                            ref.set({
                                username: this.account.username,
                                name: this.account.name,
                                user_id: cred.user.uid,
                                business_account: this.account.business_account
                            })
                        }).then(() => {
                            this.$router.push({name: 'ExplorerPage'})
                        })
                        .catch(err=> {
                            console.log(err);
                            this.feedback = err.message;
                        })
                        this.feedback = "this username is free"
                    }
                })
            } 
            else {
                this.feedback = "You must enter all fields";
            }
            // reseting fields 
            this.username = null;
            this.password = null;
            this.name = null;
            this.email = null; 
            this.business_account = false;
        }
    }
}
</script>

<style scoped>

    .outside-border {
        padding: 20px;
    }

    .sign-up-form {
        border: 1px solid black;
        margin: auto;
        width: 30%;        
        padding: 2px;
        text-align: center;
        font-size: 20px;
        background-color: white;
    }

    .business-account {
        font-size: 14px;
        color: grey;;
    }

    .button {
        width: 150px;
        height: 40px;
        font-size: 15px;
    }
</style>