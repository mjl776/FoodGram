<template>
    <div id = "single-post"> 
        <h1> {{ post.title }} </h1>
        <article> {{ post.body }}</article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            post: {}
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(data => {
            this.post = data.data;
        });
    }
}
</script>