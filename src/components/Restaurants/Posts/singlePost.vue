<template>
<div id = "single-post">
    <h1> </h1>
</div>
</template>

<script>
export default {
    name: "singlePost",
    data () {
        return {
            id: this.$route.params.id,
            post: {},
        }
    },
    created() {
    },
}

</script>

<style scoped>

</style>