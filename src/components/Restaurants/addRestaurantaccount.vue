<template>
 <form class = "restaurants" @submit.prevent = "post" >
        <h1> Add Restaurant Information</h1>
        <p>
           <v-text-field
                label="Restaurant Name"
                v-model="name">
            </v-text-field>
        </p>

        <p>
            <v-text-field
                label="Address"
                v-model="address">
            </v-text-field>
        </p>
        
         <p>
            <v-text-field
                label="Hours of operation"
                v-model="hours">
            </v-text-field>
        </p>
        <p>
             <v-textarea
                label="Description"
                v-model="description">
            </v-textarea>
        <p>
        <p>
            <input type = "submit" value = "Submit"> 
        </p>  
        
    </form>
</template>


<script>

export default {
    name: "addRestaurantaccount",
    data() {
        return {
              name: "", 
              address: "",
              hours: "",
              description: "",
            restaurant: {
                name: "", 
                address: "",
                hours: "",
                description: "",
            }
        }
    },
    methods: {
        post: function() {

            this.restaurant.name = this.name;
            this.restaurant.address = this.address;
            this.restaurant.hours = this.hours;
            this.restaurant.description = this.description;

            this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants.json', this.restaurant).then(data=>{
                console.log(data);
            });

            this.name = null;
            this.address = null;
            this.hours = null; 
            this.description = null;
            
        }
    }
}
</script>

<style scoped>

    .restaurants {
        margin: auto;
        width: 50%;
        padding: 20px;
        font-family: Courier;
        text-align: center;
    }

</style>