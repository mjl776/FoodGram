<template>
    <div class="container">
        <div class = "comment-section"> 
            <showRestaurants/>
        </div>
    </div>
    
</template>

<script>

import showRestaurants from './Restaurants/showRestaurants.vue'
import firebase from '../firebase/init.js'
export default {
    name: 'FoodPages',
    components: {
        showRestaurants
    },
    mounted() {
        console.log(firebase.auth().currentUser.email);
    }
};

</script>

<style scoped>

</style>