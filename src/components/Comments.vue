<template>
    <form class = "comments" @submit.prevent = "onSubmit" >
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

import { EventBus } from '../main'

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
        onSubmit() {
            if (this.username && this.comment) {
                let usercomment =  {
                    username: this.username, 
                    comment: this.comment
                }
                EventBus.$emit('comment-submitted', usercomment);
                this.username = null;
                this.comment = null;
            }
            else {
                if(!this.username) this.errors.push("Username required.");
                if(!this.comment) this.errors.push("Comment required.");
            }
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