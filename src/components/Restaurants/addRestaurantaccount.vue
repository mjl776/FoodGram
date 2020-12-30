<template>
    <div class = "container">   
        <div class ="outside-border" v-if="business_check" >
            <div class= "border"> 
                <form class = "restaurants" @submit.prevent = "post" >
                        <h1> Add Restaurant Information</h1>
                        <p>
                            <label class = "profile-photo-text"> Profile Photo </label>
                            <input label = "Profile Photo" type = "file" @change= "onFileSelected">           
                        </p>
                        
                        <p>
                            <input id = "owner_first_name" v-model="owner_first_name" placeholder="First Name">
                        </p>

                        <p>
                            <input id = "owner_last_name" v-model="owner_last_name" placeholder="Last Name">
                        </p>

                        <p>
                            <input id = "Restaurant_name" v-model="name" placeholder="Restaurant Name">
                        </p>

                        <p>
                            <input id = "Address" v-model="address" placeholder="Address">
                        </p>
                        
                        <p>
                            <textarea id = "hours" v-model="hours" placeholder="Hours of Operation"></textarea>
                        </p> 
                        <p>
                            <textarea id = "decription" v-model="description" placeholder="Description"></textarea>
                        </p>
                            
                        <p>
                            <input type = "submit" value = "Post" class = "post-button">  
                        </p>   
                </form>
            </div>
        </div>

        <div class = "business-account-converter">
            <!-- Write code to add business acount function to account if account does not have a business account -->
        </div>

    </div>
</template>


<script>
import firebase from '../../firebase/init';
import slugify from 'slugify';

export default {
    name: "addRestaurantaccount",
    data() {
        return {

            business_check: false,

            profilephoto: "",
            selectedFile: null,
            imageData: null,
              
              owner_first_name: "",
              owner_last_name: "",
              name: "", 
              address: "",
              hours: "",
              description: "",
            restaurant: {
                owner_first_name: "",
                owner_last_name: "",
                profilephoto: "",
                name: "", 
                address: "",
                hours: "",
                slug: "",
                description: "",
            }



        }
    },

     created() {
        var db = firebase.firestore();
        var user = firebase.auth().currentUser;
        db.collection('users').where("user_id", "==", user.uid).get().then(
        snapshot => {
            snapshot.forEach( doc => {
                let users = doc.data();
                users.id = doc.id;
                if (users.business_account== true) {
                    this.business_check= true;
                    this.username = users.id;
                }
            });
        });

    },
    methods: {

         onFileSelected(event) {
            this.uploadValue=0;
            this.profilephoto = null;
            this.imageData = event.target.files[0];  
        },

        post: function() {

            // assign id of current user to account for security purposes
            var user = firebase.auth().currentUser;
            var user_ID = user.uid;

            // intialize db 
            var db = firebase.firestore()
            console.log(this.id)
            this.restaurant.name = this.name;

            this.restaurant.slug = 
            slugify(this.name,{
                replacement: '-', 
                remove: /[$*_+~()'"!-:@]/g,
                lower: true
            })

            this.restaurant.owner_first_name = this.owner_first_name;
            this.restaurant.owner_last_name = this.owner_first_name;
            this.restaurant.address = this.address;
            this.restaurant.hours = this.hours;
            this.restaurant.description = this.description;

            if (this.restaurant.name && this.restaurant.address && this.restaurant.hours && this.restaurant.description) {

                var storageRef = firebase.storage().ref();
                var metadata = {
                    contentType: 'image/jpeg'
                };

                    // Posts method to post photos to Firebase
                    // folder for restaurant photos based on ID
                    var id = db.collection('restaurants').doc().id
                    var dbref = db.collection('restaurants').doc(id)
                    console.log(id)
                    // post folder for specific posts
                    var restaurant_name = this.restaurant.name;

                    var uploadTask = storageRef.child('restaurants' + '/' + id + '/' + restaurant_name + '/' + 'Profile Photo' + '/' + this.imageData.name).put(this.imageData, metadata);
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
                                    this.profilephoto = downloadURL;
                                    console.log('File available at', downloadURL);
                                    this.restaurant.profilephoto = this.profilephoto;
                                    // pushes restaurant data to db 

                                    dbref.set({
                                        profile_photo: this.restaurant.profilephoto,
                                        name: this.restaurant.name,
                                        address: this.restaurant.address,
                                        hours: this.restaurant.hours, 
                                        description: this.restaurant.description,
                                        slug: this.restaurant.slug,
                                        owner_ID: user_ID
                                    // catches errors
                                    }).catch(err=> {
                                        console.log(err);
                                    })
                                    
                                    // sets collection for bussinesses owned for the user
                                     db.collection("users").doc(this.username).collection("businesses_owned").doc(id).set({
                                        restaurant_name: restaurant_name,
                                        address: this.restaurant.address
                                    }).catch(err => {
                                        console.log(err)
                                    })
                            });
                        });

                        this.owner_first_name = null;
                        this.owner_last_name = null; 
                        this.name = null;
                        this.address = null;
                        this.hours = null; 
                        this.description = null;
                        this.posts = null;



                }



                if (!this.imageData) {
                    console.log("ERROR: restaurant profile photo is not filled ")
                }

                if (!this.restaurant.name) {
                    console.log("ERROR: restaurant name is not filled ")
                }

                if (!this.restaurant.address) {
                    console.log("ERROR: restaurant address is not filled ")
                }

                if (!this.restaurant.hours) {
                    console.log("ERROR: restaurant hours is not filled ")
                }

                if (!this.restaurant.description) {
                    console.log("ERROR: restaurant description is not filled ")
                }

        }
    }
}
</script>

<style scoped>

    .outside-border {
        padding: 20px;
    }

    .border {
        margin: auto;
        width: 40%;        
        text-align: left;
        border: 1px solid black;
        background-color: white;
    }

    .profile-photo-text {
        color: grey;
        font-size: 14px;
    }

    /*
    add a add_photo class later to adjust margin of the add photo box
    */

    .restaurants {
        margin: auto;
        width: 50%;
        padding: 20px;
        font-family: Georgia;
        text-align: left;
    }

    .post-button {
        background-color:lightblue;
        color: black;
        width: 150px;
        height: 40px;
        font-size: 20px;
    }

</style>