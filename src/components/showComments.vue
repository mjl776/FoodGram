<template>
    <div id = "showComments">
        <h1>Comments</h1>
        <input type = "text" v-model="search" placeholder ="search commments"/>
        <div class = "add comment">
            <router-link to = "/addcomments"> Add comment</router-link>
            <div v-for = "comments in filterComments" :key="comments.id" class = "single-comment">
            <h2> {{ comments.username }} </h2>
            <article> {{ comments.text }}</article>
            <router-link to = "/add"> Reply</router-link>
        </div>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
    name: 'showComments',
    data() {
        return {
            comments: [],
            search: ''
        }
    },
    created() {
        this.$http.get('https://foodgram-8dac2.firebaseio.com/comments.json').then(data=> {
           return data.data;
        }).then(data=> {
            var commentsArray = [];
            for (let key in data) {
                data[key].id = key 
                commentsArray.push(data[key]);
            }
            this.comments = commentsArray;
        })
    }, 
    computed: {
    },
    mixins: [searchMixin]
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