<template>
    <div class="container">
        <div class = "comment-section"> 
            <showRestaurants/>
        </div>
    </div>
    
</template>

<script>

import showRestaurants from './Restaurants/showRestaurants.vue'

export default {
    name: 'FoodPages',
    components: {
        showRestaurants
    },
};

</script>

<style scoped>

</style>