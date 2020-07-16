<template>
    <form class = "comments">
        <p> Comments Section </p>    

        <p>
            <label for = "name">Username:</label>
            <input id = "name" v-model="name">
        </p>

        <p>
            <label for = "review">Comment:</label>      
            <textarea id = "review" v-model="review"></textarea>
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
			name: null,
			review: null,
            errors: []
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