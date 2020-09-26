<template>

    <div class = "container"> 
        <div class ="showRestaurants">
        <h1> Restaurants </h1>
            <input type = "text" v-model="search" class = "text-box" placeholder ="Search Restaurants..."/>
            <li><v-btn><router-link tag = a to = "/addRestaurantaccount"> Add Restaurant </router-link> </v-btn> </li>
                <div v-for = "restaurants in filterRestaurants" :key="restaurants.id" class = "single-comment">
                   <router-link v-bind:to = "'/restaurants/' + restaurants.id"> <h2> {{ restaurants.name }} </h2> </router-link>
                     <article> {{ restaurants.address }}</article>
                     <article> {{ restaurants.description }}</article>
                     <article> {{ restaurants.hours }}</article>
                </div>
        </div>
    </div>
</template>

<script>
import searchMixin from '../../mixins/searchMixin'

export default {
    name: "showRestaurants",
    data() {
        return {
            restaurants: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://foodgram-8dac2.firebaseio.com/restaurants.json').then(data=> {
           return data.data;
        }).then(data=> {
            var restaurantsArray = [];
            for (let key in data) {
                data[key].id = key 
                restaurantsArray.push(data[key]);
            }
            this.restaurants = restaurantsArray;
        })
    },
    computed: {
    },
    mixins: [searchMixin]
}
</script>

<style scoped>

li {
    list-style: none;
    position:relative;
    padding: 20px;
}

.container {
    margin: auto;
    width: 50%;
    padding: 10px;
    text-align: center;
    font-size: 22px;
    color:black;

}

a {
    text-decoration: none;
    text-transform: uppercase;
    color:black;
}

a:hover {
    color: turquoise
}

.text-box {
    width: 200px;
    height: 30px;
    font-size: 15px;
}    

</style>