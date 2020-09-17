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
import firebase from '../../firebase/init'
export default {
    name: "addRestaurantPosts",
    data () {
        return {
            id: this.$route.params.id,
            food: "",
            price: "",
            description: "",
            selectedFile: null,
            imageData: null,
            picture: null,
            uploadValue: 0,
            r_post: {
                food: "",
                price: "",
                description: "",
            }
        }
    },
    methods: {
        onFileSelected(event) {
            this.uploadValue=0;
            this.picture=null;
            this.imageData = event.target.files[0];  
            console.log(this.imageData);
        },
        post: function () {
            this.r_post.description = this.description;
            this.r_post.price = "$"+ this.price; 
            this.r_post.food = this.food;
            this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id +'/posts.json', this.r_post).then(data=> {
                console.log(data);
            });

            if (this.selectedFile!=null) {
                this.picture = null;
               const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
               storageRef.on(`state_changed`,snapshot=>{
                  this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
               }, error=>{console.log(error.message)},
                  ()=>{
                  this.uploadValue=100;
                  storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.picture =url;
               });
           });
        }
            this.price = null;
            this.food = null;
            this.description = null;
        },
    },
        
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