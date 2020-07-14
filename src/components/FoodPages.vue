<template>
    <div class="food-page">
        <div class="restaurant-name">
            {{ account.restaurant }}
        </div>

        <div class = "photo">
            <img src = "./photos/pizza.png"/> 
        </div>

        <Restaurantinfo 
            :food = "account.Food"
            :location = "account.Location"
         />

    </div>
</template>

<script>

import Restaurantinfo from './Restaurant_info.vue'

export default {
    name: 'FoodPages',
    components: {
        Restaurantinfo,
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
        margin-top: 10px;
        padding-top: 15px;
        padding: 15px;
        border: solid black 1px;
    }
    .photo {
        padding: 5px;
        margin-left: -4px;
    }
  
</style>