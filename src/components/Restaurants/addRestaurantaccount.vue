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
           <v-btn type = "submit" value = "submit"> Submit </v-btn>
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
            
            if (this.restaurant.name && this.restaurant.address  && this.restaurant.hours && this.restaurant.description) {
                
                this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants.json', this.restaurant).then(data=>{
                    console.log(data);
                });

                this.name = null;
                this.address = null;
                this.hours = null; 
                this.description = null;
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

    .restaurants {
        margin: auto;
        width: 50%;
        padding: 20px;
        font-family: Georgia;
        text-align: center;
    }

</style>