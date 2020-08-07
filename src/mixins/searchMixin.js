export default {
    computed: {
        filterComments: function() {
            return this.comments.filter(comment => {
                return comment.username.match(this.search); 
        })
    }
}
}
