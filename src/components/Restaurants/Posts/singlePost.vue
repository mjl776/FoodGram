<template>
<div id = "single-post">
    <h1> </h1>
</div>
</template>

<script>
import { EventBus } from '../../../main';
export default {
    name: "singlePost",
    data () {
        return {
            id: this.$route.params.id,
            post: {},
            prev_url:''
        }
    },
    created() {
        EventBus.$on('url-saved', save_url => {
            this.prev_url = save_url;
        });
        this.$http.get(this.prev_url + "/" +'posts/' + this.id + '.json').then(data=> {
            console.log(data.data);
         });
    },
}

</script>

<style scoped>

</style>