<template>
 <form class = "restaurants" @submit.prevent = "post" >
        <h1> Add Restaurant Information</h1>
        <p>
            <label for = "Restaurant_name"> Restaurant name: </label>
            <input id = "Restaurant_name" v-model="restaurant.name">
        </p>

        <p>
            <label for = "Address" > Address: </label>      
            <input id = "Address" v-model="restaurant.address"> </p>
        <p>
        
         <p>
            <label for = "hours" > Hours of operation: </label>      
            <textarea id = "hours" v-model="restaurant.hours"></textarea>
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
            restaurant: {
                name: "", 
                address: "",
                hours: "",
            }
        }
    },
    methods: {
        post: function() {
            this.$http.post('https://foodgram-8dac2.firebaseio.com/restaurants.json', this.restaurant).then(function(data){
                console.log(data);
            });
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