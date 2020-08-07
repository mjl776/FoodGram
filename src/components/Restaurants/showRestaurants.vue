<template>

    <div class = "container"> 
        <li><router-link to = "/addRestaurantaccount"> Add Restaurant </router-link> </li>
    </div>
</template>

<script>
export default {
    name: "showRestaurants",
}
</script>

<style scoped>

li {
    list-style: none;
}
.container {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;

}

</style>