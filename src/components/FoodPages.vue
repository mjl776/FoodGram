<template>
    <div class="food-page">
        <div class="restaurant">
            {{ account.restaurant }}
        </div>

        <Photos 
            :food = "account.Food"
            :location = "account.Location"
         />
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
                Location: 'World Trade Center'
            },
        }
    }
};
</script>

<style scoped>
    .food-page {
        
    }
    
</style>