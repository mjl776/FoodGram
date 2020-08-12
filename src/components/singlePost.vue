<template>
    <div id = "single-post"> 
        <h1> {{ post.name }} </h1>
        <article> {{ post.hours }}</article>
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
        this.$http.get('https://foodgram-8dac2.firebaseio.com/restaurants/' + this.id + '.json').then(data => {
            this.post = data.data;
        });
    }
}
</script>