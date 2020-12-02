<template>

    <div class = "container"> 
        <h1> Restaurants </h1>
            <v-text-field type = "text" outline label = "Search Restaurants..." v-model="search" class = "text-box"></v-text-field>
            <li><v-btn><router-link tag = a to = "/addRestaurantaccount"> Add Restaurant </router-link> </v-btn> </li>
                <div v-for = "restaurants in filterRestaurants" :key="restaurants.id" class = "border"> 
                    <div class = "restaurant-border">
                        <div class ="restaurant">
                            <v-img :src= "restaurants.profile_photo" class= "prof_pic"> </v-img>
                            <div class = "rest-text">
                                <router-link v-bind:to = "'/restaurants/' + restaurants.id"> <h2> {{ restaurants.name }} </h2> </router-link>
                                <article> {{ restaurants.description }}</article>
                                <article> {{ restaurants.address }}</article>
                                <article> {{ restaurants.hours }}</article>
                            </div>
                            <div class ="clear"></div>
                        </div>
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
       db.collection('restaurants').get().then(
        snapshot => {
            snapshot.forEach( doc => {
                let restaurant = doc.data();
                restaurant.id = doc.id;
                this.restaurants.push(restaurant);
                console.log(this.restaurants.name)
            });
        });
    },
    computed: {
    },
    mixins: [searchMixin]
}
</script>

<style scoped>

.container {
    width: 750px;
    font-size: 22px;
    color:black;
    margin: auto;
}

.border {
    padding: 7px;
}

.restaurant-border{
    display: block;
    border: 1px solid black;
    background-color: white;
    padding: 5px;
}

.restaurant {
    background-color: white;
}

.prof_pic {
   width: 300px;
   float: left;
   height: 300px;
}   

.rest-text {
    height: 310px;
    width: 400px;
    float: right;
    padding-left: 40px;
}

.clear {
    clear: both;
}

li {
    list-style: none;
    position:relative;
    padding: 20px;
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