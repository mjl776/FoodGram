<template>
<div class = "single-post">
        <h1> {{ post.food }} </h1>
        <div> {{ post.description}} </div>
        <div> {{ post.price}} </div>
</div>
</template>

<script>
import { EventBus } from '../../../main.js'
export default {
    name: "singlePost",
    data () {
        return {
            id: this.$route.params.id,
            post: {},
            url: {
                type: String
            }
        }
    },
    created() {
        EventBus.$on('url_saved', save => {
            this.url = save + this.id;
            this.$http.get(this.url + '.json').then(data=>{
                return data.data;
            }).then(data => {
                this.post = data;
            });
        });
      
         
    },
    methods: {
        url_saver: function() {
            this.save = this.url;
            EventBus.$emit('url_saved', this.save);
        }
    },
    computed: {
    }
}

</script>

<style scoped>
    .single-post {
        margin: auto;
        width: 50%;
        padding: 30px;
        text-align: center;

    }
</style>