export default {
    computed: {
        filterComments: function() {
            return this.comments.filter(comment => {
                return comment.username.match(this.search); 
        })
    },
        filterRestaurants: function () {
            return this.restaurants.filter((restaurant,_index) => {
                console.log(_index)
                if (_index < this.limit) 
                    return restaurant.name.match(this.search); 
        }) 
    },
        filterPosts: function() {
            return this.post.filter(post=> {
                return post.food.match(this.search)
            }) 
        }
}
}
