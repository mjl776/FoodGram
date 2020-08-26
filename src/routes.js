import FoodPages from './components/FoodPages.vue'
import addComments from './components/Restaurants/Posts/comments/addComments.vue'
import singleRestaurant from './components/Restaurants/singleRestaurant.vue'
import showRestaurants from './components/Restaurants/showRestaurants.vue'
import addRestaurantaccount from './components/Restaurants/addRestaurantaccount.vue'
import addRestaurantPosts from './components/Restaurants/addRestaurantPosts.vue'
import singlePost from './components/Restaurants/Posts/singlePost.vue'

export default [
    { path: '/', component: FoodPages },
    { path: '/addcomments', component: addComments },
    { path: '/restaurants/:id', component: singleRestaurant },
    { path: '/Restaurants', component: showRestaurants },
    { path: '/addRestaurantaccount', component: addRestaurantaccount},
    { path: '/Restaurants/:id/addRestaurantposts', component: addRestaurantPosts},
    { path: '/Restaurants/Posts/:id', component: singlePost} 
]
