<template>
    <form class = "comments" @submit.prevent = "onSubmit" >
        <p> Comments Section </p>    

        <p>
            <label for = "name">Username: </label>
            <input id = "name" v-model="name">
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
import Vue from 'vue';
export const EventBus = new Vue();

export default {
    name: 'Comments',
    data () {
		return {
			name: null,
			comment: null,
            errors: []
		}
    },
    methods: {
        onSubmit() {
            if (this.name && this.comment) {
                let usercomment =  {
                    name: this.name, 
                    comment: this.comment
                }
                EventBus.$emit('comment-submitted', usercomment) 
                this.name = null
                this.comment = null
            }
            else {
                if(!this.name) this.errors.push("Username required.")
                if(!this.comment) this.errors.push("Comment required.")
            }
        }
    }
}
</script>

<style scoped>
    .comments {
        display: inline-block;
        border: solid black 0.5px;
        padding: 20px;
        margin-left: 30px;
    }
</style>