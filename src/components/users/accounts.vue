<template>
  <div class = 'container'> 
    <div class = 'border'> 
        <div class = 'account-border'>
            <article id = "account-username">
                {{id + "'s" + " " + "Account"}}
            </article>
            <article id = "profile-pic">  </article>
            <article id = "account-email"> {{ "email: " + email}}</article>
            <article id = "businesses-owned"> {{ "businesses owned: " + businesses_owned }} </article>
            <article id = "comments-posted"> {{"comments posted: " + comments}} </article>
        </div>
    </div>
  </div>
</template>

<script>

import firebase from '../../firebase/init'

export default {
    name: 'accounts',
    data() {
        return {
            id: this.$route.params.id,
            email: null,
            businesses_owned: 0,
            comments: 0,
        }
    },
    created(){
        this.email = firebase.auth().currentUser.email;
        var db = firebase.firestore();
        db.collection('users').doc(this.id).get().then(doc => {
            let user = doc.data();
            user.id = doc.id;
        });

        // temporary solution for small collections, scale to a better function later
        db.collection('users').doc(this.id).collection('businesses_owned').get().then(snapshot => {
            this.businesses_owned = snapshot.size;
        })

    },
    methods: {
        addProfilePic() {

        }
    },

}
</script>

<style scoped>

    .border { 
        padding: 30px;
        width: 50%;
        margin-left: 50px;
    }

    .account-border{
        border: 1px solid black;
        width: 554px;
        background-color: white;
        display: block;
    }
    #account-username {
        font-weight: bold;
        font-size: 30px;
    }

</style>