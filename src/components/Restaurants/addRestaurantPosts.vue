<template>

    <form class = "restaurantposts" @submit.prevent= "post">
        <h1> Add Post Information</h1>

        <p>
            <label for = "Food" > Food: </label>      
            <input id = "Food" v-model="food"> 
        </p>

        <p>
            <label for = "Price" > price: </label>      
            <input id = "Price" v-model="price"> 
        </p>

        <p> 
            <label for = "Description" > Description: </label>  
            <textarea id = "Description" v-model="description"></textarea>
        </p> 

        <p>
            <input type = "submit" value = "Post">  
        </p>  
    </form>
</template>

<script>
export default {
    name: "addRestaurantPosts",
    data () {
        return {
            id: this.$route.params.id,
            food: "",
            price: "",
            description: "",

            r_post: {
                food: "",
                price: "",
                description: "",
            }
        }
    },
    methods: {
        post: function () {
            this.r_post.description= this.description;
            this.r_post.price = this.price; 
            this.r_post.food = this.food;
            this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id + '/posts.json', this.r_post).then(data=> {
                console.log(data);
            });
            this.price=null;
            this.food=null;
            this.description=null;
        }
    }
    
}
</script>

<style scoped>
.restaurantposts {
        margin: auto;
        width: 50%;
        padding: 20px;
        font-family: Courier;
    }


</style>