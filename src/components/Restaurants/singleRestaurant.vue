<template>
    <div class = "container">
        
        <div class = "single-restaurant"> 
            <li v-if = "can_add_post"><button class = "add-post-button"> <router-link tag = a v-bind:to = "'/restaurants/' + this.id  +'/addRestaurantposts'"> Add Post </router-link> </button> </li>
            <div v-for = "post in filterPosts" :key="post.id" class = "post-border">
                <div class = "post">
                    <header class = "post-header" v-for = "restaurants in filterRestaurants" :key="restaurants.id">
                       <img :src = "restaurants.profile_photo" id = "prof_image" />
                       <article id = "rest-name"> {{ restaurants.name }} </article>
                    </header>
                            <img :src= "post.picture_URL" id = "post_pic"/>
                            <img :src= "empty_heart" id = "empty_heart_pic"/>
                            <img :src= "empty_saved" id = "empty_saved_pic"/>
                        <div class = "post_info" >
                            <article id = "food_name">  {{ post.food }} </article> 
                            <article id = "food_price"> {{ "$" + post.price }}</article>
                            <article id = "food_description"> {{  post.description }}</article>
                        </div>
                </div> 
                <div class = "clear"></div>
            </div>
        </div>
    </div>
</template>

<script>

import emptyheart from '../../components/photos/empty_heart.png'
import emptysaved from '../../components/photos/empty_saved.png'
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
            empty_heart: emptyheart,
            empty_saved: emptysaved,
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
         border: 1px solid lightgrey;
         background-color: white;
         width: 554px;
         height: 650px;
    }

    .post-header {
        padding: 10px;
    }

    #rest-name {
        float: right;
        margin-right: 470px;
        font-weight: bold;
    }

    #prof_image {
        float: left;
        height: 20px;
        width: 20px;
    }

    #post_pic {
        height: 500px;
        width: 554px;
    }

    #empty_heart_pic {
        float: left;
        margin-top: 12px;
        margin-left: 10px;
        height: 20px;
        width: 20px;
    }

    #empty_saved_pic {
        float: right;
        margin-top: 12px;
        margin-right: 10px;
        height: 20px;
        width: 20px;
    }

    .post_info {
        margin-top: 40px;
    }

    #food_name {
        font-weight: bold;
        float: left;
        margin-left: 10px;
    }

    #food_price {
        float: right;
        margin-right: 460px;
    }

    #food_description {
        float: left;
        margin-left: 10px;
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