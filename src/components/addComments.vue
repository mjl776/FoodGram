<template>
    <form class = "comments" @submit.prevent = "post" >
        <p> Comments Section </p>    

        <p>
            <label for = "username"> Username: </label>
            <input id = "username" v-model="comment.username">
        </p>

        <p>
            <label for = "comment"> Comment: </label>      
            <textarea id = "comment" v-model="comment.text"></textarea>
        </p>

        <p>
            <input type = "submit" value = "Submit">  
        </p>  
        
    </form>
</template>

<script>

export default {
    name: 'addComments',
    data () {
		return {
			comment: {
                username: "",
                text: ""
            }, 
		}
    },
    methods: {
        post: function() {
            this.$http.post('https://foodgram-8dac2.firebaseio.com/comments.json', this.comment).then(function(data){
                console.log(data);
            });
        }
    }
}
</script>

<style scoped>
    .comments {
        display: inline-block;
        border: solid black 0.5px;
        border-width: medium;
        margin-left: 30px;
        margin-top: 10px;
        padding-top: 15px;
        padding: 15px;
    }
</style>