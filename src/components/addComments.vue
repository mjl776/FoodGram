<template>
    <form class = "comments" @submit.prevent = "post" >
        <p> Comments Section </p>    

        <p>
            <label for = "username">Username: </label>
            <input id = "username" v-model="username">
        </p>

        <p>
            <label for = "comment">Comment: </label>      
            <textarea id = "comment" v-model="comment"></textarea>
        </p>

        <p>
            <input type = "submit" value = "Submit">  
        </p>  

    </form>
</template>

<script>

export default {
    name: 'Comments',
    data () {
		return {
			username: null,
			comment: null,
            errors: []
		}
    },
    methods: {
        post: function() {
            this.$http.post('https://jsonplaceholder.typicode.com/posts', {
                title: this.username, 
                body: this.comment,
                userId: 1
            }).then(function(data){
                console.log(data);
            });
            this.username=null;
            this.comment=null;
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