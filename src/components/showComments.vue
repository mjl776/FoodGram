<template>
    <div id = "showComments">
        <h1>Comments</h1>
        <div v-for = "comments in comments" :key="comments.title" class = "single-comment">
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
            comments: []
        }
    },
    methods: {

    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            this.comments = response.data.slice(0,10);
        });
    }
}
</script>

<style scoped>

</style>