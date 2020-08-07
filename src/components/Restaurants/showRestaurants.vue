<template>

    <div class = "container"> 
        <li><router-link tag = a to = "/addRestaurantaccount"> Add Restaurant </router-link> </li>
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
    position:relative;
}
.container {
    margin: auto;
    width: 50%;
    padding: 30px;
    text-align: center;

}

a {
    text-decoration: none;
    text-transform: uppercase;
    color:black;
}

a:hover {
    color: turquoise
}


</style>