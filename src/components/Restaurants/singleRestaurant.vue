<template>
    <div class = "single-restaurant"> 
       <v-btn class="add_post"> <router-link v-bind:to= "'/restaurants/' + this.id + '/addRestaurantposts'" tag = a> Add Post </router-link></v-btn>
        <div v-for = "post in filterPosts" :key="post.id">
                <v-img :src= "post.picture" class="post_pic"> </v-img>
                <h2>  {{ post.food }} </h2> 
                <article> {{ post.description }}</article>
                <article> {{ "$" + post.price }}</article>
        </div>
    </div>
</template>

<script>

import searchMixin from '../../mixins/searchMixin'
import firebase from '../../firebase/init'
export default {
    name: 'singleRestaurant',
    data() {
        return {
            id: this.$route.params.id,
            post: [],
        }
    },
    created() {

      var db = firebase.firestore();
      db.collection('restaurants').doc(this.id).collection('posts').get().then(
        snapshot => {
            snapshot.forEach( doc => {
                let post = doc.data();
                post.id = doc.id;
                this.post.push(post);
            });
        });
    },

    methods: {
    },
    computed: {
    },
    mixins: [searchMixin]
}

</script>

<style scoped>
    .single-restaurant {
        margin: left;
        width: 50%;
        padding: 30px;
        text-align: center;
    }

    .post_pic {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 75%;
        height: 275px;

    }

    li {
        list-style: none;
        position:relative;
    }

    a {
        text-decoration: none;
        text-transform: uppercase;
        color:black;
    }

    a:hover {
        color: turquoise
    }

    .add_post {
        margin: 20px;
    }
    
</style>