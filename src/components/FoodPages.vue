<template>
    <div class="food-page">
        <div class="restaurant-name">
            {{ account.restaurant }}
        </div>

        <Photos 
            :food = "account.Food"
            :location = "account.Location"
         />

        <img alt = "margerita pizza" giclass = "food-photo" src = "./photos/pizza.png"/>
    </div>
</template>

<script>

import Photos from './Photos.vue'

export default {
    name: 'FoodPages',
    components: {
        Photos,
    },
    data () {
        return {
            account: {
                restaurant: 'Eataly',
                Food: 'Pizza',
                Location: 'World Trade Center',
            },
        }
    }
};
</script>

<style scoped>
    .food-page {
        display: inline-block;
        margin-left: 30px;
        padding-top: 25px;
    }
    
    .food-photo {
        
    }


    
</style>