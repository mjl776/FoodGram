<template>

    <form class = "restaurantposts" @submit.prevent= "post">
        <h1> Add Post Information</h1>

        <p>
            <input type = "file" @change= "onFileSelected">
        </p>

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
            selectedFile: null,
            r_post: {
                food: "",
                price: "",
                description: "",
            }
        }
    },
    methods: {
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
        },

        post: function () {
            this.r_post.description = this.description;
            this.r_post.price = "$"+ this.price; 
            this.r_post.food = this.food;
            this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id +'/posts.json', this.r_post).then(data=> {
                console.log(data);
            });


            if (this.selectedFile!=null) {
                const fd = new FormData();
                fd.append('image', this.selectedFile, this.selectedFile.name);
                this.$http.post('https://us-central1-foodgram-8dac2.cloudfunctions.net/uploadFile',fd).then(res =>{
                    console.log(res);
                });
            }

            
            this.price = null;
            this.food = null;
            this.description = null;

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
        text-align: center;
    }

</style>