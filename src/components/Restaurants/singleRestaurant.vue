<template>
    <div class = "container">
        
        <div class = "single-restaurant"> 
            <li v-if = "can_add_post"><button class = "add-post-button"> <router-link tag = a v-bind:to = "'/restaurants/' + this.id  +'/addRestaurantposts'"> Add Post </router-link> </button> </li>
            <div v-for = "post in filterPosts" :key="post.id" class = "post-border">
                <div class = "post">
                    <header id = "post-header">
                        <div v-for = "restaurants in filterRestaurants" :key="restaurants.id">
                            {{ restaurants.name }}
                        </div>
                    </header>
                        <img :src= "post.picture_URL" id = "post_pic"/>
                        <img :src= "empty_heart" id = "empty_heart_pic"/>
                        <div class = "post_info">
                            <article id = "food_name">  {{ post.food }} </article> 
                            <article id = "food_price"> {{ "$" + post.price }}</article>
                            <article id = "food_description"> {{ post.description }}</article>
                        </div>
                </div> 
                <div class = "clear"></div>
            </div>
        </div>
    </div>
</template>

<script>

import emptyheart from '../../components/photos/empty_heart.png'
import searchMixin from '../../mixins/searchMixin'
import firebase from '../../firebase/init'
export default {
    name: 'singleRestaurant',
    data() {
        return {
            id: this.$route.params.id,
            post: [],
            restaurants: [],
            can_add_post: false,
            empty_heart: emptyheart
        }
    },
    created() {

        var db = firebase.firestore();
        var owner_ID = firebase.auth().currentUser.uid;
        db.collection('restaurants').where("owner_ID", "==", owner_ID).get().then(
            snapshot => {
                snapshot.forEach( doc => {
                let restaurant = doc.data();
                restaurant.id = doc.id;
                if (restaurant.owner_ID == owner_ID) {
                    this.can_add_post= true;
                }
            });
        });

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
         width: 554px;
         height: 650px;
    }

    #post-header {
        float: left;
        width: 130px;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
    }

    #post_pic {
        height: 500px;
        width: 554px;
    }

    #empty_heart_pic {
        float: left;
        height: 40px;
        width: 40px;
    }

    .post_info {
        margin-top: 40px;
    }

    .clear {
        clear: both;
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

    .add-post-button {
        background-color:SkyBlue;
        color: black;
        width: 150px;
        height: 40px;
        margin-left: 25px;

    }

</style>