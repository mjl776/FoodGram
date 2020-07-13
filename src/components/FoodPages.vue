<template>
    <div class="food-page">
        <div class="restaurant-name">
            {{ account.restaurant }}
        </div>

        <div class = photo>
            <img src = "account.Photo"> 
        </div>

        <Photos 
            :food = "account.Food"
            :location = "account.Location"
         />


    </div>
</template>

<script>

import Photos from './Restaurant_info.vue'

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
                Photo: "./photos/pizza.png",
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
  
</style>