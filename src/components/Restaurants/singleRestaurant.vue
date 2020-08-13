<template>
    <div class = "single-restaurant"> 
        <h1> {{ post.name }} </h1>
        <article> {{ post.description }}</article>
        <router-link v-bind:to= "'/restaurants/' + this.id + '/addRestaurantposts'" tag = a> Add Post </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            post: {}       
        }
    },
    created() {
        this.$http.get('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id + '.json').then(data => {
            this.post = data.data;
        });
    }
}
</script>

<style scoped>
    .single-restaurant {
        margin: auto;
        width: 50%;
        padding: 30px;
        text-align: center;

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