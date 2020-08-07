<template>
    <div class="container">
        <div class = "comment-section"> 
            <showComments/>
        </div>
    </div>
    
</template>

<script>

import showComments from './showComments.vue'

export default {
    name: 'FoodPages',
    components: {
        showComments
    },
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
        border-width: medium;
    }
    .photo {
        padding: 5px;
        margin-left: -4px;
    }

</style>