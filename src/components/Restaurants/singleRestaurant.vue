<template>
    <div class = "single-restaurant"> 
        <router-link v-bind:to= "'/restaurants/' + this.id + '/addRestaurantposts'" tag = a> Add Post </router-link>
        <div v-for = "post in filterPosts" :key="post.id" class = "single-post">
                <v-img :src= "post.picture" class="post_pic"> </v-img>
                <li> <router-link tag = a v-bind:to = "'/Restaurants'+'/Posts/' + post.id" @click.native ="url_saver"> <h2> {{ post.food }} </h2> </router-link> </li>
                <article> {{ post.description }}</article>
                <article> {{ post.price }}</article>
        </div>
    </div>
</template>

<script>

import searchMixin from '../../mixins/searchMixin'
import { EventBus } from '../../main.js'

export default {
    name: 'singleRestaurant',
    data() {
        return {
            id: this.$route.params.id,
            post: [],
            save: null
        }
    },
    created() {

        this.$http.get('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id + '/posts.json').then(data=> {
           return data.data;
        }).then(data=> {
            var postArray = [];
            for (let key in data) {
                data[key].id = key 
                postArray.push(data[key]);
            }
            this.post = postArray;
        });
    },
    methods: {
        url_saver: function() {
            this.save = 'https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id + '/posts/';
            EventBus.$emit('url_saved', this.save);
        }
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

    
</style>