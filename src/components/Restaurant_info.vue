<template>
    
    <div class="container">
        <div class="row"> 
            Food: {{ food }}
            Location: {{ location }}
        </div> 
    </div>

</template>

<script>
export default {
    name: 'Restaurant_info',
    props: ['food', 'location'],
};
</script>

<style scoped>

</style>