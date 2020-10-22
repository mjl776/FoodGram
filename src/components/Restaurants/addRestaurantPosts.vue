<template>

    <form class = "restaurantposts" @submit.prevent= "post">
        <h1> Add Post Information</h1>

        <p>
            <input type = "file" @change= "onFileSelected">           
        </p>
      
        <p>
            <v-text-field
                label="Food"
                v-model="food">
            </v-text-field>
        </p>

        <p>
            <v-text-field
                label="Price"
                v-model="price">
            </v-text-field>
        </p>

        <p>    
            <v-textarea
                label="Description"
                v-model="description">
            </v-textarea>
        </p> 
           
        <p>
           <input type = "submit" value = "Post"> 
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
           // sets posts description, food, and price
           this.r_post.food = this.food;
           this.r_post.price = "$" + this.price; 
           this.r_post.description = this.description;

            var storageRef = firebase.storage().ref();
            var metadata = {
                contentType: 'image/jpeg'
            };
                // Posts method to post photos to Firebase
                var folder = this.id; 
                folder = this.id;
                
                var uploadTask = storageRef.child(folder + '/' + this.imageData.name).put(this.imageData, metadata);
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
                                //posts when photo is done uploading
                                this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id +'/posts.json', this.r_post).then(data => {
                                    console.log(data);
                                });
                        });
                    });

        this.picture = null;
        this.price = null;
        this.food = null;
        this.description = null;

        },

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