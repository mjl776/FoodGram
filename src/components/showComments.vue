<template>
    <div id = "showComments">
        <h1>Comments</h1>
        <input type = "text" v-model="search" placeholder ="search commments"/>
        <div v-for = "comments in filterComments" :key="comments.title" class = "single-comment">
            <h2> {{ comments.title }} </h2>
            <article> {{comments.body}} </article>
        </div>
    </div>
</template>

<script>
export default {
    name: 'showComments',
    data() {
        return {
            comments: [],
            search: ''
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.comments = response.data.slice(0,5);
        });
    }, 
    computed: {
        filterComments: function() {
            return this.comments.filter((comment) => {
                return comment.title.match(this.search); 
            })
        }
    }
}
</script>

<style scoped>

#showComments {
    max-width: 800px;
    margin: 15px;
    font-size: 13px;
}

.single-comment {
    padding: 15px; 
    margin: 15px 0px;
    box-sizing: border-box;
    background: grey;
}

</style>