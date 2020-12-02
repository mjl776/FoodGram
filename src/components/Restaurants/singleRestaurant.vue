<template>
    <div class = "single-restaurant"> 
            <div v-for = "post in filterPosts" :key="post.id" class = "post-border">
                <div class = "post">
                    <header class = "post-header">
                        <div v-for = "restaurants in filterRestaurants" :key="restaurants.id">
                            {{ restaurants.name }}
                        </div>
                    </header>
                    <v-img :src= "post.picture" class="post_pic"> </v-img>
                    <h2>  {{ post.food }} </h2> 
                    <article> {{ "$" + post.price }}</article>
                    <article> {{ post.description }}</article>
                </div> 
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
            restaurants: []
        }
    },
    created() {

       var db = firebase.firestore();
       db.collection('restaurants').doc(this.id).get().then(
        doc => {
            let restaurant = doc.data();
            restaurant.id = doc.id;
            this.restaurants.push(restaurant);
        });
    
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
        display: block;
        margin-left: 50px;
        width: 50%;
        padding: 30px;
    }

    .post-border {
        padding: 20px;
    }

    .post {
         text-align: center;   
         border: 1px solid black;
         background-color: white;
         width: 350px;

    }

    .post_pic {
        padding: 10px;
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
    
</style>