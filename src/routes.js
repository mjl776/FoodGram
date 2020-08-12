import FoodPages from './components/FoodPages.vue'
import addComments from './components/addComments.vue'
import singlePost from './components/singlePost.vue'
import showRestaurants from './components/Restaurants/showRestaurants.vue'
import addRestaurantaccount from './components/Restaurants/addRestaurantaccount.vue'
export default [
    { path: '/', component: FoodPages },
    { path: '/addcomments', component: addComments },
    { path: '/restaurants/:id', component: singlePost },
    { path: '/Restaurants', component: showRestaurants },
    { path: '/addRestaurantaccount', component: addRestaurantaccount}
]
