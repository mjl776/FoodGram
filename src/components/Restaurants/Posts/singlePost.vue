<template>
<div class = "single-post">
    <div v-for = "post in filterPosts" :key="post.id" class = "single-post">
        <v-img :src= "post.picture" class="post_pic"> </v-img>
        <h1> {{ post.food }} </h1>
        <div> {{ post.description}} </div>
        <div> {{ "$" + post.price}} </div>
    </div>
</div>
</template>

<script>
import firebase from '../../../firebase/init'
import searchMixin from '../../../mixins/searchMixin'

export default {
    name: "singlePost",
    data () {
        return {
            id: this.$route.params.id,
            previousid: this.$router.id,
            post: {},
        }
    },
    
    created() {
       var db = firebase.firestore();
       db.collection('restaurants').doc(this.previousid).collection('posts').doc(this.id).get().then(
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

    .single-post {
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
    
</style>