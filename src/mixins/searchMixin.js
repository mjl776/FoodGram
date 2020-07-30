export default {
    computed: {
        filterComments: function() {
            return this.comments.filter((comment) => {
                return comment.title.match(this.search); 
        })
    }
}
}
