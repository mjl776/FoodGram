<template>
 <form class = "restaurants" @submit.prevent = "post" >
        <h1> Add Restaurant Information</h1>
        <p>
            <label for = "Restaurant_name"> Restaurant name: </label>
            <input id = "Restaurant_name" v-model="name">
        </p>

        <p>
            <label for = "Address" > Address: </label>      
            <input id = "Address" v-model="address"> </p>
        <p>
        
         <p>
            <label for = "hours" > Hours of operation: </label>      
            <textarea id = "hours" v-model="hours"></textarea>
        <p>
        <p>
            <label for = "description" > Description: </label>      
            <textarea id = "description" v-model="description"></textarea>
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

            this.restaurant.name=this.name;
            this.restaurant.address=this.address;
            this.restaurant.hours=this.hours;
            this.restaurant.description=this.description;

            this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants.json', this.restaurant).then(data=>{
                console.log(data);
            });

            this.name=null;
            this.address=null;
            this.hours=null; 
            this.description=null;
            
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
    }

</style>