<template>

    <div class = "container"> 
        <div class ="showRestaurants">
        <h1> Restaurants </h1>
            <input type = "text" v-model="search" placeholder ="search Restaurants"/>
            <li><router-link tag = a to = "/addRestaurantaccount"> Add Restaurant </router-link> </li>
                <div v-for = "restaurants in filterRestaurants" :key="restaurants.id" class = "single-comment">
                   <router-link v-bind:to= "'/restaurants/' + restaurants.id" > <h2> {{ restaurants.name }} </h2> </router-link>
                    <article> {{ restaurants.description }}</article>
                    
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
            this.restaurants= restaurantsArray;
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