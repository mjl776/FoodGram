<template>
    <div class ="outside-border">
        <div class= "border"> 
            <form class = "sign-up-form" @submit.prevent= "signup">
                <p>
                <v-text-field label="Email"
                    v-model="email"> 
                    </v-text-field>
                </p>

                <p>
                    <v-text-field label="Username"
                    v-model="username"> 
                    </v-text-field>
                </p>
                <p>
                    <v-text-field label="Password"
                    v-model="password"> 
                    </v-text-field>
                <p>
                <v-btn type = "submit" value = "signup"> Sign up </v-btn>
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
            feedback: null,
            slug: null,
            account: {
                username: null,
                password: null, 
                email: null,
                slug: null,
            }
        }
    },
    methods: {
        signup: function() {
            this.account.username = this.name
            this.account.password = this.password
            this.account.email = this.email
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
                        this.account.username=this.slug 
                        firebase.auth().createUserWithEmailAndPassword(this.account.email, this.account.password).then(cred=>{
                            ref.set({
                                username: this.account.username,
                                user_id: cred.user.uid
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
            this.email = null; 
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
        width: 50%;        
        padding: 6px;
        text-align: center;
        font-size: 30px;
        background-color: white;
    }
</style>