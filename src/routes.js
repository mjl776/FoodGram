import FoodPages from './components/FoodPages.vue'
import singleRestaurant from './components/Restaurants/singleRestaurant.vue'
import showRestaurants from './components/Restaurants/showRestaurants.vue'
import addRestaurantaccount from './components/Restaurants/addRestaurantaccount.vue'
import addRestaurantPosts from './components/Restaurants/addRestaurantPosts.vue'
import signIn from './components/users/signIn.vue'
import signUp from './components/users/signUp.vue'

export default [
    { path: '/', component: FoodPages, name: 'ExplorerPage' },
    { path: '/restaurants/:id', component: singleRestaurant },
    { path: '/Restaurants', component: showRestaurants },
    { path: '/addRestaurantaccount', component: addRestaurantaccount},
    { path: '/Restaurants/:id/addRestaurantposts', component: addRestaurantPosts},
    { path: '/Accounts/sign-in', component: signIn, name: 'SignIn'},
    { path: '/Accounts/sign-up', component: signUp}

]
