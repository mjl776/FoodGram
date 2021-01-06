<template>
    <div class = "container">
        
        <div class = "single-restaurant"> 
            <li v-if = "can_add_post"><button class = "add-post-button"> <router-link tag = a v-bind:to = "'/restaurants/' + this.id  +'/addRestaurantposts'"> Add Post </router-link> </button> </li>
            <div v-for = "post in filterPosts" :key="post.id" class = "post-border"> 
                <div class = "post">
                    <header class = "post-header" v-for = "restaurants in showRestaurants" :key="restaurants.id">
                       <img :src = "restaurants.profile_photo" id = "prof_image" />
                       <article id = "rest-name"> {{ restaurants.name }} </article>
                    </header>
                            <img :src= "post.picture_URL" id = "post_pic"/>
                            <img :src= "empty_heart" id = "empty_heart_pic"/>
                            <img :src= "empty_saved" id = "empty_saved_pic"/>
                        <div class = "post_info" >
                            <article id = "food_price_and_name"> 
                                <span id = "food_name"> {{ post.food }} </span> 
                                <span id = "food_price"> {{ "$" + post.price }}  </span>
                            </article> 
                            <article id = "food_description"> 
                            <span id = "rest-name-description"> {{rest_name}} </span>
                            {{ post.description }}
                            </article>
                        </div>
                        <div class = "comments-section"> 
                            <div class = "comments-section-header"> Comments Section </div>
                            <div class = "comments-section"> 
                                
                            </div>
                            <div class = "add-comment"> 
                                <input class = "add-commment-box" v-model="comment" placeholder="Add a comment..">
                                <button class = "add-comment-button" @click="comment_post">Post</button>
                            </div>
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
            rest_name: "",

            comments:[],

            username: "",
            comment: "",
            photo: "",

            user: {
                username: "",
                comment: "",
                photo: "",
            }

        }
    },
    created() {

        var db = firebase.firestore();
        var user_uid = firebase.auth().currentUser.uid;

        db.collection('restaurants').where("owner_ID", "==", user_uid).get().then(
            snapshot => {
                snapshot.forEach( doc => {
                let restaurant = doc.data();
                restaurant.id = doc.id;
                if (restaurant.owner_ID == user_uid) {
                    this.can_add_post= true;
                }
            });
        });

        //get restaurant name
        db.collection('restaurants').doc(this.id).get().then(
        doc => {
            let restaurant = doc.data();
            restaurant.id = doc.id;
            this.rest_name = restaurant.name;
            this.restaurants.push(restaurant);
        });


        // get posts for restaurant
        db.collection('restaurants').doc(this.id).collection('posts').get().then(
            snapshot => {
                snapshot.forEach( doc => {
                    let post = doc.data();
                    post.id = doc.id;
                    this.post.push(post);
                });
          });

        db.collection('users').where("user_id", "==", user_uid).get().then(
           snapshot => {
                snapshot.forEach( doc => {
                let user = doc.data();
                user.id = doc.id;
                this.user.username = user.id;
            });
        });

    },

    methods: {

        comment_post: function() {
            
            // finds used id 
            var user_uid = firebase.auth().currentUser.uid;
            
            //intialize db 
            var db = firebase.firestore()

            // User comment 
            this.user.comment = this.comment;
            
            // saves user comment id
            var comment_id = db.collection("users").where("user_id", "==", user_uid).collection("comments_on_restaurants").id

            // saves current time stamp **possibly change method of time later
            var date = Date.now()

            db.collection("users").where("user_id", "==", user_uid).collection("comments_on_restaurants").doc(comment_id).set({
                restaurant_id: this.id,
                restaurant_name: this.rest_name,
                comment: this.user.comment,
                date_of_comment: date
            })

            db.collection("restaurants").doc(this.id).collection("comments").doc(comment_id).set({

            })

        }

    },
    computed: {
        // a seperate show restaurant computed function specific to this one restaurant 
        showRestaurants: function () {
            return this.restaurants.filter((restaurant) => {
                return restaurant.name.match(this.search); 
            }) 
        }
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
        text-align: left;  
        margin-left: 10px;
    }

    #food_price_and_name {
       padding: 3px; 
    }

    #food_description::before {
        content: "\A";
    }

    #food_description {
        padding: 3px;
    }

    .comments-section::before {
        content: "\A";
    }

    .comments-section {
        text-align: left;
        margin-left: 10px;
        padding: 3px;
    }

    .comments-section-header {
        color:skyblue;
        text-decoration: underline;
    }

    #rest-name-description{
        font-weight: bold;
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
    
    .add-comment {
    }

    .add-commment-box {
       width: 487px;
       height: 30px;
    }

    .add-comment-button {
        background-color: skyblue;
        height: 36px;
    }

</style>