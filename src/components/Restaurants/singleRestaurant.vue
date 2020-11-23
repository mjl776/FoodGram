<template>
    <div class = "single-restaurant"> 
       <v-btn class="add_p"> <router-link v-bind:to= "'/restaurants/' + this.id + '/addRestaurantposts'" tag = a> Add Post </router-link></v-btn>
        <div v-for = "post in filterPosts" :key="post.id" class = "single-post">
                <v-img :src= "post.picture" class="post_pic"> </v-img>
                <li> <router-link tag = a v-bind:to = "'/Restaurants'+'/Posts/' + post.id"> <h2> {{ post.food }} </h2> </router-link></li>
                <article> {{ post.description }}</article>
                <article> {{ post.price }}</article>
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
        margin: auto;
        width: 50%;
        padding: 30px;
        text-align: center;

    }

    .post_pic {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
        height: 200px;
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

    .add_p {
        margin: 20px;
    }
</style>