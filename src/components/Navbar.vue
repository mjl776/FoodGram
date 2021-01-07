<template>
    <div class = "container">
        <nav>
        <ul>
            <li> <router-link tag = "a" to = "/"> Explorer Page</router-link></li>
            <li><router-link tag = "a" to = "/Restaurants"> Restaurants </router-link> </li>
            <li v-if="!user"> <router-link tag = "a" to = "/Accounts/sign-in"> Sign in </router-link> </li>
            <li v-if="user"> <router-link tag = "a" v-bind:to = "'/Accounts/' + this.username"> {{ username }} </router-link> </li>
            <li v-if="user"> <a tag = "a" @click= "logout"> Sign Out </a> </li>
            <input type = "text" class = "text-box" placeholder = "Search Restaurants..."/>            
        </ul>
        </nav>
    </div>
</template>

<script>
import firebase from '../firebase/init'
export default {
    name: 'Navbar',
    data() {
        return {
            user: null,
            username: null
        }
    }, 
    created(){
        
        // checks sign in
        firebase.auth().onAuthStateChanged((user)=>{
            if(user) {
                //user uid 
                this.user = firebase.auth().currentUser.uid;
                // account username display
                var db = firebase.firestore();
                db.collection('users').where("user_id", "==", this.user).get().then(snapshot => {
                    snapshot.forEach(doc => {
                        let user= doc.data();
                        user.id = doc.id;
                        this.username = user.id;
                    });
                });
            }
            else {
                this.user=null;
            }
        })

    },
    methods: {
        logout() {
            firebase.auth().signOut().then(()=> {
                this.$router.push({ name: 'SignIn'})
            }).catch(err=>{
                console.log(err);
            });
        }
    }

}

</script>

<style scoped>

    nav {
        float: right;
        font-family: Georgia;
    }

    .container {
        width: 80%;
        margin: 0 auto;
        font-family: Georgia;
    }

    .text-box {
        float: left;
        padding: 8px;
        border: 1px solid black;
        margin-top: 17px;
        margin-right: 16px;
        font-size: 17px;
    }  

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav li {
        display: inline-block;
        margin-left: 70px;
        padding-top: 23px;
        position: relative;

    }

    nav a {
        text-decoration: none;
        text-transform: uppercase;
        color:black;
    }

    nav a:hover {
        color: black
    }
    
    nav a::before {
        content: '';
        display: block; 
        height: 5px;
        background: green;

        position: absolute;
        top: 0;
        width: 0%;

        transition: all ease-in-out 250ms;
    }

    nav a:hover::before {
        width: 100%;
    }


</style>