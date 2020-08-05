import FoodPages from './components/FoodPages.vue'
import addComments from './components/addComments.vue'
import singlePost from './components/singlePost.vue'
export default [
    { path: '/', component: FoodPages },
    { path: '/add', component: addComments },
    { path: '/post/:id', component: singlePost }
]
