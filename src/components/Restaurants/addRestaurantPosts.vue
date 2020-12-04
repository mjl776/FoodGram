<template>

    <form class = "restaurantposts" @submit.prevent= "post">
        <h1> Add Post Information</h1>

        <p>
            <input type = "file" @change= "onFileSelected" placeholder="Photo">           
        </p>
      
        <p>
           <input id = "Food" v-model="food" placeholder="Food">
        </p>

        <p>
            <input id = "Price" v-model="price" placeholder="Price">
        </p>

        <p>    
            <input id = "Description" v-model="description" placeholder="Description">
        </p> 
           
        <p>
            <input type = "submit" value = "post">  
        </p>  
    </form>
  
</template>

<script>

import firebase from '../../firebase/init';

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
            picture:"",

            r_post: {
                food: "",
                price: "",
                description: "",
                picture: ""
            }
        }
    },
    methods: {
        onFileSelected(event) {
            this.uploadValue=0;
            this.picture = null;
            this.imageData = event.target.files[0];  
        },

        post: function () {
           var db = firebase.firestore();
           // sets posts description, food, and price
           this.r_post.food = this.food;
           this.r_post.price = this.price;
           this.r_post.description = this.description;
           this.r_post.picture = this.imageData;

           if (this.r_post.food && this.r_post.price && this.r_post.description && this.imageData) {
                
                //posts when photo is done uploading
                db.collection('restaurants').doc(this.id).collection("posts").doc(this.r_post.food).set({
                    food: this.r_post.food,
                    price: this.r_post.price,
                    description: this.r_post.description
                }).catch(err => {
                        console.log(err)
                })

            var storageRef = firebase.storage().ref();
            var metadata = {
                contentType: 'image/jpeg'
            };
                // Posts method to post photos to Firebase
                // folder for restaurant photos based on ID
                var folder = this.id; 

                // post folder for specific posts
                var post_folder = this.r_post.food;

                var uploadTask = storageRef.child(folder + '/' + post_folder + '/' + this.imageData.name).put(this.imageData, metadata);
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
                (snapshot) =>{
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
                    }, (error)=> {

                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;

                        case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    }
                        }, ()=> {
                            // Upload completed successfully, now we can get the download URL
                                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                                this.picture = downloadURL;
                                console.log('File available at', downloadURL);
                                this.r_post.picture = this.picture;


                        });
                    });

                    this.picture = null;
                    this.price = null;
                    this.food = null;
                    this.description = null;
                    this.imageData = null;

           }

            if (!this.r_post.food) {
               console.log("ERROR: Please enter a food label");
            }

            if (!this.r_post.price) {
               console.log("ERROR: Please enter a price");
            }

            if (!this.r_post.description) {
               console.log("ERROR: Please enter a description");
            }

            if (!this.r_post.picture) {
               console.log("ERROR: Please enter a picture");
            }

        },

    }
        
    }

</script>

<style scoped>

    .restaurantposts {
        margin: auto;
        width: 50%;
        padding: 20px;
        font-family: "Georgia";
        text-align: center;
    }

</style>