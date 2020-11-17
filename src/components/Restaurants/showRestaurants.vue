<template>

    <div class = "container"> 
        <div class ="showRestaurants">
        <h1> Restaurants </h1>
            <v-text-field outline label = "Search Restaurants..." class = "text-box"></v-text-field>
            <li><v-btn><router-link tag = a to = "/addRestaurantaccount"> Add Restaurant </router-link> </v-btn> </li>
                <div v-for = "restaurants in filterRestaurants" :key="restaurants.id" class = "single-restaurant">
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
import firebase from '../../firebase/init'
export default {
    name: "showRestaurants",
    data() {
        return {
            restaurants: [],
            search: ''
        }
    },
    created() {
       var db = firebase.firestore();
       db.collection('test').get().then(
        snapshot=> {
            snapshot.forEach( doc => {
                console.log(doc);
            });
        });
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

.single-restaurant {
    padding: 10px;
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
    text-align: center;
    display: inline-block;
    padding: 5px;

}    

</style>