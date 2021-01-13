<template>
    <div class = "container">
        <div class = "single-restaurant"> 
            <li v-if = "can_add_post"><button class = "add-post-button"> <router-link tag = a v-bind:to = "'/restaurants/' + this.id  +'/addRestaurantposts'"> Add Post </router-link> </button> </li>
            <div v-for = "(post,index) in filterPosts" :key="post.id" class = "post-border"> 
                <div class = "post">
                    <header class = "post-header">
                       <img :src = "rest_profile_photo" id = "prof_image" />
                       <article id = "rest-name"> {{ rest_name }} </article>
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
                            <div class = "comments-section-show"> 
                                <article id = "comment_indivual">
                                     <span id = "comment_user"> {{ comments.user }} </span>
                                     {{ comments.comment }}
                                </article>
                            </div>
                            <div class = "add-comment"> 
                                <input class = "add-commment-box" v-model="comment[index]" placeholder="Add a comment..">
                                <button class = "add-comment-button" @click="comment_post(post.food, post.rest_id, index)">Post</button>
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
            can_add_post: false,
            empty_heart: emptyheart,
            empty_saved: emptysaved,

            rest_name: "",
            rest_profile_photo: "",

            comments:[],

            username: "",

            comment: [],

            photo: "",

            user: {
                username: "",
                comment:[],
                photo: "",
            },

            limit: 2,

        }
    },
    created() {
        
        var db = firebase.firestore();
        var user_uid = firebase.auth().currentUser.uid;

        //check if person is owner of restaurant
        db.collection('restaurants').doc(this.id).get().then(doc => {
            let restaurant = doc.data();
            restaurant.id = doc.id; 
            this.rest_name = restaurant.name;
            this.rest_profile_photo = restaurant.profile_photo;

            if (restaurant.owner_ID == user_uid) {
                this.can_add_post=true;
            }
        });

        // find user username 
        db.collection('users').where("user_id", "==", user_uid).get().then(
           snapshot => {
                snapshot.forEach( doc => {
                let user = doc.data();
                user.id = doc.id;
                this.user.username = user.id;
            });
        });
    
        // first, get all posts and foods of restaurants, then get a temporary array of all the comments from posts
        db.collection('posts').where("rest_id", "==", this.id).get().then(
            snapshot => {
                snapshot.forEach( doc => {
                    let post = doc.data();
                    post.id = doc.id;
                    this.post.push(post);
                });
        });


    },
    mounted() {

    },

    methods: {
        comment_post(post_food, id, index) {
            var db = firebase.firestore();

            this.user.comment = this.comment[index];

            var comment_id = db.collection("posts").doc(post_food).collection("comments").doc().id;

             db.collection("posts").doc(post_food).collection("comments").doc(comment_id).set({
                user: this.user.username,
                food: post_food,
                rest_id: id,
                comment: this.user.comment,
                date: Date.now()
            });

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